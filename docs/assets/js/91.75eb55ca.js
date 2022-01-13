(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{445:function(e,n,a){"use strict";a.r(n);var t=a(45),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dependency-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection"}},[e._v("#")]),e._v(" Dependency Injection")]),e._v(" "),a("h2",{attrs:{id:"article"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#article"}},[e._v("#")]),e._v(" article")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://henriquat.re/basics-of-angular/services-dependency-injection/services-and-dependency-injection-in-angularjs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("services-and-dependency-injection-in-angularjs"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding Dependency Injection - Wiki AngularJS officiel"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://stackoverflow.com/questions/16828287/what-things-can-be-injected-into-others-in-angular-js/16829270#16829270",target:"_blank",rel:"noopener noreferrer"}},[e._v("source de l'article précédent sur stackoverflow"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://anandmanisankar.com/posts/angularjs-dependency-injection-demystified/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AngularJS Dependency Injection - Demystified 20140908"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.developpez.net/forums/d1461652/webmasters-developpement-web/javascript-ajax-typescript-dart/javascript/injection-reflechie-dependances/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Injection réfléchie de dépendances - www.developpez.net - 20140804 - SylvainPV"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"scope-and-namespace-with-the-angular-injector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope-and-namespace-with-the-angular-injector"}},[e._v("#")]),e._v(" scope and namespace with the angular injector")]),e._v(" "),a("p",[e._v("For services, angularJs injector is flat.")]),e._v(" "),a("p",[e._v("For constants, angularJs injector is namespaced.")]),e._v(" "),a("p",[e._v("Exemple, for a module structure like this :")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app\n\napp.moduleA\napp.moduleA.aaaaService\napp.moduleA.aaaaConstants\napp.moduleA.subModuleA\napp.moduleA.subaaaaModuleA\n\napp.moduleB.bbbbService\napp.moduleB.bbbbConstants\napp.moduleB.subModuleB\napp.moduleB.subbbbbModuleB\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("If you call bbbbService in aaaaService without linking the depency in moduleA module declaration, it will "),a("strong",[e._v("works")]),e._v(". AngularJs injector is flat in that case.")]),e._v(" "),a("p",[e._v("If you call bbbbConstants in aaaaService without linking the dependency in moduleA module declaration, it will "),a("strong",[e._v("fail")]),e._v(". AngularJs injector is "),a("strong",[e._v("not")]),e._v(" flat in that case.")])])}),[],!1,null,null,null);n.default=r.exports}}]);