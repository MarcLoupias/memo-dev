# SPA software architecture

## generics articles

[Learn App Architecture by Building Apps : Eric Elliott 20160718](https://medium.com/javascript-scene/the-best-way-to-learn-to-code-is-to-code-learn-app-architecture-by-building-apps-7ec029db6e00)

> SPA Architecture review : AngularJS 2w bindings then React unidirectionnal then Redux 

[change detection strategy : Echyzen Website : 20171116](https://www.youtube.com/watch?time_continue=1&v=hXI78pk2kqc)

> based on [Change And Its Detection In JavaScript Frameworks : 20150302](https://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html)

[Comprendre le data binding dans Angular, React et Vue : Sylvain Pollet-Villard : 20160322](http://sylvainpv.developpez.com/publications/data-binding/)

> same as above but Angular, React and Vue centric and more detailled

## component

[Front-end Application Libraries and Component Architectures](http://developer.telerik.com/featured/front-end-application-frameworks-component-architectures/)

## react & facebook

[Hacker Way: Rethinking Web App Development at Facebook : facebook](https://www.youtube.com/watch?v=nYkdrAPrdcw&t=0s)

### Flux

[Flux : github.com/facebook](https://github.com/facebook/flux)

[Flux In Depth Overview : facebook.github.io](http://facebook.github.io/flux/docs/in-depth-overview.html#content)

[Flux In Depth Diagram : facebook.github.io](https://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

[Flux, l'architecture de Facebook : Devoxx2015](https://www.youtube.com/watch?v=l9RC1M_pVGw&list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b&index=135) 
([Florent Duveau](https://github.com/FlorentD))

> - Balayage des architectures web :
>   - Java Spring MVC
>   - js backbone MVC ? MVP ? MV???
>   - js AngularJS MVC ? MVVM ? MVW???
>   - js React (pas vraiment d'archi, juste une lib de composants)
>   - A la demande de la communauté, ils ont sorti [Flux](https://github.com/facebook/flux)
> 
> - Histoire de Flux
>   - 2011 à Palo Alto (équipe dev du chat)
>   - Problème : Comment sync la toolbar au top qui notifie du nb de msg non-lus avec le composant de chat
>   - Un seul composant (le handler) gérait la logique et les états de tout
>   - Changement archi en séparant la logique dans chaque composant qui soit son état à lui
>   - Une action envoie au store qui envoie à la vue
>   - Ajout du dispatcher qui sert de goulot d'étranglement des actions (toutes les actions remontent à lui, il renvoie 
>   tout au store)
>   - Avantages : Flow unidirectionnel, séparation entre data et state de la vue, debug et tests + faciles
>   - Exemple sur un code de projet
> 
> - Pourquoi s'y intéresser
>   - Réponse concrète aux problèmes d'archi front
>   - Créé suite à un use case concret (chat de facebook)
>   - Archi orientée events, générique et customisable
>   
> - Libs basées sur cette archi
>   - RefluxJS
>   - TUXX
>   - Fluxy
>   - delorean

### Articles

- [Leveling Up With React: React Router : css-tricks.com](https://css-tricks.com/learning-react-router/)
- [Leveling Up With React: Container Components : css-tricks.com](https://css-tricks.com/learning-react-container-components/)
- [Leveling Up with React: Redux : css-tricks.com](https://css-tricks.com/learning-react-redux/)

## angular

[Introduction to Angular 1.x and ngCourse](https://ngcourse-1.rangle.io/index.html)

[Rangle's Angular Training Book](https://angular-2-training-book.rangle.io/)

## isomorphisme

[Introduction à l’isomorphisme avec React et Node.js](http://blog.soat.fr/2016/04/introduction-a-lisomorphisme-avec-react-et-node-js/)

L'idée c'est de générer les vues côtés front pour :
- des questions de performances, l'utilisateur aurait une vue utilisable plus rapidement, ce point est tout à fait contestable
- gérer le SEO de SPA. Ce point est valide mais voué à disparaitre dès que les moteurs de recherches seront capables d'indexer des contenus générés via javascript.

[Why You’ll Always Need Isomorphic JavaScript](https://medium.com/@asyncmax/why-youll-always-need-isomorphic-javascript-bd310596d203)

> Key Benefits of Isomorphism :
> - Better user experience
> - Faster overall loading time
> - More predictable SEO and Site Indexing

## universal

[Isomorphism vs Universal JavaScript](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb)

> TLDR : 
> 
> - **Isomorphism** is the functional aspect of seamlessly switching between client- and server-side rendering without losing state. 
> - **Universal** is a term used to emphasize the fact that a particular piece of JavaScript code is able to run in multiple environments.
>
 
[Universal React: You’re doing it wrong 20160316](http://jamesknelson.com/universal-react-youre-doing-it-wrong/)

[Universal JavaScript and the future of the Single Page Apps 20161029](https://codepicnic.com/posts/universal-javascript-and-the-future-of-the-single-page-apps-084b6fbb10729ed4da8c3d3f5a3ae7c9)

[Am I the only one that thinks isomorphic/universal rendering with React is a nightmare? : quora.com 201604xx](https://www.quora.com/Am-I-the-only-one-that-thinks-isomorphic-universal-rendering-with-React-is-a-nightmare)

[Angular Universal](https://universal.angular.io/)

> Server-side Rendering for Angular 2 apps
> 
> Better Perceived Performance
> Optimized for Search Engines
> 

[isomorphic-react-example : github.com/DavidWells](https://github.com/DavidWells/isomorphic-react-example)

[react-starter-kit : github.com/kriasoft](https://github.com/kriasoft/react-starter-kit)

## immutability

- [Immutable.js : facebook](https://github.com/facebook/immutable-js/)
- [Flux architecture : facebook](http://facebook.github.io/flux/docs/in-depth-overview.html#content)

## Redux

[L'architecture Redux en RxJS (Florent Le Gall) : Devoxx2016](https://www.youtube.com/watch?v=hf2PN0jfn20&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)

[ReactJS App Architecture](https://medium.com/@Xourse/reactjs-app-architecture-7a33d7ae9834)

[Leveling Up with React: Redux : css-tricks.com](https://css-tricks.com/learning-react-redux/)

[React & Redux : Les concepts : baptiste-donaux.fr : 20170412](https://www.baptiste-donaux.fr/react-redux-concept/)

[Le mois du JS - React/Redux : la stack tendance, efficace et performante : xebia](https://www.youtube.com/watch?v=rgzrByrqRTY)

> comparatif des différents design fronts (MVC, MVP, MVVM, ... MVW)
> 
> exemple avec Angular (scope+watchers) : Mutation du modèle (Valable aussi avec Aurelia et Ember)
> 
> Mutation pas bien, préférer immutable.
> 
> Donc préférer React (lib de composants) :
> 
> - pas un framework
> - lib UI
> - vue déclarative
> - binding unidirectionnel
> - DOM Virtuel
> 
> Exemples de composants (normal & dumb)
> 
> JSX (Javascript Syntax eXtension)
> 
> A la compilation le JSX disparait pour laisser du js vanilla
> 
> Explication binding unidirectionnel
> 
> setState ou setProps : React redessine tout le composant
> 
> son state interne est mutable mais le dev ne doit pas y accéder ni le toucher
> 
> DOM Virtuel (react fait un diff du nouveau DOM et du DOM actuellement affiché sans accéder au DOM réel
> donc c'est très rapide)
> 
> Flux :Architecture utilisée par facebook sur ses webapps
> 
> Quelques impls : Redux, Flux, Alt, Reflux, Relay
> 
> Pourquoi Redux :
> 
> - le plus simple
> - store unique et immutable
> - reducers à la place des stores
> - bcp d'outils dispo
> 
> Principe de base : `(previousState, action) => newState`
> 
> Action (objet respectant une convention) :
> 
> ```javascript
> const action = {
>     type: 'ADD_SLOT',
>     slot: {
>         group: 'Les 4 fantastiques',
>         name: 'React / Redux'
>     }
> }
> ```
> 
> Action creator : Fonction qui retourne une action
> 
> Reducer : prends en arg le précédent state + l'action à exec et retourne le nouveau state
> 
> Store : (peu de fonctions : subscribe() (pour être notifié des modifs du store), dispatch(), getState())
> 
> Composant Provider va définir le store pour toute la webapp

## observables

ES6 **required** for this.

- [What is an Observable? [Simply Explained]](https://www.youtube.com/watch?v=XbOuCBuQepI)

> Vidéo très courte expliquant le principe des observables dans angular.

[RxJS - What and Why?](https://www.youtube.com/watch?v=T9wOu11uU6U)

> Vidéo un peu plus longue expliquant les bénéfices en montrant des uses cases avec code ES5 et code ES6 + observables via RxJS

- [Angular Tutorial - What is an Observable ? Introduction to Streams and RxJs Observables](https://www.youtube.com/watch?v=Sol2uLolmUM)

### Naming convention

A variable with a `$` at the end of his name is an observable :

```javascript
// a string var
this.nameFilter = '';

// an observable var based on a string var
this.nameFilter$ = new Rx.BehaviorSubject(this.nameFilter);
```

### RxJS

[RxJS pour les humains : technologies-ebusiness.com : 20161011](https://www.technologies-ebusiness.com/enjeux-et-tendances/rxjs-pour-les-humains)

**The Need to go Reactive**

> Applications, especially on the web have changed over the years from being a simple static page, to DHTML with 
> animations, to the Ajax revolution. Each time, we're adding more complexity, more data, and asynchronous behavior to 
> our applications. How do we manage it all? How do we scale it? By moving towards "Reactive Architectures" which are 
> event-driven, resilient and responsive. With the Reactive Extensions, you have all the tools you need to help build 
> these systems.

**Why RxJS?**

> One question you may ask yourself is why RxJS? What about **Promises**? **Promises** are good for solving asynchronous 
> operations such as querying a service with an **XMLHttpRequest**, where the expected behavior is one value and then 
> completion. Reactive Extensions for JavaScript unify both the world of **Promises**, **callbacks** as well as evented data 
> such as **DOM Input**, **Web Workers**, and **Web Sockets**. Unifying these concepts enables rich composition.

[The ReactiveX library for JavaScript.](http://reactivex.io/rxjs/)

> RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or 
> callback-based code. This project is a rewrite of [Reactive-Extensions/RxJS](https://github.com/Reactive-Extensions/RxJS) 
> with better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, 
> with some breaking changes that reduce the API surface.

[AngularJS Promise / RxJS Comparison](https://github.com/OasisDigital/angularjs-rxjs-example)

> This small example application is meant to illustrate that:
> 
> - Straightforward AngularJS 1.x promise-based applications often have defects in real-world conditions of variale 
> backend response latency.
> - These can be easily avoided using RxJS...
> - ... which is also more future-ready
> - ... and often requires less code.

[Angular1 async filter](https://github.com/cvuorinen/angular1-async-filter)

> Angular2 async pipe implemented as Angular 1 filter to handle Promises & RxJS Observables

[RxJS 5](https://github.com/ReactiveX/RxJS)

> Reactive Extensions Library for JavaScript. This is a rewrite of [Reactive-Extensions/RxJS](https://github.com/Reactive-Extensions/RxJS) 
> and is the latest production-ready version of RxJS. This rewrite is meant to have better performance, better 
> modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that 
> reduce the API surface.
