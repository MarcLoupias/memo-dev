# webapp build

## strategy

[État de l'art de ES2015+ dans Node.js et le navigateur - Blend Web Mix - Christophe Porteneuve - 20161121](https://youtu.be/k0_gi7BoBgw?t=2251)

> (Par compilation ils parlent de Babel notamment)
> Question : Tu compiles pour autant de cibles que tu as de navigaters ?
> Réponse : Nononon tu fais une compilation, mais par contre tu vises le plus petit dénominateur commun.
> Tu peux choisir de faire plusieurs compilations mais ça va complexifier pas mal de chaine de déploiement.
> Comment tu vas faire, tu vas faire du browser sniffing ? Avec la gueule qu'ont les user-agents aujourd'hui ? Non c'est pas possible.
> Tu pourrais faire de la feature detection, le problème c'est que tu vas ralentir énormément puisque tu dois d'abord feature détecter puis recharger derrière.
> En gros ce qui marche, même pour les gros sites, c'est le plus petit dénominateur commun. Même si tu transpiles tout, parce que
> tu vises IE9+ en gros, t'obtiens quelque chose d'éminament utilisable. C'est ce que font les gros.
> Intellectuellement on fait "ah ouai machin" mais, commence par minimiser la jpeg de 900ko dans ta home, implémente http2,
> fais des choses qui servent pour de vrai, mettre des vrais entêtes de caches, etc ...

## bundlers

### bundler projects

[browserify](http://browserify.org/)

[JSPM](https://jspm.io/)

> package manager (onto npm and GitHub) AND bundler
> Uses [SystemJS](https://github.com/systemjs/systemjs)

[webpack](https://webpack.js.org/)

[rollup.js](https://rollupjs.org/guide/en)

[brunch](http://brunch.io/)

[fuse-box](https://fuse-box.org/)

[Parcel](https://parceljs.org/)

### Comparison by features

Extracted from the unreadable [webpack website](https://webpack.js.org/comparison/) markdown table :

| Feature | webpack/webpack | jrburke/requirejs | substack/node-browserify | jspm/jspm-cli | rollup/rollup | brunch/brunch |
|---------|-----------------|-------------------|--------------------------|---------------|---------------|---------------|
| Additional chunks are loaded on demand | **yes** | **yes** | no | [System.import](https://github.com/systemjs/systemjs/blob/master/docs/system-api.md#systemimportmodulename--normalizedparentname---promisemodule) | no | no |
| AMD `define` | **yes** | **yes** | [deamdify](https://github.com/jaredhanson/deamdify) | yes | [rollup-plugin-amd](https://github.com/piuccio/rollup-plugin-amd) | yes |
| AMD `require` | **yes** | **yes** | no | yes | no | yes |
| AMD `require` loads on demand | **yes** | with manual configuration | no | yes | no | no |

| Feature | webpack/webpack | jrburke/requirejs | substack/node-browserify | jspm/jspm-cli | rollup/rollup | brunch/brunch |
|---------|-----------------|-------------------|--------------------------|---------------|---------------|---------------|
| CommonJS `exports` | **yes** | only wrapping in `define` | **yes** | yes | [commonjs-plugin](https://github.com/rollup/rollup-plugin-commonjs) | yes |
| CommonJS `require` | **yes** | only wrapping in `define` | **yes** | yes | [commonjs-plugin](https://github.com/rollup/rollup-plugin-commonjs) | yes |
| CommonJS `require.resolve` | **yes** | no | no | no | no | |
| Concat in require `require("./fi" + "le")` | **yes** | no♦ | no | no | no | |

| Feature | webpack/webpack | jrburke/requirejs | substack/node-browserify | jspm/jspm-cli | rollup/rollup | brunch/brunch |
|---------|-----------------|-------------------|--------------------------|---------------|---------------|---------------|
| Debugging support | **SourceUrl, SourceMaps** | not required | SourceMaps | **SourceUrl, SourceMaps** | **SourceUrl, SourceMaps** | SourceMaps |
| Dependencies | 19MB / 127 packages | 11MB / 118 packages | **1.2MB / 1 package** | 26MB / 131 packages | ?MB / 3 packages | |
| ES2015 `import`/`export` | **yes** (webpack 2) | no | no | **yes** | **yes** | yes, via [es6 module transpiler](https://github.com/gcollazo/es6-module-transpiler-brunch)
| Expressions in require (guided) `require("./templates/" + template)` | **yes (all files matching included)** | no♦ | no | no | no | no |
| Expressions in require (free) `require(moduleName)` | with manual configuration | no♦ | no | no | no | |

| Feature | webpack/webpack | jrburke/requirejs | substack/node-browserify | jspm/jspm-cli | rollup/rollup | brunch/brunch |
|---------|-----------------|-------------------|--------------------------|---------------|---------------|---------------|
| Generate a single bundle | **yes** | yes♦ | yes | yes | yes | yes |
| Indirect require `var r = require; r("./file")` | **yes** | no♦ | no | no | no | |
| Load each file separate | no | yes | no | yes | no | no |
| Mangle path names | **yes** | no | partial | yes | not required (path names are not included in the bundle) | no |
| Minimizing | uglify | uglify, closure compiler | [uglifyify](https://github.com/hughsk/uglifyify) | yes | [uglify-plugin](https://github.com/TrySound/rollup-plugin-uglify) | [UglifyJS-brunch](https://github.com/brunch/uglify-js-brunch)

| Feature | webpack/webpack | jrburke/requirejs | substack/node-browserify | jspm/jspm-cli | rollup/rollup | brunch/brunch |
|---------|-----------------|-------------------|--------------------------|---------------|---------------|---------------|
| Multi pages build with common bundle | with manual configuration | **yes** | with manual configuration | with bundle arithmetic | no | no|
| Multiple bundles | **yes** | with manual configuration | with manual configuration | yes | no | yes |
| Node.js built-in libs `require("path")` | **yes** | no | **yes** | **yes** | [node-resolve-plugin](https://github.com/rollup/rollup-plugin-node-resolve) | |
| Other Node.js stuff | process, __dir/filename, global | - | process, __dir/filename, global | process, __dir/filename, global for cjs | global ([commonjs-plugin](https://github.com/rollup/rollup-plugin-commonjs)) | |
| Plugins | **yes** | yes | **yes** | yes | yes | yes |

| Feature | webpack/webpack | jrburke/requirejs | substack/node-browserify | jspm/jspm-cli | rollup/rollup | brunch/brunch |
|---------|-----------------|-------------------|--------------------------|---------------|---------------|---------------|
| Preprocessing | **loaders, [transforms](https://github.com/webpack/transform-loader)** | loaders | transforms | plugin translate | plugin transforms | compilers, optimizers |
| Replacement for browser | `web_modules`, `.web.js`, package.json field, alias config option | alias option | package.json field, alias option | package.json, alias option | no | |
| Requirable files | file system | **web** | file system | through plugins | file system or through plugins | file system |
| Runtime overhead | **243B + 20B per module + 4B per dependency** | 14.7kB + 0B per module + (3B + X) per dependency | 415B + 25B per module + (6B + 2X) per dependency | 5.5kB for self-executing bundles, 38kB for full loader and polyfill, 0 plain modules, 293B CJS, 139B ES2015 System.register before gzip | **none for ES2015 modules** (other formats may have) | |
| Watch mode | yes | not required | [watchify](https://github.com/substack/watchify) | not needed in dev | [rollup-watch](https://github.com/rollup/rollup-watch) | yes |
