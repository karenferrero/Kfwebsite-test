// Scroll-spy for the rail navigation. Progressive enhancement only.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail-nav a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var current = null;
  function setActive(id) {
    if (id === current) return;
    current = id;
    links.forEach(function (a) { a.classList.toggle('active', a === byId[id]); });
  }
  var io = new IntersectionObserver(function (entries) {
    var visible = entries.filter(function (e) { return e.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
    if (visible.length) setActive(visible[0].target.id);
  }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] });
  sections.forEach(function (s) { io.observe(s); });
})();
