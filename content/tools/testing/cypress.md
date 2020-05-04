# cypress e2e solution

[cypress.io](https://www.cypress.io/)

- alternative to phantomJs, Karma, Selenium, ...
- in private beta (still in 2017)
- not already opensource [but coming](https://www.cypress.io/blog/2017/05/04/cypress-is-going-open-source/)
- [**it's done :-)**](https://www.cypress.io/blog/2017/10/10/cypress-is-now-public-beta/)

## features and objectives

- **fast** (running as fast as unit testing)
- **reliable** (no inconsistent errors like in Selenium) (inconsistents errors examples in [Fixing the flake on CI : http://samsaccone.com](http://samsaccone.com/posts/fixing-the-flake.html))
- **rewindable** (you can see what the test was doing step by step)

### trade offs

[Cypress Trade Offs](https://github.com/cypress-io/cypress-documentation/issues/162)

## environment and browser support

[Proposal: Support for Cross Browser Testing](https://github.com/cypress-io/cypress/issues/310)

> we only support Chrome variants such as `Chrome`, `Chromium`, and `Canary`.
>
> We will be adding cross browser support likely by EOY. (20171017) Firefox, Safari then Edge.

### native browsers events support

[Support for Native Browser Events](https://github.com/cypress-io/cypress/issues/311)

> From there we'll add new commands for file uploads, etc.

## installing with npm behind a proxy

- [npm install not working behind corporate firewall](https://github.com/cypress-io/cypress/issues/733)
- [Document CYPRESS_BINARY_VERSION environment variable](https://github.com/cypress-io/cypress-documentation/issues/121)

## comparison Cypress vs TestCafe

[Evaluating Cypress and TestCafe for end to end testing - medium.com/yld-engineering-blog - 20180329](https://medium.com/yld-engineering-blog/evaluating-cypress-and-testcafe-for-end-to-end-testing-fcd0303d2103)

[Compare to Cypress.io - testcafe-discuss.devexpress.com - 20171010](https://testcafe-discuss.devexpress.com/t/compare-to-cypress-io/490/2)

> with post by TestCafe dev

## usage and recommandations

[Cypress slows down drastically over long runs - restart renderer between spec files?](https://github.com/cypress-io/cypress/issues/431#issuecomment-339710315)

> You cannot run all of your tests. The GUI is a mode built specifically to run one or a small number of tests at a time.
>
> you can tell Cypress to cleanup snapshots by setting the `{ numTestsKeptInMemory: 0 }` in `cypress.json`. This will purge snapshots aggressively but then you will lose the ability to debug any of your tests.
>
> If you want to run all your tests you need to do it from the command line using `cypress run`. In that mode it makes specific performance optimizations (like not taking snapshots) because it knows you're not iterating on a test or working with the results.

[Tests slows down to a crawl and eventually times out/crashes](https://github.com/cypress-io/cypress/issues/990)

> The reason Cypress is crashing and chrome headless isn't is because of the additional features Cypress provides that no other testing tool does. In this case it's the time travel functionality.
>
> Cypress has two basic modes of operation: GUI mode & CLI mode
>
> GUI mode is optimized for **debugging** and CLI mode is optimized for **running**.
>
> The reason Cypress is slowing down and crashing is because in GUI mode it takes snapshots for **very single command**.
>
> `window` and `document` are being preserved in memory for every single page transition. This is where it chews up memory and you'll experience those slow downs and crashes.

[My test passes `cypress open` but fails with `cypress run`](https://github.com/cypress-io/cypress/issues/1011)

> One is running in Chrome, the other is running in Chromium (Electron). There are differences in these browsers.
>
> Cf [documentation - Launching Browsers : Electron Browser](https://docs.cypress.io/guides/guides/launching-browsers.html#Electron-Browser)

[doc off best practices - selectors (need cypress 2.1+)](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)

> Use `data-*` attributes to provide context to your selectors and insulate them from CSS or JS changes.

## login

[Best Practices - Visiting External Sites](https://docs.cypress.io/guides/references/best-practices.html#Visiting-External-Sites)

[Web Security - External Navigation](https://docs.cypress.io/guides/guides/web-security.html#External-Navigation)

[Web Security - Form Submission Redirects](https://docs.cypress.io/guides/guides/web-security.html#Form-Submission-Redirects)

[Cypress.io Keycloak Integration : 20171028](https://vrockai.github.io/blog/2017/10/28/cypress-keycloak-intregration/)

## how a test works

### selenium

Between each action we wait a defined amount of time to be sure the browsers have rendered the DOM needed for the test.

### cypress

Cypress runs [inside the browser](https://docs.cypress.io/guides/references/trade-offs.html#Inside-the-browser).

The test suite execute the script and queue all the commands. Then cypress run everything in the same order. Cypress execute the first command and retry until success or fail (defined timeout). This modus operandi is way faster then selenium.

Each command takes a snapshot of the current DOM.

Numerous commands contains their own embedded assertions.

See [core concepts documentation > Chains of Commands > Commands Are Asynchronous](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Asynchronous).

## articles

[Web testing nirvana with Cypress](https://glebbahmutov.com/blog/web-testing-nirvana-with-cypress/)

[Installing and Running](https://docs.cypress.io/docs/installing-and-running)

[Control an AngularJS Application From E2E Tests : 20171115](https://www.cypress.io/blog/2017/11/15/Control-Angular-Application-From-E2E-Tests/#Element-scope)

## slides

[Testing Vue Apps with Cypress.io (STLJS Meetup April 2018) - Christian Catalan - 20180419](https://speakerdeck.com/christiancatalan/testing-vue-apps-with-cypress-dot-io-stljs-meetup-april-2018)

> awesome context, excellent slides

[Automated Testing for the Modern Web - Jennifer Jeshane - 20180509](https://speakerdeck.com/jennifershehane/automated-testing-for-the-modern-web)

> good e2e history prez

## videos

[Brian Mann, Testing the way it should be : ReactiveConf 2016](https://www.youtube.com/watch?v=lK_ihqnQQEM)

> Brian Mann creator of `cypress.io`
>
> cypress is a testing tool running entirely in JavaScript
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
>
> - Setup (sane config, less hassle to set up, etc ...)
> - Writing (Simpler to write, testing responsive, see visually what broke, async, etc ...)
> - Management (clear and direct way to understand WHY a test have failed)
>
> Selenium (or webdriver) is the core tool. Embedded in Protractor, Nightwatch, ...
>
> At that time, all the webapp were simple and staless (full page refresh at each user action). JavaScript was not to
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
> ```bash
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
