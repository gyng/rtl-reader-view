javascript: (function() {
  const css = `
    @font-face {
      font-family: TimesNumerals;
      src: local(Times New Roman), local(Times);
      unicode-range: U+30-39;
    }

    :root {
      --line-height-scale: 1.3;
      --max-width-to-height-scale: 1.0;
      --font-size-scale: 1.0;
    }

    * {
      max-height: 100%;
      max-width: unset !important;
      width: auto;
      text-underline-position: left;
    }

    body {
      padding: 0 !important;
      margin: 0 !important;
      overflow-x: auto !important;
    }

    body.sans-serif {
      font-family: Tahoma, Arial, Helvetica, 'ヒラギノ角ゴ ProN W3','ヒラギノ角ゴ ProN','Hiragino Kaku Gothic ProN','メイリオ',Meiryo,'Meiryo UI','A-OTF 新ゴ Pr6N R','小塚ゴシック Pr6N M',
        'Microsoft YaHei New', 'Microsoft Yahei', '微软雅黑', 宋体, SimSun, STXihei, '华文细黑', sans-serif !important;
    }

    body.serif {
      font-family: TimesNumerals, Georgia, 'Times New Roman', 'ヒラギノ明朝 Pro W6', 'Hiragino Mincho Pro', 'HGS明朝E', 'ＭＳ Ｐ明朝',
        宋体, SimSun, 华文细黑, STXihei, serif !important;
      --font-size-scale: 1.5;
    }

    *:lang(ja) emp {
      text-emphasis-style: filled sesame;
    }

    body.sans-serif *:lang(zh) {
      font-family: Tahoma, Arial, Helvetica, 'Microsoft YaHei New', 'Microsoft Yahei', '微软雅黑', 宋体, SimSun, STXihei, '华文细黑', sans-serif !important;
      font-weight: 200;
    }

    body.serif *:lang(zh) {
      font-family: TimesNumerals, Georgia, 'Times New Roman', 宋体, SimSun, 华文细黑, STXihei, serif !important;
    }

    *:lang(zh) emp {
      text-emphasis-style: filled dot;
    }

    ruby {
      text-emphasis: none;
    }

    p {
      margin: -10px -10px -10px 20px !important;
    }

    li::marker {
      text-combine-upright: digits;
    }

    .content {
      padding: 0 0 0 64px;
    }

    #container {
      text-combine-upright: digits 4;
      max-width: 100% !important;
      height: calc(100% - 128px);
      writing-mode: vertical-rl;
      position: fixed;
      overflow-x: auto;
      padding: 64px 0 64px 0;
      min-width: 100%;
      text-align: justify;
      hanging-punctuation: end;
    }

    #reader-toolbar {
      left: unset !important;
      right: 0;
      border-left: 1px solid #b5b5b5;
      border-right: none;
    }

    #reader-header {
      margin-right: 100px;
    }

    .dropdown-popup {
      left: unset !important;
      right: 48px;
    }

    #reader-title {
      margin: 0 60px 0 30px !important;
    }

    .meta-data {
      margin: 0 0 0 15px !important;
    }

    .line-height1 {
      line-height: calc(1em * var(--line-height-scale)) !important;
    }

    .line-height2 {
      line-height: calc(1.2em * var(--line-height-scale)) !important;
    }

    .line-height3 {
      line-height: calc(1.4em * var(--line-height-scale)) !important;
    }

    .line-height4 {
      line-height: calc(1.6em * var(--line-height-scale)) !important;
    }

    .line-height5 {
      line-height: calc(1.8em * var(--line-height-scale)) !important;
    }

    .line-height6 {
      line-height: calc(2.0em * var(--line-height-scale)) !important;
    }

    .line-height7 {
      line-height: calc(2.2em * var(--line-height-scale)) !important;
    }

    .line-height8 {
      line-height: calc(2.4em * var(--line-height-scale)) !important;
    }

    .line-height9 {
      line-height: calc(2.6em * var(--line-height-scale)) !important;
    }

    .content-width1 > .content {
      max-height: calc(20em * var(--max-width-to-height-scale)) !important;
    }

    .content-width2 > .content {
      max-height: calc(25em * var(--max-width-to-height-scale)) !important;
    }

    .content-width3 > .content {
      max-height: calc(30em * var(--max-width-to-height-scale)) !important;
    }

    .content-width4 > .content {
      max-height: calc(35em * var(--max-width-to-height-scale)) !important;
    }

    .content-width5 > .content {
      max-height: calc(40em * var(--max-width-to-height-scale)) !important;
    }

    .content-width6 > .content {
      max-height: calc(45em * var(--max-width-to-height-scale)) !important;
    }

    .content-width7 > .content {
      max-height: calc(50em * var(--max-width-to-height-scale)) !important;
    }

    .content-width8 > .content {
      max-height: calc(55em * var(--max-width-to-height-scale)) !important;
    }

    .content-width9 > .content {
      max-height: calc(60em * var(--max-width-to-height-scale)) !important;
    }
  `;

  let rtlToggled = true;

  const style = document.createElement('style');
  style.id = 'rtl-style';
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);

  function getScrollLineHeight() {
    var r;
    var iframe = document.createElement('iframe');
    iframe.src = '#';
    document.body.appendChild(iframe);
    var iwin = iframe.contentWindow;
    var idoc = iwin.document;
    idoc.open();
    idoc.write(
      '<!DOCTYPE html><html><head></head><body><span>a</span></body></html>'
    );
    idoc.close();
    var span = idoc.body.firstElementChild;
    r = span.offsetHeight;
    document.body.removeChild(iframe);
    return r;
  }

  const container = document.getElementById('container');
  const scrollLineHeight = getScrollLineHeight();

  document.body.addEventListener('keydown', function (e) {
    if (!rtlToggled) {
      return
    }

    if (e.keyCode === 34) {
      container.scrollLeft -= (window.innerWidth - 28);
    } else if (e.keyCode === 33) {
      container.scrollLeft += (window.innerWidth - 28);
    } else if (e.keyCode === 35) {
      container.scrollLeft = -container.scrollWidth;
    } else if (e.keyCode === 36) {
      container.scrollLeft = 0;
    }
  });

  document.body.addEventListener('wheel', function (e) {
    if (!rtlToggled) {
      return;
    }

    if (e.deltaX === 0) {
      if (e.deltaMode === 1) {
        container.scrollLeft -= e.deltaY * scrollLineHeight;
      } else if (e.deltaMode === 2) {
        container.scrollLeft -= e.deltaY * window.innerWidth;
      }

      container.scrollLeft -= e.deltaY;
      e.preventDefault();
    }
  });

  const toolbar = document.getElementById('reader-toolbar');
  const rtlToggle = document.createElement('button');
  rtlToggle.id = 'rtl-toggle-button';
  rtlToggle.classList.add('button');
  rtlToggle.style.backgroundImage = `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnDQogICAgd2lkdGg9JzM4Jw0KICAgIGhlaWdodD0nMTQnDQogICAgdmlld0JveD0nMCAwIDM4IDE0Jw0KICAgIGZpbGw9JyM4MDgwODAnPg0KICAgIDxyZWN0IHg9JzAnIHk9JzAnIHdpZHRoPScyOCcgaGVpZ2h0PScyJy8+DQogICAgPHJlY3QgeD0nMCcgeT0nNicgd2lkdGg9JzM4JyBoZWlnaHQ9JzInLz4NCiAgICA8cmVjdCB4PScwJyB5PScxMicgd2lkdGg9JzE4JyBoZWlnaHQ9JzInLz4NCiAgPC9zdmc+)`;
  rtlToggle.style.backgroundSize = '16px 16px';
  rtlToggle.style.transform = 'rotate(0deg)';
  rtlToggle.setAttribute('title', 'Switch to left-to-right view');

  rtlToggle.addEventListener('click', function () {
    rtlToggled = !rtlToggled;
    rtlToggle.classList.toggle('deactivated');
    if (rtlToggle.classList.contains('deactivated')) {
      rtlToggle.style.transform = 'rotate(90deg)';
      rtlToggle.setAttribute('title', 'Switch to right-to-left view');
      rtlToggle.style.borderBottom = 'unset';
      rtlToggle.style.borderTop = '1px solid #b5b5b5';
      style.remove();
    } else {
      rtlToggle.style.transform = 'rotate(0deg)';
      rtlToggle.setAttribute('title', 'Switch to left-to-right view');
      rtlToggle.style.borderBottom = '1px solid #c1c1c1';
      rtlToggle.style.borderTop = 'unset';
      document.head.appendChild(style);
    }
  });

  toolbar.appendChild(rtlToggle);
})();
