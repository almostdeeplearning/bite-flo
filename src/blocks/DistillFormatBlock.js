// DistillFormatBlock.js — Block 3 of the Distill pipeline
// Depends on globals: $, esc, schemaTemplates, chrome (available at call time from popup.js)

const DistillFormatBlock = {
  isInitialized: false,
  schemaId: null,

  init(d) {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.schemaId = d.distillSchemaId || null;

    $('distillSchemaSel').addEventListener('change', () => {
      this.schemaId = $('distillSchemaSel').value || null;
      chrome.storage.local.set({ distillSchemaId: this.schemaId });
      this._updatePreview();
    });
    $('clearDistillSchemaBtn').addEventListener('click', () => {
      this.schemaId = null;
      chrome.storage.local.set({ distillSchemaId: null });
      this._renderPicker();
    });

    this._renderPicker();
  },

  getSelectedSchema() {
    if (!this.schemaId) return null;
    const s = schemaTemplates.find(x => x.id === this.schemaId);
    return s ? { text: s.text, name: s.name } : null;
  },

  _renderPicker() {
    const sel = $('distillSchemaSel');
    sel.innerHTML = '<option value="">— 不用 Schema，直接存草稿 —</option>' +
      schemaTemplates.map(s =>
        `<option value="${s.id}"${s.id === this.schemaId ? ' selected' : ''}>${esc(s.name)}</option>`
      ).join('');
    this._updatePreview();
  },

  _updatePreview() {
    const el = $('distillSchemaPreview');
    const schema = this.getSelectedSchema();
    if (!schema) { el.textContent = ''; el.setAttribute('data-empty', '1'); return; }
    el.textContent = schema.text;
    el.removeAttribute('data-empty');
  },
};
