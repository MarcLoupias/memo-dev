(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{305:function(e,r,a){"use strict";a.r(r);var t=a(0),n=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Compilateur",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compilateur - fr.wikipedia.org"),r("OutboundLink")],1)]),e._v(" "),e._m(2),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Langage_machine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Langage machine"),r("OutboundLink")],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("Les étapes de la compilation incluent :")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("p",[r("a",{attrs:{href:"http://savage.net.au/Ron/html/graphviz2.marpa/Lexing.and.Parsing.Overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("An Overview of Lexing and Parsing - savage.net.au"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Same at "),r("a",{attrs:{href:"https://www.perl.com/pub/2012/10/an-overview-of-lexing-and-parsing.html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("An Overview of Lexing and Parsing - www.perl.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://stackoverflow.com/questions/2842809/lexers-vs-parsers",target:"_blank",rel:"noopener noreferrer"}},[e._v("lexers vs parsers - stackoverflow.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Lexer synonyms : tokenizer, scanner, ...")]),e._v(" "),e._m(7),e._v(" "),r("p",[r("a",{attrs:{href:"https://stackoverflow.com/questions/40605642/what-is-the-main-difference-between-compiler-and-transpiler",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is the main difference between Compiler and Transpiler - stackoverflow.com"),r("OutboundLink")],1)]),e._v(" "),e._m(8)])}),[function(){var e=this._self._c;return e("h1",{attrs:{id:"compilateur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compilateur"}},[this._v("#")]),this._v(" Compilateur")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"definitions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[this._v("#")]),this._v(" Définitions")])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("Un compilateur est un programme qui transforme un code source écrit dans un langage de programmation (le langage source) en un autre langage informatique (appelé langage cible)")]),this._v(" "),e("p",[this._v("Pour qu'il puisse être exploité par une machine, le compilateur traduit le code source, écrit dans un langage de haut niveau d'abstraction, facilement compréhensible par l'humain, vers un langage de plus bas niveau, un langage d'assemblage ou langage machine.")]),this._v(" "),e("p",[this._v("Inversement, un programme qui traduit un langage de bas niveau vers un langage de plus haut niveau est un décompilateur.")])])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("C'est le langage natif d'un processeur, c'est-à-dire le seul qu'il puisse traiter. Il est composé d'instructions et de données à traiter codées en binaire.")])])},function(){var e=this._self._c;return e("h2",{attrs:{id:"presentation-generale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#presentation-generale"}},[this._v("#")]),this._v(" Présentation générale")])},function(){var e=this,r=e._self._c;return r("ul",[r("li",[e._v("le "),r("strong",[e._v("prétraitement")]),e._v(", nécessaire pour certains langages comme C, qui prend en charge la substitution de macro et de la compilation conditionnelle.")]),e._v(" "),r("li",[e._v("l'"),r("strong",[e._v("analyse lexicale")]),e._v(", qui découpe le code source en petits morceaux appelés jetons (tokens).")]),e._v(" "),r("li",[e._v("l'"),r("strong",[e._v("analyse syntaxique")]),e._v(" implique l'analyse de la séquence jeton pour identifier la structure syntaxique du programme.")]),e._v(" "),r("li",[e._v("l'"),r("strong",[e._v("analyse sémantique")]),e._v(" est la phase durant laquelle le compilateur ajoute des informations sémantiques à l'arbre d'analyse et construit la table des symboles.")]),e._v(" "),r("li",[e._v("la "),r("strong",[e._v("transformation")]),e._v(" du code source en code intermédiaire ;")]),e._v(" "),r("li",[e._v("l'application de techniques d'"),r("strong",[e._v("optimisation sur le code intermédiaire")]),e._v(" : c'est-à-dire rendre le programme « meilleur » selon son usage (voir infra) ;")]),e._v(" "),r("li",[e._v("la "),r("strong",[e._v("génération de code")]),e._v(" avec l'allocation de registres et la traduction du code intermédiaire en code objet, avec éventuellement l'insertion de données de débogage et d'analyse de l'exécution ;")]),e._v(" "),r("li",[e._v("l'"),r("strong",[e._v("édition des liens")]),e._v(".")])])},function(){var e=this._self._c;return e("h2",{attrs:{id:"lever-vs-parser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lever-vs-parser"}},[this._v("#")]),this._v(" Lever vs Parser")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"compiler-vs-transpiler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiler-vs-transpiler"}},[this._v("#")]),this._v(" Compiler vs Transpiler")])},function(){var e=this,r=e._self._c;return r("blockquote",[r("p",[r("strong",[e._v("Compiler")]),e._v(" - compiles code to a lower level code.")]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("ul",[r("li",[e._v('"Developer code" -> "Machine code"')]),e._v(" "),r("li",[e._v("PHP -> C")]),e._v(" "),r("li",[e._v("Java -> bytecode")])]),e._v(" "),r("p",[r("strong",[e._v("Transpiler")]),e._v(" - compiles code to same level of code/abstraction.")]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("ul",[r("li",[e._v('"Developer code" -> "Another developer code or version"')]),e._v(" "),r("li",[e._v("JavaScript ES2015+ -> JavaScript ES5")])])])}],!1,null,null,null);r.default=n.exports}}]);