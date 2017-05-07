# gulp memo

- [gulp ground scheme] (https://medium.com/@contrahacks/gulp-3828e8126466#.add1bndgp)
built upon [vinyl] (https://github.com/gulpjs/vinyl) and [vinyl-fs] (https://github.com/gulpjs/vinyl-fs)

- [gulp API] (https://github.com/gulpjs/gulp/blob/master/docs/API.md)


## quick ref (the bricks)
- [gulp task] (https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname-deps-fn) to define a task
- [gulp src] (https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options) to define files reading
- [gulp dest] (https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath-options) to define files writing
- [gulp watch] (https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb) to observe files
- [nodejs stream] (https://nodejs.org/api/stream.html) the gulp paradigm
- [nodejs pipe] (https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options) to chain gulp tasks
- [vinyl fs] (https://github.com/gulpjs/vinyl-fs) Vinyl adapter for the file system
- [vinyl] (https://github.com/gulpjs/vinyl) Virtual file format

## gulp node modules
- [gulp-protractor] (https://github.com/mllrsohn/gulp-protractor)

wrapper module for [protractor] (https://github.com/angular/protractor)

- [gulp-load-plugins] (https://github.com/jackfranklin/gulp-load-plugins)

Check your project's package.json and load all gulp plugins. They are now accessible from gulp-load-plugins.

Ex : 
```javascript
var plugins = require('gulp-load-plugins')();

plugins.jshint = require('gulp-jshint');
plugins.concat = require('gulp-concat');
```

- [gulp-autoprefixer] (https://github.com/sindresorhus/gulp-autoprefixer)

wrapper module for [autoprefixer] (https://github.com/postcss/autoprefixer)

- [gulp-inject] (https://github.com/klei/gulp-inject)

> A stylesheet, javascript and webcomponent reference injection plugin for gulp. No more manual editing of your index.html!

`gulp-inject` takes a stream of source files, transforms each file to a string and injects each transformed string into placeholders in the target stream files.

- [gulp-csso] (https://github.com/ben-eb/gulp-csso)

> Minify CSS with CSSO.

wrapper module for [csso] (https://www.npmjs.com/package/csso)

- [gulp-angular-templatecache] (https://github.com/miickel/gulp-angular-templatecache)

> Concatenates and registers AngularJS templates in the `$templateCache`.
