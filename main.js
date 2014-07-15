window.onload = function () {
  var lang_select = document.getElementById('lang_select');
  lang_select.onchange = function () {
    location.href = {
      'zh-cn': 'https://tiansh.github.io/yawf/zh-cn.html',
      'zh-tw': 'https://tiansh.github.io/yawf/zh-tw.html',
      'zh-hk': 'https://tiansh.github.io/yawf/zh-hk.html',
      'en': 'https://tiansh.github.io/yawf/en.html',
    }[lang_select.value] || '#';
  };
  var oddBrowser = false, ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('trident') !== -1) oddBrowser = true; // IE 3~10
  if (ua.indexOf('mozilla/5.0') === -1) oddBrowser = true; // Oprea 1~12
  if (ua.indexOf('like gecko') !== -1) oddBrowser = true; // All modern browsers except Gecko
  if (oddBrowser) document.getElementById('checkFx').style.display = 'block';
};
