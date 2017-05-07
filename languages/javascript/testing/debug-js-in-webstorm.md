# debug js in webstorm

To debug javascript code in Webstorm via karma with Jasmine.

## prepare Karma

[preparing-to-use-karma-test-runner](https://www.jetbrains.com/phpstorm/help/preparing-to-use-karma-test-runner.html)

The [Karma website](http://karma-runner.github.io/0.12/index.html)

## config Karma

A simple `karma.conf.js` file generated with the karma command line tool is ok.
Like [this](http://karma-runner.github.io/0.12/intro/configuration.html) and [this](http://karma-runner.github.io/0.12/config/configuration-file.html)

## prepare Webstorm and a browser

A browser is needed to execute js. Using Chrome we need a [JetBrains plugin](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji)

Now create a Karma configuration in webstorm with the "Run/Debug Configurations" window.
It is needed to tell Webstorm the `karma.conf.js` file to pick.

## running a test

Select karma in the run/debug config combo box.
Keep the unit test source code file selected in WS.
Add some breakpoints.
Clic on the debug button (or `MAJ + F9`)

Enjoy

* [The Jasmine doc](http://jasmine.github.io/2.1/introduction.html)

## Video ressources

[short vid (5mins) with basics](https://www.youtube.com/watch?v=oyWW_V4wALs)
