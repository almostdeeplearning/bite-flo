// DistillRunBlock.js — Block 5 of the Distill pipeline
// Depends on globals: $, ts, dlog, activeDistillContext, libItemHtml,
//                     copyDocByName, dlDocByName, delDocByName, renderExtractLibrary,
//                     DistillSourceBlock, DistillTaskBlock, DistillFormatBlock, DistillAIBlock,
//                     chrome (all available at call time from popup.js / other block files)

const DistillRunBlock = {
  isInitialized: false,
  lastResult: null,

  init(d) {
    if (this.isInitialized) return;
    this.isInitialized = true;

    $('distillAutoSave').checked = d.distillAutoSave !== false;
    $('distillFolder').value = d.distillFolder || d.draftFolder || '';

    $('saveDraftBtn').addEventListener('click', () => this.saveDraft());
    $('distillBtn').addEventListener('click', () => this.startDistill());
    $('stopDistillBtn').addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'STOP' });
      this.setUI(false);
      dlog('已停止', 'warn');
    });
    $('distillAutoSave').addEventListener('change', e =>
      chrome.storage.local.set({ distillAutoSave: e.target.checked }));
    $('copyDistillBtn').addEventListener('click', () => {
      if (!this.lastResult) return;
      navigator.clipboard.writeText(this.lastResult.content);
      dlog('已複製', 'success');
    });
    $('dlDistillBtn').addEventListener('click', () => {
      if (!this.lastResult) return;
      chrome.runtime.sendMessage({ type: 'DOWNLOAD_MD', name: this.lastResult.name, content: this.lastResult.content });
    });
    $('distillLibToggle').addEventListener('click', () => {
      const list = $('distillLibList');
      const chevron = $('distillLibChevron');
      const open = list.style.display !== 'none';
      list.style.display = open ? 'none' : '';
      chevron.classList.toggle('open', !open);
    });
    $('distillLibList').addEventListener('click', async e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const name = btn.dataset.name;
      if (btn.dataset.action === 'copyDocByName') await copyDocByName(name);
      if (btn.dataset.action === 'dlDocByName')   dlDocByName(name);
      if (btn.dataset.action === 'delDocByName')  {
        await delDocByName(name);
        renderExtractLibrary();
        this.renderLibrary();
      }
    });

    this.renderLibrary();
  },

  handleLog(text, level) { dlog(text, level); },

  handleDone(msg) {
    this.setUI(false);
    if ($('distillAutoSave').checked && msg.results?.length) {
      const r = msg.results[0];
      this.lastResult = r;
      $('distillResultName').textContent = r.name;
      $('distillResponseText').textContent = r.content;
      $('distillResponseSection').style.display = '';
      dlog('✅ 整理完成並已存檔！', 'success');
      this.renderLibrary();
    } else {
      dlog('✅ 已送出，請至 AI 對話框查看與討論', 'success');
    }
  },

  setUI(on) {
    $('distillBtn').disabled = on;
    $('stopDistillBtn').style.display = on ? '' : 'none';
  },

  async startDistill() {
    const content = DistillSourceBlock.getContent();
    if (!content) { dlog('請先輸入或抓取內容', 'error'); return; }

    const cfg = await chrome.storage.local.get(['fullAuto']);
    let wikiTpl = null;
    let fmtLabel = 'draft';

    const selectedPrompt = DistillTaskBlock.getSelectedPrompt();
    const selectedSchema  = DistillFormatBlock.getSelectedSchema();

    if (selectedPrompt) {
      wikiTpl = selectedSchema
        ? selectedPrompt.text + '\n\n' + selectedSchema.text
        : selectedPrompt.text;
      fmtLabel = selectedPrompt.name;
    } else if (selectedSchema) {
      wikiTpl = selectedSchema.text;
      fmtLabel = selectedSchema.name;
    }

    if (!wikiTpl) {
      const tStr = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
      const name = `note_${tStr}.md`;
      const stored = await chrome.storage.local.get(['library', 'distillFolder']);
      const lib = stored.library || [];
      lib.unshift({ name, fmt: 'note', content, chars: content.length, date: new Date().toLocaleDateString('zh-TW') });
      await chrome.storage.local.set({ library: lib });
      chrome.runtime.sendMessage({ type: 'DOWNLOAD_MD', name, content, folder: stored.distillFolder || '' });
      this.renderLibrary();
      dlog(`✅ 已存為 ${name}`, 'success');
      return;
    }

    activeDistillContext = 'distill';
    this.setUI(true);
    dlog(`送出整理（${fmtLabel}，目標：${DistillAIBlock.getAI()}）…`, 'info');
    chrome.runtime.sendMessage({
      type: 'START_DISTILL',
      content,
      fmt: 'wiki',
      targetAI: DistillAIBlock.getAI(),
      wikiTpl,
      fullAuto: cfg.fullAuto !== false,
    });
  },

  async saveDraft() {
    const content = DistillSourceBlock.getContent();
    if (!content) { dlog('請先輸入或抓取內容', 'error'); return; }
    const tStr = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
    const name = `draft_${tStr}.md`;
    const stored = await chrome.storage.local.get(['library', 'distillFolder']);
    const lib = stored.library || [];
    lib.unshift({ name, fmt: 'draft', content, chars: content.length, date: new Date().toLocaleDateString('zh-TW') });
    await chrome.storage.local.set({ library: lib });
    this.renderLibrary();
    chrome.runtime.sendMessage({ type: 'DOWNLOAD_MD', name, content, folder: stored.distillFolder || '' });
    dlog(`已儲存草稿並下載到本地：${name}`, 'success');
  },

  async renderLibrary() {
    const d = await chrome.storage.local.get('library');
    const items = (d.library || []).filter(x => ['note', 'wiki', 'draft'].includes(x.fmt));
    const el = $('distillLibList');
    $('distillLibCount').textContent = items.length || '';
    el.innerHTML = items.length
      ? items.slice(0, 8).map(libItemHtml).join('')
      : '<div style="padding:6px 0;font-size:10px;color:var(--text3)">尚無整理記錄</div>';
  },
};
