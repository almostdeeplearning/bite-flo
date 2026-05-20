```css
/* ── Reset & Base ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
input, button, select, optgroup, textarea { font-family: inherit; font-size: inherit; }

:root {
  --font-ui: 'Noto Sans TC', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --font-editorial: Georgia, 'Times New Roman', 'Noto Serif TC', serif;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 14px;
  --space-4: 20px;
  --space-5: 24px;

  --radius-sm: 5px;
  --radius-md: 8px;
  --radius-lg: 14px;

  --shadow-card: 0 8px 24px rgba(0,0,0,.22);

  --bg:        #0b1020;
  --bg2:       #11182a;
  --bg3:       #171f33;
  --line:      rgba(255,255,255,0.08);
  --line2:     rgba(255,255,255,0.14);
  --text:      #f3f6ff;
  --text2:     #c7cede;
  --text3:     #8f97ab;
  --accent:    #8b5cf6;
  --accent-bg: rgba(139,92,246,0.12);
  --green:     #46b96b;
  --red:       #ff6b6b;
  --amber:     #f59e0b;
  --blue:      #6ea8ff;
  --step-1:    #8b5cf6;
  --step-2:    #6366f1;
  --step-3:    #4f7cff;
  --step-4:    #2ea6a6;
  --step-5:    #46b96b;
  --step-6:    #f59e0b;

  --page-bg: var(--bg);
  --panel-bg: var(--bg2);
  --card-bg: var(--bg2);
  --card-bg-soft: var(--bg3);
  --border-subtle: var(--line);
  --border-strong: var(--line2);
  --text-primary: var(--text);
  --text-secondary: var(--text2);
  --text-muted: var(--text3);
  --text-heading: var(--text);

  --btn-bg: transparent;
  --btn-border: var(--line2);
  --btn-text: var(--text2);
  --btn-hover-bg: rgba(255,255,255,0.02);
  --btn-hover-border: rgba(255,255,255,0.22);
  --btn-hover-text: var(--text);
  --btn-primary-bg: rgba(139,92,246,0.08);
  --btn-primary-border: #8b5cf6;
  --btn-primary-text: #c4b5fd;
  --btn-primary-hover-bg: rgba(139,92,246,0.16);
  --btn-primary-hover-border: #a78bfa;
  --btn-primary-hover-text: #ede9fe;

  --input-bg: var(--bg3);
  --input-border: var(--line);
  --input-border-focus: var(--line2);
  --input-text: var(--text);
  --input-placeholder: var(--text3);

  --pill-bg: transparent;
  --pill-border: var(--line2);
  --pill-text: var(--text3);
  --pill-hover-border: var(--text3);
  --pill-hover-text: var(--text2);
  --pill-active-bg: rgba(139,92,246,0.10);
  --pill-active-border: #8b5cf6;
  --pill-active-text: #ddd6fe;

  --sidebar-w: 44px;
  --r:         var(--radius-sm);
  --r2:        var(--radius-md);

  font-family: var(--font-ui);
}

:root[data-theme="nt-dark"] {
  --shadow-card: 0 8px 24px rgba(0,0,0,.22);
}

:root[data-theme="editorial-light"] {
  --bg:        #f6f2ec;
  --bg2:       #fffdf9;
  --bg3:       #f3ede6;
  --line:      #d8cec0;
  --line2:     #b9ab98;
  --text:      #211c17;
  --text2:     #5d5347;
  --text3:     #8f816f;
  --accent:    #1f2f42;
  --accent-bg: rgba(73,96,123,0.08);

  --page-bg: var(--bg);
  --panel-bg: #fbf7f0;
  --card-bg: var(--bg2);
  --card-bg-soft: var(--bg3);
  --border-subtle: var(--line);
  --border-strong: var(--line2);
  --text-primary: var(--text);
  --text-secondary: var(--text2);
  --text-muted: var(--text3);
  --text-heading: #3f352b;

  --btn-bg: rgba(73,96,123,0.04);
  --btn-border: var(--line);
  --btn-text: var(--text2);
  --btn-hover-bg: rgba(73,96,123,0.08);
  --btn-hover-border: #8d7f6f;
  --btn-hover-text: var(--text);
  --btn-primary-bg: #1d2733;
  --btn-primary-border: #1d2733;
  --btn-primary-text: #fffdf8;
  --btn-primary-hover-bg: #2e3e50;
  --btn-primary-hover-border: #2e3e50;
  --btn-primary-hover-text: #fffdf8;

  --input-bg: #f8f4ef;
  --input-border: #d8cec0;
  --input-border-focus: #627995;
  --input-text: var(--text);
  --input-placeholder: #988b79;

  --pill-bg: rgba(73,96,123,0.04);
  --pill-border: #d1c5b7;
  --pill-text: #6d6154;
  --pill-hover-border: #9b8c79;
  --pill-hover-text: #2b241e;
  --pill-active-bg: #f2ece4;
  --pill-active-border: #627995;
  --pill-active-text: #1f2f42;

  --shadow-card: 0 4px 12px rgba(56, 45, 31, 0.08);
}

:root[data-theme="studio-light"] {
  color-scheme: light;

  --bg: #f4f3f0;
  --bg2: #f1f1ee;
  --bg3: #eeeff1;
  --line: #dde1e6;
  --line2: #d0d6dd;
  --text: #1f252c;
  --text2: #4f5a66;
  --text3: #828c98;
  --accent: #314152;
  --accent-bg: #dfe7f1;

  --page-bg: var(--bg);
  --panel-bg: var(--bg2);
  --card-bg: #eceef1;
  --card-bg-soft: #e8ebef;
  --border-subtle: #dde1e6;
  --border-strong: #d2d8df;
  --text-primary: var(--text);
  --text-secondary: var(--text2);
  --text-muted: var(--text3);
  --text-heading: #161c23;

  --btn-bg: #eceff3;
  --btn-border: #d6dce3;
  --btn-text: #43505d;
  --btn-hover-bg: #e4eaf1;
  --btn-hover-border: #c1cad5;
  --btn-hover-text: #2b3642;
  --btn-primary-bg: #33414f;
  --btn-primary-border: #33414f;
  --btn-primary-text: #f7f8fa;
  --btn-primary-hover-bg: #3d4b59;
  --btn-primary-hover-border: #3d4b59;
  --btn-primary-hover-text: #f7f8fa;

  --input-bg: #f4f5f7;
  --input-border: #d9dee4;
  --input-border-focus: #b7c3d0;
  --input-text: #28333f;
  --input-placeholder: #8a93a0;

  --pill-bg: transparent;
  --pill-border: #d4dae1;
  --pill-text: #61707f;
  --pill-hover-border: #c1cad5;
  --pill-hover-text: #344253;
  --pill-active-bg: #d9e2ee;
  --pill-active-border: #d9e2ee;
  --pill-active-text: #2e3e4f;

  --green: #667f76;
  --red: #a57474;
  --amber: #ad8b5e;
  --blue: #7d94b0;

  --shadow-card: 0 1px 2px rgba(33, 40, 49, 0.03);
}

/* Side Panel fills the full browser window height; no fixed dimensions needed. */
html {
  background: var(--page-bg);
  height: 100%;
}

body {
  background: var(--page-bg);
  color: var(--text-primary);
  font-size: 14px;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--line2); border-radius: 99px; }

/* ══════════════════════════════════════
   SIDEBAR
══════════════════════════════════════ */
.sidebar {
  width: var(--sidebar-w);
  flex-shrink: 0;
  background: var(--panel-bg);
  border-right: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 0 14px;
  gap: 0;
}

.brand-mark {
  width: 22px;
  height: 22px;
  border: 1px solid var(--line2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  flex-shrink: 0;
}
.brand-mark svg { width: 11px; height: 11px; }

.nav-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: 100%;
  padding: 0 5px;
  margin-bottom: auto;
}

.nav-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  color: var(--text3);
  transition: color .15s, background .15s;
  position: relative;
}
.nav-item:hover { color: var(--text2); background: var(--accent-bg); }
.nav-item.active { color: var(--text); background: var(--bg3); }
.nav-item.active::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 16px;
  background: var(--text);
  border-radius: 0 2px 2px 0;
}

.nav-icon, .nav-icon-mono {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3px;
  line-height: 1;
}
.nav-label {
  font-family: 'DM Mono', monospace;
  font-size: 6px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  line-height: 1;
}

.sidebar-bottom {
  width: 100%;
  padding: 0 5px;
}

/* ══════════════════════════════════════
   MAIN CONTENT
══════════════════════════════════════ */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

/* Topbar */
.topbar {
  height: 44px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--border-subtle);
  flex-shrink: 0;
}
.topbar-title {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text2);
  flex: 1;
  min-width: 0;
}
.topbar-title span { color: var(--text); }

/* AI target pill row */
.ai-pills {
  display: flex;
  gap: 4px;
  align-items: center;
}
.ai-pill {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: 99px;
  border: 1px solid var(--pill-border);
  background: var(--pill-bg);
  color: var(--pill-text);
  cursor: pointer;
  transition: all .15s;
}
.ai-pill:hover { color: var(--pill-hover-text); border-color: var(--pill-hover-border); }
.ai-pill.active { color: var(--pill-active-text); border-color: var(--pill-active-border); background: var(--pill-active-bg); }

/* Scroll area */
.panel-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

/* Panel visibility */
.panel { display: none; }
.panel.active { display: block; }
.panel.active.panel-fill { display: flex; flex-direction: column; flex: 1; }

/* ── Typography helpers ── */
.label {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 10px;
}
.sublabel {
  font-size: 11px;
  color: var(--text2);
  margin-bottom: 16px;
  line-height: 1.6;
}

/* ── Step indicator ── */
.steps {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 28px;
}
.step-item {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}
.step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--line2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text3);
  flex-shrink: 0;
  transition: all .2s;
}
.step-num.active { border-color: var(--text); color: var(--text); background: var(--bg3); }
.step-num.done { border-color: var(--green); color: var(--green); }
.step-text {
  font-size: 11px;
  color: var(--text3);
  transition: color .2s;
}
.step-text.active { color: var(--text2); }
.step-text.done { color: var(--text3); }
.step-line {
  flex: 1;
  height: 1px;
  background: var(--line);
  margin: 0 8px;
  max-width: 32px;
}

/* ── Section card ── */
.section {
  background: var(--card-bg);
  border: 1px solid var(--border-subtle);
  border-radius: var(--r2);
  padding: var(--space-4);
  margin-bottom: 12px;
  transition: border-color .15s;
}
.section.active-section { border-color: var(--border-strong); }
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.section-title {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-heading);
}
:root[data-theme="editorial-light"] .section-title,
:root[data-theme="editorial-light"] .cf-card-title {
  font-family: var(--font-editorial);
  letter-spacing: 0.4px;
  text-transform: none;
  font-weight: 600;
}
:root[data-theme="studio-light"] .topnav {
  background: var(--page-bg);
}
:root[data-theme="studio-light"] .topnav-tabs {
  background: transparent;
}
:root[data-theme="studio-light"] .topnav-tabs .nav-item {
  background: transparent;
  border-color: transparent;
  color: var(--text);
}
:root[data-theme="studio-light"] .topnav-tabs .nav-item.active {
  background: var(--pill-active-bg);
  border-color: transparent;
  box-shadow: none;
  color: var(--pill-active-text);
}
:root[data-theme="studio-light"] .nav-cfg {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
  border-radius: 0;
}
:root[data-theme="studio-light"] .nav-gear {
  color: var(--text-heading);
}
:root[data-theme="studio-light"] .nav-cfg:hover,
:root[data-theme="studio-light"] .nav-cfg.active {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}
:root[data-theme="studio-light"] .cf-delay-label,
:root[data-theme="studio-light"] .cf-delay-unit {
  color: #5c6673;
}
:root[data-theme="studio-light"] .cf-delay-sel {
  color: #344253;
  border-color: #9da9b7;
  background: #f3f6fa;
}
:root[data-theme="studio-light"] [data-cf-toggle],
:root[data-theme="studio-light"] [data-etl-toggle] {
  color: #5c6673;
}
:root[data-theme="studio-light"] [data-cf-toggle]:hover,
:root[data-theme="studio-light"] [data-etl-toggle]:hover {
  color: #344253;
}

/* ── Form elements ── */
.field { margin-bottom: 14px; }
.field:last-child { margin-bottom: 0; }
.field-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 6px;
  display: block;
}

.input, .ta {
  width: 100%;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: var(--r);
  padding: 10px 12px;
  color: var(--input-text);
  font-family: var(--font-ui);
  font-size: 15px;
  outline: none;
  transition: border-color .15s, background .15s, color .15s;
  line-height: 1.6;
}
.input:focus, .ta:focus { border-color: var(--input-border-focus); }
.input::placeholder, .ta::placeholder { color: var(--input-placeholder); }
.ta { resize: vertical; }
/* ── Compact select (共用 dropdown 樣式) ── */
.select-compact {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 28px;
  font-family: var(--font-ui);
  font-size: 12px;
  padding: 0 26px 0 10px;
  background: var(--input-bg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='5' viewBox='0 0 9 5'%3E%3Cpath d='M0 0l4.5 5 4.5-5z' fill='%237A7468'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 9px center;
  border: 1px solid var(--input-border);
  border-radius: var(--r);
  color: var(--input-text);
  outline: none;
  cursor: pointer;
  transition: border-color .15s;
}
.select-compact:focus { border-color: var(--input-border-focus); }
.mono { font-family: var(--font-mono); font-size: 12px; }

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border-radius: var(--r);
  border: 1px solid var(--btn-border);
  background: var(--btn-bg);
  color: var(--btn-text);
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  cursor: pointer;
  transition: all .15s;
  white-space: nowrap;
}
.btn:hover { color: var(--btn-hover-text); border-color: var(--btn-hover-border); background: var(--btn-hover-bg); }
.btn:disabled { opacity: .3; cursor: not-allowed; }

.btn-primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  border-color: var(--btn-primary-border);
}
.btn-primary:hover { background: var(--btn-primary-hover-bg); border-color: var(--btn-primary-hover-border); color: var(--btn-primary-hover-text); }
.btn-primary:disabled { opacity: .3; }

.btn-ghost { border-color: transparent; color: var(--text3); padding: 5px 7px; }
.btn-ghost:hover { color: var(--text2); background: var(--accent-bg); border-color: transparent; }

.btn-sm { padding: 4px 9px; font-size: 11px; }
.btn-xs { padding: 3px 8px; font-size: 10px; }

.btn-danger { color: var(--red); border-color: transparent; padding: 5px 7px; }
.btn-danger:hover { border-color: var(--red); background: rgba(248,113,113,.07); }

.btn-success { border-color: var(--green); color: var(--green); }
.btn-success:hover { background: var(--green); color: var(--bg); }

/* ── Prompt list (ETL) ── */
.prompt-stack {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 2px;
}
.prompt-empty {
  text-align: center;
  padding: 24px;
  color: var(--text3);
  font-size: 12px;
}

.prompt-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: var(--card-bg-soft);
  border: 1px solid var(--border-subtle);
  border-radius: var(--r);
  padding: 10px 12px;
  transition: border-color .2s;
}
.prompt-row:hover { border-color: var(--border-strong); }
.prompt-row.running { border-color: rgba(96,165,250,.4); animation: glow-blue 1.4s infinite; }
.prompt-row.done    { border-color: rgba(62,207,142,.3); }
.prompt-row.error   { border-color: rgba(248,113,113,.3); }

@keyframes glow-blue {
  0%,100% { box-shadow: none; }
  50% { box-shadow: 0 0 0 2px rgba(96,165,250,.1); }
}

.prompt-num {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: var(--text3);
  padding-top: 2px;
  min-width: 18px;
}
.prompt-ta {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text);
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 12px;
  resize: none;
  min-height: 32px;
  line-height: 1.6;
}
.prompt-status { font-size: 12px; min-width: 14px; }
.prompt-del {
  background: none;
  border: none;
  color: var(--text3);
  cursor: pointer;
  font-size: 13px;
  line-height: 1;
  padding: 1px 3px;
  border-radius: 3px;
  transition: color .15s;
}
.prompt-del:hover { color: var(--red); }

.pi {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) 20px 24px;
  gap: 8px;
  align-items: start;
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 10px 12px;
}
.pi.running { border-color: rgba(96,165,250,.4); animation: glow-blue 1.4s infinite; }
.pi.done { border-color: rgba(62,207,142,.3); }
.pi.error { border-color: rgba(248,113,113,.3); }
.pi-n {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text3);
  padding-top: 4px;
}
.pi-txt {
  width: 100%;
  min-height: 120px;
  max-height: 320px;
  overflow-y: auto;
  resize: vertical;
  background: transparent;
  border: none;
  color: var(--text);
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 12px;
  line-height: 1.7;
  outline: none;
}
.pi-ico {
  color: var(--text3);
  font-size: 12px;
  padding-top: 4px;
}
.pi-del {
  background: none;
  border: none;
  color: var(--text3);
  cursor: pointer;
  font-size: 13px;
  line-height: 1;
  padding: 4px 3px;
  border-radius: 3px;
}
.pi-del:hover { color: var(--red); }

/* ── Prompt chip picker ── */
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.chip {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.5px;
  padding: 5px 10px;
  border-radius: 99px;
  border: 1px solid var(--line2);
  background: none;
  color: var(--text3);
  cursor: pointer;
  transition: all .15s;
}
.chip:hover { color: var(--text); border-color: var(--text3); }
.chip.selected { color: var(--text); border-color: var(--text); background: var(--bg3); }

/* ── Run controls ── */
.run-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 0;
  width: 100%;
}
.delay-group {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
}
.delay-label { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--text3); }
.delay-input {
  width: 52px;
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 6px 8px;
  color: var(--text);
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  text-align: center;
  outline: none;
  transition: border-color .15s;
}
.delay-input:focus { border-color: var(--line2); }
.etl-run-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  min-width: 0;
}
.etl-run-meta-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.4px;
  color: var(--text3);
  white-space: nowrap;
}
.delay-select {
  width: auto;
  min-width: 72px;
  height: 24px;
  padding-left: 8px;
  padding-right: 22px;
  font-size: 10px;
  border-radius: 99px;
}
.delay-custom-input {
  width: 58px;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 99px;
  padding: 4px 8px;
  color: var(--input-text);
  font-family: var(--font-mono);
  font-size: 10px;
  text-align: center;
  outline: none;
}
.delay-custom-input:focus { border-color: var(--input-border-focus); }
.etl-run-cta {
  flex: 1 1 auto;
  min-width: 132px;
  width: auto;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  letter-spacing: 0.3px;
}

/* ── Progress ── */
.progress { margin-top: 14px; display: block; opacity: .72; transition: opacity .15s; }
.progress.on { opacity: 1; }
.prog-bar { height: 3px; background: var(--line); border-radius: 99px; overflow: hidden; }
.prog-fill { height: 100%; background: var(--text); border-radius: 99px; transition: width .35s; }
.prog-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: var(--text3);
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
}
.prog-subtxt {
  margin-top: 4px;
  font-size: 11px;
  line-height: 1.5;
  color: var(--text2);
}

/* ── Log strip ── */
.log-strip {
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 8px 12px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text3);
  min-height: 34px;
  max-height: 72px;
  overflow-y: auto;
  line-height: 1.7;
  margin-top: 10px;
}
.ll { display: block; }
.log-placeholder { color: var(--text3); }
.ll.info    { color: var(--text3); }
.ll.success { color: var(--green); }
.ll.warn    { color: var(--amber); }
.ll.error   { color: var(--red); }

/* ── Grok responses ── */
.response-list { display: flex; flex-direction: column; gap: 6px; max-height: 160px; overflow-y: auto; }
.response-item {
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 10px 12px;
}
.response-q {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: var(--text3);
  margin-bottom: 5px;
  line-height: 1.4;
}
.response-a { font-size: 11px; color: var(--text2); max-height: 48px; overflow-y: auto; white-space: pre-wrap; line-height: 1.5; }

/* ── Result table ── */
.tbl-wrap { border: 1px solid var(--line); border-radius: var(--r); overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 11px; }
th {
  background: var(--bg3);
  padding: 8px 10px;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 1px;
  color: var(--text3);
  border-bottom: 1px solid var(--line);
  text-align: left;
  white-space: nowrap;
}
td {
  padding: 8px 10px;
  border-bottom: 1px solid var(--line);
  color: var(--text2);
  vertical-align: top;
  max-width: 160px;
  word-break: break-all;
}
tr:last-child td { border-bottom: none; }
td[contenteditable]:focus { background: var(--accent-bg); outline: none; color: var(--text); }

.result-pre {
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 12px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text2);
  max-height: 200px;
  overflow-y: auto;
  white-space: pre-wrap;
  line-height: 1.6;
}
.result-editor {
  width: 100%;
  min-height: 220px;
  max-height: 320px;
  resize: vertical;
  outline: none;
}
.result-editor:focus {
  border-color: var(--input-border-focus);
  color: var(--text);
}

/* ── Divider ── */
.divider { border: none; border-top: 1px solid var(--line); margin: 20px 0; }

/* ── Row / flex helpers ── */
.row { display: flex; gap: 8px; align-items: center; }
.row-between { justify-content: space-between; }
.spacer { flex: 1; }

/* ── Toggle ── */
.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}
.toggle-row:last-child { border-bottom: none; }
.toggle-info { flex: 1; }
.toggle-label { font-size: 12px; color: var(--text); }
.toggle-sub { font-size: 11px; color: var(--text3); margin-top: 2px; }
.toggle { position: relative; width: 32px; height: 18px; flex-shrink: 0; }
.toggle input { opacity: 0; width: 0; height: 0; }
.toggle-track {
  position: absolute;
  inset: 0;
  background: var(--line2);
  border-radius: 18px;
  cursor: pointer;
  transition: .2s;
}
.toggle-track::before {
  content: '';
  position: absolute;
  height: 12px;
  width: 12px;
  left: 3px;
  bottom: 3px;
  background: var(--text3);
  border-radius: 50%;
  transition: .2s;
}
input:checked + .toggle-track { background: var(--text); }
input:checked + .toggle-track::before { transform: translateX(14px); background: var(--bg); }

/* ── Distill format selector ── */
.fmt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
}
.fmt-card {
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 14px 16px;
  cursor: pointer;
  transition: border-color .15s;
}
.fmt-card:hover { border-color: var(--line2); }
.fmt-card.active { border-color: var(--text2); }
.fmt-name {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 4px;
}
.fmt-desc { font-size: 10px; color: var(--text3); line-height: 1.4; }

/* ── Prompt Manager ── */
.pm-layout {
  display: flex;
  gap: 0;
  height: 100%;
  overflow: hidden;
}
.pm-sidebar {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--line);
  padding: 20px 16px;
  overflow: hidden;
}
.pm-main {
  flex: 1;
  min-width: 0;
  padding: 20px;
  overflow-y: auto;
}

.series-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 10px;
  border-radius: var(--r);
  cursor: pointer;
  transition: background .15s;
  border: 1px solid transparent;
}
.series-item:hover { background: var(--bg3); }
.series-item.active { background: var(--bg3); border-color: var(--line2); }
.series-name { flex: 1; font-size: 12px; color: var(--text2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.series-item.active .series-name { color: var(--text); }
.series-count {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: var(--text3);
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 99px;
  padding: 2px 6px;
}
.series-del { background: none; border: none; color: var(--text3); cursor: pointer; font-size: 12px; padding: 2px; border-radius: 2px; }
.series-del:hover { color: var(--red); }

.sp-item {
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 12px;
  margin-bottom: 8px;
}
.sp-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.sp-name-input {
  flex: 1;
  background: none;
  border: none;
  border-bottom: 1px solid var(--line);
  color: var(--text);
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 12px;
  padding: 2px 4px;
  outline: none;
  min-width: 0;
  transition: border-color .15s;
}
.sp-name-input:focus { border-bottom-color: var(--line2); }

/* ── Library items ── */
.lib-section { margin-top: 20px; }
.lib-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 6px 0;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text3);
  user-select: none;
  transition: color .15s;
}
.lib-toggle:hover { color: var(--text2); }
.lib-count { background: var(--bg3); border: 1px solid var(--line); border-radius: 99px; padding: 1px 6px; }
.lib-chevron {
  margin-left: auto;
  font-size: 11px;
  color: var(--text2);
  transition: transform .2s, color .15s;
}
.lib-toggle:hover .lib-chevron { color: var(--text); }
.lib-chevron.open { transform: rotate(180deg); }

.lib-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 4px;
  border-bottom: 1px solid var(--line);
  transition: background .1s;
}
.lib-item:last-child { border-bottom: none; }
.lib-item:hover { background: var(--accent-bg); border-radius: var(--r); }
.lib-icon { font-size: 12px; flex-shrink: 0; }
.lib-name { flex: 1; font-size: 11px; color: var(--text2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.lib-date { font-family: 'DM Mono', monospace; font-size: 9px; color: var(--text3); flex-shrink: 0; }
.lib-acts { display: flex; gap: 3px; flex-shrink: 0; }

/* ETL extract library: lightweight result cards */
#extractLibList {
  margin-top: 6px;
}
#extractLibList .lib-item {
  gap: 10px;
  padding: 10px 12px;
  margin-bottom: 8px;
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  background: var(--card-bg-soft);
  transition: border-color .15s, background .15s, box-shadow .15s;
}
#extractLibList .lib-item:last-child {
  margin-bottom: 0;
  border-bottom: 1px solid var(--border-subtle);
}
#extractLibList .lib-item:hover {
  background: var(--bg3);
  border-color: var(--border-strong);
  border-radius: 12px;
  box-shadow: var(--shadow-card);
}
#extractLibList .lib-icon {
  font-size: 13px;
  color: var(--text3);
}
#extractLibList .lib-name {
  font-size: 12px;
  font-weight: 500;
  color: var(--text);
}
#extractLibList .lib-date {
  font-size: 9px;
  color: var(--text3);
}
#extractLibList .lib-acts {
  gap: 4px;
  align-items: center;
}
#extractLibList .lib-act-btn {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--text2);
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  opacity: .78;
  transition: color .15s, background .15s, opacity .15s;
}
#extractLibList .lib-act-del {
  font-size: 11px;
}
#extractLibList .lib-item:hover .lib-act-btn {
  opacity: 1;
}
#extractLibList .lib-act-btn:hover {
  background: var(--accent-bg);
  color: var(--text);
}
#extractLibList .lib-act-del:hover {
  color: var(--red);
}
#extractLibList .btn.btn-ghost.btn-xs,
#extractLibList .pi-del {
  color: var(--text2);
  opacity: .78;
}
#extractLibList .lib-item:hover .btn.btn-ghost.btn-xs,
#extractLibList .lib-item:hover .pi-del {
  opacity: 1;
}

/* ── Settings sections ── */
.sg { margin-bottom: 28px; }
.sg:last-child { margin-bottom: 0; }
.sr { margin-bottom: 10px; }
.sr label {
  display: block;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 6px;
}

.save-ok {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: var(--green);
  opacity: 0;
  transition: opacity .3s;
}
.save-ok.on { opacity: 1; }

.font-btn.active,
.contrast-btn.active { border-color: var(--text); color: var(--text); background: var(--bg3); }

body.contrast-bright {
  --line2: #3a3a3a;
  --text2: #b8b8b8;
  --text3: #6f6f6f;
  --accent-bg: rgba(240,240,240,0.09);
}

body.contrast-max {
  --line: #303030;
  --line2: #4a4a4a;
  --text2: #d0d0d0;
  --text3: #969696;
  --accent-bg: rgba(240,240,240,0.12);
}

body.font-comfortable .input,
body.font-comfortable .ta { font-size: 16px; }
body.font-comfortable .prompt-ta,
body.font-comfortable .toggle-label,
body.font-comfortable .series-name,
body.font-comfortable .sp-name-input { font-size: 15px; }
body.font-comfortable .response-a,
body.font-comfortable table,
body.font-comfortable .toggle-sub,
body.font-comfortable .lib-name,
body.font-comfortable .selected-prompt-preview { font-size: 14px; }
body.font-comfortable .btn,
body.font-comfortable .section-title,
body.font-comfortable .label,
body.font-comfortable .field-label,
body.font-comfortable .log-strip,
body.font-comfortable .result-pre { font-size: 13px; }
body.font-comfortable .cf-card-title { font-size: 17px; }
body.font-comfortable .cf-card-num,
body.font-comfortable .cf-delay-label,
body.font-comfortable .cf-delay-unit,
body.font-comfortable .cf-delay-sel,
body.font-comfortable .cf-delay-custom { font-size: 10px; }
body.font-comfortable .cf-source-textarea { font-size: 15px; }

body.font-large .input,
body.font-large .ta { font-size: 18px; }
body.font-large .prompt-ta,
body.font-large .toggle-label,
body.font-large .series-name,
body.font-large .sp-name-input { font-size: 16px; }
body.font-large .response-a,
body.font-large table,
body.font-large .toggle-sub,
body.font-large .lib-name,
body.font-large .selected-prompt-preview { font-size: 15px; }
body.font-large .btn,
body.font-large .section-title,
body.font-large .label,
body.font-large .field-label,
body.font-large .log-strip,
body.font-large .result-pre { font-size: 15px; }
body.font-comfortable .topnav-tabs .nav-label { font-size: 11px; }
body.font-large .topnav-tabs .nav-label { font-size: 12px; }
body.font-large .nav-icon, body.font-large .nav-icon-mono { font-size: 11px; }
body.font-large .cf-card-title { font-size: 19px; }
body.font-large .cf-card-num,
body.font-large .cf-delay-label,
body.font-large .cf-delay-unit,
body.font-large .cf-delay-sel,
body.font-large .cf-delay-custom { font-size: 11px; }
body.font-large .cf-source-textarea { font-size: 16px; }

/* ── Distill selected prompt ── */
.selected-prompt-preview {
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 10px 12px;
  margin-top: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text3);
  max-height: 72px;
  overflow-y: auto;
  white-space: pre-wrap;
  line-height: 1.6;
}
.cf-source-textarea {
  font-size: 13px;
  line-height: 1.65;
  min-height: 112px;
  max-height: 220px;
}
.cf-source-textarea.is-expanded {
  min-height: 280px;
  max-height: 520px;
}
.cf-preview-panel {
  min-height: 76px;
  max-height: 84px;
  resize: vertical;
  overflow-y: auto;
}
.cf-preview-panel.is-expanded {
  max-height: 260px;
}
.selected-prompt-preview[data-empty]::before {
  content: attr(data-empty-label);
  font-style: italic;
  color: var(--text3);
}

/* ── Inline char counter ── */
.char-count {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: var(--text3);
}

/* ── View toggle ── */
.view-toggle-btn.active { border-color: var(--text2); color: var(--text2); }

/* ── Empty state ── */
.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--text3);
}
.empty-state-icon { font-size: 24px; margin-bottom: 12px; opacity: .4; }
.empty-state-text { font-size: 12px; line-height: 1.6; }

/* ── Distill response section ── */
#distillResponseSection { margin-top: 0; }

/* ── Badge dot ── */
.badge-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--amber);
  margin-left: 4px;
  vertical-align: middle;
}

/* ════ PROMPT MANAGER — tab-bar + card pattern ════ */

.series-tabbar {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--line);
  padding: 10px 12px;
  background: var(--bg2);
  flex-shrink: 0;
}
.series-select-wrap {
  flex: 1;
  min-width: 0;
}
.series-select {
  width: 100%;
}
.prompt-actions-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  flex-shrink: 0;
}

.series-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.series-tool-btn {
  height: 30px;
  padding: 0 9px;
  border-radius: var(--r);
  border: 1px solid var(--line);
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.5px;
  color: var(--text3);
  transition: color .15s, border-color .15s, background .15s;
}
.series-tool-btn:hover:not(:disabled) {
  color: var(--text2);
  border-color: var(--line2);
  background: var(--accent-bg);
}
.series-tool-btn.is-ready {
  color: var(--text2);
  border-color: var(--line2);
}
.series-tool-btn.is-ready:hover:not(:disabled) {
  color: var(--text);
}
.series-tool-btn:disabled {
  opacity: .35;
  cursor: not-allowed;
}

.cards-scroll {
  flex: 1; overflow-y: auto; padding: 10px 12px;
  min-height: 0; display: flex; flex-direction: column; gap: 6px;
}

/* Prompt card */
.pcard {
  background: var(--bg2); border: 1px solid var(--line);
  border-radius: var(--r2); overflow: hidden;
  transition: border-color .15s;
}
.pcard:hover { border-color: var(--line2); }
.pcard.expanded { border-color: var(--line2); }

.pcard-head {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 12px; cursor: pointer; user-select: none;
}
.pcard-num {
  font-family: 'DM Mono', monospace; font-size: 8px;
  color: var(--text3); min-width: 14px; flex-shrink: 0;
}
.pcard-info { flex: 1; min-width: 0; }
.pcard-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  margin-bottom: 2px;
}
.pcard-name {
  font-size: 12px; font-weight: 500; color: var(--text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  line-height: 1.3;
}
.pcard-edit-badge {
  font-family: 'DM Mono', monospace;
  font-size: 8px;
  color: var(--text3);
  opacity: .7;
  flex-shrink: 0;
}
.pcard-preview {
  font-family: 'DM Mono', monospace; font-size: 9px; color: var(--text3);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.4;
}
.pcard-head-actions { display: flex; gap: 4px; align-items: center; flex-shrink: 0; }
.chevron {
  font-size: 8px; color: var(--text3); transition: transform .2s;
  flex-shrink: 0; margin-left: 1px;
}
.pcard.expanded .chevron { transform: rotate(180deg); }

.pcard-body { display: none; }
.pcard.expanded .pcard-body { display: block; }
.pcard-divider { border: none; border-top: 1px solid var(--line); }

.pcard-editor {
  width: 100%; background: transparent; border: none; outline: none;
  color: var(--text); font-family: 'Noto Sans TC', sans-serif;
  font-size: 12px; line-height: 1.8; resize: none;
  padding: 10px 12px 10px 34px; min-height: 72px;
}
.pcard-editor::placeholder { color: var(--text3); }

.pcard-foot {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 12px; border-top: 1px solid var(--line);
  background: var(--bg);
}
.pcard-chars { font-family: 'DM Mono', monospace; font-size: 8px; color: var(--text3); }

/* Schema card name edit input */
.schema-name-input {
  width: 100%; background: transparent; border: none;
  border-bottom: 1px solid var(--line); outline: none;
  color: var(--text); font-size: 12px; font-weight: 500;
  padding: 8px 12px 8px 34px;
  font-family: 'Noto Sans TC', sans-serif; transition: border-color .15s;
}
.prompt-name-input {
  width: 100%; background: transparent; border: none;
  border-bottom: 1px solid var(--line); outline: none;
  color: var(--text); font-size: 12px; font-weight: 500;
  padding: 8px 12px 8px 34px;
  font-family: 'Noto Sans TC', sans-serif; transition: border-color .15s;
}
.prompt-name-input:focus,
.schema-name-input:focus { border-bottom-color: var(--line2); }

/* Add prompt row */
.add-row {
  flex-shrink: 0; border-top: 1px solid var(--line); background: var(--bg2);
}
.add-row-trigger {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: calc(100% - 24px);
  margin: 12px;
  padding: 12px 14px; cursor: pointer;
  font-family: var(--font-ui); font-size: 12px; font-weight: 600; color: var(--text2);
  border: 1px solid var(--line2);
  border-radius: 12px;
  background: var(--bg3);
  transition: color .15s, border-color .15s, background .15s, transform .15s;
}
.add-row-trigger:hover { color: var(--text); border-color: var(--text3); background: var(--accent-bg); }
.add-row-trigger svg { opacity: .6; flex-shrink: 0; }
.add-form {
  display: none; flex-direction: column; gap: 6px;
  padding: 10px 12px; border-top: 1px solid var(--line);
}
.add-form.open { display: flex; }
.add-form input, .add-form textarea {
  width: 100%; background: var(--bg3); border: 1px solid var(--line);
  border-radius: var(--r); padding: 7px 10px; color: var(--text);
  font-family: 'Noto Sans TC', sans-serif; font-size: 12px;
  outline: none; transition: border-color .15s;
}
.add-form input { font-size: 11px; }
.add-form input:focus, .add-form textarea:focus { border-color: var(--line2); }
.add-form input::placeholder, .add-form textarea::placeholder { color: var(--text3); }
.add-form textarea { resize: vertical; line-height: 1.6; min-height: 96px; max-height: 280px; }
.add-form-row { display: flex; gap: 6px; align-items: center; }
#newSeriesPromptText { min-height: 160px; }
#newSchemaInitText { min-height: 132px; }

/* New series bar */
.new-series-bar {
  display: none; align-items: center; gap: 6px;
  padding: 7px 12px; border-top: 1px solid var(--line);
  background: var(--bg); flex-shrink: 0;
}
.new-series-bar.show { display: flex; }
.new-series-bar .input {
  flex: 1; font-family: 'DM Mono', monospace; font-size: 10px;
  padding: 6px 9px; height: auto;
}

.autosave-note {
  padding: 8px 12px 0;
  color: var(--text3);
  font-size: 10px;
  line-height: 1.5;
  flex-shrink: 0;
}

/* Empty dot for empty states */
.empty-dot {
  width: 20px; height: 20px; border: 1px solid var(--line2);
  border-radius: 50%; margin: 0 auto 12px; opacity: .4;
}

/* Toast */
.toast {
  position: fixed; bottom: 14px; left: 50%; transform: translateX(-50%);
  background: var(--bg3); border: 1px solid var(--green);
  border-radius: var(--r); padding: 6px 14px;
  font-family: 'DM Mono', monospace; font-size: 9px; color: var(--green);
  pointer-events: none; opacity: 0; transition: opacity .2s; z-index: 99;
  white-space: nowrap;
}
.toast.show { opacity: 1; }

/* ════ CUSTOM FLOW CARDS ════ */

/* Run-all bar */
.cf-run-bar {
  display: flex; align-items: flex-start; gap: 10px;
  margin-top: 14px;
  padding: 12px 14px 0;
  border-top: 1px solid var(--line);
}
.cf-run-bar-inline {
  margin-top: 0;
  padding: 0;
  border-top: none;
}
.cf-run-main {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  flex: 1;
}
.cf-run-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex-shrink: 0;
}
.cf-run-actions-full {
  width: 100%;
}
.cf-run-actions-full #cfRunAllBtn {
  flex: 1 1 auto;
  width: 100%;
  justify-content: center;
}
.cf-run-topline {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.cf-preset-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.cf-preset-bar-top {
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--line);
}
.cf-preset-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.6px;
  color: var(--text3);
}
.cf-preset-sel {
  min-width: 170px;
  max-width: 260px;
  width: auto;
}
.cf-run-status {
  min-width: 0;
  font-size: 11px;
  line-height: 1.5;
  color: var(--text2);
}
.cf-run-status.success { color: var(--green); }
.cf-run-status.error { color: #ff7b7b; }
.cf-run-status.warn { color: #f3c56a; }
.cf-run-status .label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.6px;
  color: var(--text3);
  margin-right: 6px;
}
.cf-preset-save-row {
  display: flex;
  justify-content: stretch;
  padding-top: 4px;
}
.cf-preset-save-row #cfSavePresetBtn {
  width: 100%;
  justify-content: center;
}

/* Delay selector */
.cf-delay-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  min-width: 0;
}
.cf-delay-label,
.cf-delay-unit {
  font-family: var(--font-ui);
  font-size: 11px;
  letter-spacing: 0;
  color: var(--text2);
  white-space: nowrap;
}
.cf-delay-sel {
  font-family: var(--font-mono); font-size: 10px;
  background: var(--bg3); border: 1px solid var(--line2);
  border-radius: 999px; color: var(--text);
  min-width: 48px;
  height: 24px;
  padding: 1px 18px 1px 9px; outline: none; cursor: pointer;
  transition: border-color .15s, color .15s;
}
.cf-delay-sel:hover { border-color: var(--text2); color: var(--text); }
.cf-delay-custom {
  width: 52px; font-family: var(--font-mono); font-size: 10px;
  background: var(--bg3); border: 1px solid var(--line2);
  border-radius: 999px; color: var(--text); padding: 2px 8px;
  outline: none; text-align: center;
}
.cf-delay-custom:focus { border-color: var(--text3); }

/* Active highlight during run-all */
.cf-card.cf-active { border-color: var(--text2); }
.cf-card[data-cf-card="source"].cf-active { border-color: rgba(139,92,246,0.55); box-shadow: 0 0 0 1px rgba(139,92,246,0.10); }
.cf-card[data-cf-card="task"].cf-active { border-color: rgba(99,102,241,0.55); box-shadow: 0 0 0 1px rgba(99,102,241,0.10); }
.cf-card[data-cf-card="format"].cf-active { border-color: rgba(79,124,255,0.55); box-shadow: 0 0 0 1px rgba(79,124,255,0.10); }
.cf-card[data-cf-card="ai"].cf-active { border-color: rgba(46,166,166,0.55); box-shadow: 0 0 0 1px rgba(46,166,166,0.10); }
.cf-card[data-cf-card="run"].cf-active,
.cf-card[data-cf-linked-card="run"].cf-active { border-color: rgba(70,185,107,0.55); box-shadow: 0 0 0 1px rgba(70,185,107,0.10); }

.cf-card {
  background: var(--card-bg);
  border: 1px solid var(--border-strong);
  border-radius: var(--r2);
  margin-bottom: 10px;
  overflow: hidden;
}
.cf-card-head {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border-subtle);
  user-select: none;
}
.cf-card.cf-collapsed .cf-card-head { border-bottom: none; }
.cf-card-num {
  font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 600;
  letter-spacing: 0.2px; color: #f8fbff;
  background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02)), var(--bg3);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; padding: 4px 8px; flex-shrink: 0;
  min-width: 30px; text-align: center;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
.cf-card[data-cf-card="source"] .cf-card-num,
.cf-card[data-etl-card="prompt"] .cf-card-num { background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)), var(--step-1); border-color: rgba(139,92,246,0.55); }
.cf-card[data-cf-card="task"] .cf-card-num,
.cf-card[data-etl-card="schema"] .cf-card-num { background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)), var(--step-2); border-color: rgba(99,102,241,0.55); }
.cf-card[data-cf-card="format"] .cf-card-num,
.cf-card[data-etl-card="ai"] .cf-card-num { background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)), var(--step-3); border-color: rgba(79,124,255,0.55); }
.cf-card[data-cf-card="ai"] .cf-card-num,
.cf-card[data-etl-card="run"] .cf-card-num { background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)), var(--step-4); border-color: rgba(46,166,166,0.55); }
.cf-card[data-cf-card="run"] .cf-card-num,
.cf-card[data-etl-card="save"] .cf-card-num { background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)), var(--step-5); border-color: rgba(70,185,107,0.55); }
.cf-card[data-cf-linked-card="run"] .cf-card-num { background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)), var(--step-6); border-color: rgba(245,158,11,0.55); }
.cf-card-title {
  font-family: var(--font-ui); font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px; text-transform: none;
  color: var(--text-heading); flex: 1;
}
.cf-card-body { padding: 14px; }
.cf-card.cf-collapsed .cf-card-body { display: none; }
.cf-subsection { margin-top: 12px; }
.cf-subsection:first-child { margin-top: 0; }
.cf-subsection-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.6px;
  color: var(--text3);
  margin-bottom: 8px;
}
.cf-option-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--text);
  cursor: pointer;
  user-select: none;
}
.cf-option-hint {
  margin-top: 6px;
  font-size: 10px;
  color: var(--text3);
  line-height: 1.5;
}
.cf-inline-hint {
  margin-top: 10px;
  padding: 8px 10px;
  border: 1px solid var(--line2);
  border-radius: 10px;
  background: var(--panel2);
  font-size: 11px;
  line-height: 1.5;
  color: var(--text2);
}
.cf-delay-block .row { justify-content: flex-start; }
.cf-status-box {
  min-height: 54px;
  max-height: 120px;
  overflow-y: auto;
  border: 1px solid var(--line2);
  border-radius: var(--r);
  background: var(--bg);
  padding: 10px 12px;
}
.cf-status-box .ll {
  display: block;
  font-size: 11px;
  line-height: 1.6;
}
.cf-review-name-wrap {
  margin-bottom: 8px;
}
.cf-review-name-input {
  width: 100%;
  font-size: 9px;
  letter-spacing: 0.3px;
  text-transform: none;
  padding: 5px 8px;
  border-radius: 10px;
}
.cf-review-tools {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 6px;
  margin-bottom: 10px;
}
.cf-review-tools .btn {
  width: auto;
  justify-content: center;
  white-space: nowrap;
  font-size: 10px;
}
#cfCaptureReplyBtn {
  flex: 1 1 auto;
  min-width: 0;
  padding-inline: 9px;
}
#cfCopyBtn {
  flex: 0 0 auto;
  padding-inline: 6px;
}
#cfSaveResultBtn,
#cfSaveHtmlBtn {
  flex: 0 0 auto;
  padding-inline: 8px;
}
.cf-review-result-box {
  margin-top: 0;
}
.cf-review-empty {
  font-size: 11px;
  color: var(--text3);
  margin: 0 0 10px;
  line-height: 1.6;
}
.cf-result-section {
  border-top: 1px solid var(--line);
  padding-top: 12px;
}
.cf-empty-state {
  border: 1px dashed var(--line2);
  border-radius: var(--r);
  background: var(--bg);
  padding: 14px 12px;
  color: var(--text3);
  font-size: 11px;
  line-height: 1.5;
}
.cf-card-num.active,
.cf-card-title.active { color: var(--text); }
.cf-card-num.done,
.cf-card-title.done { color: var(--green); }
.cf-card-num.active {
  border-color: var(--text);
  background: var(--bg3);
}
.cf-card-num.done { border-color: var(--green); }
.cf-card[data-etl-card="prompt"]:has(.cf-card-num.active) { border-color: rgba(139,92,246,0.55); box-shadow: 0 0 0 1px rgba(139,92,246,0.10); }
.cf-card[data-etl-card="schema"]:has(.cf-card-num.active) { border-color: rgba(99,102,241,0.55); box-shadow: 0 0 0 1px rgba(99,102,241,0.10); }
.cf-card[data-etl-card="ai"]:has(.cf-card-num.active) { border-color: rgba(79,124,255,0.55); box-shadow: 0 0 0 1px rgba(79,124,255,0.10); }
.cf-card[data-etl-card="run"]:has(.cf-card-num.active) { border-color: rgba(46,166,166,0.55); box-shadow: 0 0 0 1px rgba(46,166,166,0.10); }
.cf-card[data-etl-card="save"]:has(.cf-card-num.active) { border-color: rgba(70,185,107,0.55); box-shadow: 0 0 0 1px rgba(70,185,107,0.10); }

.extract-notice {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  padding: 0 0 10px;
  color: var(--red);
  border-bottom: 1px dashed rgba(255,107,107,0.45);
}
.extract-notice-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--red);
  box-shadow: 0 0 0 3px rgba(255,107,107,0.10);
  flex-shrink: 0;
}
.extract-notice-text {
  font-size: 12px;
  line-height: 1.55;
  color: var(--red);
}

/* ══════════════════════════════════════
   TOPNAV — replaces vertical sidebar + topbar
══════════════════════════════════════ */
body { flex-direction: column; }

.topnav {
  min-height: 44px;
  height: auto;
  flex-shrink: 0;
  background: var(--bg2);
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: stretch;
  width: 100%;
}

.topnav-tabs {
  flex: 1;
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  overflow: hidden;
  min-width: 0;
  padding: 6px 8px;
  gap: 6px;
}

.topnav-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 8px;
  flex-shrink: 0;
  border-left: 1px solid var(--line);
}
.lang-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.lang-toggle-trigger {
  min-width: 42px;
  height: 30px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg2);
  color: var(--text2);
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition: color .15s, border-color .15s, background .15s;
}
.lang-toggle-trigger:hover {
  color: var(--text);
  border-color: var(--line2);
}
.lang-toggle-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  min-width: 54px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--bg2);
  box-shadow: var(--shadow-soft);
  z-index: 40;
}
.lang-toggle.open .lang-toggle-menu {
  display: flex;
}
.lang-toggle-btn {
  border: 1px solid transparent;
  background: transparent;
  color: var(--text3);
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  min-height: 28px;
  padding: 6px 8px;
  border-radius: 999px;
  cursor: pointer;
}
.lang-toggle-btn.active {
  background: var(--bg3);
  color: var(--text);
  border-color: var(--line2);
}

/* Override vertical nav-item → horizontal */
.nav-item {
  position: relative;
  width: auto;
  flex-direction: row;
  justify-content: center;
  padding: 0 14px;
  height: 100%;
  white-space: nowrap;
  border-radius: 999px;
  gap: 0;
  border: 1px solid transparent;
  background: transparent;
  transition: color .15s, background .15s, border-color .15s, transform .15s;
}
.topnav-tabs .nav-item {
  flex: 1 1 auto;
  min-width: 64px;
  min-height: 42px;
  height: auto;
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}
.topnav-tabs .nav-item:hover {
  background: var(--accent-bg);
  border-color: transparent;
}
.nav-item.active { background: none; }
.nav-item.active::after {
  display: none;
}
.topnav-tabs .nav-item.active {
  background: var(--bg3);
  border-color: rgba(255,255,255,.06);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.03);
}
.nav-item.active::before { display: none; }
.nav-label {
  font-family: var(--font-ui);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: none;
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
  text-align: center;
  line-height: 1.15;
  display: block;
}
html[data-lang="zh"] .topnav-tabs .nav-label {
  letter-spacing: 0;
}
.nav-break {
  display: block;
}
.nav-cfg {
  width: 30px;
  min-width: 30px;
  padding: 0;
  border-radius: 8px;
  border-color: transparent;
  background: transparent;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
}
.nav-cfg:hover {
  background: var(--accent-bg);
  border-color: transparent;
}
.nav-cfg .nav-label { display: none; }
.nav-gear {
  width: 16px;
  height: 16px;
  color: var(--text);
}
.nav-cfg.active .nav-gear,
.nav-cfg:hover .nav-gear { color: var(--text); }

@media (max-width: 760px) {
  .topnav {
    align-items: stretch;
  }
  .topnav-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 6px;
  }
  .topnav-tabs .nav-item {
    flex: 1 1 0;
    min-width: 78px;
    height: auto;
    min-height: 46px;
    padding: 6px 8px;
    align-items: center;
  }
  .topnav-tabs .nav-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    text-align: center;
    line-height: 1.15;
    font-size: 11px;
    font-weight: 600;
    display: block;
  }
  html[data-lang="zh"] .topnav-tabs .nav-label {
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: normal;
    line-break: strict;
  }
  body.font-comfortable .topnav-tabs .nav-label {
    font-size: 12px;
  }
  body.font-large .topnav-tabs .nav-label {
    font-size: 13px;
  }
  .topnav-actions {
    width: auto;
    justify-content: flex-end;
    padding: 0 8px;
    border-left: 1px solid var(--line);
    border-top: 0;
  }
}

/* ══════════════════════════════════════
   ETL FLOW — Vertical Timeline
══════════════════════════════════════ */
.etl-flow { display: flex; flex-direction: column; }
.etl-step-group { display: flex; gap: 14px; align-items: flex-start; }
.etl-timeline {
  width: 28px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1px;
}
.etl-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--line2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  font-weight: 500;
  color: var(--text3);
  flex-shrink: 0;
  transition: all .2s;
  background: var(--bg);
  z-index: 1;
}
.etl-num.active {
  border-color: var(--text);
  color: var(--text);
  background: var(--bg3);
  box-shadow: 0 0 0 3px rgba(240,240,240,.06);
}
.etl-num.done { border-color: var(--green); color: var(--green); }
.etl-vline {
  flex: 1;
  width: 1px;
  background: var(--line2);
  min-height: 20px;
  margin: 4px 0;
}
.etl-body { flex: 1; min-width: 0; padding-bottom: 20px; }
.etl-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 8px;
  padding-top: 6px;
  transition: color .2s;
}
.etl-label.active { color: var(--text2); }
.etl-label.done { color: var(--text3); }

/* ══════════════════════════════════════
   HOVER & TRANSITION EFFECTS
══════════════════════════════════════ */
.section { transition: border-color .2s, box-shadow .2s; }
.section:hover { border-color: var(--line2); box-shadow: 0 4px 20px rgba(0,0,0,.4); }
.pcard { transition: border-color .15s, box-shadow .15s; }
.pcard:hover { border-color: var(--line2); box-shadow: 0 2px 12px rgba(0,0,0,.3); }
.cf-card { transition: border-color .15s, box-shadow .15s; }
.cf-card:hover { border-color: var(--border-strong); box-shadow: var(--shadow-card); }
.btn { transition: background .15s, border-color .15s, color .15s, transform .1s, box-shadow .1s; }
.btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 2px 8px rgba(0,0,0,.35); }
.btn:active:not(:disabled) { transform: translateY(0); box-shadow: none; }

/* ══════════════════════════════════════
   ETL TYPOGRAPHY & FLOW REFINEMENTS
══════════════════════════════════════ */
.etl-label {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: none;
  margin-bottom: 14px;
  padding-top: 2px;
}
#tab-extract .field-label {
  font-size: 13.5px;
  font-weight: 600;
}
#tab-extract { font-size: 12.5px; }
.etl-num {
  width: 32px;
  height: 32px;
  font-size: 11px;
  border-width: 1.5px;
  flex-shrink: 0;
}
.etl-vline {
  background: linear-gradient(to bottom, var(--text3) 0%, var(--line) 100%);
  min-height: 32px;
}
.extract-prompt-sel {
  margin-bottom: 8px;
}
.extract-prompt-preview {
  display: none;
  font-size: 11.5px;
  color: var(--text2);
  background: var(--surface2);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 8px 10px;
  margin-bottom: 12px;
  white-space: pre-wrap;
  line-height: 1.5;
  max-height: 120px;
  overflow-y: auto;
}
.extract-prompt-preview.visible { display: block; }

.etl-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.etl-card-head .etl-label {
  flex: 1;
  margin-bottom: 0;
  padding-top: 0;
}
```
