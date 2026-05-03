# Status Update

## Current Focus
- Custom Flow Tab 已完成並通過端對端測試。
- Distill Block 已安全抽檔至 `src/blocks/*.js`，架構整理完畢。
- 下一步視使用者需求決定：ETL 強化、DST 共用 Block，或新增功能。

## Progress
- **Side Panel 遷移完成（2026-05-03）**
- **Distill Tab 5-Block 重構完成（2026-05-03）**
- **Custom Flow Tab 完成並測試通過（2026-05-03）：**
  - 5 個 Block Card（Source / Task / Format / AI / Run），各自可顯示或隱藏。
  - 每個 Block 有獨立的延遲時間設定（下拉 + 自訂輸入），持久儲存。
  - 「一鍵跑完全部」按序執行已顯示的 Block，套用各自延遲，並在 console 輸出完整 pipeline log。
  - `activeDistillContext` 變數作為 background 訊息路由器，確保 Distill Tab 與 Custom Flow 不互相干擾。
- **Grok Distill 注入修正（2026-05-03）：**
  - `cs_ai.js` 不在 x.com 執行，原有 storage 佇列方式對 Grok 無效。
  - `background.js` 新增 `handleDistillGrok()`，當目標 AI 為 Grok 時改用 `executeScript` + `injectToGrok` + `pollGrok` 直接注入，與 ETL 機制一致。
  - 此修正同時適用於 Distill Tab 與 Custom Flow。
- **Distill Block 抽檔完成（2026-05-03）：**
  - 5 個 Block 移至 `src/blocks/*.js`，以 plain `<script>` tag 載入於 popup.js 之前。
  - popup.js 不使用 ES module，行為與重構前完全一致。
  - decisions.md 已新增 Decision 32–36。

## Problems
- 若 Grok 頁面 DOM 改版，`injectToGrok` 的輸入框 selector 可能需要更新（ETL 與 Distill 共用此函數）。
- Schema 首次遷移邏輯依賴 schemaTemplates 為空才觸發，若 storage 已有部分資料可能不會補入預設模板。
- Custom Flow 的 Task / Format / AI Block 在「一鍵跑完全部」時僅讀取目前已選狀態，不提供錯誤提示（例如未選 Prompt 時）。

## Next Steps
- 視需求決定下一個功能方向：ETL Tab 強化、DST 共用 Block、或 Custom Flow 進一步擴充。
- `popup.js` 未來可重命名為 `sidepanel.js`（TODO 已標記於 sidepanel.html）。
- 若未來需要，可讓 ETL 或 DST 直接使用 `src/blocks/*.js` 中的 Block 物件。

## Important Notes
- Side Panel 固定在瀏覽器右側，寬度由使用者拖曳決定，高度等於瀏覽器視窗高度。
- 修改程式後必須在 `chrome://extensions/` 重新載入，service worker 才會更新。
- 儲存策略：本機優先，`chrome.storage.local` + 下載 markdown。無雲端同步。
- `popup.html` 保留作為開發參考，不再被 Extension 載入。
- Custom Flow 的 Run block 強制使用 `fullAuto: true`；Distill Tab 的 Run block 沿用 `fullAuto` storage 設定。
