// ETLCard2Block.js — Narrative Scan Card 02: Extract Review
// Pure HTML generation; no globals needed.

const ETLCard2Block = {
  render(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card etl-card" data-etl-card="run">
        <div class="cf-card-head">
          <span class="cf-card-num etl-card-num">02</span>
          <div class="cf-card-title-row">
            <span class="cf-card-title etl-card-title" data-i18n="etl_card_extract_review">Extract Review</span>
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
              <span class="card-help-panel" data-i18n="etl_extract_review_helper">Send the Stage 1 prompt to Grok, then paste the full reply here manually. Try Capture is only a best-effort shortcut.</span>
            </span>
          </div>
          <div class="ns-head-control">
            <span class="ns-head-control-label" data-i18n="etl_wait_short">等待</span>
            <select id="delayPresetSel" class="cf-delay-sel">
              <option value="0" data-i18n="no_delay">No delay</option>
              <option value="5">5s</option>
              <option value="10">10s</option>
              <option value="35">35s</option>
              <option value="custom" data-i18n="cf_custom_delay">Custom</option>
            </select>
            <input id="delayCustomInput" class="cf-delay-custom" type="number" min="0" step="1" value="0" style="display:none">
          </div>
          <button class="btn btn-ghost btn-xs" data-etl-toggle="run" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body etl-card-body" id="stepSection2">
          <span id="sn2" style="display:none"></span>
          <span id="st2" style="display:none"></span>
          <input id="delayInput" type="hidden" value="0">
          <div id="extractLog" style="display:none" aria-hidden="true"></div>
          <div id="extractResultSection" style="margin-top:12px">
            <div class="section">
              <div class="section-head">
                <div class="row" style="gap:4px;margin-left:auto">
                  <button class="btn btn-ghost btn-xs" id="captureCurrentReplyBtn" data-i18n="etl_try_capture">⊕ 嘗試截取</button>
                </div>
              </div>
              <textarea class="result-pre result-editor" id="extractResultText" rows="10" data-i18n-placeholder="etl_result_placeholder" placeholder="請手動貼上完整 AI 回覆；「嘗試截取」只是輔助捷徑，貼上後再微調。"></textarea>
              <div style="margin-top:8px">
                <div class="ns-inline-action ns-inline-action-block">
                  <span class="ns-inline-action-hint" data-i18n="etl_extract_review_warning">If the capture is incomplete, paste the full reply manually before continuing.</span>
                  <button class="btn btn-primary etl-run-cta" id="continueToPhase2Btn">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1.5l7 3.5-7 3.5V1.5z"/></svg>
                    <span data-i18n="etl_continue_phase2">Continue to Phase 2</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
