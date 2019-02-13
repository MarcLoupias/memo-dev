# nodejs - best practices

## misc links

[sindresorhus/awesome-nodejs - github.com](https://github.com/sindresorhus/awesome-nodejs)

[ryanmcdermott/clean-code-javascript - github.com](https://github.com/ryanmcdermott/clean-code-javascript)

[i0natan/nodebestpractices - github.com](https://github.com/i0natan/nodebestpractices)

[Node.js Best Practices : Matt Goldspink 20160829](https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja)

- Start all projects with `npm init`
- Setup `.npmrc`
- Add scripts to your `package.json`
- Use environment variables
- Use a style guide
- Embrace async
- Handle errors
- Ensure your app automatically restarts
- Cluster your app to improve performance and reliability
- Require all your dependencies up front
- Use a logging library to increase errors visibility
- Use [Helmet](https://github.com/helmetjs/helmet) if you’re writing a web app
- Monitor your applications
- Test your code

[Node.js Best Practices - How to Become a Better Developer in 2017 : blog.risingstack.com](https://blog.risingstack.com/node-js-best-practices-2017/)

## switching node version between projects

### articles

[nvm vs n! - .gitignore - 20170522](https://medium.com/gitignore/nvm-vs-n-f34ebca314ea)

[How I manage multiple Node.js versions - steelbrain.me - 20160719](https://steelbrain.me/2016/07/19/how-i-manage-multiple-node-js-versions.html)

[The Best Way to Install Node.js - yoember.com - 20180929](https://yoember.com/nodejs/the-best-way-to-install-node-js/)

### tooling comparison

[Taken from stackoverflow answer from `nvm` maintainer](https://stackoverflow.com/a/29545541)

> The most-used version managers for node are without a doubt http://nvm.sh, https://www.npmjs.com/package/nave, and https://www.npmjs.com/package/n.
> 
> `nvm` is for modifying individual shell sessions to use the version you want. `nave` is for launching subshells with the version you want loaded. n is for switching a single system-wide version of node.
> 
> `nvm` uses a `.nvmrc` file, which like `.ruby-version`, contains the version-ish string X you'd normally couple with `nvm use X` or `nvm install X`. `nvm use` or `nvm install` by itself will locate the `.nvmrc` file, as will simply sourcing `nvm` upon opening a new shell.
> 
> It appears `nave` supports a `.naverc` file, but I'm not too familiar with its usage.
> 
> `n` doesn't appear to support any such config, but as it's system-wide, it doesn't really make as much sense to do so.
> 
> `avn` supports `.node-version` and attempts to provide automatic version switching by hooking into `cd`, after `nvm` decided that was too invasive a behavior to include.

### `nvm`

[creationix/nvm - github.com](https://github.com/creationix/nvm)

[NVM Automatic Switching : gist](https://gist.github.com/calendee/bb55962fd720a6dbeed6bf356976656c)

### `n`

[tj/n - github.com](https://github.com/tj/n)

> Node.js version management: no subshells, no profile setup, no convoluted API, just simple.

#### usage

Super easy but system wide.

List installed version 

```bash
n
```

Output :

```bash
  0.8.14
ο 0.8.17
  0.9.6
```

Change the active version by selecting the line and hit space bar.

Install desired node version with `n <version>` ex `n 10.2.1`.

#### issues

Possible issue with `npm`, any `npm` command will output this :

```text
npm WARN lifecycle npm is using /home/<HOME_DIR>/n/bin/node but there is no node binary in the current PATH. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.
```

Fixed by adding a .npmrc file in the project root dir containing :

```text
scripts-prepend-node-path=true
```


### `node` package with `npx`

[using a node package inside package.json](https://www.npmjs.com/package/node)

> cf [tweet](https://twitter.com/maybekatz/status/958157474397171712)

## app structure

[STRUCTURER MA PREMIÈRE APPLICATION NODEJS - RemixJobs - François-Guillaume Ribreau et Julien Breux - 20160726](https://www.youtube.com/watch?time_continue=1&v=Q9rS9e1KInc)

> 
> - DRY sur le config projet (eslint, code quality, etc ...)
> - automatisation des conventions
> - 12 factors
> - logging
> - swagger
> - unit / functionnal testing
> - CI (circle & jenkins)
> - deploy
> - health checking
> - métriques métiers
> 

[Advanced Node.js Project Structure Tutorial - 20180508](https://blog.codeship.com/advanced-node-js-project-structure-tutorial/)

## microservices

[The Best Node.js & Microservices Articles we Ever Wrote - blog.risingstack.com - 20180516](https://blog.risingstack.com/top-nodejs-microservices-articles-risingstack/)

[Node.js - File System - www.tutorialspoint.com](https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm)

> - Synchronous vs Asynchronous
> - Open a File
> - Flags
> - Get File Information
> - Writing a File
> - Reading a File
> - Closing a File
> - Truncate a File
> - Delete a File
> - Create a Directory
> - Read a Directory
> - Remove a Directory
