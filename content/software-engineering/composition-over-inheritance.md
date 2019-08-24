---
htmlHead:
    title: 'marlou knowledge base' 
    containerClass: 'markdown-body'
    metaTags:
        - name: viewport
          content: 'width=device-width, initial-scale=1, minimal-ui'
        - name: robots
          content: none
    links:
        - href: '../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../main.css'
          rel: stylesheet
          media: all
        - href: '../github.css'
          rel: stylesheet
    scripts:
        - src: '../index.js'

---

# composition over inheritance

## sources

[The Two Pillars of JavaScript: Part 1: How to Escape the 7th Circle of Hell by Eric Elliott 20141021](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3)

[Composition over Inheritance : Youtube channel Fun Fun Function](https://www.youtube.com/watch?v=wfMtDGfHWpA)

## explanation

**inheritance** is when you design objects around what they **are**

**composition** is when you design objects around what they **do**

## example

We design a game where we have

```javascript
Dog
  .poop()
  .bark()
  
Cat
  .poop()
  .meow()
```

Because of `poop` function duplication we create a mother `class`

```javascript
Animal
  .poop()

    Dog
      .poop()
      .bark()
  
    Cat
      .poop()
      .meow()
```

Now we add more classes on a different line of inheritance

```javascript
MurderRobot
  .drive()
  .kill()

CleaningRobot
  .drive()
  .clean()

Animal
  .poop()

    Dog
      .poop()
      .bark()
  
    Cat
      .poop()
      .meow()
```

Same problem as before, we need another mother class for robots

```javascript
Robot
  .drive()
  
  MurderRobot
    .kill()

  CleaningRobot
    .drive()
    .clean()

Animal
  .poop()

    Dog
      .poop()
      .bark()
  
    Cat
      .poop()
      .meow()
```

After a while a new needs is coming : We need a murder robot dog who can kill, drive and bark.
But it cannot poop (no digestive system)

At this point, the class inheritance taxinomy is deeply wrong. We cannot put a MurderRobotDog class inside.

The only solution keeping inheritance is to set a super motherclass but children will have method they should not
have in attached to them. So it is bad.

This problem is called the **Gorilla Banana Problem** (You request a Banana, you got a Gorilla and the entire Jungle with it).

The solution is **composition** (design objects around what they **do**)

```text
dog            = pooper + barker
cat            = pooper + meower
cleaningRobot  = driver + cleaner
murderRobot    = driver + killer
murderRobotDog = driver + killer + barker
```

## when to use composition/inheritance

Lots of devs just favors composition over inheritance and some never use inheritance.

[Replace Constructor with Factory Method : Martin Fowler 1999](https://refactoring.com/catalog/replaceConstructorWithFactoryMethod.html)

> He is not saying inheritance is bad directly but if you don't use constructors you cannot use `super` keyword.

[CallSuper is an anti-pattern: Martin Fowler 20050811](https://martinfowler.com/bliki/CallSuper.html)

> or a code smell

[Composition over inheritance : en.wikipedia.org](https://en.wikipedia.org/wiki/Composition_over_inheritance)

[Composition vs. Inheritance: How to Choose? 20150512](https://www.thoughtworks.com/insights/blog/composition-vs-inheritance-how-choose)

## articles

[The Open Minded Explorer’s Guide to Object Composition : Eric Elliott 20151015](https://medium.com/javascript-scene/the-open-minded-explorer-s-guide-to-object-composition-88fe68961bed)

[Composition over Inheritance, the importance of context : Damien Lebreuilly 20160131](https://medium.com/@FennNaten/composition-over-inheritance-the-importance-of-context-d8916f041a7e)

> In the rest of this article, I’ll explain what are those inheritance pitfalls that composition (in GoF sense) tries
> to avoid, and I’ll show that concatenative inheritance still carries them.
>
> he is taking the @mpj `murderRobotDog` example adding more complexity to output this conclusion :
> **Object composition is not object merging.**
