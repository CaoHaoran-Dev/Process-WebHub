(function () {
  'use strict';

  var COMMANDS = {
    'Get-ChildItem': '    Directory: C:\\Users\\user\n\nMode   LastWriteTime   Length Name\n----   -------------   ------ ----\nd----  10/17/2026 9:00 AM   Desktop\nd----  10/17/2026 9:00 AM   Documents',
    'dir': '    Directory: C:\\Users\\user\n\nMode   LastWriteTime   Length Name\n----   -------------   ------ ----\nd----  10/17/2026 9:00 AM   Desktop',
    'git status': "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean",
    'pwd': 'C:\\Users\\user', 'whoami': 'desktop\\user', 'echo hello': 'hello'
  };

  function init() {
    var input = document.getElementById('ps-input');
    var output = document.getElementById('ps-output');
    var container = document.getElementById('ps-output-container');
    var admin = document.getElementById('ps-admin');
    var win = document.getElementById('ps-window');
    
    if (!input || !output || !win) return;

    // ─── 材质切换逻辑 ───
    function setStyle(style) {
      win.classList.remove('style-mica', 'style-acrylic', 'style-none');
      win.classList.add('style-' + style);

      document.querySelectorAll('#ps-appearance .appearance-option').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-style') === style);
      });
    }

    document.querySelectorAll('#ps-appearance .appearance-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setStyle(btn.getAttribute('data-style'));
      });
    });
    
    // 初始化默认材质
    setStyle('mica');

    // ─── 执行命令逻辑 ───
    function run() {
      var cmd = input.value.trim();
      if (!cmd) return;

      output.textContent = '';
      if (container) container.classList.remove('is-visible');
      win.classList.remove('has-output');

      if (admin && admin.checked) {
        var adminMsg = window.i18n ? window.i18n.t('ps.admin.simulated') : '(simulated) UAC prompt would appear.';
        output.textContent = adminMsg + '\n\n';
      }

      var lower = cmd.toLowerCase();
      var result = null;
      for (var key in COMMANDS) {
        if (key.toLowerCase() === lower) { result = COMMANDS[key]; break; }
      }

      setTimeout(function () {
        if (result === null) {
          output.textContent += (window.i18n ? window.i18n.t('ps.notfound') : 'Command not found: ') + cmd.split(' ')[0];
        } else {
          output.textContent += result;
        }
        
        if (container) container.classList.add('is-visible');
        win.classList.add('has-output');
      }, 200);
    }

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); run(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();