// ETLCard5Block.js — Narrative Scan Card 04: Capture & Save + Recent Extract Library
// Pure HTML generation; no globals needed.

const ETLCard5Block = {
  render(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card etl-card" data-etl-card="save">
        <div class="cf-card-head">
          <span class="cf-card-num etl-card-num">04</span>
          <div class="cf-card-title-row">
            <span class="cf-card-title etl-card-title" data-i18n="etl_card_capture_save">Capture & Save</span>
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
              <span class="card-help-panel" data-i18n="etl_capture_save_helper">Paste the AI reply here if you want to review it or save it in your preferred format.</span>
            </span>
          </div>
          <button class="btn btn-ghost btn-xs" data-etl-toggle="save" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body etl-card-body">
          <span id="sn3" style="display:none"></span>
          <span id="st3" style="display:none"></span>
          <div id="finalOutputSection">
            <div class="section">
              <textarea class="result-pre result-editor result-editor-optional" id="finalOutputText" rows="10" data-i18n-placeholder="etl_final_output_placeholder" placeholder="Please paste the full final AI reply here. Try Capture is only a shortcut; review before saving."></textarea>
              <div class="row" style="gap:4px;justify-content:flex-end;margin-top:8px">
                <button class="btn btn-xs" id="saveFinalOutputBtn" data-i18n="save_md">⬇ 儲存 .md</button>
                <button class="btn btn-xs" id="saveFinalHtmlBtn" data-i18n="save_html">⬇ 儲存 .html</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },

  renderLib(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="lib-section">
        <div class="lib-toggle" id="extractLibToggle">
          <span data-i18n="recent_extract">最近萃取</span>
          <span class="lib-count" id="extractLibCount"></span>
          <span class="lib-chevron" id="extractLibChevron">▾</span>
        </div>
        <div id="extractLibList" style="display:none;margin-top:4px"></div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
