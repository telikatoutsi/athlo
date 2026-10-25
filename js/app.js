// Shared layout, storage and helpers for every page.
(function () {
  const KEY = "athlo-v1";
  const D = window.ATHLO;

  // ---------- Storage (saved in this browser only) ----------
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); return true; }
    catch (e) { toast("Couldn't save in this browser"); return false; }
  }
  function get(path, fallback) {
    const s = load();
    return s[path] !== undefined ? s[path] : fallback;
  }
  function set(path, value) {
    const s = load();
    s[path] = value;
    save(s);
  }

  // ---------- Toast ----------
  let toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
  }

  // ---------- Backup ----------
  function exportBackup() {
    const blob = new Blob([JSON.stringify({ app: "athlo", version: 1, exported: new Date().toISOString(), data: load() }, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "athlo-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast("Backup downloaded");
  }
  function importBackup(file, done) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const obj = JSON.parse(r.result);
        const data = obj && obj.data ? obj.data : obj;
        if (typeof data !== "object" || Array.isArray(data)) throw new Error();
        if (!confirm("Replace the data in this browser with the backup?")) return;
        save(data);
        toast("Backup restored");
        if (done) done();
      } catch (e) { toast("That file isn't a valid backup"); }
    };
    r.readAsText(file);
  }

  // ---------- Helpers ----------
  const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  function todayIndex() { return (new Date().getDay() + 6) % 7; } // Monday = 0
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function num(v) { const n = parseFloat(String(v).replace(",", ".")); return isFinite(n) ? n : null; }
  function fmtKg(n) { return n == null ? "–" : (Math.round(n * 10) / 10).toFixed(1) + " kg"; }

  // ---------- Layout ----------
  const PAGES = [
    { href: "index.html", label: "Welcome", icon: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>' },
    { href: "data-collection.html", label: "Data", full: "Data Collection", icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>' },
    { href: "training-program.html", label: "Training", full: "Training Program", icon: '<path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11"/>' },
    { href: "check-in.html", label: "Check IN", full: "Check IN", icon: '<path d="M4 19V5M4 19h16M8 15l3-4 3 2 5-6"/>' },
    { href: "nutrition.html", label: "Nutrition", icon: '<path d="M4 3v8a3 3 0 0 0 3 3v7M7 3v8M10 3v8a3 3 0 0 1-3 3M17 21V3c-2 1-3 4-3 8h3"/>' }
  ];

  function layout() {
    const here = location.pathname.split("/").pop() || "index.html";
    const link = (p, withIcon) =>
      `<a href="${p.href}"${p.href === here ? ' aria-current="page"' : ""}>` +
      (withIcon ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p.icon}</svg>` : "") +
      `<span>${withIcon ? p.label : (p.full || p.label)}</span></a>`;

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      `<div class="header-inner">
        <a class="brand" href="index.html"><img src="img/athlo-mark.png" alt=""><span>ATHLO</span>${D.client.name ? `<small>· ${esc(D.client.name)}</small>` : ""}</a>
        <nav class="nav" aria-label="Main">${PAGES.map(p => link(p, false)).join("")}</nav>
      </div>`;
    document.body.prepend(header);

    // Sticky elements below the header need its real height, which changes with the nav
    const syncHeader = () => document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
    syncHeader();
    window.addEventListener("resize", syncHeader);

    const tabbar = document.createElement("nav");
    tabbar.className = "tabbar";
    tabbar.setAttribute("aria-label", "Main");
    tabbar.innerHTML = PAGES.map(p => link(p, true)).join("");
    document.body.appendChild(tabbar);

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = "Athlo · Move. Grow. Achieve. — Private client tool. Data you enter is saved in this browser; use Backup on the Welcome page to move it.";
    document.querySelector("main").after(footer);
  }

  window.App = { D, load, save, get, set, toast, exportBackup, importBackup, WEEKDAYS, todayIndex, esc, num, fmtKg };
  document.addEventListener("DOMContentLoaded", layout);
})();
