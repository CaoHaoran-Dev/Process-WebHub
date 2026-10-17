(function () {
  'use strict';

  // 页脚年份
  document.addEventListener('DOMContentLoaded', function () {
    var yearEls = document.querySelectorAll('[data-year]');
    var y = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = y; });
  });
})();