(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{325:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),e("p",[s._v("Fait tout pareil que cat mais en lisant les fichiers depuis la dernière ligne vers la première.")]),s._v(" "),s._m(6),s._v(" "),e("p",[s._v("Affiche les premières ligne d'un fichier (10 par défaut)")]),s._v(" "),s._m(7),s._v(" "),e("p",[s._v("Affiche les dernières ligne d'un fichier (10 par défaut)")]),s._v(" "),s._m(8),s._v(" "),e("p",[s._v("Affiche le contenu d'un fichier en numérotant les lignes")]),s._v(" "),s._m(9),s._v(" "),e("p",[s._v("Affiche le contenu d'un fichier sans les doublons de lignes")]),s._v(" "),s._m(10),s._v(" "),e("p",[s._v("Affiche le contenu d'un fichier en triant les lignes (par ordre alphabétique par défaut)")]),s._v(" "),s._m(11),s._v(" "),e("p",[s._v("Découpe un fichier par blocs en fonction d'une taille en octets ou d'un nombre de lignes.")]),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),e("p",[s._v("Permet d'afficher les différences entre 2 fichiers.")]),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),e("p",[s._v("Permet de compter le nombre de caractères, de mots et de lignes d'un fichier.")]),s._v(" "),s._m(16),s._m(17),s._v(" "),s._m(18),s._v(" "),e("p",[s._v("Permet de connaitre le type d'un fichier.")]),s._v(" "),s._m(19),s._m(20),s._v(" "),s._m(21),s._v(" "),s._m(22),s._v(" "),e("p",[s._v("Permet de faire une recherche sur le système de fichier et d'afficher le résultat sur la sortie standard.")]),s._v(" "),s._m(23),s._v(" "),s._m(24),s._m(25),s._v(" "),s._m(26),s._v(" "),s._m(27),e("p",[s._v("On a recherché tous les fichiers ayant été modifiés il y a exactement 2 jours.\nLes fichiers modifiés hier ne sont donc pas affichés, seulement ceux modifiés avant-hier.")]),s._v(" "),e("p",[s._v("La commande "),e("code",[s._v("find")]),s._v(" est très puissante et présente de nombreuses options. Se référer à "),e("a",{attrs:{href:"http://www.linux-france.org/article/man-fr/man1/find-1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("la man page correspondante"),e("OutboundLink")],1),s._v(".")]),s._v(" "),s._m(28),s._v(" "),e("p",[s._v("Permet de rechercher un mot dans un fichier et d'afficher les lignes dans lesquelles ce mot a été trouvé.")]),s._v(" "),s._m(29),s._v(" "),s._m(30),s._m(31),s._v(" "),e("p",[s._v('On obtient donc la liste de tous les fichiers contenant le mot "optimiser" (sans la casse) depuis la working directory.')]),s._v(" "),s._m(32),s._v(" "),s._m(33),s._v(" "),e("p",[s._v("Par exemple pour concaténer 2 fichiers et numéroter les lignes du résultat final :")]),s._v(" "),s._m(34),e("p",[s._v("Ajoutons à cette chaine la commande head qui va limiter à 10 lignes l'affichage :")]),s._v(" "),s._m(35),s._m(36),s._v(" "),e("p",[s._v("Tout est question de paramétrage des commandes pour obtenir le résultat souhaité.")]),s._v(" "),s._m(37),s._v(" "),e("p",[s._v("Lister la size des fichiers du répertoire courant :")]),s._v(" "),s._m(38),s._m(39),s._v(" "),e("p",[s._v("Afficher l'espace disque dispo pour le volume logique :")]),s._v(" "),s._m(40)])}),[function(){var s=this._self._c;return s("h1",{attrs:{id:"linux-manipuler-les-fichiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-manipuler-les-fichiers"}},[this._v("#")]),this._v(" Linux - Manipuler les fichiers")])},function(){var s=this._self._c;return s("h2",{attrs:{id:"cat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[this._v("#")]),this._v(" "),s("code",[this._v("cat")])])},function(){var s=this._self._c;return s("p",[s("code",[this._v("cat book.json")]),this._v(" affiche le contenu de "),s("code",[this._v("book.json")]),this._v(" sur la sortie standard")])},function(){var s=this._self._c;return s("p",[s("code",[this._v("cat book.json .gitignore")]),this._v(" affiche le contenu de "),s("code",[this._v("book.json")]),this._v(" et de "),s("code",[this._v(".gitignore")]),this._v(" à la suite sur la sortie standard")])},function(){var s=this._self._c;return s("p",[s("code",[this._v("cat book.json .gitignore > content.log")]),this._v(" enregistre le contenu de "),s("code",[this._v("book.json")]),this._v(" et de "),s("code",[this._v(".gitignore")]),this._v(" à la suite dans un fichier "),s("code",[this._v("content.log")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"tac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tac"}},[this._v("#")]),this._v(" "),s("code",[this._v("tac")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[this._v("#")]),this._v(" "),s("code",[this._v("head")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"tail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[this._v("#")]),this._v(" "),s("code",[this._v("tail")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"nl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nl"}},[this._v("#")]),this._v(" "),s("code",[this._v("nl")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"uniq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uniq"}},[this._v("#")]),this._v(" "),s("code",[this._v("uniq")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"sort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[this._v("#")]),this._v(" "),s("code",[this._v("sort")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"split"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split"}},[this._v("#")]),this._v(" "),s("code",[this._v("split")])])},function(){var s=this._self._c;return s("p",[this._v("La commande "),s("code",[this._v("cat")]),this._v(" permet de concaténer facilement un fichier découpé avec "),s("code",[this._v("split")]),this._v(".")])},function(){var s=this._self._c;return s("h2",{attrs:{id:"diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[this._v("#")]),this._v(" "),s("code",[this._v("diff")])])},function(){var s=this._self._c;return s("p",[s("code",[this._v("diff <options> fichier-1 fichier-2")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"wc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wc"}},[this._v("#")]),this._v(" "),s("code",[this._v("wc")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" book.json\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" book.json\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])},function(){var s=this._self._c;return s("p",[this._v("Le fichier "),s("code",[this._v("book.json")]),this._v(" comporte 3 lignes, 9 mots, et 56 caractères.")])},function(){var s=this._self._c;return s("h2",{attrs:{id:"file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[this._v("#")]),this._v(" "),s("code",[this._v("file")])])},function(){var s=this._self._c;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("file")]),this._v(" book.json\nbook.json: ASCII text\n\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"touch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#touch"}},[this._v("#")]),this._v(" "),s("code",[this._v("touch")])])},function(){var s=this._self._c;return s("p",[this._v("La commande "),s("code",[this._v("touch")]),this._v(" permet de créer un nouveau fichier vide.")])},function(){var s=this._self._c;return s("h2",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[this._v("#")]),this._v(" "),s("code",[this._v("find")])])},function(){var s=this._self._c;return s("h3",{attrs:{id:"recherche-sur-le-nom-de-fichier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recherche-sur-le-nom-de-fichier"}},[this._v("#")]),this._v(" Recherche sur "),s("strong",[this._v("le nom de fichier")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.json"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-print")]),s._v("\n./book.json\n./node_modules/gitbook-plugin-theme-faq/package.json\n./node_modules/gitbook-plugin-theme-faq/_i18n/en.json\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])},function(){var s=this._self._c;return s("p",[this._v("On a recherché tous les fichiers ayant l'extension "),s("code",[this._v(".json")]),this._v(" dans leur nom de fichier depuis le répertoire courant.")])},function(){var s=this._self._c;return s("h3",{attrs:{id:"recherche-sur-la-date-du-fichier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recherche-sur-la-date-du-fichier"}},[this._v("#")]),this._v(" Recherche sur "),s("strong",[this._v("la date du fichier")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mtime")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-print")]),s._v("\n./divers/divers-articles.md\n./languages/javascript/angular-js/angular-js-components.md\n./security/security-webapp.md\n./software-engineering/genie-logiciel.md\n./web/shadow-dom.md\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[this._v("#")]),this._v(" "),s("code",[this._v("grep")])])},function(){var s=this._self._c;return s("h3",{attrs:{id:"recherche-de-tous-les-fichiers-contenant-un-mot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recherche-de-tous-les-fichiers-contenant-un-mot"}},[this._v("#")]),this._v(" Recherche de tous les fichiers contenant un mot")])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Ril")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"optimiser"')]),s._v("\nsecurity/security-basics.md\nweb/web-tracking.md\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])},function(){var s=this._self._c;return s("ul",[s("li",[s("code",[this._v("i")]),this._v(" pour ignorer la casse")]),this._v(" "),s("li",[s("code",[this._v("R")]),this._v(" pour récursif")]),this._v(" "),s("li",[s("code",[this._v("l")]),this._v(" pour obtenir en sortie les noms des fichiers (avec chemin relatif depuis la working directory) et pas leur contenu")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"commande-pipe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commande-pipe"}},[this._v("#")]),this._v(" commande pipe "),s("code",[this._v("|")])])},function(){var s=this._self._c;return s("p",[this._v("La commande "),s("code",[this._v("|")]),this._v(" (pipe) permet de chainer les commandes unix. La 1ère commande donne à la seconde sa sortie en entrée, et etc ...")])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" book.json .gitignore "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"theme-faq"')]),s._v(" , "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-search"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-lunr"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node rules:")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  .grunt\n\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Dependency directory")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Commenting this out is preferred by some people, see")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## https://docs.npmjs.com/misc/faq#should-i-check-my-node_modules-folder-into-git")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  node_modules\n\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Book build output")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("  _book\n\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# eBook build output")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("  *.epub\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("  *.mobi\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("  *.pdf\n\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jetbrains")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("  .idea/\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" book.json .gitignore "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"theme-faq"')]),s._v(" , "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-search"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-lunr"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node rules:")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  .grunt\n\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Dependency directory")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Commenting this out is preferred by some people, see")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## https://docs.npmjs.com/misc/faq#should-i-check-my-node_modules-folder-into-git")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])},function(){var s=this._self._c;return s("p",[this._v("On remarquera que la commande "),s("code",[this._v("nl")]),this._v(" ne numérote pas les lignes vides mais que la commande "),s("code",[this._v("head")]),this._v(" en tient compte pour limiter son affichage.")])},function(){var s=this._self._c;return s("h2",{attrs:{id:"du"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#du"}},[this._v("#")]),this._v(" "),s("code",[this._v("du")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sh")]),s._v(" * "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])},function(){var s=this._self._c;return s("h2",{attrs:{id:"df"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#df"}},[this._v("#")]),this._v(" "),s("code",[this._v("df")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" /home/robert/appli/\nFilesystem        Size  Used Avail Use% Mounted on\n/dev/boubou/bibi  100G   22G   79G  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("% /home/robert/appli\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])}],!1,null,null,null);e.default=a.exports}}]);