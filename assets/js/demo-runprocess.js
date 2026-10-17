(function () {
  'use strict';

  var COMMANDS = {
    'ls': 'Applications  Desktop  Documents  Downloads  Library\nMovies  Music  Pictures  Public',
    'ls -la': 'total 48\ndrwxr-xr-x  12 user  staff   384 Oct 17 10:00 .\ndrwxr-xr-x   6 user  staff   192 Oct 16 09:00 ..\n-rw-r--r--   1 user  staff  1024 Oct 17 09:30 notes.md',
    'git status': "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean",
    'pwd': '/Users/user',
    'whoami': 'user',
    'echo hello': 'hello',
    'open .': '(simulated) Finder would open the current directory.'
  };

  function init() {
    var input = document.getElementById('rp-input');
    var output = document.getElementById('rp-output');
    var sudo = document.getElementById('rp-sudo');
    var status = document.getElementById('rp-status');
    var menubarStatus = document.getElementById('rp-menubar-status');
    var win = document.getElementById('rp-window');
    
    if (!input || !output || !win) return;

    function setStyle(style) {
      win.classList.remove('style-none', 'style-frosted');
      if (style === 'none') win.classList.add('style-none');
      else if (style === 'frosted') win.classList.add('style-frosted');

      document.querySelectorAll('#rp-appearance .appearance-option').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-style') === style);
      });
    }

    function run() {
      var cmd = input.value.trim();
      if (!cmd) return;

      output.textContent = '';
      output.classList.remove('is-visible'); 
      win.classList.remove('has-output');
      
      if (status) {
        status.textContent = window.i18n ? window.i18n.t('rp.status.running') : 'Running…';
        status.className = 'demo-status running';
      }
      if (menubarStatus) menubarStatus.textContent = '⏳';

      if (sudo && sudo.checked) {
        var sudoMsg = window.i18n ? window.i18n.t('rp.sudo.simulated') : '(simulated) Command would run as root.';
        output.textContent = '[sudo] password for user:\n' + sudoMsg + '\n\n';
      }

      var lower = cmd.toLowerCase();
      var result = null;
      for (var key in COMMANDS) {
        if (key.toLowerCase() === lower) { result = COMMANDS[key]; break; }
      }

      setTimeout(function () {
        if (result === null) {
          var notFound = window.i18n ? window.i18n.t('rp.notfound') : 'zsh: command not found: ';
          output.textContent += notFound + cmd.split(' ')[0];
          if (status) {
            status.textContent = window.i18n ? window.i18n.t('rp.status.error') : 'Error';
            status.className = 'demo-status error';
          }
        } else {
          output.textContent += result;
          if (status) {
            status.textContent = window.i18n ? window.i18n.t('rp.status.done') : 'Done';
            status.className = 'demo-status done';
          }
        }
        
        output.classList.add('is-visible'); 
        win.classList.add('has-output'); 
        if (menubarStatus) menubarStatus.textContent = '⚡';
      }, 200);
    }

    // 绑定输入与回车
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); run(); }
    });

    document.querySelectorAll('#rp-appearance .appearance-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setStyle(btn.getAttribute('data-style'));
      });
    });

    setStyle('frosted');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();