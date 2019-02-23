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
        - href: '../../../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../../../main.css'
          rel: stylesheet
          media: all
        - href: '../../../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../../../index.js'

---

# npm registry

[npm/registry : github.com](https://github.com/npm/registry)

> A public issue repo for the npm registry team.

[https://registry.npmjs.org/node/ - explore online](https://registry.npmjs.org/node/)

> need the package name in the path : `https://registry.npmjs.org/<package-name>/`

## cdn

[unpkg](https://unpkg.com/#/) ([unpkg - github.com](https://github.com/unpkg))

> The CDN for everything on npm

## registry impl

### artifactory

[JFrog Artifactory Enterprise Universal Repository Manager](https://jfrog.com/artifactory/)

> Support a lot more then just npm registry, but include a npm registry impl

### verdaccio

[verdaccio](https://verdaccio.org/)

> A lightweight private npm proxy registry

> Verdaccio is a simple, **zero-config-required local private npm registry**. No need for an entire database just to get started! Verdaccio comes out of the box with **its own tiny database**, and the ability to proxy other registries (eg. npmjs.org), caching the downloaded modules along the way.

[verdaccio](https://github.com/verdaccio)

[verdaccio - github.com/verdaccio](https://github.com/verdaccio/verdaccio)

#### npm packages smoke test with verdaccio

Can be used to [smoke test](https://en.wikipedia.org/wiki/Smoke_testing_(software)) `npm publish` command.

See example with [facebook/create-react-app](https://github.com/facebook/create-react-app/pull/3744).

See also [How to test an `npm publish` result, without actually publishing to NPM? - stackoverflow.com](https://stackoverflow.com/questions/50206729/how-to-test-an-npm-publish-result-without-actually-publishing-to-npm)

## articles

- [why-do-we-need-the-npm-registry : blog.javascripting.com](http://blog.javascripting.com/2015/06/11/so-remind-me-again-why-do-we-need-the-npm-registry/)

> this guy would like to avoid using registry because he is annoying when wanting a particular package version not put by the package owner into the npm registry. He would prefer npm as a fin layer on the top of github (like bower does). Comments are worth to read.

## alternatives

### bower

[bower.io](https://bower.io/)

One of the first package manager for the web (only for frontend projects).

It is at the end of his life. The bower team recommands using yarn and webpack.

### yarn

[yarn](https://yarnpkg.com)

Yarn is not a new package manager, it is just a new CLI built on top of the npm registry. He behave differently then npm CLI. This was really true before npm published @5.y.z version of npm CLI.

Yarn is developed by some Google and Facebook devs.

Diff w/ npm CLI (see [npm-vs-yarn : blog.zenika.com 20170313](https://blog.zenika.com/2017/03/13/npm-vs-yarn/) :

- parallelized downloads (so yarn is faster)
- deterministic with `yarn.lock` file (it is npm shrinkwrap autoexec, it is same as package.lock from npm@5.y.z)
- ...
