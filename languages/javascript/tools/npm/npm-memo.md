
# npm memo

## links

- [npm basic commands](http://dreamerslab.com/blog/en/npm-basic-commands/)
- [10 Cool Things You Probably Didn’t Realize npm Could Do](http://blog.izs.me/post/1675072029/10-cool-things-you-probably-didnt-realize-npm)
- [One-line node modules](https://github.com/sindresorhus/ama/issues/10)
> with a big answer by sindresorhus

## semver

[semver to manage scopes in package.json](https://docs.npmjs.com/misc/semver)
- [semver](https://github.com/mojombo/semver/blob/master/semver.md) : `<major>.<minor>.<patch>`
- [caret range](https://www.npmjs.com/package/semver#caret-ranges-1-2-3-0-2-5-0-0-4) keep major, change minor & patch
- [tilde range](https://www.npmjs.com/package/semver#tilde-ranges-1-2-3-1-2-1) keep major & minor, only patch update

**Warning** 
semver interpretation for breaking changes can be slightly different from a package to another. The semver spec says that any breaking change must be traduced in a ++ on the major version number.
But libs like angularjs (or protractor) introduce breaking changes in minor update.
Consequences : ^ (caret) in package.json should allow automatic feature update without breaking changes but in fact it depends a lot on the package owner management.

## command list

```
# list globally installed package by name
npm -list -g <package_name>

# or for all packages
npm list -g -depth=0

# to get tree deps
npm list -g -depth=1
```

```
# list locally installed package by name
npm -list <package_name>
```

```
# view version on repository
npm view <package_name> version
```

```
# display npm config
npm config list -ls
```

## npm folders
[check this](https://docs.npmjs.com/files/folders)

TLDR :

- Local install (default): puts stuff in `./node_modules` of the current package root.
- Global install (with `-g`): puts stuff in `/usr/local` or wherever node is installed.
- Install it locally if you're going to `require()` it.
- Install it globally if you're going to run it on the command line.
- If you need both, then install it in both places, or use `npm link`.

## managing dependencies

### built-in commands

[`npm ls`](https://docs.npmjs.com/cli/ls)

```
# list all the installed dependencies in stdout in a tree format
npm ls

# list all the installed dependencies in stdout in a tree format limited to the first level
# it must matches deps listed in package.json
npm ls --depth=0

# same as above but with the deps of deps in the tree
npm ls --depth=1

# print extended informations
npm ll
npm la
```

[`npm outdated`](https://docs.npmjs.com/cli/outdated)

```
# check the registry to see if any (or, specific) installed packages are currently outdated
npm outdated
```

### fixing deps

Since npm v5, the lockfile standard is no more shrinkwrap, it is now the `package-lock.json` file.

The big difference is that this file is generated automatically by npm when running the `install` command.

There is also big behavior differences regarding to the registry publication for packages.

`npm-shrinkwrap.json` is backwards-compatible with npm versions 2, 3, and 4, whereas `package-lock.json` is only recognized by npm 5+

[What is the difference between npm-shrinkwrap.json and package-lock.json? - stackoverflow.com - 20170530](https://stackoverflow.com/questions/44258235/what-is-the-difference-between-npm-shrinkwrap-json-and-package-lock-json)

### others packages

- [npm-check](https://www.npmjs.com/package/npm-check)
> Check for outdated, incorrect, and unused dependencies.

- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
> Find newer versions of dependencies than what your package.json or bower.json allows

- [npm-remote-ls](https://www.npmjs.com/package/npm-remote-ls)
> Examine a package's dependency graph before you install it
