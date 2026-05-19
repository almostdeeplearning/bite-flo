// ETLCard1Block.js — ETL Card 01: Prompt Selection
// Pure HTML generation; no globals needed.

const ETLCard1Block = {
  render(container) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="cf-card etl-card" data-etl-card="prompt">
        <div class="cf-card-head">
          <span class="cf-card-num etl-card-num active" id="sn1">01</span>
          <span class="cf-card-title etl-card-title active" id="st1" data-i18n="etl_card_prompt">任務設定</span>
          <button class="btn btn-ghost btn-xs" data-etl-toggle="prompt" data-i18n="hidden">隱藏</button>
        </div>
        <div class="cf-card-body etl-card-body" id="stepSection1">
          <div class="cf-option-hint" data-i18n="etl_flow_tagline">先設定，再送出，最後回收與儲存。</div>
          <div style="margin-bottom:10px">
            <select id="extractSeriesSel" class="select-compact"></select>
          </div>
          <select id="extractPromptList" class="select-compact extract-prompt-sel"></select>
          <label class="field-label" style="margin-top:12px" data-i18n="etl_prompt_label">任務工作稿</label>
          <div class="prompt-stack" id="promptList">
            <div class="prompt-empty" data-i18n="etl_prompt_helper">選一個 Prompt，並把它改成這次要送出的工作稿。</div>
          </div>
        </div>
      </div>
    `.trim();
    container.appendChild(el.firstElementChild);
  },
};
