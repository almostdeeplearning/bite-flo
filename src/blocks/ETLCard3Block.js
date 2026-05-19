// ETLCard3Block.js — ETL Card 03: Target AI
// Pure HTML generation; no globals needed.

const ETLCard3Block = {
  render(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card etl-card" data-etl-card="ai">
        <div class="cf-card-head">
          <span class="cf-card-num etl-card-num">03</span>
          <span class="cf-card-title etl-card-title" data-i18n="etl_card_ai">目標 AI</span>
          <button class="btn btn-ghost btn-xs" data-etl-toggle="ai" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body etl-card-body">
          <div class="cf-option-hint" data-i18n="etl_ai_helper">選擇這次要送往哪個 AI。</div>
          <div class="ai-pills" id="extractAiSel">
            <button class="ai-pill active" data-ai="gpt">GPT</button>
            <button class="ai-pill" data-ai="grok-inline" data-i18n="etl_grok_mode_inline">X 頁內小視窗</button>
            <button class="ai-pill" data-ai="grok-page" data-i18n="etl_grok_mode_page">完整 Grok 頁面</button>
          </div>
          <div class="cf-inline-hint" data-i18n="cf_grok_inline_hint">使用 Grok Inline 前，請先在 x.com 頁面手動打開 Grok 小視窗。</div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
