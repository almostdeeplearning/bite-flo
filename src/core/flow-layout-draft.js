// flow-layout-draft.js
// Draft-only future modular layout constants.
// These are not wired into current runtime, storage, or message routing yet.

const FLOW_IDS = Object.freeze({
  NARRATIVE_SCAN: 'narrative_scan',
  AI_FLOWS: 'ai_flows',
});

const CARD_TYPES = Object.freeze({
  SOURCE: 'source',
  PROMPT: 'prompt',
  SCHEMA: 'schema',
  TARGET_AI: 'target_ai',
  SEND: 'send',
  REVIEW: 'review',
  SAVE: 'save',
});

const CARD_DEFINITIONS = Object.freeze([
  Object.freeze({
    type: CARD_TYPES.SOURCE,
    titleKey: 'cf_card_source',
    descriptionKey: 'cf_source_helper',
    supports: Object.freeze([FLOW_IDS.AI_FLOWS]),
    capabilities: Object.freeze({ hideable: true, reorderable: true }),
  }),
  Object.freeze({
    type: CARD_TYPES.PROMPT,
    titleKey: 'etl_card_prompt',
    descriptionKey: 'etl_prompt_helper',
    supports: Object.freeze([FLOW_IDS.NARRATIVE_SCAN, FLOW_IDS.AI_FLOWS]),
    capabilities: Object.freeze({ hideable: true, reorderable: true }),
  }),
  Object.freeze({
    type: CARD_TYPES.SCHEMA,
    titleKey: 'etl_card_schema',
    descriptionKey: 'etl_schema_helper',
    supports: Object.freeze([FLOW_IDS.NARRATIVE_SCAN, FLOW_IDS.AI_FLOWS]),
    capabilities: Object.freeze({ hideable: true, reorderable: true }),
  }),
  Object.freeze({
    type: CARD_TYPES.TARGET_AI,
    titleKey: 'etl_card_ai',
    descriptionKey: 'etl_ai_helper',
    supports: Object.freeze([FLOW_IDS.NARRATIVE_SCAN, FLOW_IDS.AI_FLOWS]),
    capabilities: Object.freeze({ hideable: true, reorderable: true }),
  }),
  Object.freeze({
    type: CARD_TYPES.SEND,
    titleKey: 'etl_card_run',
    descriptionKey: 'etl_run_helper',
    supports: Object.freeze([FLOW_IDS.NARRATIVE_SCAN, FLOW_IDS.AI_FLOWS]),
    capabilities: Object.freeze({ hideable: true, reorderable: true, sendOnly: true }),
  }),
  Object.freeze({
    type: CARD_TYPES.REVIEW,
    titleKey: 'etl_card_save',
    descriptionKey: 'etl_review_helper',
    supports: Object.freeze([FLOW_IDS.NARRATIVE_SCAN, FLOW_IDS.AI_FLOWS]),
    capabilities: Object.freeze({ hideable: true, reorderable: true, manualReview: true }),
  }),
]);

const FLOW_LAYOUTS_DRAFT = Object.freeze({
  [FLOW_IDS.NARRATIVE_SCAN]: Object.freeze({
    flowId: FLOW_IDS.NARRATIVE_SCAN,
    version: 1,
    cards: Object.freeze([
      Object.freeze({ id: 'ns_prompt', type: CARD_TYPES.PROMPT, order: 1, visible: true, enabled: true }),
      Object.freeze({ id: 'ns_schema', type: CARD_TYPES.SCHEMA, order: 2, visible: true, enabled: true }),
      Object.freeze({ id: 'ns_target_ai', type: CARD_TYPES.TARGET_AI, order: 3, visible: true, enabled: true }),
      Object.freeze({ id: 'ns_send', type: CARD_TYPES.SEND, order: 4, visible: true, enabled: true }),
      Object.freeze({ id: 'ns_review', type: CARD_TYPES.REVIEW, order: 5, visible: true, enabled: true }),
    ]),
  }),
  [FLOW_IDS.AI_FLOWS]: Object.freeze({
    flowId: FLOW_IDS.AI_FLOWS,
    version: 1,
    cards: Object.freeze([
      Object.freeze({ id: 'af_source', type: CARD_TYPES.SOURCE, order: 1, visible: true, enabled: true }),
      Object.freeze({ id: 'af_prompt', type: CARD_TYPES.PROMPT, order: 2, visible: true, enabled: true }),
      Object.freeze({ id: 'af_schema', type: CARD_TYPES.SCHEMA, order: 3, visible: true, enabled: true }),
      Object.freeze({ id: 'af_target_ai', type: CARD_TYPES.TARGET_AI, order: 4, visible: true, enabled: true }),
      Object.freeze({ id: 'af_send', type: CARD_TYPES.SEND, order: 5, visible: true, enabled: true }),
      Object.freeze({ id: 'af_review', type: CARD_TYPES.REVIEW, order: 6, visible: true, enabled: true }),
    ]),
  }),
});

window.BiteFloDraft = Object.freeze({
  FLOW_IDS,
  CARD_TYPES,
  CARD_DEFINITIONS,
  FLOW_LAYOUTS_DRAFT,
});
