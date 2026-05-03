// DistillSourceBlock.js — Block 1 of the Distill pipeline
// Depends on globals: $, chrome (available at call time from popup.js)

const DistillSourceBlock = {
  isInitialized: false,

  init(_d) {
    if (this.isInitialized) return;
    this.isInitialized = true;
    $('grabPageBtn').addEventListener('click', () => this.grabPage());
    $('rawText').addEventListener('input', () => {
      $('charCount').textContent = $('rawText').value.length + ' 字';
    });
  },

  getContent() { return $('rawText').value.trim(); },

  async grabPage() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) return;
    const [result] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const clean = text => text.replace(/\n{3,}/g, '\n\n').trim();
        const unique = arr => [...new Set(arr.map(s => s.trim()).filter(Boolean))];
        const url = location.href;
        const isX = /(?:x\.com|twitter\.com)/.test(url);
        if (isX) {
          const tweetBlocks = [...document.querySelectorAll('article[role="article"], div[data-testid="tweetText"], div[lang]')]
            .filter(el => el.innerText.trim().length > 20);
          if (tweetBlocks.length) return clean(unique(tweetBlocks.map(el => el.innerText)).join('\n\n'));
        }
        const isThreads = /threads\.(net|com)/.test(url);
        if (isThreads) {
          const posts = [...document.querySelectorAll('article')]
            .filter(el => el.innerText.trim().length > 30)
            .map(el => {
              const clone = el.cloneNode(true);
              clone.querySelectorAll('nav, footer, button, svg, [role="button"]').forEach(e => e.remove());
              return clone.innerText.trim();
            });
          if (posts.length) return clean(unique(posts).join('\n\n'));
        }
        const article = document.querySelector('article, main, [role="main"]');
        const body = article || document.body;
        const clone = body.cloneNode(true);
        clone.querySelectorAll('nav,footer,header,aside,script,style,[class*="ad"],[class*="sidebar"]').forEach(e => e.remove());
        return clean(clone.innerText);
      }
    });
    const text = result?.result || '';
    $('rawText').value = text;
    $('charCount').textContent = text.length + ' 字';
    dlog(`已抓取頁面 ${text.length} 字`, 'success');
  },
};
