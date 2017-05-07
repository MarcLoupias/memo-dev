# angular components

## I - guides

[angular official component devguide](https://docs.angularjs.org/guide/component)

[Refactoring Angular Apps to Component Style : teropa.info](https://teropa.info/blog/2015/10/18/refactoring-angular-apps-to-components.html)

## II - best practices

### A - Todd Motto best practices

[Todd Motto best practices](https://github.com/toddmotto/angularjs-styleguide#components)

- one-way data flow 
  - data goes from the top level component to the lower levels.
  - child components modifications on bindings doesn't reflect on parents components.
  - callback function are used to handle events, they are used to update the parents components data modified by children.
  
- stateful components
  - referred to as **smart/container components**
  - *how things work*
  - fetches state (through API, so no `bindings`)
  - does not directly mutate state
  - renders child components that mutate state
  - the classic case is a view component for example an entity list

- stateless components
  - referred to as **dumb/presentational components**
  - *how things look*
  - has defined inputs and outputs using `bindings: {}`
  - data enters the component through attribute bindings (**inputs**)
  - data leaves the component through events (**outputs**)
  - mutates state, passes data back up on-demand (such as a click or submit event)
  - doesn't care where data comes from - it's stateless
  - are highly reusable components

So TLDR is :
- the webapp is a tree of components
- theses components are stateful or stateless
- views are stateful
- stateful components fetches and store data (it is the state)
- stateful components are an aggregation of stateless components
- stateless components renders data only, so they are reusables

See section *component design* section in *inter-component communication* part for this design flaws.

## III - feedback

### A - NG 1.5 from the trenches at velesin.io

- 1/7 [Starting a new app in Angular 1.5 – does it make sense?](https://velesin.io/2016/04/14/starting-a-new-app-in-angular-1-5/)
- 2/7 [Angular 1.5 app as a tree of components](https://velesin.io/2016/04/26/angular-1-5-app-as-a-tree-of-components/)
- 3/7 [Communication between Angular 1.5 components (and with the API)](https://velesin.io/2016/05/18/communication-between-angular-1-5-components/)
- 4/7 [A flexible Angular 1.5 project structure (the "fractal" architecture)](https://velesin.io/2016/05/31/angular-1-5-fractal-project-structure/)
- 5/7 [Writing Angular 1.5 project in ES6/ES2015](https://velesin.io/2016/07/12/angular-1-5-project-in-es6-es2015/)
- 6/7 [Unit testing Angular 1.5 components – a detailed guide](https://velesin.io/2016/08/23/unit-testing-angular-1-5-components/)
- 7/7 E2E testing of component-oriented Angular 1.5 app [COMING SOON]

## IV - inter-component communication

### A - angular 2 parent & child communication via service

[Parent and children communicate via a service : angular.io](https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service)

### B - practices overview

src [Angular 1.5. Components communication. Best practice : stackoverflow.com](http://stackoverflow.com/questions/41070446/angular-1-5-components-communication-best-practice)

> I'm using Angular 1.5.9.

> Right now I have two components which need to communicate. If I change something in the first one (for example choose item in the list) => second one needs to be changed (item that was chosen needs to be displayed) and vice versa (changing in the second one => change in the first one) I have read about a lot of approaches, so I can manage this in few ways:

> 1. Communication via shareable Service
> 2. Using two way data binding ("=" option in component bindings). Example: https://jsfiddle.net/peter_drinnan/t4q4nrfp/27/
> 3. Using one way data binding with input/output approach. Example: http://stackoverflow.com/questions/36033940/how-to-pass-data-between-child-components-in-angular-1-5-not-using-scope
> 4. Using "require" (some parent component to share data). Example: http://stackoverflow.com/questions/36645065/component-communication-in-angular-1-5

> Maybe I miss something? What is the best practice?

> Thank you.

### C - component design

#### 1 - avoid event bubbling & extraneous props

[Angular Component Design: How to Avoid Custom Event Bubbling And Extraneous Properties in the Local Component Tree](http://blog.angular-university.io/angular-component-design-how-to-avoid-custom-event-bubbling-and-extraneous-properties-in-the-local-component-tree/)

2 big flaws :
- Custom Event Bubbling
- Extraneous Properties (input are props so if tree is deeper then 2 comps, there is lots of props passing through for nothing)

#### 2 - cross component communication design comparison

[AngularJS: Cross Component Communication](http://www.aurorasolutions.io/blog/angularjs-cross-component-communication/)
    	
- Communicating with inherited scopes
- Communicating with events  	
- Communicating with services

#### 3 - event based design is cancer

Events are no more then GOTO in an asynchronous context. (<- assert by me)

Worse then goto :
- async
- many place in source code to register an event

[GOTO still considered harmful? : stackoverflow.com](http://stackoverflow.com/questions/46586/goto-still-considered-harmful)

[Add Angular1 Event Patterns/Best Practices](https://github.com/johnpapa/angular-styleguide/issues/805)

### D - articles

[Parent component trigger function in child component](https://github.com/toddmotto/angularjs-styleguide/issues/156)

[component communication and triggers](https://github.com/toddmotto/angularjs-styleguide/issues/90)

[Component Interaction in Angular : kfarst.github.io](http://kfarst.github.io/angular/2017/03/29/component-interaction-in-angular/) 20170329

[Angular components communication : dfsq.info](http://dfsq.info/site/read/angular-components-communication)

[Presentational and Container Components : Dan Abramov (ReactJS team, Redux author)](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
