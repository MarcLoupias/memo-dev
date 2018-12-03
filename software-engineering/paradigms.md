# paradigms

## imperative programming

[Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)

> In computer science, imperative programming is a programming paradigm that uses statements that change a program's state.

> Imperative programming focuses on describing how a program operates.

## declarative programming

[Declarative programming](https://en.wikipedia.org/wiki/Declarative_programming)

> is a programming paradigm [...] that expresses the logic of a computation without describing its control flow.

> Many languages that apply this style attempt to minimize or eliminate side effects by describing what the program must accomplish in terms of the problem domain, rather than describe how to accomplish it as a sequence of the programming language primitives (the how being left up to the language's implementation). This is in contrast with imperative programming, which implements algorithms in explicit steps.

## structured programming

[Structured programming](https://en.wikipedia.org/wiki/Structured_programming)

> don't use unrestrained GOTO (Robert C. Martin)

> aimed at improving the clarity, quality, and development time of a computer program by making extensive use of subroutines, block structures, for and while loops—in contrast to using simple tests and jumps such as the go to statement which could lead to "spaghetti code" causing difficulty to both follow and maintain.

## functional programming

[Functional programming : en.wikipedia.org](https://en.wikipedia.org/wiki/Functional_programming)

[Functional programming : wiki.haskell.org](https://wiki.haskell.org/Functional_programming)

> Functional programming is a style of programming which models computations as the evaluation of expressions. 
> This article is meant to describe it briefly; 
> however, the best way to understand functional programming is to learn the basics of one of the functional programming languages

Very quick **TLDR** : **avoids shared state & mutable data**, **functions always returns a value** & a function with given args will always returns the same value.

> don't use assignment (Robert C. Martin)

No assignment means var are immutables.

> a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means programming is done with expressions or declarations instead of statements.

N.B. : An **expression** is not a **statement** but a valid unit of code that *resolves to a value*. Not all **statements** resolve to a value. 

N.B.2. : 
- *An expression is a chunk of code that evaluates to a single value.* 
- *A statement is a chunk of code that may not evaluate to a value at all.*
cf [Nested Ternaries are Great - Eric Elliott - 20180126](https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340)

[Mostly adequate guide to FP (in javascript)](https://github.com/MostlyAdequate/mostly-adequate-guide) [gitbook](https://drboolean.gitbooks.io/mostly-adequate-guide/content/)

[Learning Functional Programming with JavaScript - JSUnconf 2016 : Anjana Vakil](https://www.youtube.com/watch?v=e-5obm1G_FY) - [slides](https://slidr.io/vakila/learning-functional-programming-with-javascript#1)

[Immutable data structures for functional JS : Anjana Vakil](https://2017.jsconf.eu/speakers/anjana-vakil-immutable-data-structures-for-functional-js.html)

[Why Curry Helps - hughfdjackson.com (2015 ?)](https://hughfdjackson.com/javascript/why-curry-helps/)

[Favoring Curry - Scott Sauyet - 20140618](https://fr.umio.us/favoring-curry/)

[An introduction to functional programming : Mary Rose Cook](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming)

[Robert C Martin - Functional Programming; What? Why? When?](https://www.youtube.com/watch?v=7Zlp9rKHGD4)

- [4:07](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=247s) "Functional Programming: What? When? Why?" or "The Failure of State" 
- [5:10](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=310s) Rich Hickey is the author of Clojure. Listen to his talks. 
- [5:40](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=340s) What is state? Variables. 
- [11:15](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=675s) Structure and Interpretation of Computer Programs. This is a fascinating book. For the first 250 pages, the book uses no assignment statements. 
- [14:15](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=855s) Here's how SICP's model of computing worked before they introduced an assignment statement. Simply replace a function call with its implementation. 
- [15:58](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=958s) Once you introduce assignment. You can no longer replace a function call with its implementation. Why? Because the state of the system may have changed. An assignment statement introduces the concept of time. 
- [18:04](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1084s) Side effect: an assignment statement. If there's no assignment, there's no side effect. 
- [20:22](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1222s) What "hack" have we done to protect us from memory leaks? Garbage collection. 
- [31:46](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1906s) Functional programming was invented in 1957 before OO and structured. But memory was too expensive to make it practical. But memory is cheap now. 
- [32:53](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1973s) Should we change how we program? We should because: 
  1) Functional programs are simpler - which makes them easier to write and maintain 
  2) There's no temporal coupling - no worrying if some function was called before another function. 
  3) Fewer concurrency issues. In a purely functional program, there's no concurrency because there is no state. 
  4) No asking, "What's the state?" 
- [38:38](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=2318s) We're using multicore CPU's now because we can't increase clock rate anymore. And hardware makers are doing bizarre tradeoffs. They're making individual processors slower but putting more processors in. So individual cores slow down but the chip throughput goes up if you can take advantage of all the cores. 
- [42:00](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=2520s) How are you going to work with an abundance of cores? Maybe we need to walk away from the assignment statement. 
- [49:49](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=2989s) OO = procedure + state. OO is exposed procedure but hidden state (encapsulation). It's possible to write functional programs using an OO style. All of the objects become immutable.

### functionnal programming concepts

[Why using `_.chain` is a mistake. - medium.com - Izaak Schroeder - 20160217](https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba)

**partial application**

> Partial application means taking a function with n arguments and returning a new function with n-i arguments (given i<n), where the i arguments are bound to the new function.

```javascript
const add = (a, b) => a + b;
const add5 = _.partial(add, 5); // now `a` is bound (locked-in) to 5
const add5 = (b) => 5 + b; // this is what it looks like inside

add5(3); // equivalent to invoking add(5, 3);
```

**currying**

> Function currying is the process of successive partial applications, until the last argument is given at which point the result of the function is returned.

```javascript
const add = (a) => (b) => a + b;

add(1)(2); // Repeated partial application.
```

**Composition**

A composed version of:

```javascript
const add8 = (x) => add5(add3(x));
```

Could be written with more visual clarity using composition:

```javascript
const add8 = compose(add5, add3);
```

Note : Since [lodash@4](https://github.com/lodash/lodash/wiki/Changelog#v400) `_.compose` has been removed in flavor of [`_.flowRight`](https://lodash.com/docs/4.17.10#flowRight).

### functionnal programming and DI

[Functional approaches to dependency injection 20161205](https://fsharpforfunandprofit.com/posts/dependency-injection-1/)

[Is Functional Programming a viable alternative to dependency injection patterns? : stackexchange.com 20150310](https://softwareengineering.stackexchange.com/questions/275891/is-functional-programming-a-viable-alternative-to-dependency-injection-patterns)

[Functional Dependency Injection == Currying 201003xx](http://mikehadlow.blogspot.fr/2010/03/functional-dependency-injection.html)

[How to Trick OO Programmers into Loving Functional Programming 20130603](https://medium.com/easy-pieces-for-programmers/how-to-trick-oo-programmers-into-loving-functional-programming-7019e1bf9bba)

## object-oriented programming

[Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)

> don't use pointers to functions (Robert C. Martin) (He is talking about pointers in C++)

> based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. A feature of objects is that an object's procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self"). In OOP, computer programs are designed by making them out of objects that interact with one another.

## imperative programming versus functionnal programming

[Functional Programming vs. OOP [closed] : softwareengineering.stackexchange.com 20101005](https://softwareengineering.stackexchange.com/a/9769)

> TLDR : **imperative** versus **functional** === **control flow** versus **data flow**
> 
> For example, in imperative programming variables and loops are common when handling state, while in functional 
> programming the state is handled via parameter passing, which avoids side-effects and assignments.

## object oriented programming versus functionnal programming

[Functional programming vs Object Oriented programming [closed] : stackoverflow.com 20100116](https://stackoverflow.com/a/2079678)

- When do you choose functional programming over object oriented?

TDLR : If logic evolves more then the model : choose FP and if model evolves more then the logic : choose OOP

OOP is good when you have a fixed set of *operations* on *things*.
Your code evolves, you primarily add new *things*. Adding new classes which implement existing methods (*operations*).

FP is good when you have a fixed set of *things*
Your code evolves, you primarily add new *operations* (functions) on existing *things* (data types). 

When evolution goes the wrong way, you have problems ([The Expression Problem : Philip Wadler 19981112](http://www.daimi.au.dk/~madst/tool/papers/expression.txt)):

Adding a new operation to an OOP program may require editing many class definitions to add a new method.

Adding a new kind of thing to a FP program may require editing many function definitions to add a new case.

- What are the typical problem definitions where functional programming is a better choice?

Functional languages excel at manipulating symbolic data in tree form.
