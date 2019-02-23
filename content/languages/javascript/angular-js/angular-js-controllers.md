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
        - href: '../../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../../main.css'
          rel: stylesheet
          media: all
        - href: '../../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../../index.js'

---

# AngularJS - controllers

## communication between controllers

[ways to communicate between controllers (services + events)](http://stackoverflow.com/questions/11252780/whats-the-correct-way-to-communicate-between-controllers-in-angularjs/19498009#19498009)

## `controllerAs` syntax

[digging-into-angulars-controller-as-syntax](http://toddmotto.com/digging-into-angulars-controller-as-syntax/)

Le principe c'est de ne plus injecter le scope pour travailler dessus mais d'utiliser le controller pour l'interpolation.

En terme d'achi, le controller n'est plus vraiment un controlleur mais prend sa place dans le MVVM en tant que V 
(associé au HTML)

[le why](http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html)

## `$scope`

### `$scope` must read

- [docs.angularjs.org scope](https://docs.angularjs.org/guide/scope)
- [`$rootScope.Scope`](https://docs.angularjs.org/api/ng/type/$rootScope.Scope)
- [better doc then thie official one](http://angular-tips.com/blog/2013/08/watch-how-the-apply-runs-a-digest/)
- [the-three-watch-depths-of-angularjs](http://teropa.info/blog/2014/01/26/the-three-watch-depths-of-angularjs.html)
- [angularjs-watch-digest-and-apply](http://www.benlesh.com/2013/08/angularjs-watch-digest-and-apply-oh-my.html)
- [databinding-in-angularjs with MiskoH comments](http://stackoverflow.com/questions/9682092/databinding-in-angularjs)
- [nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs](http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs/14049482#14049482)
- [Comprendre le data binding dans Angular, React et Vue : Sylvain Pollet-Villard : 20160322](http://sylvainpv.developpez.com/publications/data-binding/)

### `$digest` already in progress issue

- [Anti-Patterns](https://github.com/angular/angular.js/wiki/Anti-Patterns)
- [why-is-using-ifscope-phase-scope-apply-an-anti-pattern](http://stackoverflow.com/questions/22346990/why-is-using-ifscope-phase-scope-apply-an-anti-pattern)

### `EvalAsync()` or `setTimeOut()`

- [scope-evalasync-vs-timeout-in-angularjs](http://www.bennadel.com/blog/2605-scope-evalasync-vs-timeout-in-angularjs.htm)
- **EvalSync** is to put your thing in the angular loop
- **TimeOut** is to delay your thing outside and probably after the angular loop
- [angularjs-evalasync-vs-timeout](http://stackoverflow.com/questions/17301572/angularjs-evalasync-vs-timeout)
- if code is queued using `$evalAsync` from a directive, it should run after the DOM has been manipulated by Angular, but before the browser renders
- if code is queued using `$evalAsync` from a controller, it should run before the DOM has been manipulated by Angular (and before the browser renders) -- rarely do you want this
- if code is queued using `$timeout`, it should run after the DOM has been manipulated by Angular, and after the browser renders (which may cause flicker in some cases)

### `$scope` dirty checking

- [the-three-watch-depths-of-angularjs](http://teropa.info/blog/2014/01/26/the-three-watch-depths-of-angularjs.html)
- Angular is doing references comparisons when checking model changes.
- All binding done with bracers, `ng-model` etc ... set a reference check.
- [dont bind to primitives](http://www.codelord.net/2014/05/10/understanding-angulars-magic-dont-bind-to-primitives/)

### publishing data in the views

- [Route Resolve and Controller Activate in AngularJS](http://www.johnpapa.net/route-resolve-and-controller-activate-in-angularjs/)
- [John Papa style guide : Controller Activation Promises](https://github.com/johnpapa/angular-styleguide#style-y080)
- [angular-styleguide: issue](https://github.com/johnpapa/angular-styleguide/issues/661)
