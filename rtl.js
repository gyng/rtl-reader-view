javascript: (function() {
  const css = `
    :root {
      --line-height-scale: 1.3;
      --max-width-to-height-scale: 1.0;
      --font-size-scale: 1.0;
    }

    body {
      padding: 0 !important;
      margin: 0 !important;
      overflow-x: auto !important;
    }

    body.sans-serif {
      font-family: Tahoma, Arial, Helvetica, 'Microsoft YaHei New',
        'Microsoft Yahei', '微软雅黑', 宋体, SimSun, STXihei, '华文细黑', sans-serif !important;
    }

    body.serif {
      font-family: Georgia, 'Times New Roman', 'ヒラギノ明朝 Pro W6', 'Hiragino Mincho Pro', 'HGS明朝E', 'ＭＳ Ｐ明朝',
        'FangSong', '仿宋', STFangSong, '华文仿宋', serif !important;
      --font-size-scale: 1.5;
    }

    *[lang=zh] {
      font-family: Georgia, 'Times New Roman', 'FangSong', '仿宋', STFangSong, '华文仿宋', serif !important;
    }

    p {
      margin: -10px -10px -10px 20px !important;
    }

    #container {
      text-combine-upright: digits 4;
      max-width: 100% !important;
      height: calc(100% - 128px);
      writing-mode: vertical-rl;
      position: fixed;
      overflow-x: auto;
      padding: 64px 0 64px 0;
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
