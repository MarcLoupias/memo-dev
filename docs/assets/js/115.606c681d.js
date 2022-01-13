(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{470:function(e,o,t){"use strict";t.r(o);var r=t(45),n=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nodejs-logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-logging"}},[e._v("#")]),e._v(" nodejs - logging")]),e._v(" "),t("h2",{attrs:{id:"the-problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[e._v("#")]),e._v(" the problem")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://expressjs.com/en/advanced/best-practice-performance.html#do-logging-correctly",target:"_blank",rel:"noopener noreferrer"}},[e._v("Production best practices: performance and reliability - expressjs.com - Do logging correctly"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("In general, there are two reasons for logging from your app: For debugging and for logging app activity (essentially, everything else). Using "),t("code",[e._v("console.log()")]),e._v(" or "),t("code",[e._v("console.error()")]),e._v(" to print log messages to the terminal is common practice in development. "),t("a",{attrs:{href:"https://nodejs.org/api/console.html#console_console_1",target:"_blank",rel:"noopener noreferrer"}},[e._v("But these functions are synchronous"),t("OutboundLink")],1),e._v(" when the destination is a terminal or a file, so they are not suitable for production, unless you pipe the output to another program.")]),e._v(" "),t("p",[t("strong",[e._v("For debugging")])]),e._v(" "),t("p",[e._v("If you’re logging for purposes of debugging, then instead of using "),t("code",[e._v("console.log()")]),e._v(", use a special debugging module like "),t("a",{attrs:{href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("debug"),t("OutboundLink")],1),e._v(". This module enables you to use the "),t("code",[e._v("DEBUG")]),e._v(" environment variable to control what debug messages are sent to "),t("code",[e._v("console.err()")]),e._v(", if any. To keep your app purely asynchronous, you’d still want to pipe "),t("code",[e._v("console.err()")]),e._v(" to another program. But then, you’re not really going to debug in production, are you?")]),e._v(" "),t("p",[t("strong",[e._v("For app activity")])]),e._v(" "),t("p",[e._v("If you’re logging app activity (for example, tracking traffic or API calls), instead of using "),t("code",[e._v("console.log()")]),e._v(", use a logging library like "),t("a",{attrs:{href:"https://www.npmjs.com/package/winston",target:"_blank",rel:"noopener noreferrer"}},[e._v("Winston"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://www.npmjs.com/package/bunyan",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bunyan"),t("OutboundLink")],1),e._v(". For a detailed comparison of these two libraries, see the StrongLoop blog post "),t("a",{attrs:{href:"https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comparing Winston and Bunyan Node.js Logging"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"specs-articles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specs-articles"}},[e._v("#")]),e._v(" specs & articles")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://tools.ietf.org/html/rfc5424",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC5424 - The Syslog Protocol - tools.ietf.org"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("Abstract")]),e._v(" "),t("p",[e._v("This document describes the syslog protocol, which is used to convey\nevent notification messages.  This protocol utilizes a layered\narchitecture, which allows the use of any number of transport\nprotocols for transmission of syslog messages.  It also provides a\nmessage format that allows vendor-specific extensions to be provided\nin a structured way.")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.owasp.org/index.php/Logging_Cheat_Sheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWASP Logging Cheat Sheet - www.owasp.org"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("This cheat sheet is focused on providing developers with concentrated guidance on building application logging mechanisms, especially related to security logging.\n(...)\nApplication logging should be consistent within the application, consistent across an organization's application portfolio and use industry standards where relevant, so the logged event data can be consumed, correlated, analyzed and managed by a wide variety of systems.")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.scalyr.com/2018/04/getting-started-quickly-node-js-logging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started Quickly With Node.js Logging - blog.scalyr.com - 20180410"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.risingstack.com/node-js-logging-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Get Node.js Logging Right - blog.risingstack.com - 20160531"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"for-debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-debugging"}},[e._v("#")]),e._v(" For debugging")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/sindresorhus/awesome-nodejs#debugging--profiling",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-nodejs - debugging--profiling"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/visionmedia/debug",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("visionmedia/debug")]),e._v(" - "),t("code",[e._v("github.com")]),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers.")])]),e._v(" "),t("h2",{attrs:{id:"for-app-activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-app-activity"}},[e._v("#")]),e._v(" For app activity")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/sindresorhus/awesome-nodejs#logging",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-nodejs - logging"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/winstonjs/winston",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("winstonjs/winston")]),e._v(" - "),t("code",[e._v("github.com")]),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("A logger for just about everything.")]),e._v(" "),t("p",[t("code",[e._v("winston")]),e._v(" is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs.")])])])}),[],!1,null,null,null);o.default=n.exports}}]);