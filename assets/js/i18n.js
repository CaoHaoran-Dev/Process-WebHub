(function () {
  'use strict';

  var STORAGE_KEY = 'process-webhub-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'zh-Hans', 'zh-Hant'];

  var strings = {};
  var currentLang = DEFAULT_LANG;

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    var nav = (navigator.language || '').toLowerCase();
    if (nav.indexOf('zh') === 0) {
      if (nav.indexOf('hant') !== -1 || nav.indexOf('tw') !== -1 || nav.indexOf('hk') !== -1) {
        return 'zh-Hant';
      }
      return 'zh-Hans';
    }
    return DEFAULT_LANG;
  }

  function getBasePath() {
    var scripts = document.querySelectorAll('script[src*="i18n.js"]');
    if (scripts.length) {
      var src = scripts[0].getAttribute('src');
      return src.replace(/assets\/js\/i18n\.js.*$/, '');
    }
    return './';
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) el.textContent = strings[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (strings[key] !== undefined) el.placeholder = strings[key];
    });
  }

  function updateSwitcher() {
    document.querySelectorAll('[data-lang]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-lang') === currentLang);
    });
  }

  function load(lang) {
    var base = getBasePath();
    fetch(base + 'assets/lang/' + lang + '.json')
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        strings = data;
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang =
          lang === 'zh-Hans' ? 'zh-CN' :
          lang === 'zh-Hant' ? 'zh-TW' : 'en';
        apply();
        updateSwitcher();
        document.dispatchEvent(new CustomEvent('i18n:loaded', { detail: { lang: lang } }));
      })
      .catch(function (e) {
        console.warn('i18n load failed:', lang, e);
        if (lang !== DEFAULT_LANG) load(DEFAULT_LANG);
      });
  }

  function bindSwitcher() {
    document.querySelectorAll('[data-lang]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var lang = a.getAttribute('data-lang');
        if (lang && SUPPORTED.indexOf(lang) !== -1 && lang !== currentLang) load(lang);
      });
    });
  }

  window.i18n = {
    t: function (key) { return strings[key] !== undefined ? strings[key] : key; },
    get lang() { return currentLang; },
    load: load
  };

  document.addEventListener('DOMContentLoaded', function () {
    bindSwitcher();
    load(detectLang());
  });
})();