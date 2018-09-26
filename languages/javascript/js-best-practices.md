# javascript best practices

## coding style
- [coding style from airbnb](https://github.com/airbnb/javascript)

## articles
- [javascript_best_practises : qooxdoo.org](http://qooxdoo.org/docs/general/javascript_best_practises)
- [javascript : Douglas Crockford](http://www.crockford.com/javascript/)
- [Onze idées fausses sur l'héritage en JavaScript : sylvainpv.developpez.com - 20150523](http://sylvainpv.developpez.com/traductions/javascript/idees-fausses-heritage/) (trad article Eric Elliott)

## perfs

[Intensive JavaScript - developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript)

> By default the browser uses a single thread to run all the JavaScript in your page as well as to perform layout, reflows, and garbage collection. This means that long-running JavaScript functions can block the thread, leading to an unresponsive page and a bad user experience.
> 
> You can use the [Frame rate](https://developer.mozilla.org/en-US/docs/Tools/Performance/Frame_rate) and [Waterfall tools](https://developer.mozilla.org/en-US/docs/Tools/Performance/Waterfall) to see when JavaScript is causing performance problems, and to single out the particular functions that need attention.
> 
> In this article we'll take an example site whose long-running JavaScript causes responsiveness problems, and apply two different approaches to fixing them. The first is to split long-running functions into pieces and use [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) to schedule each piece, and the second is to run the whole function in a separate thread using a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

## undefined & null check
- [checking-for-undefined-null-and-empty-variables-in-javascript : davidbcalhoun.com](davidbcalhoun.com/2011/checking-for-undefined-null-and-empty-variables-in-javascript/)

## javascript strict mode
[Strict mode : developer.mozilla.org](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript :
- le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée)
- le mode strict corrige les erreurs qui font qu'il est difficile pour les moteurs JavaScript d'effectuer des optimisations (exécution plus rapide)
- le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript

## online tools
- [js-variables name validator](https://mothereff.in/js-variables)

## array iteration

[Loop through an array in JavaScript : stackoverflow.com](http://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript)

[For-each over an array in JavaScript? : stackoverflow.com](http://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript)

[Array.forEach n’est pas toujours la meilleure solution ! - blog.overnetcity.com - 20140829](https://blog.overnetcity.com/2014/08/29/array-foreach-nest-pas-toujours-meilleure-solution/)

## async

[Coder l’asynchrone en Javascript (Par Matthieu Lux)](https://www.youtube.com/watch?v=FZ51IVn6tVM)

[Tasks, microtasks, queues and schedules - jakearchibald.com - 20150817](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
> In summary:
> 
> - Tasks execute in order, and the browser may render between them
> - Microtasks execute in order, and are executed:
>   - after every callback, as long as no other JavaScript is mid-execution
>   - at the end of each task
>
> [Commentaire SylvainPV sur dev.com (fil privé)](https://www.developpez.net/forums/d1890469-2/forums-beneficiaires-d-hebergement/priv-redaction/priv-articles/2018-09-05-javascript-recursivite-parcours-d-arbres-l-objet-promise/#post10497961) :
> 
> Ce qu'il faut retenir, c'est qu'un `Promise.resolve` n'entraîne pas de "vrai asynchronisme", c'est-à-dire qu'il n'attend pas la prochaine boucle d'événements. On a besoin d'attendre la boucle d'événements pour laisser le navigateur faire le rendu et ne pas avoir de freeze.


## design patterns

[The Comprehensive Guide to JavaScript Design Patterns - www.toptal.com - Marko Mišura - 201803xx](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)

[Learning JavaScript Design Patterns - Volume 1.7.0 - Addy Osmani - 2017](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

Table of Content

> - Introduction
> - What is a Pattern?
> - "Pattern"-ity Testing, Proto-Patterns & The Rule Of Three
> - The Structure Of A Design Pattern
> - Writing Design Patterns
> - Anti-Patterns
> - Categories Of Design Pattern
> - Summary Table Of Design Pattern Categorization
> - JavaScript Design Patterns
>     - Constructor Pattern
>     - Module Pattern
>     - Revealing Module Pattern
>     - Singleton Pattern
>     - Observer Pattern
>     - Mediator Pattern
>     - Prototype Pattern
>     - Command Pattern
>     - Facade Pattern
>     - Factory Pattern
>     - Mixin Pattern
>     - Decorator Pattern
>     - Flyweight Pattern 
> - JavaScript MV* Patterns
>     - MVC Pattern
>     - MVP Pattern
>     - MVVM Pattern 
> - Modern Modular JavaScript Design Patterns
>     - AMD
>     - CommonJS
>     - ES Harmony 
> - Design Patterns In jQuery
>     - Composite Pattern
>     - Adapter Pattern
>     - Facade Pattern
>     - Observer Pattern
>     - Iterator Pattern
>     - Lazy Initialization Pattern
>     - Proxy Pattern
>     - Builder Pattern
> - jQuery Plugin Design Patterns
> - JavaScript Namespacing Patterns
> - Conclusions
> - References
