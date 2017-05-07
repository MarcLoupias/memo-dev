
# karma

http://karma-runner.github.io/0.10/index.html

## what it is ?

A test runner for js tests.
Can ran tests described with a lots of frameworks (Jasmine, Mocha, QUnit, ...)

## Karma config file

http://karma-runner.github.io/0.10/config/configuration-file.html

## Browsers config

http://karma-runner.github.io/0.10/config/browsers.html

`export CHROME_BIN=/usr/bin/google-chrome-stable`

## IntelliJ integration

http://mariuszprzydatek.com/2013/07/21/angularjs-karma-and-debugging-unit-tests-in-webstorm-or-intellij-idea/

## karma & grunt

Use `grunt-karma` npm module.
A sample grunt task is needed :

```javascript
karma: {
  unit: {
      configFile: 'karma.conf.js'
  }
}
```

`karma.conf.js` should be generated with the karma command line tool.

Install launcher, `karma-chrome-launcher` to use Chrome, or `karma-phantomjs-launcher` for a silent execution.
