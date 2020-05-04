(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{381:function(a,s,t){"use strict";t.r(s);var n=t(33),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"heroku-angularjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heroku-angularjs"}},[a._v("#")]),a._v(" heroku - angularjs")]),a._v(" "),t("h2",{attrs:{id:"goal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[a._v("#")]),a._v(" Goal")]),a._v(" "),t("p",[a._v("Running an Angular app as a Node.js app.")]),a._v(" "),t("h2",{attrs:{id:"deploy-angular-app-on-heroku"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-angular-app-on-heroku"}},[a._v("#")]),a._v(" deploy angular app on heroku")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://www.sitepoint.com/deploying-yeomanangular-app-heroku/",target:"_blank",rel:"noopener noreferrer"}},[a._v("sitepoint.com : deploying-yeomanangular-app-heroku"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("steps :")]),a._v(" "),t("p",[a._v("rajouter en dépendance du package.json du projet")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gzippo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"~0.2.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"express"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"~3.4.8"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("un Procfile contenant :")]),a._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("web: node web.js\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("un script web.js contenant :")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" gzippo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'gzippo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" express "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'express'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("express")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("express"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("logger")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dev'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gzippo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("staticGzip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" __dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("PORT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("les fichiers à déployer sont dans la folder "),t("code",[a._v("/dist")]),a._v("\nModifier "),t("code",[a._v("Gruntfile.js")]),a._v(" pour lui faire copier le Procfile, le "),t("code",[a._v("web.js")]),a._v(".\nTODO : Lui faire copier une version déployable du "),t("code",[a._v("package.json")]),a._v(" (nécessaire !)\nTOFIX : problème avec certaines tasks (la minification notamment, lié à angular-ui (dep cyclic) et ng-grid)\nInitialiser un repo Git au niveau de "),t("code",[a._v("/dist")])]),a._v(" "),t("p",[a._v("puis en console au niveau de "),t("code",[a._v("/dist")]),a._v(" :")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("heroku login\nheroku create\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("créer le repo, commit")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push heroku master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("L'app est dispo.")]),a._v(" "),t("h2",{attrs:{id:"divers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#divers"}},[a._v("#")]),a._v(" divers")]),a._v(" "),t("h3",{attrs:{id:"config-question-on-stackoverflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-question-on-stackoverflow"}},[a._v("#")]),a._v(" config question on stackoverflow")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://stackoverflow.com/questions/16674202/how-do-i-deploy-an-angular-js-app",target:"_blank",rel:"noopener noreferrer"}},[a._v("stackoverflow.com : how-do-i-deploy-an-angular-js-app"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"node-js-support-on-heroku"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-support-on-heroku"}},[a._v("#")]),a._v(" Node.js support on Heroku")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs#visit-your-application",target:"_blank",rel:"noopener noreferrer"}},[a._v("devcenter.heroku.com : getting-started-with-nodejs#visit-your-application"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"example-the-generator-angular-fullstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-the-generator-angular-fullstack"}},[a._v("#")]),a._v(" Example, the generator-angular-fullstack")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://npmjs.org/package/generator-angular-fullstack",target:"_blank",rel:"noopener noreferrer"}},[a._v("npmjs.org : generator-angular-fullstack"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);