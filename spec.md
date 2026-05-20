# Narrative Toolkit Spec

## Purpose

Narrative Toolkit helps the user capture, extract, organize, and export web-based narrative material through AI-assisted workflows inside a Chrome Extension.

The product should remain a compact, work-focused tool rather than a landing page or general web app.
It is not intended to be only a generic AI chat wrapper or pasted-text summarizer; the current direction emphasizes browser-native workflows that preserve live platform context, especially on x.com with Grok.

## Current Surface

- Primary UI: Chrome Side Panel（`sidepanel.html`）。點擊 Extension 圖示開啟，固定在瀏覽器右側，頁面導航時保持開啟。
- `popup.html` 保留作為開發參考，不再被 Extension 載入。
- Main UI script: `src/sidepanel.js`.
- Minimal language toggle: `中文 / English`, applied only to visible UI labels in the current release.
- First-run default UI language: `English` when no saved `uiLanguage` exists.
- Core UI tabs:
  - 快速生成（X ETL）
  - 自訂流程（Custom Flow）
  - Prompt 庫
  - Schema 庫
  - Settings
  - Distill Tab is no longer exposed in navigation or retained as a Side Panel DOM surface; Custom Flow is the primary long-form organization entry.

## User Goals

- Capture useful text from X, Threads, or the current page.
- Preserve live narrative context from X, including thread structure, replies, and shifting viewpoints around domain-specific accounts.
- Run repeatable Prompt workflows against Grok or other AI tools.
- Convert raw material into markdown notes or wiki-style documents.
- Review structured output before saving as local markdown.
- Keep reusable Prompt collections available across sessions.
- Adjust interface readability without changing the whole product style.

## Functional Requirements

### X ETL

- Present the workflow as 4 vertical timeline Cards:
  - Card 01 Extract Setup
  - Card 02 Extract Review
  - Card 03 Output Setup
  - Card 04 Capture & Save
- Render the ETL UI from `ETLCard1–5Block.js` via `initETLTab()` before other DOM-dependent initialization.
- Allow the user to select a prompt from a reusable prompt series using a dropdown.
- Allow the selected prompt to become the single editable task area for the current ETL run.
- Card 01 should also include the Stage 1 Grok target selection (`Grok Inline` or `Grok Page`).
- Stage 1 is Grok-only in the current Narrative Scan direction.
- Card 02 is the Stage 1 workstation: send to Grok, capture the current reply, refine the extracted narrative draft, and explicitly continue to Phase 2.
- Card 03 should combine the Stage 2 setup surface:
  - choose the output schema
  - choose the Stage 2 output AI
  - trigger `Run Phase 2`
- Card 04 is an optional `Capture & Save` surface rather than a mandatory final step.
- `Run Phase 2` should send the confirmed Stage 1 draft into `START_DISTILL`, using the selected schema and Stage 2 output AI.
- Stage 2 should remain send-first, manual-recovery-first: after the send, the user may continue discussing inside the AI chat, or paste the reply into `Capture & Save` if they want to review it locally or save it as `.md` / `.html`.
- Persist Narrative Scan phase state in a dedicated flow-scoped object instead of relying only on legacy ETL keys.
- Show a global Narrative Scan workflow status strip at the top of the tab; it replaces the older `Under construction` warning and reflects the current run state across both phases.
- Expose an ETL inter-prompt delay control in Card 02 (`Wait before next step`) and pass that wait value into `START_EXTRACT.delaySeconds`.
- Do not auto-capture replies in ETL; Stage 1 and Stage 2 reply recovery both remain manual-first.

### Custom Flow

- Provide 5 independent Block Cards: Source, Task, Format, AI, Run.
- Allow each Block to be individually shown or hidden across sessions.
- Allow configuring a per-Block delay (seconds) applied after each Block executes in run-all mode.
- Provide a "一鍵跑完全部" button that executes visible Blocks in order, applying delays between them.
- The underlying workflow data model remains 5 blocks, but the visible Run area may be split into `05 Execute` and `06 Review` so send/execute and manual result recovery are visually separated.
- Source block: grab text from the active page.
- When the active page is x.com, prefer retaining broader thread / narrative context first and rely on later AI cleanup instead of aggressively trimming at capture time.
- Task block: select a prompt from the Prompt Manager library; show a prompt preview.
- Format block: select a schema template; show a schema preview.
- AI block: select a target AI (GPT, Gemini, Claude, Grok Inline, Grok Page).
- Run block: combine content + prompt + schema and send it to the selected AI.
- Card 05 should primarily behave as a send-to-AI-first, manual-capture-first surface: after sending, the user waits for the AI reply, manually captures the current reply, reviews it in an editable textarea, and then saves it as local markdown.
- The visible Review surface should expose `Capture Reply`, editable result text, `Copy`, `Save .md`, and `Save .html`.
- If no Prompt or Schema is selected, Custom Flow may still send raw captured content to the selected AI rather than forcing a draft-only fallback.
- When the target AI is Grok, use direct injection (same mechanism as X ETL).
- Run-all always operates in full-auto mode regardless of the global automation setting.
- When `cfAutoSave` is disabled, `runAll()` should stop at send-to-AI and show a clear status that manual capture is the expected next step.
- Existing autosave / auto-download behavior may remain implemented underneath Custom Flow, but should be treated as optional / experimental rather than the primary workflow.
- Custom Flow is the primary long-form organization workflow while Distill Tab remains unexposed.
- Saved presets should not be auto-applied merely because a preset exists in storage; selecting a preset in the UI is the action that applies it.

### Prompt Manager

- Allow creating prompt series.
- Allow adding, editing, deleting, and loading prompts from a series.
- Allow JSON export and import of prompt series for backup and transfer.
- Store prompt series locally.
- Make prompt series available to X ETL and Custom Flow. Legacy Distill-related storage may remain temporarily during migration.
- Built-in starter prompt series are seeded on first use: `Narrative Scan Starter Pack`, `AI Flow Starter Pack`.

### Schema

- Allow creating, editing, renaming, and deleting format templates.
- Each template has a name and a prompt text body.
- Allow JSON export and import of schema templates for backup and transfer.
- Templates are available as schema pickers in X ETL and Custom Flow. Legacy Distill-related storage may remain temporarily during migration.
- Built-in starter schemas (`wiki.md`, `table.md`) are seeded on first use.

### Settings

- Store automation settings.
- Store output folder settings for extract and distill workflows.
- Store UI preferences:
  - language（`zh` / `en`；current release limits translation to visible UI labels）
    - default: `en` when no saved `uiLanguage` exists
  - theme（`nt-dark` / `editorial-light` / `studio-light`）
  - font size（standard / comfortable / large；套疊於基礎 CSS 預設值 body 14px）
  - text contrast（standard / bright / max；套疊於基礎色票 `--text2` `#C7CEDE`、`--text3` `#8F97AB`、`--bg` `#0B1020`）

## Non-Functional Requirements

- Must comply with Chrome Extension MV3 CSP.
- Must not use inline scripts or inline event handlers in extension HTML.
- Must preserve user settings in `chrome.storage.local`.
- Must keep UI responsive within the Side Panel (no fixed width/height assumptions).
- ETL Card DOM must be created synchronously at the start of DOMContentLoaded before `popup-ui-patch.js` checks step IDs.
- Must keep workflows usable even when content scripts or AI selectors need future updates.
- Must keep documentation current enough for future sessions to resume safely.
- All `<select>` elements must use the `.select-compact` CSS class (not `.input`). Chrome renders `<select>` with OS native UI by default, ignoring CSS `font-family`; `appearance: none` in `.select-compact` is required for consistent font rendering.

## Constraints

- Side Panel 固定在瀏覽器右側；寬度由使用者拖曳決定，高度等於瀏覽器視窗高度。
- `chrome.storage.local` 只在同一 Chrome Profile 內保存，無法跨 Profile 同步。
- Chrome 只允許下載至 Downloads 目錄或其子目錄，無法寫入任意系統路徑。
- AI automation relies on current DOM selectors and authenticated browser sessions.
- Best-effort browser automation is currently acceptable for Grok/X workflows as long as the product keeps the user in the native browser context and makes manual recovery paths available.
- Old `src/blocks/ETLStep1/2/3Block.js` files remain in the repository but are not loaded.

## Documentation Responsibilities

- `README.md`: current project overview and usage.
- `DESIGN.md`: visual and component design system.
- `NAV_MAP.md`: UI navigation, DOM, event, message, and storage map.
- `schema.md`: storage and message contracts.
- `decisions.md`: long-term design decisions.
- `status.md`: short current-state handoff.

## Open Questions

- Should the Grok inline-panel injection path receive its own richer readiness checks, or remain a lightweight best-effort mode?
- Should the unused `ETLStep1Block.js`, `ETLStep2Block.js`, and `ETLStep3Block.js` files be removed in the next cleanup pass?
