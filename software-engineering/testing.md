# Testing

## glossary

[TestDouble : martinfowler.com](http://martinfowler.com/bliki/TestDouble.html) :

**Test Double** is a generic term for any case where you replace a production object for testing purposes. There are various kinds of double that Gerard lists:

- **Dummy objects** are passed around but never actually used. Usually they are just used to fill parameter lists.
- **Fake objects** actually have working implementations, but usually take some shortcut which makes them not suitable for production (an InMemoryTestDatabase is a good example).
- **Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
- **Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
- **Mocks** are pre-programmed with expectations which form a specification of the calls they are expected to receive. They can throw an exception if they receive a call they don't expect and are checked during verification to ensure they got all the calls they were expecting.

### mock vs spy

[mocking vs spying](http://stackoverflow.com/questions/12827580/mocking-vs-spying-in-mocking-frameworks)

### Test Driven Development (TDD)

A TDD cycle is composed of three, iterative phases.
- Red: Write a unit test; the unit test fails.
- Green: Write production code; the unit test passes.
- Refactor: Refactor the code [11]; the unit test passes.

[The Cycles of TDD : blog.cleancoder.com (2014/12)](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)

[The Pragmatics of TDD : 8thlight.com (2013/03)](https://8thlight.com/blog/uncle-bob/2013/03/06/ThePragmaticsOfTDD.html)

[Getting early feedback applying Test-Driven Development](https://wakeupcode.wordpress.com/2017/02/06/getting-early-feedback-applying-test-driven-development/)

> from a Pivotal Labs developer (Jasmine)
> he links searches papers by [IBM](http://proceedings.informingscience.org/InSITE2012/InSITE12p165-187Bulajic0052.pdf)
> and [Microsoft](https://zeroturnaround.com/wp-content/uploads/2016/04/10.1.1.104.6319.pdf)
> They concludes :
> Reduced defect density at IBM 40% and Microsoft 60% – 90% 
> Increase of time taken to code feature (15% – 35%) 
> **TDD saves time & money**

[Paper from North Carolina State University created by Boby George and Laurie Williams in 2003](https://collaboration.csc.ncsu.edu/laurie/Papers/TDDpaperv8.pdf)

> This document demonstrates that the studied group of TDD practitioners spent only 16% more time on the overall development process

[My unit testing epiphany - www.stevefenton.co.uk - Steve Fenton - 20130501](https://www.stevefenton.co.uk/2013/05/my-unit-testing-epiphany/)

> Following Ian Cooper famous talk "TDD: Where did it all go wrong?".
> 
> Writing a test class for an impl class implies :
> - over-isolation (mocking everything)
> - testing impl instead of behaviour
> 
> The *red-green-refactor* cycle have to be precised :
> 
> - Red: Write a unit test; the unit test fails.
> - Green: Write production code; the unit test passes. *Returning a hardcoded value is too simplistic. Just write code without design, patters nor structure.*
> - Refactor: Refactor the code [11]; the unit test passes. *This is where to add design.*
> 
> When you do this right, you end up with several classes that are all tested by a single test-class. This is how things should be.
> 
> The big mistake comes when you get carried away with isolation. If you were to undertake too much design up-front, you could end up with one test-class per class in your program.
> 
> The term "isolation" means that you don’t cross a port. This means not relying on network, database, file system, service or anything else that you might add an adaptor for in a Hexagonal Architecture.

[My unit testing epiphany continued - www.stevefenton.co.uk - Steve Fenton - 20130513](https://www.stevefenton.co.uk/2013/05/My-Unit-Testing-Epiphany-Continued/)

> Integration testing is what you’re doing if your tests cross a port.
> 
> My view on what constituted a "unit" was pretty much a "class file" before I realised that this makes tests too reliant on the implementation.
> 
> This is the cause of over-isolation.
> 
> The recommendation here is that you use these low-level tests for discovery if you need them – but you don’t check them in to source control. Ian described these as "driving in first gear", which you sometimes need to do – but you want to be going faster than this.
> 
> New glossary :
> 
> | Term | Before | After |
> | ---- | ------ | ----- |
> | Unit | A class file | A collection of classes, but nothing that crosses a port |
> | Integration | A test that relies on something else being there | A test that crosses over a port |
> | Isolation | Replacing every dependency a class has with a test-double | Replacing dependencies at the port |

### Test Last Development (TLD)

Unit tests are written only after some production code (e.g., the code necessary for a feature of the task) was present.

### Behavior Driven Development (BDD)

> Le behavior-driven development (ou BDD) est une méthode agile qui encourage la collaboration entre les développeurs, les responsables qualités, les intervenants non-techniques et les entreprises participant à un projet de logiciel. Il a été conçu en 2003 par Dan North comme une réponse au Test Driven Development.

[Introducing BDD - 200603xx - dannorth.net](https://dannorth.net/introducing-bdd/)

- Test method names should be sentences
- A simple sentence template keeps test methods focused
- An expressive test name is helpful when a test fails
- "Behaviour" is a more useful word than "test"
- JBehave emphasizes behaviour over testing (his own testing tool to replace JUnit with proper vocabulary regarding BDD)
- Determine the next most important behaviour (**What’s the next most important thing the system doesn’t do?**)
- Requirements are behaviour,too
- BDD provides a "ubiquitous language" for analysis

A template to capture a story’s acceptance criteria :

**As a** [X] where Y is some feature

**I want** [Y] where Z is the benefit or value of the feature

**so that** [Z] where X is the person (or role) who will benefit

Acceptance criteria in terms of scenarios :

**Given** some initial context (the givens),

**When** an event occurs,

**then** ensure some outcomes.

The story card

> +Title: Customer withdraws cash+
>
> **As a** customer,
>
> **I want** to withdraw cash from an ATM,
>
> **so that** I don’t have to wait in line at the bank.

Story scenarios

So how do we know when we have delivered this story? There are several scenarios to consider

> +Scenario 1: Account is in credit+
>
> **Given** the account is in credit
>
> And the card is valid
>
> And the dispenser contains cash
>
> **When** the customer requests cash
>
> **Then** ensure the account is debited
>
> And ensure cash is dispensed
>
> And ensure the card is returned

> +Scenario 2: Account is overdrawn past the overdraft limit+
>
> **Given** the account is overdrawn
>
> And the card is valid
>
> **When** the customer requests cash
>
> **Then** ensure a rejection message is displayed
>
> And ensure cash is not dispensed
>
> And ensure the card is returned

- Acceptance criteria should be executable

## Writing Testable Code

[Guide: Writing Testable Code : misko.hevery.com](misko.hevery.com/code-reviewers-guide/)

### Flaw 1: [Constructor does Real Work](http://misko.hevery.com/code-reviewers-guide/flaw-constructor-does-real-work/)

**Warning Signs**

- new keyword in a constructor or at field declaration
- Static method calls in a constructor or at field declaration
- Anything more than field assignment in constructors
- Object not fully initialized after the constructor finishes (watch out for initialize methods)
- Control flow (conditional or looping logic) in a constructor
- Code does complex object graph construction inside a constructor rather than using a factory or builder
- Adding or using an initialization block

### Flaw 2: [Digging into Collaborators](http://misko.hevery.com/code-reviewers-guide/flaw-digging-into-collaborators/)

**Warning Signs**

- Objects are passed in but never used directly (only used to get access to other objects)
- Law of Demeter violation: method call chain walks an object graph with more than one dot (.)
- Suspicious names: context, environment, principal, container, or manager

### Flaw 3: [Brittle Global State & Singletons](http://misko.hevery.com/code-reviewers-guide/flaw-brittle-global-state-singletons/)

**Warning Signs**

- Adding or using singletons
- Adding or using static fields or static methods
- Adding or using static initialization blocks
- Adding or using registries
- Adding or using service locators

### Flaw 4: [Class Does Too Much](http://misko.hevery.com/code-reviewers-guide/flaw-class-does-too-much/)

**Warning Signs**

- Summing up what the class does includes the word “and”
- Class would be challenging for new team members to read and quickly “get it”
- Class has fields that are only used in some methods
- Class has static methods that only operate on parameters

## articles

[5 Questions Every Unit Test Must Answer : Eric Elliott 20150829](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)

> - What are you testing?
> - What should it do?
> - What is the actual output?
> - What is the expected output?
> - How can the test be reproduced?

[5 Common Misconceptions About TDD & Unit Tests : Eric Elliott 20160526](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9)

> - TDD is too Time Consuming. The Business Team Would Never Approve
> - You Can’t Write Tests Until You Know the Design, & You Can’t Know the Design Until You Implement the Code
> - You Have to Write All Tests Before You Start the Code
> - Red, Green, and ALWAYS Refactor?
> - Everything Needs Unit Tests

[The Outrageous Cost of Skipping TDD & Code Reviews : Eric Elliott 20161214](https://medium.com/javascript-scene/the-outrageous-cost-of-skipping-tdd-code-reviews-57887064c412)

> - It’s common for initial project build-outs to take up to 30% longer with TDD ([src](https://www.computer.org/csdl/mags/so/2007/03/s3024.pdf))
> - TDD reduces production bug density 40% — 80% ([src](https://www.computer.org/csdl/mags/so/2007/03/s3024.pdf))
> - fixing a production bug costs 100x more than fixing a bug at design time, and over 15x more than fixing a bug at implementation time ([src](https://www.researchgate.net/publication/255965523_Integrating_Software_Assurance_into_the_Software_Development_Life_Cycle_SDLC))
> - Code reviews have similar effects. According to a 1988 study, each hour spent in code review saves 33 hours in maintenance ([src](http://www.ifsq.org/finding-ia-2.html)).
> - the cost of fixing bugs that get released in production isn’t just about the cost of fixing the production bug. Interruptions increase the cost of current development work, and introduce more bugs that will eventually need fixing, too

[JavaScript Testing: Unit vs Functional vs Integration Tests : Eric Elliott 20160425](https://www.sitepoint.com/javascript-testing-unit-functional-integration/)

> - **Unit tests** ensure that individual components of the app work as expected. Assertions test the component API.
> - **Integration tests** ensure that component collaborations work as expected. Assertions may test component API, UI, or side-effects (such as database I/O, logging, etc…)
> - **Functional tests** ensure that the app works as expected from the user’s perspective. Assertions primarily test the user interface.

[The different types of software testing : www.atlassian.com](https://www.atlassian.com/continuous-delivery/different-types-of-software-testing)

> - Unit tests
> - Integration tests
> - Functional tests
> - End-to-end tests
> - Acceptance testing
> - Performance testing
> - Smoke testing

[DevTernity 2017: Ian Cooper - TDD, Where Did It All Go Wrong](https://www.youtube.com/watch?v=EZ05e7EMOLM)

>
> Since Kent Beck wrote the book on TDD in 2002 a lot of words have been dedicated to the subject. 
> 
> But many of them propagated misunderstandings of Kent's original rules so that TDD practice bears little resemblance to Kent's original ideas. 
> 
> Key misunderstandings around what do I test, what is a unit test, and what is the 'public interface' have led to test suites that are brittle, hard to read, and do not support easy refactoring. 
> 
> In this talk, we re-discover Kent's original proposition, discover where key misunderstandings occurred and look at a better approach to TDD that supports software development instead of impeding it. 
> Be prepared from some sacred cows to be slaughtered and fewer but better tests to be written.
> 

[Review of: Ian Cooper – TDD, where did it all go wrong - 20150126 - Robert Daniel Moore](http://robdmoore.id.au/blog/2015/01/26/review-of-ian-cooper-tdd-where-did-it-all-go-wrong)

> This post discusses the talk ["TDD, where did it all go wrong"](https://vimeo.com/68375232) by Ian Cooper, which was given in June 2013.
>
> **Overview**
> 
> - you should write unit tests for every method and class that you introduce in an application
> - but this will necessarily result in you baking implementation details into your tests
> - causing them to be fragile when refactoring, contain a lot of mocking, 
> - result in a high proportion of test code to implementation code 
> - and ultimately slowing your TTM
> 
> **Testing behaviours rather than implementations**
> 
> Ian suggests that the trigger for adding a new test to the system should be [adding a new behaviour rather than adding a method or class](http://codebetter.com/iancooper/2011/10/06/avoid-testing-implementation-details-test-behaviours/).
> 
> your tests can focus on expressing and verifying behaviours that users care about rather than implementation details
> 
> **TDD and refactoring**
> 
> Ian suggests that the original TDD Flow outlined by Kent Beck has been lost in translation by most people.
> 
> Red. Green. Refactor.
> 
> Red. You write a test that represents the behaviour that is needed from the system.
>
> Green. You write minimal code to make the test green.
> 
> Refactor. This is the only time you should add design.
> 
> When you do this right, you end up with several classes that are all tested by a single test-class. This is how things should be. *The tests document the requirements of the system with minimal knowledge of the implementation. The implementation could be One Massive Function or it could be a bunch of classes*.
> 
> Ian points out that you cannot refactor if you have implementation details in your tests because by definition, refactoring is where you change implementation details and not the public interface or the tests.
> 
> **Ports and adapters**
> 
> Ian suggests that one way to test behaviours rather than implementation details is to use a [ports and adapters architecture](http://alistair.cockburn.us/Hexagonal+architecture) and test via the ports.
> 
> There is another video where he provides some [more concrete examples of what he means](https://skillsmatter.com/skillscasts/5744-decoupling-from-asp-net-hexagonal-architectures-in-net).
> 
> **Mocking**
> 
> One side effect of having unit tests for every method/class is that you are then trying to mock out every collaborator of every object and that necessarily means that you are trying to mock implementation details.
> 
> Using mocks of implementation details significantly increases the fragility of tests reducing their effectiveness.
> 
> Mocks still have their place (systems I/O)
> 
> **Problems with higher level unit tests**
> 
> - Complex implementation
> One of the questions that was raised and answered in Ian’s presentation was about what to do when the code you are implementing to make a high-level unit test test pass is really complex and you find yourself needing more guidance.
> - Combinatorial explosion
> I’ve covered this comprehensively in the [previous article](http://robdmoore.id.au/blog/2015/01/26/review-of-j-b-rainsberger-integrated-tests-are-a-scam/). This can be a serious problem, but as per the previous section in those instances just write the lower-level tests.
> - Complex tests
> The other point that Ian raised is that you are interacting with more objects this might mean there is more you need to set up in your tests, which then make the arrange section of the tests harder to understand and maintain and reducing the advantage of writing the tests in the first place. 
> - Multiple test failures
> It’s definitely possible that you can cause multiple tests to fail by changing one thing.
> - Shared code gets tested twice
> that’s fine because that shared code is an implementation detail 
> 

[Review of: J.B. Rainsberger – Integrated Tests Are A Scam - 20150126 - Robert Daniel Moore](http://robdmoore.id.au/blog/2015/01/26/review-of-j-b-rainsberger-integrated-tests-are-a-scam/)

> This post discusses the talk ["Integrated Tests Are A Scam"](http://vimeo.com/80533536) by J.B. Rainsberger, which was given in November 2013.
> 

[Mocking is a Code Smell - Eric Elliott - 20171020](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)

[About "Mocking is a code smell." - Vasyl Boroviak - Comment from post above with great value](https://medium.com/@koresar/about-mocking-is-a-code-smell-a8c0720e04b3)

[How much could software errors be costing your company? - raygun.com/blog - 20170322](https://raygun.com/blog/cost-of-software-errors/)

[The difference between TDD and Test First Development - www.stefanhendriks.com - 20120331](http://www.stefanhendriks.com/2012/03/31/the-difference-between-tdd-and-test-first-development/)

[Don't mock what you don't own, Only mock types that you own - Juan Flores - no date](https://tech.findmypast.com/dont-mock-what-you-dont-own/)

[TDD n’est pas ce que tu crois. - medium.com/@michaelazerhad](https://medium.com/@michaelazerhad/tdd-nest-pas-ce-que-tu-crois-6b8390cb40c9)

## videos

[cleancoders.com/videos](https://cleancoders.com/videos/clean-code/advanced-tdd) payantes
