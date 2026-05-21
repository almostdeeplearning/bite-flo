// DistillAIBlock.js — Block 4 of the Distill pipeline
// Depends on globals: $, chrome (available at call time from popup.js)

const DistillAIBlock = {
  isInitialized: false,
  ai: 'gpt',

  _distillMarkup() {
    return `
      <div class="ai-pills" id="distillAiSelect">
        <button class="ai-pill active" data-ai="gpt">GPT</button>
        <button class="ai-pill" data-ai="gemini">Gemini</button>
        <button class="ai-pill" data-ai="claude">Claude</button>
        <button class="ai-pill" data-ai="grok">Grok</button>
      </div>
    `.trim();
  },

  init(d) {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.ai = d.distillAI || 'gpt';

    // Buttons use class .ai-pill (previous code incorrectly queried .ai-btn — fixed here)
    $('distillAiSelect').querySelectorAll('.ai-pill').forEach(b =>
      b.addEventListener('click', () => {
        this.ai = b.dataset.ai;
        $('distillAiSelect').querySelectorAll('.ai-pill').forEach(x =>
          x.classList.toggle('active', x.dataset.ai === this.ai));
        chrome.storage.local.set({ distillAI: this.ai });
      }));

    $('distillAiSelect').querySelectorAll('.ai-pill').forEach(b =>
      b.classList.toggle('active', b.dataset.ai === this.ai));
  },

  getAI() { return this.ai; },

  renderDistill(container) {
    if (!container) return;
    container.innerHTML = this._distillMarkup();
  },

  renderCF(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card" data-cf-card="ai">
        <div class="cf-card-head">
          <span class="cf-card-num">04</span>
          <div class="cf-card-title-row">
            <span class="cf-card-title" data-i18n="cf_card_ai">選擇 AI</span>
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
              <span class="card-help-panel" data-i18n="cf_ai_helper">選擇第二階段要送去哪個 AI；若使用 Grok Inline，請先在 x.com 打開 inline panel。</span>
            </span>
          </div>
          <div class="cf-delay-meta">
            <span class="cf-delay-label" data-i18n="cf_delay_label">等待</span>
            <select class="cf-delay-sel" data-cf-delay-for="ai">
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="custom" data-i18n="cf_custom_delay">自訂</option>
            </select>
            <input class="cf-delay-custom" type="number" min="0" max="300" data-cf-custom-for="ai" style="display:none" data-i18n-placeholder="seconds" placeholder="秒">
            <span class="cf-delay-unit" data-i18n="seconds">秒</span>
            <span class="cf-delay-label" data-i18n="cf_delay_suffix">後再進下一步</span>
          </div>
          <button class="btn btn-ghost btn-xs" data-cf-toggle="ai" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body">
          <div class="ai-pills ai-pills-fluid" id="cfAiSelect">
            <button class="ai-pill active" data-ai="gpt">GPT</button>
            <button class="ai-pill" data-ai="grok-inline">Grok Inline</button>
            <button class="ai-pill" data-ai="grok-page">Grok Page</button>
          </div>
          <span class="ns-inline-micro-hint" id="cfGrokInlineHint" data-i18n="cf_grok_inline_hint">使用 Grok Inline 前，請先在 x.com 頁面手動打開 Grok 小視窗。</span>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
