page: docs/index.template.html src/rtl.js
	sed -e '/SCRIPT_SRC/{r src/rtl.js' -e 'd;}' docs/index.template.html > docs/index.html
