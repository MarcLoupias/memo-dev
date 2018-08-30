# tools bundlers

## intro

[ronami/minipack - github.com](https://github.com/ronami/minipack)

> A simplified example of a modern module bundler written in JavaScript
>
> The purpose of this project is to explain how most bundlers work under the hood. It contains a short implementation of a simplified but still reasonably accurate bundler. Along with the code, there are comments explaining what the code is trying to achieve.

## webpack

[webpack.js.org](https://webpack.js.org/)

[github.com/webpack/webpack](https://github.com/webpack/webpack)

[webpack.js.org - concepts](https://webpack.js.org/concepts/)

> - Entry : An entry point indicates which module webpack should use to begin building out its internal *dependency graph*
> - Output : The output property tells webpack where to emit the *bundles* it creates and how to name these files.
> - Loaders : Loaders allow webpack to process other types of files (other then `.js`) and convert them into valid modules.
> - Plugins : Plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

[webpack.js.org - concepts/modules](https://webpack.js.org/concepts/modules/)

### webpack articles

[Pourquoi Webpack ? - putaindecode.io - 20150720](http://putaindecode.io/fr/articles/js/webpack/)

[Webpack et son avenir en 6 questions - blog.js-republic.com - 20180222](http://blog.js-republic.com/webpack-et-son-avenir-en-6-questions/)

[How to switch from Gulp to Webpack: a tutorial to get you started - 20171026](https://www.valentinog.com/blog/from-gulp-to-webpack-quickstart/)

[Webpack 4 Tutorial: from 0 Conf to Production Mode - 20180119](https://www.valentinog.com/blog/webpack-4-tutorial/)

[Débuter avec Webpack 20180108](https://www.alsacreations.com/tuto/lire/1754-debuter-avec-webpack.html)

### webpack tools

Theses tools uses the [webpack stats API](https://webpack.js.org/api/stats/), usage is `$ webpack --profile --json > compilation-stats.json`

[webpack-visualizer - chrisbateman.github.io](https://chrisbateman.github.io/webpack-visualizer/)

[zillow/webpack-stats-duplicates](https://github.com/zillow/webpack-stats-duplicates)

## fuse-box

[fuse-box.org](https://fuse-box.org/)

## parcel

[parcel](https://parceljs.org/)
