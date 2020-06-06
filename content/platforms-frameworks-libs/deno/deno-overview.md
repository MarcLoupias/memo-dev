# deno - overview

Announced by Ryan Dahl @ Berlin JS Conf 2018

The conference video : [10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018](https://www.youtube.com/watch?v=M3BM9TB-8yA)

[The slides](http://tinyclouds.org/jsconf2018.pdf)

[hackernews about the conf](https://news.ycombinator.com/item?id=17247135)

[Deno, A New Server-Side Runtime By Ryan Dahl - JSDC 2018 - 201811](https://www.youtube.com/watch?v=FlTG0UXRAkE)

## genesis

[JSConf Berlin 2018 - Ryan Dahl liste 10 erreurs de conception sur Node.js et dévoile son prototype deno - nodejs.developpez.com - 20180611](https://nodejs.developpez.com/actu/208633/JSConf-Berlin-2018-moins-Ryan-Dahl-liste-10-erreurs-de-conception-sur-Node-js-et-devoile-son-prototype-deno/)

Ryan Dahl have left node in 2012 thinking the project was done.

He is not happy with some design choices he mades on node.

He wants to fix the node issues especially the securities issues.

"philosophical" source :

The idea of rewritting all node could be explained by his text : [I hate almost all software. - tinyclouds.org - Ryan Dahl "blog" - 2011](http://tinyclouds.org/rant.html)

> There will come a point where the accumulated complexity of our existing systems is greater than the complexity of creating a new one. When that happens all of this shit will be trashed.

## the 10 things he regrets about Node.js

- Not sticking with Promises

Added in [June 2009](https://github.com/nodejs/node/commit/7cd09874c666f0ce64b1d7776de74f55ff3e53ab), removed in [February 2010](https://github.com/nodejs/node/commit/0485cc41d5c260458f590d249c073794047434fb).

Promises are mandatory to impl async/await.

He thinks an early and stable Promise impl in node would have helped a lot to speed, standardization and the adoption of theses tools.

- Security

V8 is a good sandbox but Node need embedded security tools. For ex a linter should not have access to the network by default.

- The Build System (GYP)

Rely on Python, needed to link Node and others languages libs (ex systems libs). Ugly and node is the solo user. Regret

- The Build System (GYP)

He regrets to not have listenned the community enough for the adoption of a core foreign function interface (FFI).

- `package.json`

Allowing node `require()` to inspect `package.json` and embbed npm into node made npm the defacto package standard.

This standard is centralized AND privately controlled which is bad.

- the way `require()` works

There are too many places where it is defined (js program, package.json, npm database, local node_modules folder)

- `package.json`

Regret the way it works. Allowing package.json gave rise to the concept of a "module" as a directory of
files.

package.json now includes all sorts of unnecessary information.
License? Repository? Description?
It's boilerplate noise.

Would prefer a path or an url containing the version.

- node_modules directory

Vendored-by-default has good intentions, but in practice just using `$NODE_PATH` wouldn't have precluded that

Deviates greatly from browser semantics.

- ability to require a module without extension

It's bad, because it is needlessly less explicit.

Not how browser JavaScript works.

The module loader has to query the file system at multiple locations trying to guess what the user intended.

- `index.js`

Thought it was cute because there is `index.html` in web.

It needlessly complicated the module loading system.

It became especially unnecessary after `require` supported `package.json`.

conclusion

My problems with Node are almost entirely around how it manages user code.

Because in contrast to the focus on evented I/O early on, the module system was essentially an afterthought.

## `ry/deno`

[`ry/deno` - `github.com`](https://github.com/ry/deno)

Very nascent prototype that could be TLDR as : *A secure TypeScript runtime on V8*.

TypeScript is builtin.

No npm nor package.json nor node_modules support.

By default, a deno process has readonly access on the file system and no network access at all. It needs configuration (flags) to enable access and write.

### roadmap

See [the roadmap](https://github.com/ry/deno/blob/master/Roadmap.md), at that time, we cannot use network stuff, only read/write files on the fs.

> Actual at 20180730 :
>
> - Milestone 1: Rust rewrite / V8 snapshot (ETA: July 2018)
> - libdeno C API
> - TypeScript API
>
> There are three layers of API to consider:
>
> - L1: the low-level message passing API exported by libdeno (L1),
> - L2: the protobuf messages used internally (L2),
> - L3: the final "deno" namespace exported to users (L3).

### resources

[deno.land - official website](https://deno.land)

[deno.land/manual](https://deno.land/manual.html)

[deno standard library](https://deno.land/manual/standard_library)

[deno TypeScript API](https://deno.land/typedoc/)

[deno/milestones](https://github.com/denoland/deno/milestones)

[newsletter - deno.news](https://deno.news/)
