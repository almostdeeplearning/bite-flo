// DistillAIBlock.js — Block 4 of the Distill pipeline
// Depends on globals: $, chrome (available at call time from popup.js)

const DistillAIBlock = {
  isInitialized: false,
  ai: 'gpt',

  init(d) {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.ai = d.distillAI || 'gpt';

    // Buttons use class .ai-pill (previous code incorrectly queried .ai-btn — fixed here)
    $('distillAiSelect').querySelectorAll('.ai-pill').forEach(b =>
      b.addEventListener('click', () => {
        this.ai = b.dataset.ai;
        $('distillAiSelect').querySelectorAll('.ai-pill').forEach(x =>
          x.classList.toggle('active', x.dataset.ai === this.ai));
        chrome.storage.local.set({ distillAI: this.ai });
      }));

    $('distillAiSelect').querySelectorAll('.ai-pill').forEach(b =>
      b.classList.toggle('active', b.dataset.ai === this.ai));
  },

  getAI() { return this.ai; },
};
