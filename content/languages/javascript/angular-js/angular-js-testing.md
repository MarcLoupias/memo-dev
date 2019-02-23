---
htmlHead:
    title: 'marlou knowledge base' 
    containerClass: 'markdown-body'
    metaTags:
        - name: viewport
          content: 'width=device-width, initial-scale=1, minimal-ui'
        - name: robots
          content: none
    links:
        - href: '../../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../../main.css'
          rel: stylesheet
          media: all
        - href: '../../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../../index.js'

---

# AngularJS - testing

## tools

- [karma runner](http://karma-runner.github.io/0.13/index.html)
- [jasmine](http://jasmine.github.io/)
- [PhantomJS](http://phantomjs.org/)
- [karma-htmlfile-reporter](https://github.com/matthias-schuetz/karma-htmlfile-reporter)
- [karma-junit-reporter](https://github.com/karma-runner/karma-junit-reporter)
- [karma & jenkins](http://karma-runner.github.io/0.12/plus/jenkins.html)
- [mockaroo : online mock file generator](https://www.mockaroo.com/)

## unit testing

### best articles
 
- [angular-tips.com : unit-test](http://angular-tips.com/blog/categories/unit-test/)
- [introduction-aux-tests-unitaires-en-javascript](http://blog.xebia.fr/2013/03/21/introduction-aux-tests-unitaires-en-javascript/)
- [Les 10 commandements des tests unitaires](http://blog.xebia.fr/2008/04/11/les-10-commandements-des-tests-unitaires/)
- [rater-ses-tests-unitaires-en-toutes-circonstances](http://blog.soat.fr/2013/11/10-trucs-infaillibles-pour-rater-ses-tests-unitaires-en-toutes-circonstances-22/)

### best lib (ng-describe)

- [ng-describe](https://github.com/kensho/ng-describe)
- Avec ng-describe, quand on mock une constante utilisée pour stocker une lib externe ( cf [Y240] (https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y240) ), mocker la constante ne suffit pas, il faut mocker chaque fonction utilisée en lui réattribuant la fonction initiale.
On injecte par IIFE la vrai lib donc on réattribue au mock les fonctions utilisées. Ou pas.

Articles de l'auteur de la lib :

- [Unit testing AngularJS code in record time using ng-describe : glebbahmutov.com/](https://glebbahmutov.com/blog/1-2-3-tested/)
- [Slides AngularJS NYC meetup in August 2015](http://slides.com/bahmutov/ng-describe#/)
- [testing-angularjs-under-node : glebbahmutov.com/](https://glebbahmutov.com/blog/testing-angularjs-under-node/)
- [testing-angular-async-stuff: glebbahmutov.com](https://glebbahmutov.com/blog/testing-angular-async-stuff/)

### intégration jasmine dans webstorm

http://stackoverflow.com/questions/8108461/how-can-i-get-webstorm-to-recognize-jasmine-methods

Selection jasmine definitly typed : http://stackoverflow.com/a/36864225

### examples

#### repos examples

- [Puigcerber/angular-unit-testing : github.com](https://github.com/Puigcerber/angular-unit-testing)
> Guidelines and patterns for unit testing AngularJS apps.

- [cironunes/angular-testing-recipes : github.com](https://github.com/cironunes/angular-testing-recipes)
> Unit and e2e testing recipes for AngularJS 

- [Unit Testing in AngularJS: Services, Controllers & Providers : sitepoint.com](https://www.sitepoint.com/unit-testing-angularjs-services-controllers-providers/)
> [github repository](https://github.com/sitepoint-editors/angular-js-unit-testing-services-controllers-providers)

#### tests avec $http

- [les-tests-angularjs-le-guide-de-a-a-z](http://blog.occitech.fr/2013/10/les-tests-angularjs-le-guide-de-a-a-z-partie-1-les-tests-unitaires/)

#### tests de services

- [how-do-i-test-an-angularjs-service-with-jasmine](http://stackoverflow.com/questions/13013772/how-do-i-test-an-angularjs-service-with-jasmine)

#### tests de directives
 
- [angular-testing-tips-testing-directives](https://www.sitepoint.com/angular-testing-tips-testing-directives/)

#### Dependencies mocking

- [mocking-angular-module-dependencies](http://stackoverflow.com/questions/17554727/mocking-angular-module-dependencies-in-jasmine-unit-tests)
- [injecting-a-mock-into-an-angularjs-service](http://stackoverflow.com/questions/14773269/injecting-a-mock-into-an-angularjs-service/18756347#18756347)
- [divers](http://www.sitepoint.com/mocking-dependencies-angularjs-tests/)
- [Dummy, Fake, Stub, Mock et Spy, les tests unitaires avec l'aide de Moq](http://blog.softit.fr/post/dummy-fake-stub-mock-et-spy-les-tests-unitaires-avec-l-aide-de-moq)

#### Testing a throw exception :

```javascript
it('throws exception when args are undefined or null', inject(function (HistoryLRindexService) {
  expect(function(){HistoryLRindexService.addIndexElement(undefined, 'toto');})
    .toThrowError('HistoryLRindexValueFactory.addIndexElement(key, data) error : key null or undefined');
}));
```

- use anonymous function for the call
- use `toThrowError(exceptionMsg)` [matcher from Jasmine](http://jasmine.github.io/2.3/introduction.html#section-Included_Matchers)

- your impl should be something like that :
```javascript
if(!key) {
  throw new Error('HistoryLRindexValueFactory.addIndexElement(key, data) error : key null or undefined');
}
```

#### Testing a directive : 

```javascript
(function () {
    'use strict';

    angular
        .module('app')
        .directive('exampleDirective', exampleDirective);

    function exampleDirective() {
        return {
            restrict: 'E',
            scope: {
                stroke: "@",
                fill: "@"
            },
            template: '<svg ng-attr-height="{{values.canvas}}" ng-attr-width="{{values.canvas}}" class="gray">' +
            '<circle ng-attr-cx="{{values.center}}" ng-attr-cy="{{values.center}}"' +
            'ng-attr-r="{{values.radius}}" stroke="{{stroke}}"' +
            'stroke-width="3" fill="{{fill}}" />' +
            '</svg>',
            link: function(scope, element, attrs) {
                var calculateValues = function(size) {
                    var canvasSize = size * 2.5;

                    scope.values = {
                        canvas: canvasSize,
                        radius: size,
                        center: canvasSize / 2
                    };
                };

                attrs.$observe('size', function(newSize) {
                    calculateValues(parseInt(newSize, 10));
                });
            }
        };
    }

}());
```

```javascript
(function () {
    'use strict';

    describe('directive: example', function() {
        var element, scope;

        beforeEach(module('app'));

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();

            element =
                '<example-directive size="{{size}}" stroke="black" fill="blue"></example-directive>';

            scope.size = 100;

            element = $compile(element)(scope);
            scope.$digest();
        }));

        describe('with the first given value', function() {
            it("should compute the size to create other values", function() {
                var isolated = element.isolateScope();
                expect(isolated.values.canvas).toBe(250);
                expect(isolated.values.center).toBe(125);
                expect(isolated.values.radius).toBe(100);
            });

            it("should contain a svg tag with proper size", function() {
                expect(element.find('svg').attr('height')).toBe('250');
                expect(element.find('svg').attr('width')).toBe('250');
            });

            it("should contain a circle with proper attributes", function() {
                expect(element.find('circle').attr('cx')).toBe('125');
                expect(element.find('circle').attr('cy')).toBe('125');
                expect(element.find('circle').attr('r')).toBe('100');
                expect(element.find('circle').attr('stroke')).toBe('black');
                expect(element.find('circle').attr('fill')).toBe('blue');
            });
        });

        describe('when changing the initial value to a different one', function() {

            beforeEach(function() {
                scope.size = 160;
                scope.$digest();
            });

            it("should compute the size to create other values", function() {
                var isolated = element.isolateScope();
                expect(isolated.values.canvas).toBe(400);
                expect(isolated.values.center).toBe(200);
                expect(isolated.values.radius).toBe(160);
            });

            it("should contain a svg tag with proper size", function() {
                expect(element.find('svg').attr('height')).toBe('400');
                expect(element.find('svg').attr('width')).toBe('400');
            });

            it("should contain a circle with proper attributes", function() {
                expect(element.find('circle').attr('cx')).toBe('200');
                expect(element.find('circle').attr('cy')).toBe('200');
                expect(element.find('circle').attr('r')).toBe('160');
                expect(element.find('circle').attr('stroke')).toBe('black');
                expect(element.find('circle').attr('fill')).toBe('blue');
            });
        });

    });

}());
```

## e2e testing

- [angularjs-e2e-testing-using-ngmocke2e] (http://blog.xebia.com/2014/03/08/angularjs-e2e-testing-using-ngmocke2e/)
- [locators protractors] (http://www.protractortest.org/#/locators)
- [page objects] (https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ/edit?pli=1#slide=id.g2bc490733_00)
- [protractor-styleguide] (https://github.com/CarmenPopoviciu/protractor-styleguide)
- [phantomjs not good for e2e](https://www.exratione.com/2015/02/phantomjs-has-many-uses-but-function-testing-isnt-one-of-them/)

### installation des drivers pour webdrivers

ATTENTION CHROME & FIREFOX, need dl update de webdriver.

Derrière un proxy il faut config envvar `HTTP_PROXY` & `HTTPS_PROXY` sur fiddler (`http://localhost:8888`)
et set `ignore_ssl` à true si le magasin de certificat du réseau est fucké. Pour le moment on sait le faire que en dur dans le source de webdriver-manager ( `.\node_modules\gulp-protractor\node_modules\protractor\bin\webdriver-manager` )
ligne 93 (`default('ignore_ssl', false)`.)

- `ignore_ssl` for protractor [issue 1847] (https://github.com/angular/protractor/issues/1847#issuecomment-76023932).
- proxy config + ignore_ssl for webdriver-manager, [issue 1477] (https://github.com/angular/protractor/issues/1477).

ATTENTION IE :
pour exécution sur IE [need drivers spécifiques] (http://selenium-release.storage.googleapis.com/index.html).
(dépendent de la plateforme, sur win x64 : `IEDriverServer_x64_2.47.0.zip`)
Config à faire ensuite dans `protractor.conf.js` pour lancer sur ce server (géré au niveau du generator)

### lancer la suite de test sur chaque browser

```javascript
multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }, {
    'browserName': 'ie'
  }],
  
```

### tests pour ie fail

```
UnknownError: The path to the driver executable must be set by the webdriver.ie.driver system property; for more information, see http://code.google.com/p/selenium/wiki/InternetExplorerDriver. The latest version can be downloaded from http://selenium-release.storage.googleapis.com/index.html
```
  
IE nécessite un driver spécifique et une config spécifique.
Dans `gulp-protractor` les drivers webdriver de IE ne sont pas DL, cf [issue 38] (https://github.com/mllrsohn/gulp-protractor/issues/38)
Télécharger les drivers IE manuellement [ici] (http://selenium-release.storage.googleapis.com/index.html).
Doc du driver [ici] (https://code.google.com/p/selenium/wiki/InternetExplorerDriver).

Installer l'exe dans la partie exécutable du disque dur.

Ajouter de la config à protractor.conf.js :

```javascript
 seleniumArgs: [
    '-Dwebdriver.ie.driver=C:\\Produits\\dev\\ws-js\\webdriver-ie\\IEDriverServer.exe'
  ],
```

Ajouter la capability à la config de `protractor.conf.js` :

```javascript
 multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }, {
    'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
  }],
```

### exporter les résultats

```javascript
resultJsonOutputFile: 'e2e.results.json',
```

Nécessite que jasmineNodeOpts.isVerbose soit à true.

### reporter
- [Jasmine reporter] (https://github.com/larrymyers/jasmine-reporters#protractor)
- Discussion dans les [issues de protractor] (https://github.com/angular/protractor/issues/60)

installation : 
```
npm install jasmine-reporters@^2.0.7 --save-dev
```

Dans `protractor.conf.js`, ajouter :

```javascript
var jasmineReporters = require('jasmine-reporters');
exports.config = {
	// ...
	framework: 'jasmine2',
	// ...
	onPrepare: function () {
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      savePath: paths.e2e + '/reports/',
      consolidateAll: true,
      filePrefix: 'e2e.chrome.results.' + _currentTimestampToString()
    }));
	// ...
	// Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function() {}
  }
  },
};
```

Va créer le rapport dans `../e2e/reports/`

Le rapport est un fichier au format xml qui nécessite une mise en forme.
[Cette xslt] (https://github.com/niedbalski/nosetest-xunit-xslt/blob/master/nosetests.xslt) peut être utilisée pour
mettre en forme le xml d'output mais manque un moyen pour linker automatiquement le xml de sortie avec la xsl. (pas prévu par le module)
