(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{383:function(e,s,t){"use strict";t.r(s);var a=t(45),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"divers-pdf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#divers-pdf"}},[e._v("#")]),e._v(" divers - pdf")]),e._v(" "),t("h2",{attrs:{id:"reduce-pdf-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reduce-pdf-size"}},[e._v("#")]),e._v(" reduce pdf size")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://askubuntu.com/questions/113544/how-can-i-reduce-the-file-size-of-a-scanned-pdf-file",target:"_blank",rel:"noopener noreferrer"}},[e._v("How can I reduce the file size of a scanned PDF file? - askubuntu.com"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gs -sDEVICE"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("pdfwrite -dCompatibilityLevel"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.4")]),e._v(" -dPDFSETTINGS"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("output.pdf input.pdf\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("with "),t("code",[e._v("-dPDFSETTINGS=/ebook")]),e._v(" works well, a 15mo 300dpi file is reduced to a 3mo 150dpi file.")]),e._v(" "),t("h2",{attrs:{id:"merge-several-pdf-in-one"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-several-pdf-in-one"}},[e._v("#")]),e._v(" merge several pdf in one")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://askubuntu.com/questions/2799/how-to-merge-several-pdf-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to merge several PDF files? - askubuntu.com"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gs -dBATCH -dNOPAUSE -q -sDEVICE"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("pdfwrite -dAutoRotatePages"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/None -sOutputFile"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("finished.pdf  file1.pdf file2.pdf\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gs         starts the Ghostscript program.\n-dBATCH    once Ghostscript processes the PDF files, it should exit.\n           If you don't include this option, Ghostscript will just keep running.\n-dNOPAUSE  forces Ghostscript to process each page without pausing "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" user interaction.\n-q         stops Ghostscript from displaying messages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" it works\n-sDEVICE"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("pdfwrite\n           tells Ghostscript to use its built-in PDF writer to process the files.\n-sOutputFile"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("finished.pdf\n           tells Ghostscript to save the combined PDF "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" with the specified name.\n-dAutoRotatePages"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/None\n           Acrobat Distiller parameter AutoRotatePages controls the automatic orientation selection algorithm: For instance: -dAutoRotatePages"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/None or /All or /PageByPage.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("Your input files don't even need to be PDF files. You can also use PostScript or EPS files, or any mixture of the three.")])])}),[],!1,null,null,null);s.default=r.exports}}]);