
# cypress e2e solution

- alternative to phantomJs, Karma, Selenium, ...
- in private beta (still in 2017)
- not already opensource [but coming](https://www.cypress.io/blog/2017/05/04/cypress-is-going-open-source/)
- [**it's done :-)**](https://www.cypress.io/blog/2017/10/10/cypress-is-now-public-beta/)

[cypress.io](https://www.cypress.io/)

## features & objectives

- **fast** (running as fast as unit testing)
- **reliable** (no inconsistent errors like in Selenium)
- **rewindable** (you can see what the test was doing step by step)

## environment and browser support

[Proposal: Support for Cross Browser Testing](https://github.com/cypress-io/cypress/issues/310)

> we only support Chrome variants such as `Chrome`, `Chromium`, and `Canary`.

> We will be adding cross browser support likely by EOY. (20171017) Firefox, Safari then Edge.

## articles

[Web testing nirvana with Cypress](https://glebbahmutov.com/blog/web-testing-nirvana-with-cypress/)

[Installing and Running](https://docs.cypress.io/docs/installing-and-running)

## videos

[Brian Mann, Testing the way it should be : ReactiveConf 2016](https://www.youtube.com/watch?v=lK_ihqnQQEM)

> Brian Mann creator of `cypress.io`
> 
> cypress is a testing tool running entirely in javascript
> 
> **Why another testing tool ?**
> 
> Sharing is own experience in the first part :
> 
> - 9 years developping webapp including 5 with testing
> - testing is too hard 
> - tools are too old (selenium is born in 2004, [cf Selenium history](http://www.seleniumhq.org/about/history.jsp))
> - needs a dedicated Q/A team to works well
> - Brian talks to a lot of developpers to know what they need in remplacement of actual tools
> 
> **What developpers needs ?**
> 
> 3 recurring things developpers finds challenging :
> - Setup (sane config, less hassle to set up, etc ...)
> - Writing (Simpler to write, testing responsive, see visually what broke, async, etc ...)
> - Management (clear and direct way to understand WHY a test have failed)
> 
> Selenium (or webdriver) is the core tool. Embedded in Protractor, Nightwatch, ...
> 
> At that time, all the webapp were simple and staless (full page refresh at each user action). Javascript was not to
> build webapp but to decorate existing webapp. Most of the code was synchronous. Nowadays, there is SPA, stateful,
> no page refresh and everything is asynchronous.
> 
> Selenium original flaw is : it is a stateless http API. It is impossible to test effectively a stateful app with 
> a stateless API. Selenium cannot know and show a particular state at a particular moment.
> 
> This forces dev to build tests (e2e) after everything is built (impossible to TDD)
> 
> **How cypress solves the problem ?**
> 
> Part 1: Setup
> 
> ```
> npm install -g cypress-cli && npm install cypress
> 
> cypress open
> ```
> 
> You are done. You can write your first test.
> 
> Part 2: Writing
> 
> Working on reporting, when a assertion pass, and when it fail. Lot's of information for the developer.
> 
> Snapshoting : Every command ran by cypress takes a snapshot of the DOM. You can open your dev tools and check 
> the logs pushed by cypress with the state of the app.
> 
> Events : They are captured during execution an logged into the console.
> 
> Frameworks : Cypress is built on top of [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/).
> 
> Async : Mostly hidden, each command return promise under the hood.
> 
> Hooks : `onBeforeLoad` hook for `cy.visit` command allows developer to : open the browser debugger, alter the global
> state of the app (for example by injecting user info or tokens).
> You can stub server responses (very nice to tests error messages and related ui behavior)
> 
> Part 3: Management
> 
> CI related. When a test suite will be ran in a CI provider (TravisCI for ex), output will be sent to cypress,
> then cypress will sent it back to cypress desktop app.
> 
> Can output logs, screenshots, even video of the suite
> 
> Ability to remote connect to the CI to see and manage the suite run.
> 
> **Goals for cypress**
> 
> - Open Source
> - Champions
> - Documentation
> - Happiness
> 
> **Roadmap**
> 
> They are only 5. They have raised some money. Not all repo are opensource now.
> 
> **Questions**
> 
> Not supporting IE right now, it will. (Brian thinks crossbrowser testing is going down because there is less and less
> difference between browsers).


[Jack Franklin, Testing React Applications : React Amsterdam 2016](https://www.youtube.com/watch?v=KBhHsYlF4mQ)
