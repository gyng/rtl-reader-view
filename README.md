# rtl-reader-view

![Screenshot](screenshot.png)

Activate Firefox's [reader view](https://support.mozilla.org/en-US/kb/firefox-reader-view-clutter-free-web-pages) and then use this to convert it to top-down, right-to-left.

Not all vertical text CSS rules are supported by Firefox yet, see the [specification](https://www.w3.org/International/articles/vertical-text/) for details.
For example, upright <ruby>縦中横<rt>たてちゅうよこ</rt></ruby> (tate chu yoko) for digits is not supported: `text-combine-upright: digits 4;`.

## Usage

See the [project page](https://gyng.github.io/rtl-reader-view).

## Building `index.html`

    make page
    watch -n 0.5 make page
