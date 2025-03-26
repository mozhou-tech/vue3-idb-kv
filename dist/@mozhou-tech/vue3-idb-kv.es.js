function u(e) {
  return new Promise((n, t) => {
    e.oncomplete = e.onsuccess = () => n(e.result), e.onabort = e.onerror = () => t(e.error);
  });
}
function f(e, n) {
  const t = indexedDB.open(e);
  t.onupgradeneeded = () => t.result.createObjectStore(n);
  const r = u(t);
  return (i, l) => r.then((s) => l(s.transaction(n, i).objectStore(n)));
}
let a;
function o() {
  return a || (a = f("keyval-store", "keyval")), a;
}
function d(e, n = o()) {
  return n("readonly", (t) => u(t.get(e)));
}
function y(e, n, t = o()) {
  return t("readwrite", (r) => (r.put(n, e), u(r.transaction)));
}
function p(e, n = o()) {
  return n("readwrite", (t) => (e.forEach((r) => t.put(r[1], r[0])), u(t.transaction)));
}
function h(e, n = o()) {
  return n("readonly", (t) => Promise.all(e.map((r) => u(t.get(r)))));
}
function g(e, n = o()) {
  return n("readwrite", (t) => (t.delete(e), u(t.transaction)));
}
function w(e, n = o()) {
  return n("readwrite", (t) => (e.forEach((r) => t.delete(r)), u(t.transaction)));
}
function m(e = o()) {
  return e("readwrite", (n) => (n.clear(), u(n.transaction)));
}
function c(e, n) {
  return e.openCursor().onsuccess = function() {
    this.result && (n(this.result), this.result.continue());
  }, u(e.transaction);
}
function S(e = o()) {
  return e("readonly", (n) => {
    if (n.getAllKeys)
      return u(n.getAllKeys());
    const t = [];
    return c(n, (r) => t.push(r.key)).then(() => t);
  });
}
function b(e = o()) {
  return e("readonly", (n) => {
    if (n.getAll)
      return u(n.getAll());
    const t = [];
    return c(n, (r) => t.push(r.value)).then(() => t);
  });
}
export {
  m as clear,
  g as del,
  w as delMany,
  d as get,
  h as getMany,
  S as keys,
  y as set,
  p as setMany,
  b as values
};
