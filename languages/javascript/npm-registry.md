# npm registry

[npm/registry : github.com](https://github.com/npm/registry)

> A public issue repo for the npm registry team.

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
