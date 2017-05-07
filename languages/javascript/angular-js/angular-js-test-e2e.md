### Angular e2e

- [angularjs-e2e-testing-using-ngmocke2e] (http://blog.xebia.com/2014/03/08/angularjs-e2e-testing-using-ngmocke2e/)
- [locators protractors] (http://www.protractortest.org/#/locators)
- [page objects] (https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ/edit?pli=1#slide=id.g2bc490733_00)
- [protractor-styleguide] (https://github.com/CarmenPopoviciu/protractor-styleguide)
- [phantomjs not good for e2e](https://www.exratione.com/2015/02/phantomjs-has-many-uses-but-function-testing-isnt-one-of-them/)

#### installation des drivers pour webdrivers

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

#### lancer la suite de test sur chaque browser

```javascript
multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }, {
    'browserName': 'ie'
  }],
  
```

#### tests pour ie fail

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

#### exporter les résultats

```javascript
resultJsonOutputFile: 'e2e.results.json',
```

Nécessite que jasmineNodeOpts.isVerbose soit à true.

#### reporter
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
