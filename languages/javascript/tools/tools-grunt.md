
grunt
=====
http://gruntjs.com/

what it is ?
------------
a javascript task runner (like ant)
used to build app

getting started
---------------
http://gruntjs.com/getting-started

project related files 
---------------------
A typical setup will involve adding two files to your project: `package.json` and the `Gruntfile`.

`package.json`: This file is used by `npm` to store metadata for projects published as `npm` modules. You will list grunt and the Grunt plugins your project needs as `devDependencies` in this file.

`Gruntfile`: This file is named `Gruntfile.js` or `Gruntfile.coffee` and is used to configure or define tasks and load Grunt plugins. 

IntelliJ integration
====================
http://javamind-fr.blogspot.fr/2013/06/lancer-les-commandes-grunt-dans.html


grunt tasks list
================

grunt-contrib-connect
---------------------
https://github.com/gruntjs/grunt-contrib-connect
This task launch a local webserver

manage template in html
-----------------------
http://gruntjs.com/api/grunt.file
Exemple :

grunt.file.copy('src/' + filename + '.html', this.data.dir + '/index.html', {
  process: function (contents, path) {
    return grunt.template.process(contents, {
      data: {
        baseRef: base,
        scripts: jsFiles,
        styles: cssFiles,
        version: grunt.config('pkg.version'),
        date: grunt.template.today("yyyy-mm-dd HH:MM"),
        build: grunt.config('pkg.buildnumber')
      }
    });
  }
});

<%= baseRef %> inside html template
