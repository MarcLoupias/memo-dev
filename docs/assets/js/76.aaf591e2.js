(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{430:function(e,t,r){"use strict";r.r(t);var _=r(45),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"webapp-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webapp-build"}},[e._v("#")]),e._v(" webapp build")]),e._v(" "),r("h2",{attrs:{id:"strategy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strategy"}},[e._v("#")]),e._v(" strategy")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://youtu.be/k0_gi7BoBgw?t=2251",target:"_blank",rel:"noopener noreferrer"}},[e._v("État de l'art de ES2015+ dans Node.js et le navigateur - Blend Web Mix - Christophe Porteneuve - 20161121"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("(Par compilation ils parlent de Babel notamment)\nQuestion : Tu compiles pour autant de cibles que tu as de navigaters ?\nRéponse : Nononon tu fais une compilation, mais par contre tu vises le plus petit dénominateur commun.\nTu peux choisir de faire plusieurs compilations mais ça va complexifier pas mal de chaine de déploiement.\nComment tu vas faire, tu vas faire du browser sniffing ? Avec la gueule qu'ont les user-agents aujourd'hui ? Non c'est pas possible.\nTu pourrais faire de la feature detection, le problème c'est que tu vas ralentir énormément puisque tu dois d'abord feature détecter puis recharger derrière.\nEn gros ce qui marche, même pour les gros sites, c'est le plus petit dénominateur commun. Même si tu transpiles tout, parce que\ntu vises IE9+ en gros, t'obtiens quelque chose d'éminament utilisable. C'est ce que font les gros.\nIntellectuellement on fait \"ah ouai machin\" mais, commence par minimiser la jpeg de 900ko dans ta home, implémente http2,\nfais des choses qui servent pour de vrai, mettre des vrais entêtes de caches, etc ...")])]),e._v(" "),r("h2",{attrs:{id:"bundlers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bundlers"}},[e._v("#")]),e._v(" bundlers")]),e._v(" "),r("h3",{attrs:{id:"bundler-projects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bundler-projects"}},[e._v("#")]),e._v(" bundler projects")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://browserify.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("browserify"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://jspm.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSPM"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("package manager (onto npm and GitHub) AND bundler\nUses "),r("a",{attrs:{href:"https://github.com/systemjs/systemjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("SystemJS"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://rollupjs.org/guide/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup.js"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://brunch.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("brunch"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://fuse-box.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fuse-box"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://parceljs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parcel"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"comparison-by-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#comparison-by-features"}},[e._v("#")]),e._v(" Comparison by features")]),e._v(" "),r("p",[e._v("Extracted from the unreadable "),r("a",{attrs:{href:"https://webpack.js.org/comparison/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack website"),r("OutboundLink")],1),e._v(" markdown table :")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Feature")]),e._v(" "),r("th",[e._v("webpack/webpack")]),e._v(" "),r("th",[e._v("jrburke/requirejs")]),e._v(" "),r("th",[e._v("substack/node-browserify")]),e._v(" "),r("th",[e._v("jspm/jspm-cli")]),e._v(" "),r("th",[e._v("rollup/rollup")]),e._v(" "),r("th",[e._v("brunch/brunch")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Additional chunks are loaded on demand")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/systemjs/systemjs/blob/master/docs/system-api.md#systemimportmodulename--normalizedparentname---promisemodule",target:"_blank",rel:"noopener noreferrer"}},[e._v("System.import"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")])]),e._v(" "),r("tr",[r("td",[e._v("AMD "),r("code",[e._v("define")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/jaredhanson/deamdify",target:"_blank",rel:"noopener noreferrer"}},[e._v("deamdify"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/piuccio/rollup-plugin-amd",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup-plugin-amd"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("yes")])]),e._v(" "),r("tr",[r("td",[e._v("AMD "),r("code",[e._v("require")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("yes")])]),e._v(" "),r("tr",[r("td",[e._v("AMD "),r("code",[e._v("require")]),e._v(" loads on demand")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("with manual configuration")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Feature")]),e._v(" "),r("th",[e._v("webpack/webpack")]),e._v(" "),r("th",[e._v("jrburke/requirejs")]),e._v(" "),r("th",[e._v("substack/node-browserify")]),e._v(" "),r("th",[e._v("jspm/jspm-cli")]),e._v(" "),r("th",[e._v("rollup/rollup")]),e._v(" "),r("th",[e._v("brunch/brunch")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("CommonJS "),r("code",[e._v("exports")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("only wrapping in "),r("code",[e._v("define")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/rollup/rollup-plugin-commonjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("commonjs-plugin"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("yes")])]),e._v(" "),r("tr",[r("td",[e._v("CommonJS "),r("code",[e._v("require")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("only wrapping in "),r("code",[e._v("define")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/rollup/rollup-plugin-commonjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("commonjs-plugin"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("yes")])]),e._v(" "),r("tr",[r("td",[e._v("CommonJS "),r("code",[e._v("require.resolve")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Concat in require "),r("code",[e._v('require("./fi" + "le")')])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("no♦")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td")])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Feature")]),e._v(" "),r("th",[e._v("webpack/webpack")]),e._v(" "),r("th",[e._v("jrburke/requirejs")]),e._v(" "),r("th",[e._v("substack/node-browserify")]),e._v(" "),r("th",[e._v("jspm/jspm-cli")]),e._v(" "),r("th",[e._v("rollup/rollup")]),e._v(" "),r("th",[e._v("brunch/brunch")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Debugging support")]),e._v(" "),r("td",[r("strong",[e._v("SourceUrl, SourceMaps")])]),e._v(" "),r("td",[e._v("not required")]),e._v(" "),r("td",[e._v("SourceMaps")]),e._v(" "),r("td",[r("strong",[e._v("SourceUrl, SourceMaps")])]),e._v(" "),r("td",[r("strong",[e._v("SourceUrl, SourceMaps")])]),e._v(" "),r("td",[e._v("SourceMaps")])]),e._v(" "),r("tr",[r("td",[e._v("Dependencies")]),e._v(" "),r("td",[e._v("19MB / 127 packages")]),e._v(" "),r("td",[e._v("11MB / 118 packages")]),e._v(" "),r("td",[r("strong",[e._v("1.2MB / 1 package")])]),e._v(" "),r("td",[e._v("26MB / 131 packages")]),e._v(" "),r("td",[e._v("?MB / 3 packages")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("ES2015 "),r("code",[e._v("import")]),e._v("/"),r("code",[e._v("export")])]),e._v(" "),r("td",[r("strong",[e._v("yes")]),e._v(" (webpack 2)")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("yes, via "),r("a",{attrs:{href:"https://github.com/gcollazo/es6-module-transpiler-brunch",target:"_blank",rel:"noopener noreferrer"}},[e._v("es6 module transpiler"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Expressions in require (guided) "),r("code",[e._v('require("./templates/" + template)')])]),e._v(" "),r("td",[r("strong",[e._v("yes (all files matching included)")])]),e._v(" "),r("td",[e._v("no♦")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")])]),e._v(" "),r("tr",[r("td",[e._v("Expressions in require (free) "),r("code",[e._v("require(moduleName)")])]),e._v(" "),r("td",[e._v("with manual configuration")]),e._v(" "),r("td",[e._v("no♦")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td")])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Feature")]),e._v(" "),r("th",[e._v("webpack/webpack")]),e._v(" "),r("th",[e._v("jrburke/requirejs")]),e._v(" "),r("th",[e._v("substack/node-browserify")]),e._v(" "),r("th",[e._v("jspm/jspm-cli")]),e._v(" "),r("th",[e._v("rollup/rollup")]),e._v(" "),r("th",[e._v("brunch/brunch")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Generate a single bundle")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("yes♦")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")])]),e._v(" "),r("tr",[r("td",[e._v("Indirect require "),r("code",[e._v('var r = require; r("./file")')])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("no♦")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Load each file separate")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")])]),e._v(" "),r("tr",[r("td",[e._v("Mangle path names")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("partial")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("not required (path names are not included in the bundle)")]),e._v(" "),r("td",[e._v("no")])]),e._v(" "),r("tr",[r("td",[e._v("Minimizing")]),e._v(" "),r("td",[e._v("uglify")]),e._v(" "),r("td",[e._v("uglify, closure compiler")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/hughsk/uglifyify",target:"_blank",rel:"noopener noreferrer"}},[e._v("uglifyify"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/TrySound/rollup-plugin-uglify",target:"_blank",rel:"noopener noreferrer"}},[e._v("uglify-plugin"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/brunch/uglify-js-brunch",target:"_blank",rel:"noopener noreferrer"}},[e._v("UglifyJS-brunch"),r("OutboundLink")],1)])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Feature")]),e._v(" "),r("th",[e._v("webpack/webpack")]),e._v(" "),r("th",[e._v("jrburke/requirejs")]),e._v(" "),r("th",[e._v("substack/node-browserify")]),e._v(" "),r("th",[e._v("jspm/jspm-cli")]),e._v(" "),r("th",[e._v("rollup/rollup")]),e._v(" "),r("th",[e._v("brunch/brunch")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Multi pages build with common bundle")]),e._v(" "),r("td",[e._v("with manual configuration")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("with manual configuration")]),e._v(" "),r("td",[e._v("with bundle arithmetic")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("no")])]),e._v(" "),r("tr",[r("td",[e._v("Multiple bundles")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("with manual configuration")]),e._v(" "),r("td",[e._v("with manual configuration")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("yes")])]),e._v(" "),r("tr",[r("td",[e._v("Node.js built-in libs "),r("code",[e._v('require("path")')])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/rollup/rollup-plugin-node-resolve",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-resolve-plugin"),r("OutboundLink")],1)]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Other Node.js stuff")]),e._v(" "),r("td",[r("code",[e._v("process")]),e._v(", "),r("code",[e._v("__dir/filename")]),e._v(", "),r("code",[e._v("global")])]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td",[r("code",[e._v("process")]),e._v(", "),r("code",[e._v("__dir/filename")]),e._v(", "),r("code",[e._v("global")])]),e._v(" "),r("td",[r("code",[e._v("process")]),e._v(", "),r("code",[e._v("__dir/filename")]),e._v(", "),r("code",[e._v("global")]),e._v(" for cjs")]),e._v(" "),r("td",[e._v("global ("),r("a",{attrs:{href:"https://github.com/rollup/rollup-plugin-commonjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("commonjs-plugin"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Plugins")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[r("strong",[e._v("yes")])]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Feature")]),e._v(" "),r("th",[e._v("webpack/webpack")]),e._v(" "),r("th",[e._v("jrburke/requirejs")]),e._v(" "),r("th",[e._v("substack/node-browserify")]),e._v(" "),r("th",[e._v("jspm/jspm-cli")]),e._v(" "),r("th",[e._v("rollup/rollup")]),e._v(" "),r("th",[e._v("brunch/brunch")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Preprocessing")]),e._v(" "),r("td",[r("strong",[e._v("loaders, "),r("a",{attrs:{href:"https://github.com/webpack/transform-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("transforms"),r("OutboundLink")],1)])]),e._v(" "),r("td",[e._v("loaders")]),e._v(" "),r("td",[e._v("transforms")]),e._v(" "),r("td",[e._v("plugin translate")]),e._v(" "),r("td",[e._v("plugin transforms")]),e._v(" "),r("td",[e._v("compilers, optimizers")])]),e._v(" "),r("tr",[r("td",[e._v("Replacement for browser")]),e._v(" "),r("td",[r("code",[e._v("web_modules")]),e._v(", "),r("code",[e._v(".web.js")]),e._v(", package.json field, alias config option")]),e._v(" "),r("td",[e._v("alias option")]),e._v(" "),r("td",[e._v("package.json field, alias option")]),e._v(" "),r("td",[e._v("package.json, alias option")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Requirable files")]),e._v(" "),r("td",[e._v("file system")]),e._v(" "),r("td",[r("strong",[e._v("web")])]),e._v(" "),r("td",[e._v("file system")]),e._v(" "),r("td",[e._v("through plugins")]),e._v(" "),r("td",[e._v("file system or through plugins")]),e._v(" "),r("td",[e._v("file system")])]),e._v(" "),r("tr",[r("td",[e._v("Runtime overhead")]),e._v(" "),r("td",[r("strong",[e._v("243B + 20B per module + 4B per dependency")])]),e._v(" "),r("td",[e._v("14.7kB + 0B per module + (3B + X) per dependency")]),e._v(" "),r("td",[e._v("415B + 25B per module + (6B + 2X) per dependency")]),e._v(" "),r("td",[e._v("5.5kB for self-executing bundles, 38kB for full loader and polyfill, 0 plain modules, 293B CJS, 139B ES2015 System.register before gzip")]),e._v(" "),r("td",[r("strong",[e._v("none for ES2015 modules")]),e._v(" (other formats may have)")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Watch mode")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("not required")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/substack/watchify",target:"_blank",rel:"noopener noreferrer"}},[e._v("watchify"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("not needed in dev")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/rollup/rollup-watch",target:"_blank",rel:"noopener noreferrer"}},[e._v("rollup-watch"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("yes")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);