function u(t) {
  return t.replace(/\s+/g, "");
}
function o(t = 10) {
  let r = "";
  for (; r.length < t; r += Math.random().toString(36).substr(2))
    ;
  return r.substr(0, t);
}
function s(t, r) {
  const n = new RegExp(`(^|&|\\?)${r}=([^&]*)(&|$)`), e = t.match(n);
  return e != null ? unescape(e[2]) : null;
}
const a = {};
export {
  a as default,
  o as getRandomStr,
  s as getUrlParamsByKey,
  u as removeAllSpace
};
