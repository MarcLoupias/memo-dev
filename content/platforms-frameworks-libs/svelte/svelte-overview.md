# svelte overview

## documentation links

[Svelte official](https://svelte.dev/)

[Svelte blog](https://svelte.dev/blog)

[sveltejs/svelte - `github.com`](https://github.com/sveltejs/svelte)

[Svelte official quickstart guide](https://v2.svelte.dev/guide)

[The easiest way to get started with Svelte - svelte.dev/blog - Rich Harris - 20170807](https://svelte.dev/blog/the-easiest-way-to-get-started)

## author

[Rich Harris](https://twitter.com/Rich_Harris)

Is also the author of several libs & tools :

[rollup.js](https://rollupjs.org/guide/en/)

> Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

[ractive](https://ractive.js.org/)

> It's a JavaScript library for building reactive user interfaces in a way that doesn't force you into a particular framework's way of thinking.

[bublé](https://github.com/bublejs/buble)

> the blazing fast, batteries-included ES2015 compiler

## versions

[Svelte 3: Rethinking reactivity - svelte.dev/blog - Rich Harris - 20190422](https://svelte.dev/blog/svelte-3-rethinking-reactivity)

`v1.0.0` 20161129

> The first version of Svelte was all about — that a purpose-built compiler could generate rock-solid code that delivered a great user experience.

`v2.0.0` 201804xx

> The second was a small upgrade that tidied things up a bit.

`v3.0.0` 201904xx

> Version 3 is a significant overhaul. Our focus for the last five or six months has been on delivering an outstanding developer experience.
>
> To make that possible we first needed to rethink the concept at the heart of modern UI frameworks: reactivity.
>
> See [Rich Harris - Rethinking reactivity - 20190422](https://www.youtube.com/watch?v=AdNJ3fydeao&feature=emb_title)

`v4.0.0` 20230622

> is mainly a maintenance release, bumping minimum version requirements and tightening up the design in specific areas.
> It sets the stage for the next generation of Svelte to be released as Svelte 5.
>
> [Announcing Svelte 4 - svelte.dev/blog - Rich Harris - 20230622](https://svelte.dev/blog/svelte-4)

## design concept

Svelte is another JS front framework but it is also a compiler.

Svelte runs at build time, converting your components into highly efficient imperative code that surgically updates the DOM.

There is no runtime embedded in the app like with others (Angular/React/Vue) (no script lib import).

The app is really small comparing to others tools.

There is no virtual DOM (in the contrary of others frameworks), when compiling Svelte generate the needed imperative code to deal with the runtime changes.

Svelte is currently incompatible with TypeScript.

[Frameworks without the framework: why didn't we think of this sooner? - svelte.dev/blog - Rich Harris - 20161126](https://svelte.dev/blog/frameworks-without-the-framework)

> You can't write serious applications in vanilla JavaScript without hitting a complexity wall. But a compiler can do it for you.
>
> **We're shipping too much code to our users.**
>
> What problem do frameworks really solve?
>
> At best, frameworks move the complexity around, away from code that you had to write and into code you didn't.
>
> what if the framework didn't actually run in the browser? What if, instead, it converted your application into pure vanilla JavaScript, just like Babel converts ES2016+ to ES5?
>
> Svelte is a new framework that does exactly that. You write your components using HTML, CSS and JavaScript and during your build process Svelte compiles them into tiny standalone JavaScript modules. By statically analysing the component template, we can make sure that the browser does as little work as possible.
>
> It's basically as fast as vanilla JS, which makes sense because it is vanilla JS – just vanilla JS that you didn't have to write.
>
> **Consider interoperability.** Want to `npm install cool-calendar-widget` and use it in your app? Previously, you could only do that if you were already using (a correct version of) the framework that the widget was designed for – if `cool-calendar-widget` was built in React and you're using Angular then, well, hard cheese.
>
> **Or code splitting**. Even if you only initially serve one React component instead of 100, you still have to serve React itself. With Svelte, code splitting can be much more effective, because the framework is embedded in the component, and the component is tiny.
>

[Virtual DOM is pure overhead - svelte.dev/blog - Rich Harris - 20181227](https://svelte.dev/blog/virtual-dom-is-pure-overhead)

> What is the virtual DOM?
>
> In many frameworks, you build an app by creating `render()` functions
>
> ```javascript
> function HelloMessage(props) {
>   return (
>     <div className="greeting">
>       Hello {props.name}
>     </div>
>   );
> }
> ```
>
> The result is an object representing how the page should now look. That object is the virtual DOM.
>
> Every time your app's state updates you create a new one.
>
> The framework's job is to reconcile the new one against the old one, to figure out what changes are necessary and apply them to the real DOM.
>
> The virtual DOM operations are in addition to the eventual operations on the real DOM.
>
> So... is the virtual DOM slow?
>
> Not exactly. It's more like 'the virtual DOM is usually fast enough', but with certain caveats.
>
> Where does the overhead come from?
>
> Most obviously, . You can't apply changes to the real DOM without first comparing the new virtual DOM with the previous snapshot.
>
> To take the earlier `HelloMessage` example, suppose the `name` prop changed from 'world' to 'everybody'.
>
> - Both snapshots contain a single element. In both cases it's a `<div>`, which means we can keep the same DOM node
> - We enumerate all the attributes on the old `<div>` and the new one to see if any need to be changed, added or removed. In both cases we have a single attribute — a `className` with a value of `"greeting"`
> - Descending into the element, we see that the text has changed, so we'll need to update the real DOM
>
> Of these three steps, only the third has value in this case, since — as is the case in the vast majority of updates — the basic structure of the app is unchanged. It would be much more efficient if we could skip straight to step 3 :
>
> ```javascript
> if (changed.name) {
>   text.data = name;
> }
> ```
>
> This is almost exactly the update code that Svelte generates. Unlike traditional UI frameworks, Svelte is a compiler that knows at **build time** how things could change in your app, rather than waiting to do the work at **run time**.
>
> Why do frameworks use the virtual DOM then?
>
> It's important to understand that virtual DOM isn't a feature. It's a means to an end, the end being declarative, state-driven UI development.
>
> Virtual DOM is valuable because it allows you to build apps without thinking about state transitions, with performance that is generally good enough.
>
> That means less buggy code, and more time spent on creative tasks instead of tedious ones.
>
> But it turns out that we can achieve a similar programming model without using virtual DOM — and that's where Svelte comes in.

## articles

[Svelte.js : introduction au "compilateur en guise de framework" - Thibault Goudouneix - medium.com - 20191112](https://medium.com/@nilmanduil/svelte-js-le-compilateur-en-guise-de-framework-5473f1d727f8)

[Svelte, pourquoi tant de hype ? - Anthony Le Goas - medium.com - 20200327](https://medium.com/@anthony.legoas/svelte-pourquoi-tant-de-hype-3ead1a8fab5f)

## tools

[`awesome-svelte`](https://github.com/TheComputerM/awesome-svelte)

[Svelte Events, Site Showcase, Packages, Resources, Recipes](https://svelte-community.netlify.app/)

[REPL hello world](https://svelte.dev/repl/hello-world)

[app template with snowpack](https://github.com/pikapkg/create-snowpack-app/tree/master/templates/app-template-svelte)

## forms validation

[Form Validation in Svelte - `blog.openreplay.com` - 20230216](https://blog.openreplay.com/form-validation-in-svelte/)

[superforms official doc](https://superforms.rocks/) / [repo](https://github.com/ciscoheat/sveltekit-superforms)

[felte offical doc](https://felte.dev/) / [repo](https://github.com/pablo-abc/felte)

[vest official doc](https://vestjs.dev/) / [repo](https://github.com/ealush/vest)
