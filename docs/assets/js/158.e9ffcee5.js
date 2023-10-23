(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{326:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.linfo.org/ps.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The "),s("code",[t._v("ps")]),t._v(" Command - www.linfo.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("lister tous les processus actifs sur le système")]),t._v(" "),t._m(2),s("p",[t._v("filtrer la liste précédente avec des mots clefs")]),t._v(" "),t._m(3),t._m(4),t._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man2/kill.2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The "),s("code",[t._v("kill")]),t._v(" man page"),s("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),s("p",[s("a",{attrs:{href:"https://manpages.ubuntu.com/manpages/focal/en/man7/signal.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Availables signals"),s("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("And many more ...")]),t._v(" "),t._m(7),t._v(" "),s("p",[s("a",{attrs:{href:"https://hisham.hm/htop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("htop official website"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/hishamhm/htop",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("hishamhm/htop")]),t._v(" - "),s("code",[t._v("github.com")]),s("OutboundLink")],1)]),t._v(" "),t._m(8),t._v(" "),s("p",[s("a",{attrs:{href:"https://peteris.rocks/blog/htop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("htop explained - peteris.rocks/blog - 20170102"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codeforgeek.com/2014/12/system-process-monitoring-htop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("System process monitoring with Htop - codeforgeek.com - 20141222"),s("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("Process are colored in white, and threads in green.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"manipulation-des-processus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manipulation-des-processus"}},[this._v("#")]),this._v(" manipulation des processus")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"ps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[this._v("#")]),this._v(" "),t("code",[this._v("ps")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("ps")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-ef")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# filtrer la liste avec le mot clef "jboss"')]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" jboss\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"kill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[this._v("#")]),this._v(" "),t("code",[this._v("kill")])])},function(){var t=this._self._c;return t("p",[t("code",[this._v("int kill(pid_t pid, int sig);")])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[t._v("signal")]),t._v(" "),s("th",[t._v("id")]),t._v(" "),s("th",[t._v("comment")]),t._v(" "),s("th",[t._v("meaning")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("SIGINT")])]),t._v(" "),s("td",[s("code",[t._v("2")])]),t._v(" "),s("td",[t._v("Interrupt from keyboard")]),t._v(" "),s("td",[t._v("It politely tells the program to terminate. Performs the same function as Ctrl+C. It’s up to the process whether it will listen to it or not.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("SIGTERM")])]),t._v(" "),s("td",[s("code",[t._v("15")])]),t._v(" "),s("td",[t._v("Termination signal")]),t._v(" "),s("td",[t._v("This is the default signal of the kill command.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("SIGKILL")])]),t._v(" "),s("td",[s("code",[t._v("9")])]),t._v(" "),s("td",[t._v("Kill signal")]),t._v(" "),s("td",[t._v("Unlike other signals, the SIGKILL signal is never sent to the process. Instead, the terminal immediately kills the program and the program doesn’t get the time to save its data or clean up its work. Only use this as a last resort.")])])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"htop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#htop"}},[this._v("#")]),this._v(" "),t("code",[this._v("htop")])])},function(){var t=this._self._c;return t("blockquote",[t("p",[this._v("htop is an interactive text-mode process viewer for Unix systems. It aims to be a better 'top'.")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[this._v("#")]),this._v(" install")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("htop")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"view-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-management"}},[this._v("#")]),this._v(" view management")])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("F2")]),this._v(" to customize layout (add columns, etc ...).")])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("F5")]),this._v(" to toggle the view between "),t("em",[this._v("list view")]),this._v(" or "),t("em",[this._v("tree view")]),this._v(".")])},function(){var t=this._self._c;return t("p",[this._v("In "),t("em",[this._v("list view")]),this._v(", "),t("strong",[this._v("F6")]),this._v(" is used to sort the list.")])},function(){var t=this._self._c;return t("p",[this._v("In "),t("em",[this._v("tree view")]),this._v(", "),t("strong",[this._v("F6")]),this._v(" is used to expand / collapse nodes.")])},function(){var t=this._self._c;return t("p",[this._v("Filter the view with "),t("strong",[this._v("F4")]),this._v(" and type the command used to launch the process you want to filter.\nFor example to filter all Node.js processes just type "),t("code",[this._v("node")]),this._v(".")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"signals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signals"}},[this._v("#")]),this._v(" signals")])},function(){var t=this._self._c;return t("p",[this._v("Select a process and "),t("strong",[this._v("F9")]),this._v(", it opens a list of signals to send to the process.")])}],!1,null,null,null);s.default=a.exports}}]);