# node module system

[How the module system, CommonJS & require works](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/)

[Node.js v6.11.2 Documentation - Modules](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html)

Node.js module system is based on the [CommonJS spec](http://wiki.commonjs.org/wiki/CommonJS).

[ES6 modules, Node.js and the Michael Jackson Solution](https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b)

> - CommonJS to the rescue
> - How ES6 modules work and why Node.js hasn’t implemented it yet
> - A note about Babel
> - Why ES6 modules are good and how to get the best of both worlds

## tips & rules

### module wrapper

Variables inside a module are private to that module because each module is wrapped.

```javascript
(function(exports, require, module, __filename, __dirname) {
// Your module code actually lives in here
});
```

See [module wrapper doc section](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html#modules_the_module_wrapper) for details.

The CommonJS module system uses a **runtime evaluation of the modules**, wrapping them into a function before the execution.

### modules are singleton

Module caching in the [node documentation](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html#modules_caching).

Everytime you use `require('awesome-module')`, node returns the same instance. If you want to execute initialization code
at each `require` call, exports a `function`.

Module unicity is based on the directory ([see Module Caching Caveats](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html#modules_module_caching_caveats)).

### module types

The [`module` Object definition](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html#modules_the_module_object).

#### core module

The node builtin modules (`http`, `assert`, ...).

They have priority over others modules. For example if a file module is `http.js`, `require('http');` will result loading
the node `http` module and not the file.

#### file module

File extension is optional.

A required module prefixed with `'/'` is an absolute path to the file. For example, `require('/home/marco/foo.js')` will load the file at `/home/marco/foo.js`.

A required module prefixed with `'./'` is relative to the file calling `require()`. 

Without a leading `'/'`, `'./'`, or `'../'` to indicate a file, the module must either be a core module or is loaded from a `node_modules` folder.

#### folder module

There are three ways in which a folder may be passed to `require()` as an argument.

##### folder contains a default `index.js`

If there is no `package.json` file present in the directory, then node will attempt to load an `index.js` out of that directory.

For example, if there was no `package.json` file in the above example, then `require('./some-library')` would attempt to load `./some-library/index.js`.

##### folder is defined with a `package.json`

Create a `package.json` file in the root of the folder, which specifies a main module.

```json
{"name":"some-library", "main":"./lib/some-library.js"}
```

If this was in a folder at `./some-library`, then `require('./some-library')` would attempt to load `./some-library/lib/some-library.js`.

##### folder is in a `node_modules` directory

If node cannot load a default `index.js` file nor find a `package.json`, it will search for `node_modules` directory on the file system.

See [Loading from `node_modules` Folders](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html#modules_loading_from_node_modules_folders).
