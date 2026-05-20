# BiteFlo AGENTS.md

這是本專案的 **AI Agent 總規則文件**。所有 Claude / Codex / Cursor 等工具**都應優先閱讀此檔案**。

## 1. Source of Truth 優先順序（非常重要）

1. `decisions.md`（最高優先，絕對不可違背）
2. `spec.md`
3. `schema.md`
4. `status.md`
5. `NAV_MAP.md`
6. `graphify-out/graph.json`
7. `AGENTS.md`（本檔案）

## 2. Agent Skills（Matt Pocock）

已安裝 Matt Pocock skills，請優先使用以下技能：

- `/grill-with-docs` → 大型決策、架構討論、確認需求（**最常用**）
- `/improve-codebase-architecture` → 重構 `sidepanel.js` 等肥大檔案
- `/tdd` → 寫新功能時強迫小步驟開發
- `/diagnose` → 除錯時使用

## 3. Agent Configuration（Setup 建立）

### Issue tracker
Issues are tracked in this repo's GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels
This repo uses the default five-label triage vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs
This repo uses a single-context domain-doc layout. See `docs/agents/domain.md`.

## 4. 我的自訂 Commands（強烈建議一起使用）

在使用任何 skill 前，請優先閱讀以下我自訂的 commands：

- **專案啟動總覽** → `.claude/commands/context_to_start_project.md`
- **CSS / Design Token 相關** → `.claude/commands/css_*.md`
- **Incremental Implementation** → `.claude/commands/incremental_implementation.md`
- **工作重建與文件更新** → `.claude/commands/reconstruct.md` + `update_docs.md`

## 5. BiteFlo 重要限制（AI 必須嚴格遵守）

- **Narrative Scan** 目前為**半手動 ETL 流程**（Card 04 負責送出，Card 05 由使用者手動截取 AI 回覆、編修、再存檔）
- 不可隨意修改或刪除 `START_DISTILL`、`START_EXTRACT`、`activeDistillContext` 等核心 message contract
- `sidepanel.js` 目前非常肥大，任何修改都要特別小心，避免破壞現有功能
- 必須遵守 Chrome MV3 CSP 規則（不能使用 inline script / inline event handler）
- `decisions.md` 是最高優先的 Source of Truth

## 6. 開發工作流（推薦順序）

**每次新工作階段開始時，請依序執行：**

1. 先閱讀本檔案（AGENTS.md）
2. 再閱讀專案啟動總覽 → `.claude/commands/context_to_start_project.md`
3. 大型決策 / 確認方向 → 使用 `/grill-with-docs`
4. 架構調整或重構 → 使用 `/improve-codebase-architecture`
5. 實際實作 → 使用 `/tdd` + `incremental_implementation.md`
6. 工作結束 → 使用 `reconstruct.md` + `update_docs.md` 更新文件
