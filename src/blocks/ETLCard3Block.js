// ETLCard3Block.js — Narrative Scan Card 03: Output Setup
// Pure HTML generation; no globals needed.

const ETLCard3Block = {
  render(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card etl-card" data-etl-card="schema">
        <div class="cf-card-head">
          <span class="cf-card-num etl-card-num">03</span>
          <div class="cf-card-title-row">
            <span class="cf-card-title etl-card-title" data-i18n="etl_card_output_setup">Output Setup</span>
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
              <span class="card-help-panel" data-i18n="etl_output_setup_helper">Choose the Phase 2 format, pick the output AI, then send the confirmed extract draft.</span>
            </span>
          </div>
          <button class="btn btn-ghost btn-xs" data-etl-toggle="schema" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body etl-card-body">
          <select id="extractSchemaSel" class="select-compact" style="width:100%">
            <option value="" data-i18n="etl_schema_none">-不選擇schema格式-</option>
          </select>
          <pre class="selected-prompt-preview" id="extractSchemaPreview" data-empty="1" style="margin-top:6px;max-height:80px;overflow:auto"></pre>
          <div class="ai-pills ai-pills-fluid" id="outputAiSel" style="margin-top:12px">
            <button class="ai-pill active" data-ai="gpt">GPT</button>
            <button class="ai-pill" data-ai="gemini">Gemini</button>
            <button class="ai-pill" data-ai="claude">Claude</button>
            <button class="ai-pill" data-ai="grok">Grok</button>
          </div>
          <div style="margin-top:12px">
            <button class="btn btn-primary etl-run-cta" id="runPhase2Btn">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1.5l7 3.5-7 3.5V1.5z"/></svg>
              <span data-i18n="etl_run_phase2">Run Phase 2</span>
            </button>
          </div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
