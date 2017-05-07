# Testing

## glossary

[TestDouble : martinfowler.com] (http://martinfowler.com/bliki/TestDouble.html) :

**Test Double** is a generic term for any case where you replace a production object for testing purposes. There are various kinds of double that Gerard lists:

- **Dummy objects** are passed around but never actually used. Usually they are just used to fill parameter lists.
- **Fake objects** actually have working implementations, but usually take some shortcut which makes them not suitable for production (an InMemoryTestDatabase is a good example).
- **Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
- **Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
- **Mocks** are pre-programmed with expectations which form a specification of the calls they are expected to receive. They can throw an exception if they receive a call they don't expect and are checked during verification to ensure they got all the calls they were expecting.

### mock vs spy

[mocking vs spying] (http://stackoverflow.com/questions/12827580/mocking-vs-spying-in-mocking-frameworks)

### Test Driven Development (TDD)

A TDD cycle is composed of three, iterative phases.
- Red: Write a unit test; the unit test fails.
- Green: Write production code; the unit test passes.
- Blue: Refactor the code [11]; the unit test passes.

[The Cycles of TDD : blog.cleancoder.com (2014/12)](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)

[The Pragmatics of TDD : 8thlight.com (2013/03)](https://8thlight.com/blog/uncle-bob/2013/03/06/ThePragmaticsOfTDD.html)

### Test Last Development (TLD)

Unit tests are written only after some production code (e.g., the code necessary for a feature of the task) was present.

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
