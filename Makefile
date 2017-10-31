page: index.template.html rtl.js
	sed -e '/SCRIPT_SRC/{r rtl.js' -e 'd;}' index.template.html > index.html
