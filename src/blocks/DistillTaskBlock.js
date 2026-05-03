// DistillTaskBlock.js — Block 2 of the Distill pipeline
// Depends on globals: $, esc, series, chrome (available at call time from popup.js)

const DistillTaskBlock = {
  isInitialized: false,
  seriesId: null,
  promptIdx: null,

  init(d) {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.seriesId = d.distillSeriesId || null;
    this.promptIdx = d.distillPromptIdx ?? null;

    $('distillSeriesSel').addEventListener('change', () => {
      this.seriesId = $('distillSeriesSel').value || null;
      this.promptIdx = null;
      chrome.storage.local.set({ distillSeriesId: this.seriesId, distillPromptIdx: this.promptIdx });
      this._renderPromptList();
    });
    $('clearDistillPromptBtn').addEventListener('click', () => {
      this.seriesId = null;
      this.promptIdx = null;
      chrome.storage.local.set({ distillSeriesId: null, distillPromptIdx: null });
      this._renderPicker();
    });
    $('distillPromptList').addEventListener('click', e => {
      const btn = e.target.closest('[data-action="selectDistillPrompt"]');
      if (btn) this._selectPrompt(Number(btn.dataset.idx));
    });

    this._renderPicker();
  },

  getSelectedPrompt() {
    if (!this.seriesId || this.promptIdx === null) return null;
    const s = series.find(x => x.id === this.seriesId);
    const p = s?.prompts[this.promptIdx];
    return p ? { text: p.text, name: p.name } : null;
  },

  _renderPicker() {
    const sel = $('distillSeriesSel');
    sel.innerHTML = '<option value="">— 不使用 Prompt 庫 —</option>' +
      series.map(s => `<option value="${s.id}"${s.id === this.seriesId ? ' selected' : ''}>${esc(s.name)}</option>`).join('');
    this._renderPromptList();
  },

  _renderPromptList() {
    const list = $('distillPromptList');
    if (!this.seriesId) { list.innerHTML = ''; this._updateSelectedArea(); return; }
    const s = series.find(x => x.id === this.seriesId);
    if (!s?.prompts.length) {
      list.innerHTML = '<span style="font-size:10px;color:var(--text3)">此系列無 Prompt</span>';
      this._updateSelectedArea(); return;
    }
    list.innerHTML = s.prompts.map((p, i) => {
      const active = i === this.promptIdx;
      const style = active ? 'border-color:var(--text2);color:var(--text);background:var(--bg3)' : '';
      return `<button class="btn btn-ghost btn-sm" data-action="selectDistillPrompt" data-idx="${i}" style="font-size:10px;${style}">${esc(p.name)}</button>`;
    }).join('');
    this._updateSelectedArea();
  },

  _selectPrompt(idx) {
    this.promptIdx = this.promptIdx === idx ? null : idx;
    chrome.storage.local.set({ distillPromptIdx: this.promptIdx });
    this._renderPromptList();
  },

  _updateSelectedArea() {
    const el = $('distillSelectedPromptText');
    const prompt = this.getSelectedPrompt();
    if (!prompt) { el.textContent = ''; el.setAttribute('data-empty', '1'); }
    else { el.textContent = prompt.text; el.removeAttribute('data-empty'); }
  },
};
