(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{225:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.developpez.net/forums/d1813419/javascript/bibliotheques-frameworks/angular/telechargement-d-fichier-excel-via-service-angular-4-a/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Téléchargement d'un fichier Excel via service avec Angular 4 - www.developpez.net - 20180210"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Tu ne peux pas écrire sur le disque depuis le navigateur.")]),t._v(" "),s("p",[t._v("Il te faut donc ouvrir le fichier dans un nouvel onglet, le navigateur donnera alors la main à l'utilisateur pour ouvrir directement le fichier dans son tableur ou pour l'enregistrer sur son disque.")]),t._v(" "),s("p",[t._v("Ça se fait en passant un "),s("a",{attrs:{href:"https://developer.mozilla.org/fr/docs/Web/API/Blob",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Blob")]),s("OutboundLink")],1),t._v(" à "),s("a",{attrs:{href:"https://developer.mozilla.org/fr/docs/Web/API/URL/createObjectURL",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("URL.createObjectURL")]),s("OutboundLink")],1),t._v(" qui retourne une url que tu vas ouvrir assez classiquement via "),s("a",{attrs:{href:"https://developer.mozilla.org/fr/docs/Web/API/Window/open",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("window.open")]),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.developpez.net/forums/d1844070/javascript/general-javascript/enregistrer-sous-ouvrir-donnees-csv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enregistrer sous ou ouvrir des données csv - www.developpez.net - 20180423"),s("OutboundLink")],1)]),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"download-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-files"}},[this._v("#")]),this._v(" download files")])},function(){var t=this,s=t._self._c;return s("blockquote",[s("p",[t._v("Quand je clique sur un bouton mon code construit des données csv dans une variable.\nDonc je suis au moment ou ma variable contient ce genre de données :\nExploitation;Ilot;Parcellaire;Action;Nom;Date;Commentaire;Traitement\ntest;test;test;test;test;test;test;test")]),t._v(" "),s("p",[t._v("J'aimerais arriver ici que cela déclenche une boite de dialogue enregistrer sous mes données csv ou ouvrir mes données avec excel.")]),t._v(" "),s("p",[t._v("Je te remercie ça fonctionne avec ce code du coup : (response sont mes données)")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parsedResponse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" blob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parsedResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/csv'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msSaveOrOpenBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("msSaveBlob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("revokeObjectURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])])])}],!1,null,null,null);s.default=e.exports}}]);