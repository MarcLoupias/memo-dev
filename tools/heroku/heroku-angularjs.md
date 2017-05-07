
### Deploy AngularJs app on Heroku

#### Goal
Running an Angular app as a Node.js app.

#### deploy angular app on heroku
- [sitepoint.com : deploying-yeomanangular-app-heroku] (http://www.sitepoint.com/deploying-yeomanangular-app-heroku/)

steps :

rajouter en dépendance du package.json du projet 
```javascript
"dependencies": {
      "gzippo": "~0.2.0",
      "express": "~3.4.8"
  }
```

un Procfile contenant :
```
web: node web.js
```

un script web.js contenant :

```javascript
var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname));
app.listen(process.env.PORT || 9000);
```

les fichiers à déployer sont dans la folder `/dist`
Modifier `Gruntfile.js` pour lui faire copier le Procfile, le `web.js`.
TODO : Lui faire copier une version déployable du `package.json` (nécessaire !)
TOFIX : problème avec certaines tasks (la minification notamment, lié à angular-ui (dep cyclic) et ng-grid)
Initialiser un repo git au niveau de `/dist`

puis en console au niveau de `/dist` :

```
$ heroku login
$ heroku create
```
créer le repo, commit
```
$ git push heroku master
```

**l'app est dispo**

#### config question on stackoverflow
- [stackoverflow.com : how-do-i-deploy-an-angular-js-app] (http://stackoverflow.com/questions/16674202/how-do-i-deploy-an-angular-js-app)

#### Node.js support on Heroku
- [devcenter.heroku.com : getting-started-with-nodejs#visit-your-application] (https://devcenter.heroku.com/articles/getting-started-with-nodejs#visit-your-application)

#### Example, the generator-angular-fullstack
- [npmjs.org : generator-angular-fullstack] (https://npmjs.org/package/generator-angular-fullstack)

