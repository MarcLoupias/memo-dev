(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{316:function(e,t,o){"use strict";o.r(t);var r=o(0),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[t("a",{attrs:{href:"http://martinfowler.com/bliki/TestDouble.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("TestDouble : martinfowler.com"),t("OutboundLink")],1),e._v(" :")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("p",[t("a",{attrs:{href:"https://stackoverflow.com/a/27151309",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's the difference between a mock & stub? - stackoverflow.com"),t("OutboundLink")],1)]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),t("p",[t("a",{attrs:{href:"http://stackoverflow.com/questions/12827580/mocking-vs-spying-in-mocking-frameworks",target:"_blank",rel:"noopener noreferrer"}},[e._v("mocking vs spying"),t("OutboundLink")],1)]),e._v(" "),e._m(7),e._v(" "),t("p",[e._v("A TDD cycle is composed of three, iterative phases :")]),e._v(" "),e._m(8),e._v(" "),t("p",[t("a",{attrs:{href:"http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Cycles of TDD : blog.cleancoder.com (2014/12)"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://8thlight.com/blog/uncle-bob/2013/03/06/ThePragmaticsOfTDD.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Pragmatics of TDD : 8thlight.com (2013/03)"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://wakeupcode.wordpress.com/2017/02/06/getting-early-feedback-applying-test-driven-development/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting early feedback applying Test-Driven Development"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("from a Pivotal Labs developer (Jasmine)\nhe links searches papers by "),t("a",{attrs:{href:"http://proceedings.informingscience.org/InSITE2012/InSITE12p165-187Bulajic0052.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM"),t("OutboundLink")],1),e._v("\nand "),t("a",{attrs:{href:"https://zeroturnaround.com/wp-content/uploads/2016/04/10.1.1.104.6319.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft"),t("OutboundLink")],1),e._v("\nThey concludes :\nReduced defect density at IBM 40% and Microsoft 60% – 90%\nIncrease of time taken to code feature (15% – 35%)\n"),t("strong",[e._v("TDD saves time & money")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://collaboration.csc.ncsu.edu/laurie/Papers/TDDpaperv8.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paper from North Carolina State University created by Boby George and Laurie Williams in 2003"),t("OutboundLink")],1)]),e._v(" "),e._m(9),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.stevefenton.co.uk/2013/05/my-unit-testing-epiphany/",target:"_blank",rel:"noopener noreferrer"}},[e._v("My unit testing epiphany - www.stevefenton.co.uk - Steve Fenton - 20130501"),t("OutboundLink")],1)]),e._v(" "),e._m(10),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.stevefenton.co.uk/2013/05/My-Unit-Testing-Epiphany-Continued/",target:"_blank",rel:"noopener noreferrer"}},[e._v("My unit testing epiphany continued - www.stevefenton.co.uk - Steve Fenton - 20130513"),t("OutboundLink")],1)]),e._v(" "),e._m(11),e._v(" "),t("p",[t("a",{attrs:{href:"https://wealcomecompany.com/blog/tdd-d%C3%A9monstration-video-fizzbuzz-michael-azerhad-wealcome",target:"_blank",rel:"noopener noreferrer"}},[e._v("Démonstration la plus connue de TDD avec Java et en français - wealcomecompany.com/blog - Michaël AZERHAD - 20161201"),t("OutboundLink")],1),e._v(" ("),t("a",{attrs:{href:"https://www.youtube.com/watch?v=nbSaq_ykOl4&feature=emb_title",target:"_blank",rel:"noopener noreferrer"}},[e._v("video youtube"),t("OutboundLink")],1),e._v(")")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),t("p",[e._v("Unit tests are written only after some production code (e.g., the code necessary for a feature of the task) was present.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),t("p",[t("a",{attrs:{href:"https://dannorth.net/introducing-bdd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introducing BDD - 200603xx - dannorth.net"),t("OutboundLink")],1)]),e._v(" "),e._m(16),e._v(" "),t("p",[e._v("A template to capture a story’s acceptance criteria :")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),t("p",[e._v("Acceptance criteria in terms of scenarios :")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),t("p",[e._v("The story card")]),e._v(" "),e._m(23),e._v(" "),t("p",[e._v("Story scenarios")]),e._v(" "),t("p",[e._v("So how do we know when we have delivered this story? There are several scenarios to consider")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),t("p",[t("a",{attrs:{href:"http://misko.hevery.com/code-reviewers-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide: Writing Testable Code : misko.hevery.com"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"flaw-1-constructor-does-real-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flaw-1-constructor-does-real-work"}},[e._v("#")]),e._v(" Flaw 1: "),t("a",{attrs:{href:"http://misko.hevery.com/code-reviewers-guide/flaw-constructor-does-real-work/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Constructor does Real Work"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Warning Signs :")]),e._v(" "),e._m(27),e._v(" "),t("h3",{attrs:{id:"flaw-2-digging-into-collaborators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flaw-2-digging-into-collaborators"}},[e._v("#")]),e._v(" Flaw 2: "),t("a",{attrs:{href:"http://misko.hevery.com/code-reviewers-guide/flaw-digging-into-collaborators/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digging into Collaborators"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Warning Signs :")]),e._v(" "),e._m(28),e._v(" "),t("h3",{attrs:{id:"flaw-3-brittle-global-state-singletons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flaw-3-brittle-global-state-singletons"}},[e._v("#")]),e._v(" Flaw 3: "),t("a",{attrs:{href:"http://misko.hevery.com/code-reviewers-guide/flaw-brittle-global-state-singletons/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brittle Global State & Singletons"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Warning Signs :")]),e._v(" "),e._m(29),e._v(" "),t("h3",{attrs:{id:"flaw-4-class-does-too-much"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flaw-4-class-does-too-much"}},[e._v("#")]),e._v(" Flaw 4: "),t("a",{attrs:{href:"http://misko.hevery.com/code-reviewers-guide/flaw-class-does-too-much/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Class Does Too Much"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Warning Signs :")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 Questions Every Unit Test Must Answer : Eric Elliott 20150829"),t("OutboundLink")],1)]),e._v(" "),e._m(32),e._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 Common Misconceptions About TDD & Unit Tests : Eric Elliott 20160526"),t("OutboundLink")],1)]),e._v(" "),e._m(33),e._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/javascript-scene/the-outrageous-cost-of-skipping-tdd-code-reviews-57887064c412",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Outrageous Cost of Skipping TDD & Code Reviews : Eric Elliott 20161214"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("It’s common for initial project build-outs to take up to 30% longer with TDD ("),t("a",{attrs:{href:"https://www.computer.org/csdl/mags/so/2007/03/s3024.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("src"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("TDD reduces production bug density 40% — 80% ("),t("a",{attrs:{href:"https://www.computer.org/csdl/mags/so/2007/03/s3024.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("src"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("fixing a production bug costs 100x more than fixing a bug at design time, and over 15x more than fixing a bug at implementation time ("),t("a",{attrs:{href:"https://www.researchgate.net/publication/255965523_Integrating_Software_Assurance_into_the_Software_Development_Life_Cycle_SDLC",target:"_blank",rel:"noopener noreferrer"}},[e._v("src"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Code reviews have similar effects. According to a 1988 study, each hour spent in code review saves 33 hours in maintenance ("),t("a",{attrs:{href:"http://www.ifsq.org/finding-ia-2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("src"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("the cost of fixing bugs that get released in production isn’t just about the cost of fixing the production bug. Interruptions increase the cost of current development work, and introduce more bugs that will eventually need fixing, too")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.sitepoint.com/javascript-testing-unit-functional-integration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript Testing: Unit vs Functional vs Integration Tests : Eric Elliott 20160425"),t("OutboundLink")],1)]),e._v(" "),e._m(34),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.atlassian.com/continuous-delivery/different-types-of-software-testing",target:"_blank",rel:"noopener noreferrer"}},[e._v("The different types of software testing : www.atlassian.com"),t("OutboundLink")],1)]),e._v(" "),e._m(35),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=EZ05e7EMOLM",target:"_blank",rel:"noopener noreferrer"}},[e._v("DevTernity 2017: Ian Cooper - TDD, Where Did It All Go Wrong"),t("OutboundLink")],1)]),e._v(" "),e._m(36),e._v(" "),t("p",[t("a",{attrs:{href:"http://robdmoore.id.au/blog/2015/01/26/review-of-ian-cooper-tdd-where-did-it-all-go-wrong",target:"_blank",rel:"noopener noreferrer"}},[e._v("Review of: Ian Cooper – TDD, where did it all go wrong - 20150126 - Robert Daniel Moore"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("This post discusses the talk "),t("a",{attrs:{href:"https://vimeo.com/68375232",target:"_blank",rel:"noopener noreferrer"}},[e._v('"TDD, where did it all go wrong"'),t("OutboundLink")],1),e._v(" by Ian Cooper, which was given in June 2013.")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),t("p",[e._v("Ian suggests that the trigger for adding a new test to the system should be "),t("a",{attrs:{href:"http://codebetter.com/iancooper/2011/10/06/avoid-testing-implementation-details-test-behaviours/",target:"_blank",rel:"noopener noreferrer"}},[e._v("adding a new behaviour rather than adding a method or class"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("your tests can focus on expressing and verifying behaviours that users care about rather than implementation details")]),e._v(" "),e._m(40),e._v(" "),t("p",[e._v("Ian suggests that the original TDD Flow outlined by Kent Beck has been lost in translation by most people.")]),e._v(" "),t("p",[e._v("Red. Green. Refactor.")]),e._v(" "),t("p",[e._v("Red. You write a test that represents the behaviour that is needed from the system.")]),e._v(" "),t("p",[e._v("Green. You write minimal code to make the test green.")]),e._v(" "),t("p",[e._v("Refactor. This is the only time you should add design.")]),e._v(" "),e._m(41),e._v(" "),t("p",[e._v("Ian points out that you cannot refactor if you have implementation details in your tests because by definition, refactoring is where you change implementation details and not the public interface or the tests.")]),e._v(" "),e._m(42),e._v(" "),t("p",[e._v("Ian suggests that one way to test behaviours rather than implementation details is to use a "),t("a",{attrs:{href:"http://alistair.cockburn.us/Hexagonal+architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("ports and adapters architecture"),t("OutboundLink")],1),e._v(" and test via the ports.")]),e._v(" "),t("p",[e._v("There is another video where he provides some "),t("a",{attrs:{href:"https://skillsmatter.com/skillscasts/5744-decoupling-from-asp-net-hexagonal-architectures-in-net",target:"_blank",rel:"noopener noreferrer"}},[e._v("more concrete examples of what he means"),t("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(43),e._v(" "),t("p",[e._v("One side effect of having unit tests for every method/class is that you are then trying to mock out every collaborator of every object and that necessarily means that you are trying to mock implementation details.")]),e._v(" "),t("p",[e._v("Using mocks of implementation details significantly increases the fragility of tests reducing their effectiveness.")]),e._v(" "),t("p",[e._v("Mocks still have their place (systems I/O)")]),e._v(" "),e._m(44),e._v(" "),t("ul",[t("li",[e._v("Complex implementation\nOne of the questions that was raised and answered in Ian’s presentation was about what to do when the code you are implementing to make a high-level unit test test pass is really complex and you find yourself needing more guidance.")]),e._v(" "),t("li",[e._v("Combinatorial explosion\nI’ve covered this comprehensively in the "),t("a",{attrs:{href:"http://robdmoore.id.au/blog/2015/01/26/review-of-j-b-rainsberger-integrated-tests-are-a-scam/",target:"_blank",rel:"noopener noreferrer"}},[e._v("previous article"),t("OutboundLink")],1),e._v(". This can be a serious problem, but as per the previous section in those instances just write the lower-level tests.")]),e._v(" "),t("li",[e._v("Complex tests\nThe other point that Ian raised is that you are interacting with more objects this might mean there is more you need to set up in your tests, which then make the arrange section of the tests harder to understand and maintain and reducing the advantage of writing the tests in the first place.")]),e._v(" "),t("li",[e._v("Multiple test failures\nIt’s definitely possible that you can cause multiple tests to fail by changing one thing.")]),e._v(" "),t("li",[e._v("Shared code gets tested twice\nthat’s fine because that shared code is an implementation detail")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"http://robdmoore.id.au/blog/2015/01/26/review-of-j-b-rainsberger-integrated-tests-are-a-scam/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Review of: J.B. Rainsberger – Integrated Tests Are A Scam - 20150126 - Robert Daniel Moore"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("This post discusses the talk "),t("a",{attrs:{href:"http://vimeo.com/80533536",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Integrated Tests Are A Scam"'),t("OutboundLink")],1),e._v(" by J.B. Rainsberger, which was given in November 2013.")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocking is a Code Smell - Eric Elliott - 20171020"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/@koresar/about-mocking-is-a-code-smell-a8c0720e04b3",target:"_blank",rel:"noopener noreferrer"}},[e._v('About "Mocking is a code smell." - Vasyl Boroviak - Comment from post above with great value'),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://raygun.com/blog/cost-of-software-errors/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How much could software errors be costing your company? - raygun.com/blog - 20170322"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"http://www.stefanhendriks.com/2012/03/31/the-difference-between-tdd-and-test-first-development/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The difference between TDD and Test First Development - www.stefanhendriks.com - 20120331"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://tech.findmypast.com/dont-mock-what-you-dont-own/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Don't mock what you don't own, Only mock types that you own - Juan Flores - no date"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/@michaelazerhad/tdd-nest-pas-ce-que-tu-crois-6b8390cb40c9",target:"_blank",rel:"noopener noreferrer"}},[e._v("TDD n’est pas ce que tu crois. - medium.com/@michaelazerhad"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/@Cyrdup/unit-testing-youre-doing-it-wrong-407a07692989?_branch_match_id=381942042700383268",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unit testing, you’re doing it wrong - medium.com/@Cyrdup - 20181019"),t("OutboundLink")],1)]),e._v(" "),e._m(45),e._v(" "),t("p",[t("a",{attrs:{href:"https://softwareengineering.stackexchange.com/questions/123627/what-are-the-london-and-chicago-schools-of-tdd",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are the London and Chicago schools of TDD? - softwareengineering.stackexchange.com - 20111206"),t("OutboundLink")],1)]),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),t("p",[t("a",{attrs:{href:"https://cleancoders.com/videos/clean-code/advanced-tdd",target:"_blank",rel:"noopener noreferrer"}},[e._v("cleancoders.com/videos"),t("OutboundLink")],1),e._v(" payantes")])])}),[function(){var e=this._self._c;return e("h1",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[this._v("#")]),this._v(" Testing")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"glossary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[this._v("#")]),this._v(" glossary")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Test Double")]),this._v(" is a generic term for any case where you replace a production object for testing purposes. There are various kinds of double that Gerard lists:")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("strong",[e._v("Dummy objects")]),e._v(" are passed around but never actually used. Usually they are just used to fill parameter lists.")]),e._v(" "),t("li",[t("strong",[e._v("Fake objects")]),e._v(" actually have working implementations, but usually take some shortcut which makes them not suitable for production (an InMemoryTestDatabase is a good example).")]),e._v(" "),t("li",[t("strong",[e._v("Stubs")]),e._v(" provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.")]),e._v(" "),t("li",[t("strong",[e._v("Spies")]),e._v(" are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.")]),e._v(" "),t("li",[t("strong",[e._v("Mocks")]),e._v(" are pre-programmed with expectations which form a specification of the calls they are expected to receive. They can throw an exception if they receive a call they don't expect and are checked during verification to ensure they got all the calls they were expecting.")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"mock-vs-stub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mock-vs-stub"}},[this._v("#")]),this._v(" mock vs stub")])},function(){var e=this,t=e._self._c;return t("blockquote",[t("p",[e._v("Here's a description of each one followed by with real world sample.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Dummy")]),e._v(" - just bogus values to satisfy the "),t("code",[e._v("API")]),e._v(".")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Example:")]),e._v(" If you're testing a method of a class which requires many mandatory parameters in a constructor which "),t("em",[e._v("have no effect")]),e._v(" on your test, then you may create dummy objects for the purpose of creating new instances of a class.")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Fake")]),e._v(" - create a test implementation of a class which may have a dependency on some external infrastructure. (It's good practice that your unit test does "),t("strong",[e._v("NOT")]),e._v(" actually interact with external infrastructure.)")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Example:")]),e._v(" Create fake implementation for accessing a database, replace it with "),t("code",[e._v("in-memory")]),e._v(" collection.")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Stub")]),e._v(" - override methods to return hard-coded values, also referred to as "),t("code",[e._v("state-based")]),e._v(".")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Example:")]),e._v(" Your test class depends on a method "),t("code",[e._v("Calculate()")]),e._v(" taking 5 minutes to complete. Rather than wait for 5 minutes you can replace its real implementation with stub that returns hard-coded values; taking only a small fraction of the time.")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Mock")]),e._v(" - very similar to "),t("code",[e._v("Stub")]),e._v(" but "),t("code",[e._v("interaction-based")]),e._v(" rather than "),t("code",[e._v("state-based")]),e._v(". This means you don't expect from "),t("code",[e._v("Mock")]),e._v(" to return some value, but to assume that specific order of method calls are made.")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Example:")]),e._v(" You're testing a user registration class. After calling "),t("code",[e._v("Save")]),e._v(", it should call "),t("code",[e._v("SendConfirmationEmail")]),e._v(".")])]),e._v(" "),t("p",[t("code",[e._v("Stubs")]),e._v(" and "),t("code",[e._v("Mocks")]),e._v(" are actually sub types of "),t("code",[e._v("Mock")]),e._v(", both swap real implementation with test implementation, but for different, specific reasons.")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"mock-vs-spy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mock-vs-spy"}},[this._v("#")]),this._v(" mock vs spy")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"test-driven-development-tdd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-driven-development-tdd"}},[this._v("#")]),this._v(" Test Driven Development (TDD)")])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("Red: Write a unit test; the unit test fails.")]),this._v(" "),e("li",[this._v("Green: Write production code; the unit test passes.")]),this._v(" "),e("li",[this._v("Refactor: Refactor the code [11]; the unit test passes.")])])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("This document demonstrates that the studied group of TDD practitioners spent only 16% more time on the overall development process")])])},function(){var e=this,t=e._self._c;return t("blockquote",[t("p",[e._v('Following Ian Cooper famous talk "TDD: Where did it all go wrong?".')]),e._v(" "),t("p",[e._v("Writing a test class for an impl class implies :")]),e._v(" "),t("ul",[t("li",[e._v("over-isolation (mocking everything)")]),e._v(" "),t("li",[e._v("testing impl instead of behaviour")])]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("red-green-refactor")]),e._v(" cycle have to be precised :")]),e._v(" "),t("ul",[t("li",[e._v("Red: Write a unit test; the unit test fails.")]),e._v(" "),t("li",[e._v("Green: Write production code; the unit test passes. "),t("em",[e._v("Returning a hardcoded value is too simplistic. Just write code without design, patters nor structure.")])]),e._v(" "),t("li",[e._v("Refactor: Refactor the code [11]; the unit test passes. "),t("em",[e._v("This is where to add design.")])])]),e._v(" "),t("p",[e._v("When you do this right, you end up with several classes that are all tested by a single test-class. This is how things should be.")]),e._v(" "),t("p",[e._v("The big mistake comes when you get carried away with isolation. If you were to undertake too much design up-front, you could end up with one test-class per class in your program.")]),e._v(" "),t("p",[e._v('The term "isolation" means that you don’t cross a port. This means not relying on network, database, file system, service or anything else that you might add an adaptor for in a Hexagonal Architecture.')])])},function(){var e=this,t=e._self._c;return t("blockquote",[t("p",[e._v("Integration testing is what you’re doing if your tests cross a port.")]),e._v(" "),t("p",[e._v('My view on what constituted a "unit" was pretty much a "class file" before I realised that this makes tests too reliant on the implementation.')]),e._v(" "),t("p",[e._v("This is the cause of over-isolation.")]),e._v(" "),t("p",[e._v('The recommendation here is that you use these low-level tests for discovery if you need them – but you don’t check them in to source control. Ian described these as "driving in first gear", which you sometimes need to do – but you want to be going faster than this.')]),e._v(" "),t("p",[e._v("New glossary :")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Term")]),e._v(" "),t("th",[e._v("Before")]),e._v(" "),t("th",[e._v("After")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Unit")]),e._v(" "),t("td",[e._v("A class file")]),e._v(" "),t("td",[e._v("A collection of classes, but nothing that crosses a port")])]),e._v(" "),t("tr",[t("td",[e._v("Integration")]),e._v(" "),t("td",[e._v("A test that relies on something else being there")]),e._v(" "),t("td",[e._v("A test that crosses over a port")])]),e._v(" "),t("tr",[t("td",[e._v("Isolation")]),e._v(" "),t("td",[e._v("Replacing every dependency a class has with a test-double")]),e._v(" "),t("td",[e._v("Replacing dependencies at the port")])])])])])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("exemple de fizzbuzz en TDD")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"test-last-development-tld"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-last-development-tld"}},[this._v("#")]),this._v(" Test Last Development (TLD)")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"behavior-driven-development-bdd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#behavior-driven-development-bdd"}},[this._v("#")]),this._v(" Behavior Driven Development (BDD)")])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("Le behavior-driven development (ou BDD) est une méthode agile qui encourage la collaboration entre les développeurs, les responsables qualités, les intervenants non-techniques et les entreprises participant à un projet de logiciel. Il a été conçu en 2003 par Dan North comme une réponse au Test Driven Development.")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Test method names should be sentences")]),e._v(" "),t("li",[e._v("A simple sentence template keeps test methods focused")]),e._v(" "),t("li",[e._v("An expressive test name is helpful when a test fails")]),e._v(" "),t("li",[e._v('"Behaviour" is a more useful word than "test"')]),e._v(" "),t("li",[e._v("JBehave emphasizes behaviour over testing (his own testing tool to replace JUnit with proper vocabulary regarding BDD)")]),e._v(" "),t("li",[e._v("Determine the next most important behaviour ("),t("strong",[e._v("What’s the next most important thing the system doesn’t do?")]),e._v(")")]),e._v(" "),t("li",[e._v("Requirements are behaviour,too")]),e._v(" "),t("li",[e._v('BDD provides a "ubiquitous language" for analysis')])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("As a")]),this._v(" [X] where Y is some feature")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("I want")]),this._v(" [Y] where Z is the benefit or value of the feature")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("so that")]),this._v(" [Z] where X is the person (or role) who will benefit")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Given")]),this._v(" some initial context (the givens),")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("When")]),this._v(" an event occurs,")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("then")]),this._v(" ensure some outcomes.")])},function(){var e=this,t=e._self._c;return t("blockquote",[t("p",[e._v("+Title: Customer withdraws cash+")]),e._v(" "),t("p",[t("strong",[e._v("As a")]),e._v(" customer,")]),e._v(" "),t("p",[t("strong",[e._v("I want")]),e._v(" to withdraw cash from an ATM,")]),e._v(" "),t("p",[t("strong",[e._v("so that")]),e._v(" I don’t have to wait in line at the bank.")])])},function(){var e=this,t=e._self._c;return t("blockquote",[t("p",[e._v("+Scenario 1: Account is in credit+")]),e._v(" "),t("p",[t("strong",[e._v("Given")]),e._v(" the account is in credit")]),e._v(" "),t("p",[e._v("And the card is valid")]),e._v(" "),t("p",[e._v("And the dispenser contains cash")]),e._v(" "),t("p",[t("strong",[e._v("When")]),e._v(" the customer requests cash")]),e._v(" "),t("p",[t("strong",[e._v("Then")]),e._v(" ensure the account is debited")]),e._v(" "),t("p",[e._v("And ensure cash is dispensed")]),e._v(" "),t("p",[e._v("And ensure the card is returned")]),e._v(" "),t("p",[e._v("+Scenario 2: Account is overdrawn past the overdraft limit+")]),e._v(" "),t("p",[t("strong",[e._v("Given")]),e._v(" the account is overdrawn")]),e._v(" "),t("p",[e._v("And the card is valid")]),e._v(" "),t("p",[t("strong",[e._v("When")]),e._v(" the customer requests cash")]),e._v(" "),t("p",[t("strong",[e._v("Then")]),e._v(" ensure a rejection message is displayed")]),e._v(" "),t("p",[e._v("And ensure cash is not dispensed")]),e._v(" "),t("p",[e._v("And ensure the card is returned")])])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("Acceptance criteria should be executable")])])},function(){var e=this._self._c;return e("h2",{attrs:{id:"writing-testable-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-testable-code"}},[this._v("#")]),this._v(" Writing Testable Code")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("new keyword in a constructor or at field declaration")]),e._v(" "),t("li",[e._v("Static method calls in a constructor or at field declaration")]),e._v(" "),t("li",[e._v("Anything more than field assignment in constructors")]),e._v(" "),t("li",[e._v("Object not fully initialized after the constructor finishes (watch out for initialize methods)")]),e._v(" "),t("li",[e._v("Control flow (conditional or looping logic) in a constructor")]),e._v(" "),t("li",[e._v("Code does complex object graph construction inside a constructor rather than using a factory or builder")]),e._v(" "),t("li",[e._v("Adding or using an initialization block")])])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("Objects are passed in but never used directly (only used to get access to other objects)")]),this._v(" "),e("li",[this._v("Law of Demeter violation: method call chain walks an object graph with more than one dot (.)")]),this._v(" "),e("li",[this._v("Suspicious names: context, environment, principal, container, or manager")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Adding or using singletons")]),e._v(" "),t("li",[e._v("Adding or using static fields or static methods")]),e._v(" "),t("li",[e._v("Adding or using static initialization blocks")]),e._v(" "),t("li",[e._v("Adding or using registries")]),e._v(" "),t("li",[e._v("Adding or using service locators")])])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("Summing up what the class does includes the word “and”")]),this._v(" "),e("li",[this._v("Class would be challenging for new team members to read and quickly “get it”")]),this._v(" "),e("li",[this._v("Class has fields that are only used in some methods")]),this._v(" "),e("li",[this._v("Class has static methods that only operate on parameters")])])},function(){var e=this._self._c;return e("h2",{attrs:{id:"articles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#articles"}},[this._v("#")]),this._v(" articles")])},function(){var e=this,t=e._self._c;return t("blockquote",[t("ul",[t("li",[e._v("What are you testing?")]),e._v(" "),t("li",[e._v("What should it do?")]),e._v(" "),t("li",[e._v("What is the actual output?")]),e._v(" "),t("li",[e._v("What is the expected output?")]),e._v(" "),t("li",[e._v("How can the test be reproduced?")])])])},function(){var e=this,t=e._self._c;return t("blockquote",[t("ul",[t("li",[e._v("TDD is too Time Consuming. The Business Team Would Never Approve")]),e._v(" "),t("li",[e._v("You Can’t Write Tests Until You Know the Design, & You Can’t Know the Design Until You Implement the Code")]),e._v(" "),t("li",[e._v("You Have to Write All Tests Before You Start the Code")]),e._v(" "),t("li",[e._v("Red, Green, and ALWAYS Refactor?")]),e._v(" "),t("li",[e._v("Everything Needs Unit Tests")])])])},function(){var e=this._self._c;return e("blockquote",[e("ul",[e("li",[e("strong",[this._v("Unit tests")]),this._v(" ensure that individual components of the app work as expected. Assertions test the component API.")]),this._v(" "),e("li",[e("strong",[this._v("Integration tests")]),this._v(" ensure that component collaborations work as expected. Assertions may test component API, UI, or side-effects (such as database I/O, logging, etc…)")]),this._v(" "),e("li",[e("strong",[this._v("Functional tests")]),this._v(" ensure that the app works as expected from the user’s perspective. Assertions primarily test the user interface.")])])])},function(){var e=this,t=e._self._c;return t("blockquote",[t("ul",[t("li",[e._v("Unit tests")]),e._v(" "),t("li",[e._v("Integration tests")]),e._v(" "),t("li",[e._v("Functional tests")]),e._v(" "),t("li",[e._v("End-to-end tests")]),e._v(" "),t("li",[e._v("Acceptance testing")]),e._v(" "),t("li",[e._v("Performance testing")]),e._v(" "),t("li",[e._v("Smoke testing")])])])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("Since Kent Beck wrote the book on TDD in 2002 a lot of words have been dedicated to the subject.")]),this._v(" "),e("p",[this._v("But many of them propagated misunderstandings of Kent's original rules so that TDD practice bears little resemblance to Kent's original ideas.")]),this._v(" "),e("p",[this._v("Key misunderstandings around what do I test, what is a unit test, and what is the 'public interface' have led to test suites that are brittle, hard to read, and do not support easy refactoring.")]),this._v(" "),e("p",[this._v("In this talk, we re-discover Kent's original proposition, discover where key misunderstandings occurred and look at a better approach to TDD that supports software development instead of impeding it.\nBe prepared from some sacred cows to be slaughtered and fewer but better tests to be written.")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Overview")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("you should write unit tests for every method and class that you introduce in an application")]),e._v(" "),t("li",[e._v("but this will necessarily result in you baking implementation details into your tests")]),e._v(" "),t("li",[e._v("causing them to be fragile when refactoring, contain a lot of mocking,")]),e._v(" "),t("li",[e._v("result in a high proportion of test code to implementation code")]),e._v(" "),t("li",[e._v("and ultimately slowing your TTM")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Testing behaviours rather than implementations")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("TDD and refactoring")])])},function(){var e=this._self._c;return e("p",[this._v("When you do this right, you end up with several classes that are all tested by a single test-class. This is how things should be. "),e("em",[this._v("The tests document the requirements of the system with minimal knowledge of the implementation. The implementation could be One Massive Function or it could be a bunch of classes")]),this._v(".")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Ports and adapters")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Mocking")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Problems with higher level unit tests")])])},function(){var e=this,t=e._self._c;return t("blockquote",[t("p",[t("strong",[e._v("Some fallacies about unit testing")])]),e._v(" "),t("ol",[t("li",[e._v("TDD is all about unit tests")]),e._v(" "),t("li",[e._v("Automated testing is all about unit tests")]),e._v(" "),t("li",[e._v("100% code coverage requires extensive unit testing")]),e._v(" "),t("li",[e._v("You have to make private methods public to reach 100% coverage")]),e._v(" "),t("li",[e._v("Some code does not need be tested")]),e._v(" "),t("li",[e._v("You need to use a mocking framework")]),e._v(" "),t("li",[e._v("Tests are expensive to write")]),e._v(" "),t("li",[e._v("The ‘testing pyramid’ is the ultimate testing strategy")])]),e._v(" "),t("p",[t("strong",[e._v("What about some truths ?")])]),e._v(" "),t("ol",[t("li",[e._v("Unit tests are not about testing a method in isolation")]),e._v(" "),t("li",[e._v("100% coverage does not mean your code is bug free")]),e._v(" "),t("li",[e._v("There is a tooling problem")]),e._v(" "),t("li",[e._v("It is difficult")]),e._v(" "),t("li",[e._v("Tests require maintenance")]),e._v(" "),t("li",[e._v("Having too many tests is a problem")]),e._v(" "),t("li",[e._v("Throwing away tests is a hygienic move")]),e._v(" "),t("li",[e._v("Automated tests are useful")])])])},function(){var e=this,t=e._self._c;return t("blockquote",[t("p",[e._v("Suppose you have class called "),t("code",[e._v("ledger")]),e._v(" a method called "),t("code",[e._v("calculate")]),e._v(" that uses a "),t("code",[e._v("Calculator")]),e._v(" to do different types of calculations depending on the arguments passed to "),t("code",[e._v("calculate")]),e._v(", for example "),t("code",[e._v("multiply(x, y)")]),e._v(" or "),t("code",[e._v("subtract(x, y)")]),e._v(".")]),e._v(" "),t("p",[e._v("Now, suppose you want to test what happens when you call "),t("code",[e._v('ledger.calculate("5 * 7")')]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("London/Interaction")]),e._v(" school would have you assert whether "),t("code",[e._v("Calculator.multiply(5,7)")]),e._v(" got called. The various mocking frameworks are useful for this, and it can be very useful if, for example, you don't have ownership of the "),t("code",[e._v("Calculator")]),e._v(" object (suppose it is an external component or service that you cannot test directly, but you do know you have to call in a particular way).")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("Chicago/State")]),e._v(" school would have you assert whether the result is 35. The jUnit/nUnit frameworks are generally geared towards doing this.")]),e._v(" "),t("p",[e._v("Both are valid and important tests.")])])},function(){var e=this._self._c;return e("h2",{attrs:{id:"videos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[this._v("#")]),this._v(" videos")])}],!1,null,null,null);t.default=n.exports}}]);