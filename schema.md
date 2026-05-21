# Narrative Toolkit Schema

This document summarizes the current data contracts used by the extension. It is intentionally concise and should be updated when storage keys or message types change.

## chrome.storage.local

### Workflow State

| Key | Type | Purpose |
|---|---|---|
| `prompts` | `PromptItem[]` | Active X ETL prompt queue (loaded from a series) |
| `library` | `LibraryDoc[]` | Saved local document index |
| `lastTab` | `string` | Last active Side Panel tab |
| `narrativeScanState` | `NarrativeScanState` | Flow-scoped draft and phase state for the two-phase Narrative Scan workflow |

### Prompt State

| Key | Type | Purpose |
|---|---|---|
| `promptSeries` | `PromptSeries[]` | Reusable prompt collections |
| `currentSeriesId` | `string \| null` | Last selected series in Prompt Manager |
| `extractSeriesId` | `string \| null` | Selected series in X ETL |
| `distillSeriesId` | `string \| null` | Selected series in Distill |
| `distillPromptIdx` | `number \| null` | Selected prompt index in Distill |
| `promptLibraryInitialized` | `boolean` | One-time initialization flag for starter prompt series; prevents re-seeding after the user later deletes all prompt series |

### Schema Templates

| Key | Type | Purpose |
|---|---|---|
| `schemaTemplates` | `SchemaTemplate[]` | Format template library (persisted, user-managed in Schema tab) |
| `extractSchemaId` | `string \| null` | Schema selected in X ETL |
| `distillSchemaId` | `string \| null` | Schema selected in Distill |
| `schemaLibraryInitialized` | `boolean` | One-time initialization flag for starter schema templates; prevents re-seeding after the user later deletes all schemas |

### Custom Flow State

| Key | Type | Purpose |
|---|---|---|
| `cfCardVisible` | `{ source, task, format, ai, run: boolean }` | Per-block show/hide state |
| `cfBlockDelays` | `{ source, task, format, ai, run: number }` | Per-block delay in seconds |
| `cfSeriesId` | `string \| null` | Selected prompt series in Custom Flow |
| `cfPromptIdx` | `number \| null` | Selected prompt index in Custom Flow |
| `cfSchemaId` | `string \| null` | Selected schema in Custom Flow |
| `cfAI` | `AiTarget` | Selected target AI in Custom Flow |
| `cfGrokMode` | `"page" \| "inline"` | When `cfAI === "grok"`, chooses full Grok page or the inline Grok panel on x.com |
| `cfAutoSave` | `boolean` | Whether Custom Flow results auto-save to library and auto-download output |
| `customFlowPresets` | `CustomFlowPreset[]` | Saved Custom Flow presets |
| `cfDefaultPresetId` | `string \| null` | Default preset applied when Custom Flow initializes |

### AI And Automation

| Key | Type | Purpose |
|---|---|---|
| `distillAI` | `AiTarget` | AI target for Distill |
| `extractAI` | `AiTarget` | Legacy ETL target field; current Narrative Scan Stage 1 is Grok-only, while Stage 2 target AI now lives in `narrativeScanState.output.targetAI` |
| `extractGrokMode` | `"page" \| "inline"` | Narrative Scan Stage 1 Grok target mode (`Grok Page` or `Inline X Panel`) |
| `delaySeconds` | `number` | Visible Narrative Scan inter-prompt wait setting used in `Extract Review` to control the send interval between multiple Stage 1 prompts |
| `fullAuto` | `boolean` | Whether workflows should auto-continue when possible |
| `cfAutoSave` | `boolean` | Shared autosave flag used by both Distill and Custom Flow when sending `START_DISTILL.autoSave` |

### Output Settings

| Key | Type | Purpose |
|---|---|---|
| `autoDownload` | `boolean` | Download markdown files automatically |
| `extractFolder` | `string` | Downloads subfolder used by `Narrative Scan` local outputs |
| `distillFolder` | `string` | Downloads subfolder used by `AI Flows` local outputs |
| `draftFolder` | `string` | Legacy fallback folder |

### UI Preferences

| Key | Type | Purpose |
|---|---|---|
| `uiTheme` | `"nt-dark" \| "editorial-light" \| "studio-light"` | Side Panel theme selection |
| `uiLanguage` | `"zh" \| "en"` | Minimal visible-UI language preference used by the Topnav language toggle |
| `popupFontSize` | `"standard" \| "comfortable" \| "large"` | Font size mode |
| `popupTextContrast` | `"standard" \| "bright" \| "max"` | Text contrast mode |

注意：storage 中的偏好設定以 body class 的形式套疊於基礎 CSS 預設值之上，基礎值本身不進 storage。基礎預設值（2026-05-18 更新）：body 14px、按鈕 12px、label 11px、輸入框 15px；`--bg` `#0B1020`、`--text2` `#C7CEDE`、`--text3` `#8F97AB`。

### Migration-Only Storage Keys

| Key | Type | Current Use |
|---|---|---|
| `wikiTpl` | `string` | Legacy-only compatibility residue. No longer used to seed starter schemas. |
| `noteTpl` | `string` | Legacy-only compatibility residue. No longer used to seed starter schemas. |

Notes:

- `wikiTpl` and `noteTpl` remain in code only as legacy compatibility references, but starter schema seeding now uses the built-in starter schema set instead of restoring those legacy template values.
- The `wikiTpl` field used in `START_DISTILL` messages is a runtime message field, not this legacy storage key.
- `promptLibraryInitialized` is separate from `promptSeries` itself. It exists so the starter Prompt series can be seeded once for first-run/demo UX without being restored again after a user intentionally deletes all Prompt series later.
- `schemaLibraryInitialized` is separate from `schemaTemplates` itself. It exists so the starter Schema set can be seeded once for first-run/demo UX without being restored again after a user intentionally deletes all schemas later.

## Data Shapes

```ts
type AiTarget = 'gpt' | 'gemini' | 'claude' | 'grok';
type NarrativeOutputTarget = 'gpt' | 'grok-inline' | 'grok-page';

type PromptItem = {
  text: string;
  status?: 'pending' | 'running' | 'done' | 'error';
};

type PromptSeries = {
  id: string;
  name: string;
  prompts: {
    id: string;
    name: string;
    text: string;
  }[];
};

type SchemaTemplate = {
  id: string;
  name: string;   // e.g. "wiki.md", "table.md"
  text: string;   // prompt text; {{content}} is substituted with source material in Distill
};

type LibraryDoc = {
  name: string;
  fmt: 'note' | 'wiki' | 'draft' | 'extract';
  content: string;
  chars?: number;
  date: string;
};

type CustomFlowPreset = {
  id: string;
  name: string;
  isDefault?: boolean;
  createdAt: string;
  updatedAt: string;
  config: {
    cardVisible: { source: boolean; task: boolean; format: boolean; ai: boolean; run: boolean };
    seriesId: string | null;
    promptIdx: number | null;
    schemaId: string | null;
    ai: AiTarget;
    grokMode?: 'page' | 'inline';
    autoSave: boolean;
    blockDelays: { source: number; task: number; format: number; ai: number; run: number };
  };
};

type NarrativeScanState = {
  version: 1;
  phase: 'extract_setup' | 'output_setup' | 'final_output';
  extract: {
    promptText: string;
    grokMode: 'page' | 'inline';
    draftText: string;
    draftStatus: 'empty' | 'captured' | 'confirmed';
  };
  output: {
    schemaId: string | null;
    targetAI: NarrativeOutputTarget;
    ready: boolean;
  };
  updatedAt: string | null;
};
```

## Future Modular Layout Draft

> Draft only. This section describes the planned card-definition data model for future Side Panel modularization.
> It is not yet the source of truth for current runtime behavior, message routing, or storage reads/writes.

```ts
type FlowId = 'narrative_scan' | 'ai_flows';

type CardType =
  | 'source'
  | 'prompt'
  | 'schema'
  | 'target_ai'
  | 'send'
  | 'review'
  | 'save';

type CardCapability = {
  hideable?: boolean;
  reorderable?: boolean;
  removable?: boolean;
  manualReview?: boolean;
  sendOnly?: boolean;
};

type CardDefinition = {
  type: CardType;
  titleKey: string;
  descriptionKey?: string;
  supports: FlowId[];
  capabilities?: CardCapability;
};

type FlowCardInstance = {
  id: string;
  type: CardType;
  order: number;
  visible: boolean;
  enabled: boolean;
  config?: Record<string, unknown>;
};

type FlowLayout = {
  flowId: FlowId;
  version: number;
  cards: FlowCardInstance[];
};
```

Planned system-level card definitions:

```ts
const CARD_DEFINITIONS: CardDefinition[] = [
  {
    type: 'source',
    titleKey: 'cf_card_source',
    descriptionKey: 'cf_source_helper',
    supports: ['ai_flows'],
    capabilities: { hideable: true, reorderable: true },
  },
  {
    type: 'prompt',
    titleKey: 'etl_card_prompt',
    descriptionKey: 'etl_prompt_helper',
    supports: ['narrative_scan', 'ai_flows'],
    capabilities: { hideable: true, reorderable: true },
  },
  {
    type: 'schema',
    titleKey: 'etl_card_schema',
    descriptionKey: 'etl_schema_helper',
    supports: ['narrative_scan', 'ai_flows'],
    capabilities: { hideable: true, reorderable: true },
  },
  {
    type: 'target_ai',
    titleKey: 'etl_card_ai',
    descriptionKey: 'etl_ai_helper',
    supports: ['narrative_scan', 'ai_flows'],
    capabilities: { hideable: true, reorderable: true },
  },
  {
    type: 'send',
    titleKey: 'etl_card_run',
    descriptionKey: 'etl_run_helper',
    supports: ['narrative_scan', 'ai_flows'],
    capabilities: { hideable: true, reorderable: true, sendOnly: true },
  },
  {
    type: 'review',
    titleKey: 'etl_card_save',
    descriptionKey: 'etl_review_helper',
    supports: ['narrative_scan', 'ai_flows'],
    capabilities: { hideable: true, reorderable: true, manualReview: true },
  },
];
```

Planned default layout for `Narrative Scan`:

```ts
const NARRATIVE_SCAN_LAYOUT: FlowLayout = {
  flowId: 'narrative_scan',
  version: 1,
  cards: [
    { id: 'ns_extract_setup', type: 'prompt', order: 1, visible: true, enabled: true },
    { id: 'ns_extract_review', type: 'review', order: 2, visible: true, enabled: true },
    { id: 'ns_output_setup', type: 'schema', order: 3, visible: true, enabled: true },
    { id: 'ns_capture_save', type: 'save', order: 4, visible: true, enabled: true },
  ],
};
```

Planned default layout for `AI Flows`:

```ts
const AI_FLOWS_LAYOUT: FlowLayout = {
  flowId: 'ai_flows',
  version: 1,
  cards: [
    { id: 'af_source', type: 'source', order: 1, visible: true, enabled: true },
    { id: 'af_prompt', type: 'prompt', order: 2, visible: true, enabled: true },
    { id: 'af_schema', type: 'schema', order: 3, visible: true, enabled: true },
    { id: 'af_target_ai', type: 'target_ai', order: 4, visible: true, enabled: true },
    { id: 'af_send', type: 'send', order: 5, visible: true, enabled: true },
    { id: 'af_review', type: 'review', order: 6, visible: true, enabled: true },
  ],
};
```

Planned storage direction:

- A future layout-specific key such as `sidepanelLayouts` may persist `FlowLayout` objects for `narrative_scan` and `ai_flows`.
- This key should remain separate from current ETL / Custom Flow runtime keys during the first modularization phase.
- Current ETL / Flow state keys remain the source of truth until render and runner layers are explicitly migrated.

Future extensibility note:

- This draft is intended to support future user-customizable cards.
- Likely next-step fields include `category`, `minInstances`, `maxInstances`, and `removable` on `CardDefinition`.
- `FlowCardInstance.config` is intentionally loose in this draft and may later become a stricter per-card typed config as user-addable cards are introduced.

## Runtime Messages

### Side Panel To Background

| Type | Purpose |
|---|---|
| `START_EXTRACT` | Send the current Narrative Scan Stage 1 prompt to Grok; the flow remains send-only and the user manually captures the reply in `Extract Review` |
| `START_DISTILL` | Start AI distill flow; sent by both Distill Tab and Custom Flow |
| `START_VERIFY_WIKI` | Start legacy wiki verification flow in `background.js`; not part of the current primary Side Panel product surface |
| `RUN_AI_STRUCTURE` | Start legacy AI post-structuring flow in `background.js`; retained as a runtime handler but not used by the current ETL UI |
| `DOWNLOAD_MD` | Download provided markdown content |
| `DOWNLOAD_TEXT` | Download provided text content with an explicit MIME type |
| `DOWNLOAD_MD_BY_NAME` | Download a document from `library` |
| `STOP` | Stop current workflow |

Notes:

- `START_EXTRACT` now includes `targetAI`; when that target is Grok it also includes `grokMode` (`page` or `inline`).
- `START_EXTRACT` now also includes `delaySeconds`, used as the visible Narrative Scan inter-prompt wait control in `Extract Review`.
- `START_DISTILL` from Custom Flow always includes `fullAuto: true`.
- `START_DISTILL` now includes `autoSave`, and `background.js` treats that message field as the source of truth for autosave behavior.
- `START_DISTILL` uses `targetAI` for AI routing and may include `grokMode` when the target is Grok.
- `START_DISTILL.wikiTpl` is the composed prompt/template text sent for the current run. It is a message payload field, not the legacy `chrome.storage.local["wikiTpl"]` key.
- The module-level `activeDistillContext` variable in `src/sidepanel.js` routes `LOG_DISTILL` / `DISTILL_DONE` / `ERROR` responses to the correct handler (`DistillRunBlock` or `CustomFlowController`).
- Legacy `distillAutoSave` has been migrated out of storage. Distill and Custom Flow now both use `cfAutoSave` as the persisted checkbox state.

### Content Script / Background To Side Panel

| Type | Purpose |
|---|---|
| `PROGRESS` | Update extraction progress |
| `LOG_EXTRACT` | Append Extract log line |
| `LOG_DISTILL` | Append Distill log line |
| `EXTRACT_DONE` | Signal that all ETL prompts have been sent; current UI uses it to stop the run state and prompt the user to capture the reply manually |
| `DISTILL_DONE` | Show or record distill result |
| `ERROR` | Display workflow error |

### Content Script To Background

| Type | Purpose |
|---|---|
| `AI_RESPONSE` | Return captured AI response text |

## Extract Flow

The X ETL pipeline no longer routes raw responses through a separate AI structuring step. The current Narrative Scan surface is rendered as 4 visible cards using `ETLCard1Block.js`, `ETLCard2Block.js`, `ETLCard3Block.js`, and `ETLCard5Block.js`. `initETLTab()` must still run before `popup-ui-patch.js` expects the ETL DOM IDs to exist.

1. Card 01 (`Extract Setup`): User selects a prompt series and prompt from `extractPromptList`, edits the working draft, chooses `Grok Page` or `Inline X Panel`, and sends Stage 1.
2. Card 02 (`Extract Review`): User manually captures or pastes the reply, reviews/edits the extract draft, then explicitly confirms the review and unlocks Phase 2.
3. Card 03 (`Output Setup`): User chooses the schema, chooses the Phase 2 AI, and sends Stage 2 through the merged setup card.
4. Card 04 (`Capture & Save`): optional manual recovery surface for the final AI reply; the user pastes the reply here only if they want to review or save it locally.

Current implementation note:

- The two-phase 4-card workflow and `narrativeScanState` gating are now wired.
- Stage 1 uses `START_EXTRACT` and remains Grok-only.
- Stage 2 now uses `START_DISTILL` with `source: "narrative_scan"` and `autoSave: false`.
- The visible Narrative Scan Output Setup surface is currently restricted to `GPT`, `Grok Inline`, and `Grok Page`; internal routing normalizes those output targets before sending `START_DISTILL`.
- `background.js` treats `source: "narrative_scan"` as a send-only handoff, so `DISTILL_DONE` may arrive with `sentOnly: true` and no auto-captured result payload.

The schema template system replaces the old post-structuring concept. `grokTpl` / `structureTpl` may still appear in older notes, but they are deprecated docs residue rather than active runtime storage keys or supported runtime contracts. There is no intermediate structured table review stage.

## Compatibility Notes

- HTML extension pages must load scripts externally to satisfy MV3 CSP.
- `wikiTpl` and `noteTpl` are now legacy-only storage keys. Current starter schema initialization no longer restores them into `schemaTemplates`.
- `grokTpl` and `structureTpl` are deprecated docs residue only. Current runtime code does not read or write them.
- `START_VERIFY_WIKI`, `RUN_AI_STRUCTURE`, and `DOWNLOAD_TEXT` still exist as runtime message handlers in the current graph, but they are legacy/compatibility-oriented paths rather than the main Side Panel workflow surface.
- Because starter initialization is now guarded by `schemaLibraryInitialized`, deleting all schemas after first-run will not recreate the starter set unless the flag is also reset.
- If a storage key is renamed, keep legacy fallback behavior until existing user data can be migrated.
- Side Panel migration is complete. Storage contracts are unchanged from the Popup era.
- Grok as a Distill AI target uses `handleDistillGrok()` in `background.js` (direct `executeScript` injection), not the `cs_ai.js` storage-queue approach. This applies to both Distill Tab and Custom Flow.
- `src/blocks/ETLStep1Block.js`, `ETLStep2Block.js`, and `ETLStep3Block.js` are legacy files. They remain on disk but are no longer loaded by `sidepanel.html`.

## Open Questions

- Should the selected ETL prompt index become a persisted storage key, or remain transient UI state?
- Should Narrative Scan persist the actual target tab id for Stage 1 reply capture, or continue relying on the user's current active tab?
