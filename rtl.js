javascript: (function() {
  const css = `
    :root {
      --line-height-scale: 1.5;
      --font-size-scale: 1.0;
    }

    body {
      max-height: 0;
      padding: 0 !important;
      margin: 0 !important;
      overflow-x: auto !important;
    }

    body.sans-serif {
      font-family: Tahoma, Arial, Helvetica, 'Microsoft YaHei New',
        'Microsoft Yahei', '微软雅黑', 宋体, SimSun, STXihei, '华文细黑', sans-serif !important;
    }

    body.serif {
      font-family: Georgia, 'Times New Roman', 'FangSong', '仿宋', STFangSong, '华文仿宋', serif !important;
      --font-size-scale: 1.5;
    }

    p {
      margin: -10px -10px -10px 20px !important;
    }

    #container {
      max-height: calc(100% - 64px * 2);
      max-width: 100% !important;
      writing-mode: vertical-rl;
      position: fixed;
      overflow-x: auto;
      padding: 64px 64px 64px 0;
    }

    #reader-toolbar {
      left: unset !important;
      right: 0;
      border-left: 1px solid #b5b5b5;
      border-right: none;
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
      line-height: 1.2em !important;
    }

    .line-height3 {
      line-height: 1.4em !important;
    }

    .line-height4 {
      line-height: calc(1.6em * var(--line-height-scale)) !important;
    }

    .line-height5 {
      line-height: 1.8em !important;
    }

    .line-height6 {
      line-height: 2.0em !important;
    }

    .line-height7 {
      line-height: 2.2em !important;
    }

    .line-height8 {
      line-height: 2.4em !important;
    }

    .line-height9 {
      line-height: 2.6em !important;
    }
  `;

  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);

  const container = document.getElementById('container');
  document.body.addEventListener('wheel', function (e) {
    container.scrollLeft -= e.deltaY;
  })
})();
