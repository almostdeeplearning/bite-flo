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

  renderCF(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card" data-cf-card="task">
        <div class="cf-card-head">
          <span class="cf-card-num">02</span>
          <div class="cf-card-title-row">
            <span class="cf-card-title" data-i18n="cf_card_task">選擇分析</span>
            <span class="card-help">
              <button
                type="button"
                class="card-help-trigger"
                data-tooltip-trigger
                aria-expanded="false"
                data-i18n-title="tooltip_more_info"
                data-i18n-aria-label="tooltip_more_info"
                title="顯示說明"
                aria-label="顯示說明"
              >i</button>
              <span class="card-help-panel" data-i18n="cf_task_helper">選一個 Prompt 任務；你可以直接在這張卡微調這次要送出的 working draft，不會改到 Prompt Library 原始版本。</span>
            </span>
          </div>
          <div class="cf-delay-meta">
            <span class="cf-delay-label" data-i18n="cf_delay_label">等待</span>
            <select class="cf-delay-sel" data-cf-delay-for="task">
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="custom" data-i18n="cf_custom_delay">自訂</option>
            </select>
            <input class="cf-delay-custom" type="number" min="0" max="300" data-cf-custom-for="task" style="display:none" data-i18n-placeholder="seconds" placeholder="秒">
            <span class="cf-delay-unit" data-i18n="seconds">秒</span>
            <span class="cf-delay-label" data-i18n="cf_delay_suffix">後再進下一步</span>
          </div>
          <button class="btn btn-ghost btn-xs" data-cf-toggle="task" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body">
          <div class="row" style="gap:8px;margin-bottom:8px">
            <select id="cfSeriesSel" class="select-compact" style="flex:1"></select>
            <button class="btn btn-xs" id="cfClearPromptBtn">✕</button>
          </div>
          <select id="cfPromptSel" class="select-compact" style="width:100%;margin-bottom:8px"></select>
          <textarea class="result-pre result-editor cf-preview-panel cf-working-draft" id="cfSelectedPromptText" rows="4" data-i18n-placeholder="cf_prompt_preview_empty" placeholder="No prompt selected yet."></textarea>
          <div class="row" style="justify-content:flex-end;margin-top:6px">
            <button class="btn btn-ghost btn-xs" id="cfPromptPreviewToggleBtn" data-i18n="expand">展開</button>
          </div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },

  getSelectedPrompt() {
    if (!this.seriesId || this.promptIdx === null) return null;
    const s = series.find(x => x.id === this.seriesId);
    const p = s?.prompts[this.promptIdx];
    return p ? { text: p.text, name: p.name } : null;
  },

  _renderPicker() {
    const sel = $('distillSeriesSel');
    if (!sel) return;
    sel.innerHTML = `<option value="">${window.t && currentLanguage === 'en' ? '— No prompt library —' : '— 不使用 Prompt 庫 —'}</option>` +
      series.map(s => `<option value="${s.id}"${s.id === this.seriesId ? ' selected' : ''}>${esc(s.name)}</option>`).join('');
    this._renderPromptList();
  },

  _renderPromptList() {
    const list = $('distillPromptList');
    if (!list) return;
    if (!this.seriesId) { list.innerHTML = ''; this._updateSelectedArea(); return; }
    const s = series.find(x => x.id === this.seriesId);
    if (!s?.prompts.length) {
      list.innerHTML = `<span style="font-size:10px;color:var(--text3)">${window.t ? t('no_prompt_in_series') : '此系列無 Prompt'}</span>`;
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
    if (!el) return;
    const prompt = this.getSelectedPrompt();
    if (!prompt) { el.textContent = ''; el.setAttribute('data-empty', '1'); }
    else { el.textContent = prompt.text; el.removeAttribute('data-empty'); }
  },
};
