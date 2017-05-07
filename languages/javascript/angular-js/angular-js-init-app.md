
### Angular app init 

#### Bootstrap d'une app web

1. Le browser lève l'event [DOMContentLoaded] (https://developer.mozilla.org/en-US/docs/Web/Reference/Events/DOMContentLoaded ) durant ce step.
Le moment exact est aléatoire, il n'attend pas le chargement des ressources liées à la page (css et images), le html et les js associés sont chargés cependant, on passe direct au point 3, le point 2 se joue en parallèle.

2. Le browser lève l'event [load] (https://developer.mozilla.org/en-US/docs/Web/Reference/Events/load) en fin de step.
Toutes les dépendances (de la page d'index) ont été téléchargées (non bloquant pour le démarrage angular).

3. Démarrage Angular
  1. la méthode `angularInit(element, bootstrap)` est exécutée.
Elle cherche la directive `ng-app` et son paramètre (le module racine de l'application).

  2. la méthode `bootstrap(element, bootstrap)` est exécutée.
Elle détermine si le bootstrap de l'app doit se faire maintenant ou si il est délayé.
Si il n'est pas délayé elle crée l'injecteur via `createInjector(modulesToLoad, strictDi)`

  3. création de l'injecteur via `createInjector(modulesToLoad, strictDi)`
Tous les modules angular et leurs sous modules (modules optionnels comme ngLocale) sont chargés.
Un cache des composants est créé (les services sont des singletons, s'ils ne sont pas instanciés ils le sont et sont ajoutés au cache, à chaque nouvel appel le cache est vérifié et si angular trouve quelque chose il sert l'élément présent dans le cache et ne fait pas de nouvelle instanciation).
Viennent ensuite toutes les dépendances déclarées sur le module principal.
Durant cette phase tout l'arbre des dépendance est parsé.
Une liste des `config()` à exécuter est constituée ainsi qu'une liste de `run()`
Les `config()` de tous les modules sont ensuite exécutés dans l'ordre inverse de l'arbre.
Seuls les services de type `provider` et `constant` peuvent être injectés.
puis
`run()` de tous les modules dans le même ordre que pour `config()`
Les `provider` sont interdits à ce stade (pas de config de `provider` au runtime.

  4. L'injecteur a été créé. Tous les modules ont joué leur `config()` puis leur `run()` en terminant par celui du module principal de l'app.
L'injecteur crée le `$rootScope` puis compile l'app sur la base de `ng-app` qui sert de racine.
Si une directive `ng-controller` est rencontrée, l'injecteur est appelé pour instancier le controller associé.

  5. La webapp est rendue, elle attend une interaction de l'utilisateur.


##### Exemple ordre d'exécution des modules au bootstrap

Ex, on a la hiérarchie suivante :

```
app
app.moduleA
app.moduleA.subModuleA1
app.moduleB
```

l'ordre d'exécution sera :

```
app.moduleB
app.moduleA.subModuleA1
app.moduleA
app
```

ou

```
app.moduleA.subModuleA1
app.moduleA
app.moduleB
app
```

mais jamais 

```
app.moduleA
app.moduleA.subModuleA1
app.moduleB
app
```

##### Documentation à check :
- [ng dev guide - module] (https://docs.angularjs.org/guide/module)
- [ng dev guide - bootstrap] (https://docs.angularjs.org/guide/bootstrap)
- [ng dev guide - dependency injection] (https://docs.angularjs.org/guide/di)
- [angular.module] (https://docs.angularjs.org/api/ng/function/angular.module)
- [angular.injector] (https://docs.angularjs.org/api/ng/function/angular.injector)
- [ngApp] (https://docs.angularjs.org/api/ng/directive/ngApp)
- [ngView] (https://docs.angularjs.org/api/ngRoute/directive/ngView)
- [$injector] (https://docs.angularjs.org/api/auto/service/$injector)
- [$provide] (https://docs.angularjs.org/api/auto/service/$provide)
- [$location] (https://docs.angularjs.org/api/ng/service/$location)

#### knowing when the a view has finished loading

[not possible because of MVVM pattern] (http://stackoverflow.com/questions/14368097/execute-function-after-page-has-finished-downloading-and-bootstrapping)

#### others topics
- [Misko Hevery comment on an angular github issue] (https://github.com/angular/angular.js/issues/1306#issuecomment-8200414)
- [is there a post render callback for angular directive] (http://stackoverflow.com/questions/11125078/is-there-a-post-render-callback-for-angular-js-directive)
- [how to invoke a function in an angular directive after the child nodes have been processed] (http://stackoverflow.com/questions/15932771/how-to-invoke-a-function-in-an-angular-directive-after-the-child-nodes-have-been/15946913#15946913)
- [What is meant by Bootstrapping in angular JS?] (http://stackoverflow.com/questions/21058213/what-is-meant-by-bootstrapping-in-angular-js)
- [sending event when angular finished loading] (http://stackoverflow.com/questions/14968690/sending-event-when-angular-js-finished-loading)
- [les fondations de AngularJS] (http://blog.xebia.fr/2013/10/14/les-fondations-dangularjs/)
