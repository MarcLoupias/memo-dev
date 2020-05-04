(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{494:function(e,t,o){"use strict";o.r(t);var n=o(33),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deno-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deno-overview"}},[e._v("#")]),e._v(" deno - overview")]),e._v(" "),o("p",[e._v("Announced by Ryan Dahl @ Berlin JS Conf 2018")]),e._v(" "),o("p",[e._v("The conference video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=M3BM9TB-8yA",target:"_blank",rel:"noopener noreferrer"}},[e._v("10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"http://tinyclouds.org/jsconf2018.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("The slides"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://news.ycombinator.com/item?id=17247135",target:"_blank",rel:"noopener noreferrer"}},[e._v("hackernews about the conf"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.youtube.com/watch?v=FlTG0UXRAkE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deno, A New Server-Side Runtime By Ryan Dahl - JSDC 2018 - 201811"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"genesis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[e._v("#")]),e._v(" genesis")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://nodejs.developpez.com/actu/208633/JSConf-Berlin-2018-moins-Ryan-Dahl-liste-10-erreurs-de-conception-sur-Node-js-et-devoile-son-prototype-deno/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSConf Berlin 2018 - Ryan Dahl liste 10 erreurs de conception sur Node.js et dévoile son prototype deno - nodejs.developpez.com - 20180611"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Ryan Dahl have left node in 2012 thinking the project was done.")]),e._v(" "),o("p",[e._v("He is not happy with some design choices he mades on node.")]),e._v(" "),o("p",[e._v("He wants to fix the node issues especially the securities issues.")]),e._v(" "),o("p",[e._v('"philosophical" source :')]),e._v(" "),o("p",[e._v("The idea of rewritting all node could be explained by his text : "),o("a",{attrs:{href:"http://tinyclouds.org/rant.html",target:"_blank",rel:"noopener noreferrer"}},[e._v('I hate almost all software. - tinyclouds.org - Ryan Dahl "blog" - 2011'),o("OutboundLink")],1)]),e._v(" "),o("blockquote",[o("p",[e._v("There will come a point where the accumulated complexity of our existing systems is greater than the complexity of creating a new one. When that happens all of this shit will be trashed.")])]),e._v(" "),o("h2",{attrs:{id:"the-10-things-he-regrets-about-node-js"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-10-things-he-regrets-about-node-js"}},[e._v("#")]),e._v(" the 10 things he regrets about Node.js")]),e._v(" "),o("ul",[o("li",[e._v("Not sticking with Promises")])]),e._v(" "),o("p",[e._v("Added in "),o("a",{attrs:{href:"https://github.com/nodejs/node/commit/7cd09874c666f0ce64b1d7776de74f55ff3e53ab",target:"_blank",rel:"noopener noreferrer"}},[e._v("June 2009"),o("OutboundLink")],1),e._v(", removed in "),o("a",{attrs:{href:"https://github.com/nodejs/node/commit/0485cc41d5c260458f590d249c073794047434fb",target:"_blank",rel:"noopener noreferrer"}},[e._v("February 2010"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Promises are mandatory to impl async/await.")]),e._v(" "),o("p",[e._v("He thinks an early and stable Promise impl in node would have helped a lot to speed, standardization and the adoption of theses tools.")]),e._v(" "),o("ul",[o("li",[e._v("Security")])]),e._v(" "),o("p",[e._v("V8 is a good sandbox but Node need embedded security tools. For ex a linter should not have access to the network by default.")]),e._v(" "),o("ul",[o("li",[e._v("The Build System (GYP)")])]),e._v(" "),o("p",[e._v("Rely on Python, needed to link Node and others languages libs (ex systems libs). Ugly and node is the solo user. Regret")]),e._v(" "),o("ul",[o("li",[e._v("The Build System (GYP)")])]),e._v(" "),o("p",[e._v("He regrets to not have listenned the community enough for the adoption of a core foreign function interface (FFI).")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("package.json")])])]),e._v(" "),o("p",[e._v("Allowing node "),o("code",[e._v("require()")]),e._v(" to inspect "),o("code",[e._v("package.json")]),e._v(" and embbed npm into node made npm the defacto package standard.")]),e._v(" "),o("p",[e._v("This standard is centralized AND privately controlled which is bad.")]),e._v(" "),o("ul",[o("li",[e._v("the way "),o("code",[e._v("require()")]),e._v(" works")])]),e._v(" "),o("p",[e._v("There are too many places where it is defined (js program, package.json, npm database, local node_modules folder)")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("package.json")])])]),e._v(" "),o("p",[e._v('Regret the way it works. Allowing package.json gave rise to the concept of a "module" as a directory of\nfiles.')]),e._v(" "),o("p",[e._v("package.json now includes all sorts of unnecessary information.\nLicense? Repository? Description?\nIt's boilerplate noise.")]),e._v(" "),o("p",[e._v("Would prefer a path or an url containing the version.")]),e._v(" "),o("ul",[o("li",[e._v("node_modules directory")])]),e._v(" "),o("p",[e._v("Vendored-by-default has good intentions, but in practice just using "),o("code",[e._v("$NODE_PATH")]),e._v(" wouldn't have precluded that")]),e._v(" "),o("p",[e._v("Deviates greatly from browser semantics.")]),e._v(" "),o("ul",[o("li",[e._v("ability to require a module without extension")])]),e._v(" "),o("p",[e._v("It's bad, because it is needlessly less explicit.")]),e._v(" "),o("p",[e._v("Not how browser JavaScript works.")]),e._v(" "),o("p",[e._v("The module loader has to query the file system at multiple locations trying to guess what the user intended.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("index.js")])])]),e._v(" "),o("p",[e._v("Thought it was cute because there is "),o("code",[e._v("index.html")]),e._v(" in web.")]),e._v(" "),o("p",[e._v("It needlessly complicated the module loading system.")]),e._v(" "),o("p",[e._v("It became especially unnecessary after "),o("code",[e._v("require")]),e._v(" supported "),o("code",[e._v("package.json")]),e._v(".")]),e._v(" "),o("p",[e._v("conclusion")]),e._v(" "),o("p",[e._v("My problems with Node are almost entirely around how it manages user code.")]),e._v(" "),o("p",[e._v("Because in contrast to the focus on evented I/O early on, the module system was essentially an afterthought.")]),e._v(" "),o("h2",{attrs:{id:"ry-deno"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ry-deno"}},[e._v("#")]),e._v(" "),o("code",[e._v("ry/deno")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/ry/deno",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ry/deno")]),e._v(" - "),o("code",[e._v("github.com")]),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Very nascent prototype that could be TLDR as : "),o("em",[e._v("A secure TypeScript runtime on V8")]),e._v(".")]),e._v(" "),o("p",[e._v("TypeScript is builtin.")]),e._v(" "),o("p",[e._v("No npm nor package.json nor node_modules support.")]),e._v(" "),o("p",[e._v("By default, a deno process has readonly access on the file system and no network access at all. It needs configuration (flags) to enable access and write.")]),e._v(" "),o("h3",{attrs:{id:"roadmap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" roadmap")]),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"https://github.com/ry/deno/blob/master/Roadmap.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("the roadmap"),o("OutboundLink")],1),e._v(", at that time, we cannot use network stuff, only read/write files on the fs.")]),e._v(" "),o("blockquote",[o("p",[e._v("Actual at 20180730 :")]),e._v(" "),o("ul",[o("li",[e._v("Milestone 1: Rust rewrite / V8 snapshot (ETA: July 2018)")]),e._v(" "),o("li",[e._v("libdeno C API")]),e._v(" "),o("li",[e._v("TypeScript API")])]),e._v(" "),o("p",[e._v("There are three layers of API to consider:")]),e._v(" "),o("ul",[o("li",[e._v("L1: the low-level message passing API exported by libdeno (L1),")]),e._v(" "),o("li",[e._v("L2: the protobuf messages used internally (L2),")]),e._v(" "),o("li",[e._v('L3: the final "deno" namespace exported to users (L3).')])])]),e._v(" "),o("h3",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" resources")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://deno.land",target:"_blank",rel:"noopener noreferrer"}},[e._v("deno.land - official website"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://deno.land/manual.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("deno.land/manual"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://deno.land/typedoc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("deno TypeScript API"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/denoland/deno/milestones",target:"_blank",rel:"noopener noreferrer"}},[e._v("deno/milestones"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://deno.news/",target:"_blank",rel:"noopener noreferrer"}},[e._v("newsletter - deno.news"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);