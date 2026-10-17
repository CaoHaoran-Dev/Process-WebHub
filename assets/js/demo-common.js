(function () {
  'use strict';

  var MAX_BG_BYTES = 5 * 1024 * 1024;

  function initWallpaper(pickerId, desktopId, storageKey) {
    var picker = document.getElementById(pickerId);
    var desktop = document.getElementById(desktopId);
    if (!picker || !desktop) return;
    var fileInput = picker.querySelector('input[type="file"]');

    function apply(value) {
      picker.querySelectorAll('.wp-swatch').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-bg') === value); });
      if (!value || value === 'none') { desktop.style.backgroundImage = 'none'; return; }
      if (value.indexOf('data:') === 0) { desktop.style.backgroundImage = 'url("' + value + '")'; return; }
      var swatch = picker.querySelector('[data-bg="' + value + '"]');
      if (swatch) desktop.style.backgroundImage = swatch.style.backgroundImage || swatch.style.background;
    }

    var saved = null;
    try { saved = localStorage.getItem(storageKey); } catch (e) {}
    apply(saved || 'wp-1');

    picker.querySelectorAll('.wp-swatch[data-bg]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var value = btn.getAttribute('data-bg');
        apply(value);
        try { localStorage.setItem(storageKey, value); } catch (e) {}
      });
    });

    if (fileInput) {
      fileInput.addEventListener('change', function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        if (file.size > MAX_BG_BYTES) { alert('Too large (max 5MB)'); fileInput.value = ''; return; }
        var reader = new FileReader();
        reader.onload = function () {
          var dataUrl = reader.result;
          try { localStorage.setItem(storageKey, dataUrl); apply(dataUrl); picker.querySelectorAll('.wp-swatch').forEach(function(b){ b.classList.remove('active'); }); } 
          catch (e) { alert('Storage is full.'); }
        };
        reader.readAsDataURL(file);
        fileInput.value = '';
      });
    }
  }

  // 纯粹的 pointer 拖拽，不覆盖 position:absolute 以外的任何内联属性
  function initDraggable(winId, handleSelector, resetBtnId, containerId) {
    var win = document.getElementById(winId);
    var container = document.getElementById(containerId);
    if (!win || !container) return;
    var handle = win.querySelector(handleSelector);
    if (!handle) return;

    var dragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;

    handle.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button, input, a')) return;
      
      // 首次拖动时，把 transform 居中转化为绝对的 left/top
      var cr = container.getBoundingClientRect();
      var wr = win.getBoundingClientRect();
      if (win.style.transform !== 'none') {
        win.style.left = (wr.left - cr.left) + 'px';
        win.style.top = (wr.top - cr.top) + 'px';
        win.style.transform = 'none';
      }

      dragging = true;
      win.classList.add('dragging');
      startX = e.clientX;
      startY = e.clientY;
      startLeft = parseFloat(win.style.left) || 0;
      startTop = parseFloat(win.style.top) || 0;

      if (handle.setPointerCapture) handle.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    window.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var newLeft = startLeft + (e.clientX - startX);
      var newTop = startTop + (e.clientY - startY);
      
      var w = win.offsetWidth, h = win.offsetHeight;
      newLeft = Math.max(40 - w, Math.min(container.clientWidth - 40, newLeft));
      newTop = Math.max(0, Math.min(container.clientHeight - 40, newTop));

      win.style.left = newLeft + 'px';
      win.style.top = newTop + 'px';
    });

    window.addEventListener('pointerup', function () {
      if (!dragging) return;
      dragging = false;
      win.classList.remove('dragging');
    });
  }

  function initMacMenu(menubarId, backdropId) {
    var menubar = document.getElementById(menubarId);
    var backdrop = document.getElementById(backdropId);
    if (!menubar || !backdrop) return;
    var currentMenu = null, currentItem = null;

    function closeMenu() {
      if (currentMenu) { currentMenu.classList.remove('is-open'); currentItem.classList.remove('active'); currentMenu = null; currentItem = null; }
      backdrop.classList.remove('is-open');
    }

    menubar.querySelectorAll('.menubar-item[data-menu]').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        var menu = document.getElementById(item.getAttribute('data-menu'));
        if (!menu) return;
        if (currentMenu === menu) { closeMenu(); return; }
        closeMenu();
        currentMenu = menu; currentItem = item;
        menu.classList.add('is-open'); item.classList.add('active'); backdrop.classList.add('is-open');
        var rect = item.getBoundingClientRect();
        menu.style.left = (rect.left - menubar.getBoundingClientRect().left) + 'px';
      });
    });
    backdrop.addEventListener('click', closeMenu);
  }

  function initTrayFlyout(iconId, flyoutId, backdropId) {
    var icon = document.getElementById(iconId), flyout = document.getElementById(flyoutId), backdrop = document.getElementById(backdropId);
    if (!icon || !flyout || !backdrop) return;
    function closePanel() { flyout.classList.remove('is-open'); backdrop.classList.remove('is-open'); }
    icon.addEventListener('click', function (e) {
      e.stopPropagation();
      if (flyout.classList.contains('is-open')) closePanel();
      else { flyout.classList.add('is-open'); backdrop.classList.add('is-open'); }
    });
    backdrop.addEventListener('click', closePanel);
  }

  window.DemoCommon = {
    initWallpaper: initWallpaper, initDraggable: initDraggable, initMacMenu: initMacMenu, initTrayFlyout: initTrayFlyout
  };
})();