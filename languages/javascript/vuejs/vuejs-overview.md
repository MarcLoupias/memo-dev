# vue.js - overview

## documentation links

[vuejs v2 - guide](https://vuejs.org/v2/guide/)

> a guide to explain the main concepts behind vuejs

[vuejs v2 - API](https://vuejs.org/v2/api)

> the API doc

[vuejs v2 - style-guide](https://vuejs.org/v2/style-guide)

> a style-guide to avoid pitfall

## project scaffolding

[vuejs/vue-cli](https://github.com/vuejs/vue-cli)

Current available templates include:

- [webpack](https://github.com/vuejs-templates/webpack) - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
- [webpack-simple](https://github.com/vuejs-templates/webpack-simple) - A simple Webpack + vue-loader setup for quick prototyping.
- [browserify](https://github.com/vuejs-templates/browserify) - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
- [browserify-simple](https://github.com/vuejs-templates/browserify-simple) - A simple Browserify + vueify setup for quick prototyping.
- [pwa](https://github.com/vuejs-templates/pwa) - PWA template for vue-cli based on the webpack template.
- [simple](https://github.com/vuejs-templates/simple) - The simplest possible Vue setup in a single HTML file.

### single file components

[Single File Components : vuejs.org](https://vuejs.org/v2/guide/single-file-components.html)

A single file containing `html`, `js` and `css` : 

```html
<template>
    <p>{{ greeting }} World !</p>
</template>

<script>
module.exports = {
    data: function() {
        return {
            greeting: 'Hello'
        }
    }
}
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>
```

Build tools like Webpack or Browserify are mandatory to transform theses `.vue` files in something readable by the browser.

## routing

[vuejs v2 - router](https://router.vuejs.org/en/)

> the official router, not embedded in the core vuejs package

## widget and design

[vue-material](http://vuematerial.io/#/) ([github](https://github.com/vuematerial/vue-material))

> a [material design](https://material.io/guidelines/) impl for vuejs

[material icons](https://material.io/icons/)

linked as : 

```html
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
```

## state management

### official guide indications

[state management](https://vuejs.org/v2/guide/state-management.html) 

### global event bus

[non-parent / child communication](https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication)

### vuex

[vuex](https://vuex.vuejs.org/en/)

> inspired from [Flux](https://facebook.github.io/flux/docs/overview.html), [Redux](http://redux.js.org/) and [the ELM Architecture](https://guide.elm-lang.org/architecture/).

## linting

[vuejs/eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

## http management

[Retiring vue-resource](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)

> As Vue users, many of you may have used [vue-resource](https://github.com/pagekit/vue-resource) for handling ajax requests in your Vue applications.
> 
> However, over time we have come to the conclusion that an "official ajax library" is not really necessary for Vue.

### solutions

- [pagekit/vue-resource](https://github.com/pagekit/vue-resource)

- [axios/axios](https://github.com/axios/axios)

> axios is heavily inspired by the `$http` service provided in [AngularJS](https://angularjs.org/). Ultimately axios is an effort to provide a standalone `$http`-like service for use outside of AngularJS.
