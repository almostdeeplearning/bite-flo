# Narrative Toolkit Spec

## Purpose

Narrative Toolkit helps the user capture, extract, organize, and export web-based narrative material through AI-assisted workflows inside a Chrome Extension.

The product should remain a compact, work-focused tool rather than a landing page or general web app.

## Current Surface

- Primary UI: Chrome Side Panel（`sidepanel.html`）。點擊 Extension 圖示開啟，固定在瀏覽器右側，頁面導航時保持開啟。
- `popup.html` 保留作為開發參考，不再被 Extension 載入。
- Core UI tabs:
  - X ETL
  - Distill
  - Custom Flow（自訂流程）
  - Prompt Manager
  - Schema
  - Settings

## User Goals

- Capture useful text from X, Threads, or the current page.
- Run repeatable Prompt workflows against Grok or other AI tools.
- Convert raw material into markdown notes or wiki-style documents.
- Review structured output before saving as local markdown.
- Keep reusable Prompt collections available across sessions.
- Adjust interface readability without changing the whole product style.

## Functional Requirements

### X ETL

- Allow the user to select prompts from a reusable prompt series.
- Allow the user to optionally select a schema template to combine with each prompt.
- Concatenate `prompt.text + "\n\n" + schema.text` before injecting into Grok.
- Run selected prompts against an open Grok tab.
- Show extraction progress and logs.
- Display Grok responses as a markdown result.
- Allow copying or saving the result as a local `.md` file.

### Distill

- Accept manually pasted text.
- Allow grabbing text from the active page.
- Allow selecting a schema template to shape the output format.
- Allow selecting a prompt from Prompt Manager.
- Allow selecting target AI per workflow.
- Allow the user to decide whether AI results should be auto-saved and returned to the popup.
- Keep recent distill outputs accessible from the Distill tab.

### Custom Flow

- Provide 5 independent Block Cards: Source, Task, Format, AI, Run.
- Allow each Block to be individually shown or hidden across sessions.
- Allow configuring a per-Block delay (seconds) applied after each Block executes in run-all mode.
- Provide a "一鍵跑完全部" button that executes visible Blocks in order, applying delays between them.
- Source block: grab text from the active page.
- Task block: select a prompt from the Prompt Manager library; show a prompt preview.
- Format block: select a schema template; show a schema preview.
- AI block: select a target AI (GPT, Gemini, Claude, Grok).
- Run block: combine content + prompt + schema, inject into the selected AI, and display the result.
- When the target AI is Grok, use direct injection (same mechanism as X ETL).
- Run-all always operates in full-auto mode regardless of the global automation setting.

### Prompt Manager

- Allow creating prompt series.
- Allow adding, editing, deleting, and loading prompts from a series.
- Store prompt series locally.
- Make prompt series available to X ETL, Distill, and Custom Flow.

### Schema

- Allow creating, editing, renaming, and deleting format templates.
- Each template has a name and a prompt text body.
- Templates are available as schema pickers in X ETL, Distill, and Custom Flow.
- Built-in defaults (wiki.md, YAML, Table, Markdown) are seeded on first use.

### Settings

- Store automation settings.
- Store output folder settings for extract and distill workflows.
- Store UI preferences:
  - font size
  - text contrast

## Non-Functional Requirements

- Must comply with Chrome Extension MV3 CSP.
- Must not use inline scripts or inline event handlers in extension HTML.
- Must preserve user settings in `chrome.storage.local`.
- Must keep UI responsive within the Side Panel (no fixed width/height assumptions).
- Must keep workflows usable even when content scripts or AI selectors need future updates.
- Must keep documentation current enough for future sessions to resume safely.

## Constraints

- Side Panel 固定在瀏覽器右側；寬度由使用者拖曳決定，高度等於瀏覽器視窗高度。
- `chrome.storage.local` 只在同一 Chrome Profile 內保存，無法跨 Profile 同步。
- Chrome 只允許下載至 Downloads 目錄或其子目錄，無法寫入任意系統路徑。
- AI automation relies on current DOM selectors and authenticated browser sessions.

## Documentation Responsibilities

- `README.md`: current project overview and usage.
- `DESIGN.md`: visual and component design system.
- `NAV_MAP.md`: UI navigation, DOM, event, message, and storage map.
- `schema.md`: storage and message contracts.
- `decisions.md`: long-term design decisions.
- `status.md`: short current-state handoff.
