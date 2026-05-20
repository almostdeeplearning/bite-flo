// ETLCard1Block.js — Narrative Scan Card 01: Extract Setup
// Pure HTML generation; no globals needed.

const ETLCard1Block = {
  render(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card etl-card" data-etl-card="prompt">
        <div class="cf-card-head">
          <span class="cf-card-num etl-card-num active" id="sn1">01</span>
          <div class="cf-card-title-row">
            <span class="cf-card-title etl-card-title active" id="st1" data-i18n="etl_card_prompt">Extract Setup</span>
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
              <span class="card-help-panel" data-i18n="etl_flow_tagline">Set up the Grok scan, then review the extracted narrative before formatting.</span>
            </span>
          </div>
          <button class="btn btn-ghost btn-xs" data-etl-toggle="prompt" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body etl-card-body" id="stepSection1">
          <div style="margin-bottom:10px">
            <select id="extractSeriesSel" class="select-compact"></select>
          </div>
          <select id="extractPromptList" class="select-compact extract-prompt-sel"></select>
          <div class="prompt-stack" id="promptList">
            <div class="prompt-empty" data-i18n="etl_prompt_helper">選一個 Prompt，並把它改成這次要送出的工作稿。</div>
          </div>
          <div class="ns-target-row">
            <div class="ai-pills" id="extractAiSel">
              <button class="ai-pill active" data-ai="grok-page" data-i18n="etl_grok_mode_page">完整 Grok 頁面</button>
              <button class="ai-pill" data-ai="grok-inline" data-i18n="etl_grok_mode_inline">X 頁內小視窗</button>
            </div>
            <span class="ns-inline-micro-hint" id="extractInlineHint" data-i18n="grok_inline_micro_hint">先打開 Grok inline panel</span>
          </div>
          <div class="run-row" style="margin-top:14px">
            <button class="btn btn-primary etl-run-cta" id="startBtn">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1.5l7 3.5-7 3.5V1.5z"/></svg>
              <span data-i18n="etl_send_to_grok">Send to Grok</span>
            </button>
            <button class="btn btn-danger" id="stopBtn" style="display:none">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="2" y="2" width="6" height="6"/></svg>
              <span data-i18n="stop">停止</span>
            </button>
          </div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
