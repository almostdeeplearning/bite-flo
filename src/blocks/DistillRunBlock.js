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

    $('cfAutoSaveDistill').checked = d.cfAutoSave !== false;
    $('distillFolder').value = d.distillFolder || d.draftFolder || '';

    $('saveDraftBtn').addEventListener('click', () => this.saveDraft());
    $('distillBtn').addEventListener('click', () => this.startDistill());
    $('stopDistillBtn').addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'STOP' });
      this.setUI(false);
      dlog('已停止', 'warn');
    });
    $('cfAutoSaveDistill').addEventListener('change', e =>
      chrome.storage.local.set({ cfAutoSave: e.target.checked }));
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

  renderCF(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card" data-cf-card="run">
        <div class="cf-card-head">
          <span class="cf-card-num">05</span>
          <span class="cf-card-title" data-i18n="cf_card_execute">執行送出</span>
          <div class="cf-delay-meta">
            <span class="cf-delay-label" data-i18n="cf_delay_label">下一步前等</span>
            <select class="cf-delay-sel" data-cf-delay-for="run">
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="custom" data-i18n="cf_custom_delay">自訂</option>
            </select>
            <input class="cf-delay-custom" type="number" min="0" max="300" data-cf-custom-for="run" style="display:none" data-i18n-placeholder="seconds" placeholder="秒">
            <span class="cf-delay-unit" data-i18n="seconds">秒</span>
          </div>
          <button class="btn btn-ghost btn-xs" data-cf-toggle="run" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body">
          <div class="cf-run-bar cf-run-bar-inline">
            <div class="cf-run-main">
              <div class="cf-run-actions cf-run-actions-full">
                <button class="btn btn-primary btn-sm" id="cfRunAllBtn" data-i18n="run_all">▶▶ 一鍵跑完全部</button>
                <button class="btn btn-danger btn-sm" id="cfStopAllBtn" style="display:none" data-i18n="stop">停止</button>
              </div>
            </div>
          </div>
          <div style="height:1px;background:var(--line);margin:14px 0"></div>
          <div class="cf-run-status" id="cfGlobalStatus"><span class="label" data-i18n="status_label">狀態：</span><span data-i18n="status_ready">就緒</span></div>
          <div class="cf-subsection">
            <div class="cf-subsection-label" data-i18n="logs">Logs</div>
            <div class="cf-status-box" id="cfLog">
              <span class="log-placeholder" data-i18n="cf_log_placeholder">執行紀錄會顯示在這裡。</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cf-card cf-run-review-card" data-cf-linked-card="run">
        <div class="cf-card-head">
          <span class="cf-card-num">06</span>
          <span class="cf-card-title" data-i18n="cf_card_review">回收與儲存</span>
        </div>
        <div class="cf-card-body">
          <div id="distillResponseSection">
            <div class="cf-review-name-wrap">
              <input class="input cf-review-name-input mono" id="cfResultName" value="" aria-label="${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Result name' : '結果名稱'}">
            </div>
            <div class="cf-review-tools">
                <button class="btn btn-xs" id="cfCaptureReplyBtn" data-i18n="capture_current_reply">⊕ 截取當前回覆</button>
                <button class="btn btn-xs" id="cfCopyBtn" data-i18n="copy">複製</button>
                <button class="btn btn-xs" id="cfSaveResultBtn" data-i18n="save_md">⬇ 儲存 .md</button>
                <button class="btn btn-xs" id="cfSaveHtmlBtn" data-i18n="save_html">⬇ 儲存 .html</button>
            </div>
            <div class="section cf-review-result-box">
              <div id="cfResultEmpty" class="cf-review-empty" data-i18n="cf_result_placeholder">AI 回覆完成後，按「截取當前回覆」，可在這裡微調後再儲存。</div>
              <textarea class="result-pre result-editor" id="cfResultText" rows="10" style="display:none" data-i18n-placeholder="cf_result_placeholder" placeholder="AI 回覆完成後，按「截取當前回覆」，可在這裡微調後再儲存。"></textarea>
            </div>
          </div>
        </div>
      </div>
    `.trim();
    container.append(...Array.from(el.children));
  },

  handleLog(text, level) { dlog(text, level); },

  handleDone(msg) {
    this.setUI(false);
    if ($('cfAutoSaveDistill').checked && msg.results?.length) {
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
      autoSave: $('cfAutoSaveDistill')?.checked !== false,
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
