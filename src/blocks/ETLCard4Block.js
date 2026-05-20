// ETLCard4Block.js — Narrative Scan Card 04: Output AI
// Pure HTML generation; no globals needed.

const ETLCard4Block = {
  render(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card etl-card" data-etl-card="ai">
        <div class="cf-card-head">
          <span class="cf-card-num etl-card-num">04</span>
          <div class="cf-card-title-row">
            <span class="cf-card-title etl-card-title" data-i18n="etl_card_output_ai">Output AI</span>
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
              <span class="card-help-panel" data-i18n="etl_output_ai_helper">Choose which AI should format the confirmed extract draft in Phase 2.</span>
            </span>
          </div>
          <button class="btn btn-ghost btn-xs" data-etl-toggle="ai" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body etl-card-body">
          <div class="ai-pills" id="outputAiSel">
            <button class="ai-pill active" data-ai="gpt">GPT</button>
            <button class="ai-pill" data-ai="gemini">Gemini</button>
            <button class="ai-pill" data-ai="claude">Claude</button>
            <button class="ai-pill" data-ai="grok">Grok</button>
          </div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
