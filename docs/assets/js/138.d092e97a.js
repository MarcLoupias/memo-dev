(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{491:function(e,t,i){"use strict";i.r(t);var s=i(45),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"no-silver-bullet-f-brooks-notes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#no-silver-bullet-f-brooks-notes"}},[e._v("#")]),e._v(" "),i("em",[e._v("no silver bullet")]),e._v(" F.Brooks - notes")]),e._v(" "),i("p",[i("a",{attrs:{href:"http://www.cs.nott.ac.uk/~pszcah/G51ISS/Documents/NoSilverBullet.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("No Silver Bullet: Essence and Accidents of Software Engineering"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("by Frederick P. Brooks, Jr.")]),e._v(" "),i("blockquote",[i("p",[e._v('ref: Brooks, Frederick P., "No Silver Bullet: Essence and Accidents of Software Engineering," Computer, Vol. 20, No. 4 (April 1987) pp. 10-19.')])]),e._v(" "),i("h2",{attrs:{id:"synthesis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#synthesis"}},[e._v("#")]),e._v(" synthesis")]),e._v(" "),i("p",[e._v("A project can be seen as innocent and straightforward but can become a monster of missed schedules, blown budgets, and flawed products.")]),e._v(" "),i("p",[e._v("Need for a "),i("strong",[e._v("silver bullet")]),e._v(" to drop software costs.")]),e._v(" "),i("p",[e._v("But there is no silver bullet ; the purpose of the article is to show why by examining :")]),e._v(" "),i("ul",[i("li",[e._v("the nature of the software problem")]),e._v(" "),i("li",[e._v("the properties of the bullets proposed in the past")])]),e._v(" "),i("p",[e._v("There is no breakthrough, but there is things to do to improve software engineering, slowly.")]),e._v(" "),i("blockquote",[i("p",[e._v("There is no royal road, but there is a road.")])]),e._v(" "),i("p",[e._v("Nice metaphor with medicine, from magical theories to modern medicine, the road is hard, long, step by step, require discipline but it works better every day.")]),e._v(" "),i("blockquote",[i("p",[e._v("So it is with software engineering today.")])]),e._v(" "),i("p",[e._v("## TLDR")]),e._v(" "),i("ul",[i("li",[e._v("Essential difficulties are the conception parts")]),e._v(" "),i("li",[e._v("Accidental difficulties are the writing parts")]),e._v(" "),i("li",[e._v("All the past and actual breakthroughs concerns writing a software")]),e._v(" "),i("li",[e._v("A software is grown, not built ; so attacking the essentials difficulties means using :\n"),i("ul",[i("li",[e._v("quick feedback loop")]),e._v(" "),i("li",[e._v("great designers (great people)")])])])]),e._v(" "),i("h2",{attrs:{id:"a-does-it-have-to-be-hard-essential-difficulties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#a-does-it-have-to-be-hard-essential-difficulties"}},[e._v("#")]),e._v(" A - Does It Have to Be Hard?--Essential Difficulties")]),e._v(" "),i("p",[e._v("In comparison to hardware productivity enhancement software engineering is slow.\nBut hardware enhancement is an exception against all others technologies.")]),e._v(" "),i("p",[e._v("Following Aristotle, Brooks divide software engineering difficulties in :")]),e._v(" "),i("ul",[i("li",[e._v("essence difficulties (inherent in the nature of software)")]),e._v(" "),i("li",[e._v("accidents difficulties (difficulties that today attend its production but are not inherent)")])]),e._v(" "),i("p",[e._v("The software essence is a construct of interlocking concepts: data sets, relationships among data items, algorithms, and invocations of functions.")]),e._v(" "),i("blockquote",[i("p",[e._v("I believe the hard part of building software to be the specification, design, and testing of this conceptual construct,\nnot the labor of representing it and testing the fidelity of the representation.")]),e._v(" "),i("p",[e._v("If this is true, building software will always be hard. There is inherently no silver bullet.")])]),e._v(" "),i("p",[e._v("The inherent properties of this irreducible essence of modern software systems are :")]),e._v(" "),i("ul",[i("li",[e._v("complexity")]),e._v(" "),i("li",[e._v("conformity")]),e._v(" "),i("li",[e._v("changeability")]),e._v(" "),i("li",[e._v("invisibility")])]),e._v(" "),i("h3",{attrs:{id:"complexity"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#complexity"}},[e._v("#")]),e._v(" complexity")]),e._v(" "),i("ul",[i("li",[e._v("software systems differ profoundly from computers, buildings, or automobiles, where repeated elements abound")]),e._v(" "),i("li",[e._v("computers are more complex than most things people build, Software systems have orders-of-magnitude more states than computers do")]),e._v(" "),i("li",[e._v("the complexity of the whole increases much more than linearly")]),e._v(" "),i("li",[e._v("the complexity of software is an essential property, not an accidental one")]),e._v(" "),i("li",[e._v("many of the classic problems of developing software products derive from this essential complexity and its nonlinear increases with size")])]),e._v(" "),i("p",[e._v("complexity is the source of the difficulty of :")]),e._v(" "),i("ul",[i("li",[e._v("communication among team members (leads to product flaws, cost overruns, schedule delays)")]),e._v(" "),i("li",[e._v("enumerating all the possible states of the program (leads to unreliability)")]),e._v(" "),i("li",[e._v("invoking function (makes programs hard to use)")]),e._v(" "),i("li",[e._v("extending programs to new functions (side effects)")]),e._v(" "),i("li",[e._v("from complexity of structure come the unvisualized states (security trapdoors)")]),e._v(" "),i("li",[e._v("management (remendous learning and understanding burden that makes personnel turnover a disaster)")])]),e._v(" "),i("h3",{attrs:{id:"conformity"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#conformity"}},[e._v("#")]),e._v(" conformity")]),e._v(" "),i("ul",[i("li",[e._v("software must conform to interfaces designed by humans (including human institutions and systems), not by nature (or god).")]),e._v(" "),i("li",[e._v("much complexity comes from conformation to other interfaces")]),e._v(" "),i("li",[e._v("cannot be simplified out by any redesign of the software alone")])]),e._v(" "),i("h3",{attrs:{id:"changeability"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changeability"}},[e._v("#")]),e._v(" changeability")]),e._v(" "),i("ul",[i("li",[e._v("the software entity is constantly subject to pressures for change")]),e._v(" "),i("li",[e._v("manufactured things are infrequently changed after manufacture")]),e._v(" "),i("li",[e._v("successful software have a long life\n"),i("ul",[i("li",[e._v("users pushes new behaviors")]),e._v(" "),i("li",[e._v("they need to adapt to new hardware")])])])]),e._v(" "),i("h3",{attrs:{id:"invisibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#invisibility"}},[e._v("#")]),e._v(" invisibility")]),e._v(" "),i("ul",[i("li",[e._v("software is invisible and unvisualizable. A building or a machine can be viewed globally with a plan, software are too\ncomplex for that")]),e._v(" "),i("li",[e._v("visualizing a software require several diagrams and schemes, each of them is a bias")]),e._v(" "),i("li",[e._v("this cause communication issues")])]),e._v(" "),i("h2",{attrs:{id:"b-past-breakthroughs-solved-accidental-difficulties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#b-past-breakthroughs-solved-accidental-difficulties"}},[e._v("#")]),e._v(" B - Past Breakthroughs Solved Accidental Difficulties")]),e._v(" "),i("h3",{attrs:{id:"high-level-languages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-level-languages"}},[e._v("#")]),e._v(" High-level languages")]),e._v(" "),i("ul",[i("li",[e._v("it frees a program from much of its accidental complexity")]),e._v(" "),i("li",[e._v("language development approaches closer and closer to the sophistication of users")])]),e._v(" "),i("p",[e._v("so there is a maximum gain here")]),e._v(" "),i("h3",{attrs:{id:"time-sharing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-sharing"}},[e._v("#")]),e._v(" Time-sharing")]),e._v(" "),i("ul",[i("li",[e._v("the principal effect of timesharing is to shorten system response time")]),e._v(" "),i("li",[e._v("as this response time goes to zero, at some point it passes the human threshold of noticeability, about 100 milliseconds")])]),e._v(" "),i("p",[e._v("so beyond that threshold, no benefits are to be expected")]),e._v(" "),i("h3",{attrs:{id:"unified-programming-environments"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#unified-programming-environments"}},[e._v("#")]),e._v(" Unified programming environments")]),e._v(" "),i("p",[e._v("mostly Unix")]),e._v(" "),i("p",[e._v("attack the accidental difficulties that result from using individual programs together, by providing integrated libraries, unified file formats, and pipes and filters")]),e._v(" "),i("h2",{attrs:{id:"c-hopes-for-the-silver"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#c-hopes-for-the-silver"}},[e._v("#")]),e._v(" C - Hopes for the Silver")]),e._v(" "),i("p",[e._v("potential silver bullets :")]),e._v(" "),i("ul",[i("li",[e._v("High-level language advances (Ada, Java, ...)")]),e._v(" "),i("li",[e._v("Object-oriented programming (abstract data types and hierarchical types)")]),e._v(" "),i("li",[e._v("Artificial intelligence (rule-based programming)")]),e._v(" "),i("li",[e._v("Expert systems (put at the service of the inexperienced programmer the experience and accumulated wisdom of the best programmers)")]),e._v(" "),i("li",[e._v('"Automatic" programming (the generation of a program for solving a problem from a statement of the problem specifications)')]),e._v(" "),i("li",[e._v("Graphical programming (software is very difficult to visualize, a software system is not a 3-space dimension realization)")]),e._v(" "),i("li",[e._v("Program verification (much of the essence of building a program is in fact the debugging of the specification not the program itself)")]),e._v(" "),i("li",[e._v("Environments and tools")]),e._v(" "),i("li",[e._v("Workstations")])]),e._v(" "),i("h2",{attrs:{id:"d-promising-attacks-on-the-conceptual-essence"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#d-promising-attacks-on-the-conceptual-essence"}},[e._v("#")]),e._v(" D - Promising Attacks on the Conceptual Essence")]),e._v(" "),i("h3",{attrs:{id:"buy-versus-build"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#buy-versus-build"}},[e._v("#")]),e._v(" Buy versus build")]),e._v(" "),i("blockquote",[i("p",[e._v("The most radical possible solution for constructing software is not to construct it at all.")])]),e._v(" "),i("h3",{attrs:{id:"requirements-refinement-and-rapid-prototyping"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements-refinement-and-rapid-prototyping"}},[e._v("#")]),e._v(" Requirements refinement and rapid prototyping")]),e._v(" "),i("ul",[i("li",[e._v("The hardest single part of building a software system is deciding precisely what to build.")]),e._v(" "),i("li",[e._v("For the truth is, the client does not know what he wants.")]),e._v(" "),i("li",[e._v("it is really impossible for a client to specify completely, precisely, and correctly the exact requirements of a modern software product before trying some versions of the product")])]),e._v(" "),i("blockquote",[i("p",[e._v("Therefore, one of the most promising of the current technological efforts, and one that attacks the essence,\nnot the accidents, of the software problem, is the development of approaches and tools for rapid prototyping of\nsystems as prototyping is part of the iterative specification of requirements.")])]),e._v(" "),i("p",[i("strong",[e._v("The secret is that it (ie : the software) is grown, not built.")])]),e._v(" "),i("h3",{attrs:{id:"great-designers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#great-designers"}},[e._v("#")]),e._v(" Great designers")]),e._v(" "),i("p",[e._v("The central question in how to improve the software art centers, as it always has, on people.")]),e._v(" "),i("p",[e._v("Great designs come from great designers. Software construction is a creative process. Sound methodology can empower and liberate the creative mind; it cannot inflame or inspire the drudge.")])])}),[],!1,null,null,null);t.default=a.exports}}]);