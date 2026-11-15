// 預設淺色；使用者切換後記住選擇。放在 <head> 裡避免閃爍。
(function () {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  document.documentElement.setAttribute("data-theme", saved === "dark" ? "dark" : "light");
})();

function toggleTheme() {
  var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function navHTML(home) {
  var base = home ? "" : "index.html";
  return (
    '<div class="container nav-inner">' +
    '<a href="index.html" class="logo">' + esc(PROFILE.name) + "</a>" +
    '<div class="nav-right"><ul>' +
    '<li><a href="' + base + '#projects">Projects</a></li>' +
    '<li><a href="' + base + '#experience">Experience</a></li>' +
    '<li><a href="' + base + '#skills">Skills</a></li>' +
    '<li><a href="' + base + '#contact">Contact</a></li>' +
    "</ul>" +
    '<button class="theme-btn" onclick="toggleTheme()" aria-label="切換深色 / 淺色模式" title="切換深色 / 淺色模式">' +
    '<svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
    '<svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>' +
    "</button></div></div>"
  );
}

function thumbHTML(p) {
  return p.image
    ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">'
    : "<span>" + esc(p.title.charAt(0)) + "</span>";
}
