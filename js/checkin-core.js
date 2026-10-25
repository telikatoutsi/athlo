// Check-in data helpers shared by the Home and Check-in pages.
(function () {
  const A = window.App;

  function data() {
    const c = A.get("checkin", null) || {};
    return { start: c.start || "", entries: c.entries || {} };
  }
  function store(d) { A.set("checkin", d); }
  function key(w, d) { return w + "-" + d; }

  // Weekly averages: [{week, avg, count}]
  function weekly(d) {
    const out = [];
    for (let w = 1; w <= A.D.weeks; w++) {
      const vals = [];
      for (let i = 0; i < 7; i++) {
        const e = d.entries[key(w, i)];
        const n = e ? A.num(e.weight) : null;
        if (n != null) vals.push(n);
      }
      out.push({ week: w, count: vals.length, avg: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null });
    }
    return out;
  }

  // Date for a given week/day based on the start date (ISO string) or "".
  function autoDate(start, w, i) {
    if (!start) return "";
    const dt = new Date(start + "T12:00:00");
    if (isNaN(dt)) return "";
    dt.setDate(dt.getDate() + (w - 1) * 7 + i);
    return dt.toISOString().slice(0, 10);
  }

  function summary(d) {
    const wk = weekly(d).filter(x => x.avg != null);
    if (!wk.length) return { first: null, last: null, change: null, weeksLogged: 0 };
    const first = wk[0], last = wk[wk.length - 1];
    return { first, last, change: wk.length > 1 ? last.avg - first.avg : null, weeksLogged: wk.length };
  }

  window.Checkin = { data, store, key, weekly, autoDate, summary };
})();
