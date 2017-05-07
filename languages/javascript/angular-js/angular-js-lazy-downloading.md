# angular lazy downloading

## webpack

[Lazy loading avec WebPack & AngularJS] (http://blog.xebia.fr/2016/03/08/lazy-loading-avec-webpack-angularjs/)

## requirejs

Based on [blog article lazy downloading in angularjs] (http://ify.io/lazy-loading-in-angularjs/)
See also [ocLazyLoad] (https://github.com/ocombe/ocLazyLoad)

- [angularjs-lazy-loading-with-requirejs] (https://github.com/ifyio/angularjs-lazy-loading-with-requirejs)

grunt task used : [grunt-contrib-requirejs] (https://github.com/gruntjs/grunt-contrib-requirejs)

Others tuto :
- [angularjs-requirejs] (https://www.startersquad.com/blog/angularjs-requirejs/)
- [single-page-apps-un-risque-de-boulimie-angularjs] (http://blog.dareboost.com/2014/11/single-page-apps-un-risque-de-boulimie-angularjs/)

**IMPORTANT**
In fact, using requirejs with angular is not for lazy loading but for lazy downloading.
Angular already lazy load modules. They are executed only when needed.
Require is useful when the website source code is big with many dependencies. 
Downloading everything once can be a problem, especially for mobile websites.
See [this discussion] (http://stackoverflow.com/questions/12529083/does-it-make-sense-to-use-require-js-with-angular-js), or [this one] (http://leog.me/log/making-sense-of-requirejs-with-angularjs)
