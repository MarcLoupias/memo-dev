# Angular - Migration from AngularJS

[Upgrade guide ng2 doc](https://angular.io/guide/upgrade)

[AngularJS 2.0 Migration Guide : codeproject.com](https://www.codeproject.com/Articles/1121384/AngularJS-Migration-Guide)

> 2016/08/31
>
> **Preparation**
>
> - Follow the John Papa’s Styleguide for Angular 1 development
> - Update to the latest version of Angular 1
> - All new development using components
> - Switch controllers to components (component directives)
> - Remove incompatible features (specific to Angular 2) from directives
> - Implement manual bootstrapping (No more ng-app)
>
> **Upgrade**
>
> - Add TypeScript transpilation and build
> - Start using ES6 or JavaScript 2015
> - Switch controllers and services to ES6 Classes
> - Add Angular 2.0 to your project
> - Migrate one piece at a time
>

[Préparer la migration de AngularJS 1.x vers AngularJS 2.0 : maxlab.fr](http://maxlab.fr/javascript/migrer-de-angularjs-1-x-vers-angularjs-2-0-pratique/#foot_loc_1403_1)

> Eviter l’usage de `$scope` et utiliser la syntaxe `ControllerAs`.
>
> Supprimer le `$scope`, c’est supprimer `$watch` `$apply` `$timeout` .. des notions qui compliquent l’apprentissage du
> framework et sont souvent à l’origine de [hacks](http://www.bennadel.com/blog/2605-scope-evalasync-vs-timeout-in-angularjs.htm).
>
> Au lieu de créer un controleur et d’utiliser `ng-controller`, préférez l’usage d’une directive.
>
> Tirer profit des fonctionnalités d’ECMAscript 6/2015
>
> - Les [modules](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)
>
> pour appliquer le paragraphe précédent sur le découplage
>
> - Les [arrow functions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)
>
> pour simplifier les retours issues de promises, l’utilisation des fonctions sur les tableaux et le binding du `this`
>
> - La [notation objet simplifiée](http://ariya.ofilabs.com/2013/02/es6-and-object-literal-property-value-shorthand.html) et la [décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition)
>
> pour réduire le code et augmenter la lisibilité
>
> - Les classes : pour coller à la syntaxe d’Angular 2 et éventuellement utiliser les [décorateurs d’ES7](https://github.com/wycats/javascript-decorators)
>
> Services : Dans Angular 2, les services sont de simples classes, il est préférable de n’utiliser que `angular.service`
> dans Angular 1
>

[Preparing your Angular 1 codebase to upgrade to React or Angular 2 - www.inrhythm.com - 20170424](https://www.inrhythm.com/upgrading-angular-1-to-react-angular-2/)

>
> - Step 1: Integrate Webpack into your build process
>   - use index.js files in each dir/subdir to build a tree of files (all files : js, css and html)
>   - drop gulp in favor of Webpack
>
> - Step 2: Embrace ES6 modules, upgrade Angular services and controllers to ES6 classes
>   - replace global objects through IIFE with ES6 imports
>   - refactor old functions definitions for components and services with classes
>
> - Step 3: Abstract away the Angular module system and decouple your source code from the framework
>   - replace angular builtin helpers functions with lodash functions
>   - use the ui-router pattern (a single ngModule for all the app, and use the regular ES6 modules)
>

## RETEX Step 1

Fonctionne très bien mais pas facile :

- attention à l'ordre des `import` dans les fichiers `index.js`, placer les déclarations de modules en premier dans chaque fichier
- si usage de Bootstrap, il suppose la présence de l'objet `jQuery` sur l'objet `window`, il convient donc de l'ajouter :

```javascript
    // webpack conf

    plugins: [

        // ...

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
```

- il est possible que certaines dépendances soient chargées plusieurs fois selon comment elles sont organisées. Par exemple d'avoir ce message de AngularJS `WARNING: Tried to load angular more than once.`. Ca augmente la taille du bundle mais comme c'est temporaire on peut passer outre le temps de tout passer en modules ES6.
- problème avec les variables globales (par ex fichier de config). Dans un premier temps, coller ces variables dans l'objet global `window` ([cf](https://stackoverflow.com/questions/37656592/define-global-variable-with-webpack)). Attention à l'ordre des imports comme pour les modules AngularJS.
- problème avec les dépendances importées via l'IIFE en tant que variables globales. Passer directement par un import classique depuis le source concerné en plus de l'IIFE. Par ex : `import Fuse from '../../../../node_modules/fuse.js/dist/fuse.min';` à ajouter en tête de fichier devant l'IIFE qui n'est pas touchée.
- [problème avec les templates des composants](https://stackoverflow.com/questions/33300289/how-to-use-webpack-with-angular-templatecache). La solution la plus simple est de ne pas importer les html via les `index.js` mais direct via les composants en faisant un `require` du fichier html sur la props `template` plutôt que via `templateUrl`.
- problème avec les css. Attention depuis le browser les urls des css sont résolvées avec le chemin relatif serveur de la css. Par exemple, si sur le serveur web j'ai `/assets/css/app.css` et que dans cette css j'ai une instruction `url()` qui pointe sur `/assets/fonts/toto.woff` par exemple, lorsque le call sera effectué dans le browser ça ira chercher sur `/assets/css/assets/fonts/toto.woff`. Il convient donc de placer les css à la racine du serveur web pour éviter ce problème.
- problème dans certains templates : Il faut être très strict sur la présentation de caractères spéciaux dans les templates, il ne faut par exemple aucun opérateur logique webpack aime pas !

## RETEX Step 2

Dans les grandes lignes :

- utiliser les `import`/`export` ES6
- supprimer toutes les IIFE
- passer du style-guide de John Papa qui est calibré sur AngularJS avec ES5 à [celui de Todd Motto](https://github.com/toddmotto/angularjs-styleguide) qui est calibré pour ES2015.

concrètement :

- supprimer les IIFE, exporter l'objet/fonction de description du component/filter/service/directive
- renommer la fonction de déclaration de `blablaService` en `blabla`, exporter en nommant le type de composant (Component, Filter, Service, Directive).

Par exemple pour un composant référencé `'headerView'` dans l'injecteur ayant un contrôleur `HeaderViewController` :

Avant on a

```javascript
// header-view.component.js
    angular
        .module('app.header')
        .component('headerView', {
            template: require('./header-view.html'),
            controller: HeaderViewController
        });
```

Après on a :

```javascript
// header-view.component.js
export const HeaderViewComponent = {
    template: require('./header-view.html'),
    controller: HeaderViewController
};

// puis la déclaration des injections de HeaderViewController
HeaderViewController.$inject = [/* ... */];

// puis l'implémentation du ctrl
function HeaderViewController(/* ... */) {
    var ctrl = this;
    // ...
```

- importer dans la déclaration du module afférant

Dans le fichier `*.module.js` correspondant c'est là qu'on va désormais déclarer les composants à l'injecteur.

```javascript
// header.module.js
import angular from 'angular';
// ...
import {HeaderViewComponent} from './header-view.component';

const header = angular.module('app.header', []);
// ...
header.component('headerView', HeaderViewComponent);

// on exporte le module pour l'importer à son tour dans le module de niveau supérieur
export const HeaderModule = header;

// Attention le module qui importe ce module doit set le nom en dépendant et pas le module lui même :

// app.module.js
import angular from 'angular';
import {HeaderModule} from './layout/header/header.module';
//...
const app = angular.module('app', [HeaderModule.name]);
```

- supprimer les fichiers `index.js` dont les `import` font doublons
- garder les `index.js` pour les dépendances et le point d'entrée de l'appli
- reconfigurer ESLint pour prendre en charge ES2015 et les modules

```javascript
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    }
```

- après cette migration, **Karma n'est plus capable d'exécuter les TU out-of-the-box**. Les remettre d'aplomb n'est pas utile puisqu'il n'y aura aucun dev et que Cypress permet de tester la non-régression (suppose d'avoir des tests d'UI suffisamment fiables, Cypress est parfait pour ça !).
- refacto les composants / services / controller / etc ... en classes.

composants :

La fonction déclarant le controller devient une classe.
On ajoute un constructeur à cette classe pour réaliser les injections de dépendances :

```javascript
    constructor(logger, headerMenuConfigObjectService, headerService) {
        this.logger = logger;
        this.headerMenuConfigObjectService = headerMenuConfigObjectService;
        this.headerService = headerService;
    }
```

On binde les services à l'instance. Le `var ctrl = this;` disparait.

Les fonctions implémentants les events hooks :

```javascript
    ctrl.$onInit = function init() {
        logger.info('app.header.HeaderViewController.$onInit()', 'start');
        ctrl.grandMenu = headerMenuConfigObjectService.getMenu();
        ctrl.stats = headerService.data;
        ctrl.clickRefreshData = headerService.clickRefreshData;
        logger.info('app.header.HeaderViewController.$onInit() ctrl.grandMenu = ', ctrl.grandMenu);
    };
```

deviennent des fonctions de la classe :

```javascript
    $onInit() {
        this.logger.info('app.header.HeaderView.$onInit()', 'start');
        //this.grandMenu = this.headerMenuConfigObjectService.getMenu(); // inutile puisque headerMenuConfigObjectService est bind au moment de son injection
        this.stats = this.headerService.data;
        //this.clickRefreshData = this.headerService.clickRefreshData; // inutile puisque headerService est bind au moment de son injection
        this.logger.info('app.header.HeaderView.$onInit() ctrl.grandMenu = ', this.grandMenu);
    }
```

en l'absence de ngAnnotate, la déclaration des dépendances à injecter doit être conservée :

```javascript
HeaderView.$inject = [
    'logger', 'headerMenuConfigObjectService', 'headerService'
];
```

On se retrouve avec 3 blocs :

- l'export de la déclaration du composant (un litteral) qui deviendra un decorator en Angular.
- la classe implémentant le comportement du composant (l'ancien controller)
- la déclaration explicite des dépendances à injecter

Attention la classe doit être impérativement déclarée en premier. Il faut donc déplacer les blocs pour avoir la classe en premier, ensuite les injections et enfin l'export.

Attention il faut transformer les fonctions anonymes des résolutions de promesses dans les composants par des arrows functions (à cause du `this`)

Attention avec les services, lorsqu'on a défini l'implémentation de higher order function (`reduce`, `map`, `filter`) dans une fonction du service/directive et qu'on la passait telle quelle (la définition de la fonction sans l'exécuter), maintenant que ces fonctions sont des méthodes de fonctions il est nécessaire d'avoir une exécution.

On ne peut plus faire :

```javascript
selectedTagList.map(this.mapTagListToTagListName);
```

où `mapTagListToTagListName` serait une méthode de la même classe telle que :

```javascript
    mapTagListToTagListName(item) {
        return item.text;
    }
```

on doit exécuter la méthode :

```javascript
selectedTagList.map(this.mapTagListToTagListName())
```

et donc retourner la fonction implémentant la `map`

```javascript
    mapTagListToTagListName() {
        return (item) => {
            return item.text;
        }
    }
```

[Quelques grands principes pour aller vers Angular 2.x en venant d’Angular 1.4 ? : blogtech.soprasteria.com](http://blogtech.soprasteria.com/2017/05/24/quelques-grands-principes-pour-aller-vers-angular-2-x-en-venant-dangular-1-4/)

> Très détaillé avec contextualisation + plein de bons liens en fin d'article

[Webpack, ES6 (ES2015) & Babel 6 pour modulariser son application AngularJS - blog.xebia.fr - 20160301](https://blog.xebia.fr/2016/03/01/webpack-es6-es2015-babel-6-pour-modulariser-son-application-angularjs/)

> montre un exemple possible d'état intermédiaire (ES2015 + Babel + Webpack) lors de la migration quand on part d'un AngularJS legacy (par ex ng1.4 + ES5 + grunt/gulp).

[Gillespie59/angular2-migration-sample : `github.com`](https://github.com/Gillespie59/angular2-migration-sample)

> a short example

[`ngmigrate/ngmigrate.github.io` : `github.com`](https://github.com/ngmigrate/ngmigrate.github.io)

> source code of the Todd Motto migration guide [ng-migrate](http://developer.telerik.com/angular-2-migration-guide/)

[ngParty/ng1-migration-workshop : `github.com`](https://github.com/ngParty/ng1-migration-workshop)

> migration example app from angular 1.x ES5 to Typescript and ngMetadata

[Upgrading Your Application to Angular 2 with ng-upgrade : blog.rangle.io](http://blog.rangle.io/upgrade-your-application-to-angular-2-with-ng-upgrade/)

[Upgrading Angular apps using ngUpgrade - Pascal Precht - 20161218](https://blog.thoughtram.io/angular/2015/10/24/upgrading-apps-to-angular-2-using-ngupgrade.html)

[NgUpgrade in Depth - Victor Savkin - 20170512](https://blog.nrwl.io/ngupgrade-in-depth-436a52298a00)

## migration des `$watch`

- soit on a un ng-model auquel cas il suffit d'ajouter un ng-change
- soit on a besoin de AngularJS 1.5 et d'utiliser le life cycle event `$onChanges` des composants

L'idée avec les life cycles event c'est de remplacer le dirty checking d'origine placé sur tout l'arbre des scopes par un cycle de vie centré composant par composant.

## migration ui-router

To upgrade ui-router 0.4.x to 1.0.x, we need to use a bundler and modules.

Check full example at [sample-app-angularjs - `github.com/ui-router`](https://github.com/ui-router/sample-app-angularjs)

If you don't want to migrate from IIFE to ES6 modules and a bundlers (you want to upgrade ui-router first before the bundlers and ES6 modules), you can import a mono-bundle backward compatible, cf [
Uirouter For Angularjs Umd Bundles
](https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles/) post.

Using `<script src="../node_modules/@uirouter/angularjs/release/angular-ui-router.min.js"></script>` works well in an ES5 / AngularJS 1.6+ code base with `@uirouter/angularjs@1.0.17`.

The main breaking change is the removal of `$rootScope` events replaced by `$transitions` services hooks.

The `$stateParams` service becomes **deprecated**. The best way to deal with it [is explained here](https://github.com/angular-ui/ui-router/issues/3110#issuecomment-315855728) :

Inject `$uiRouterGlobals` and use its attribute `params [Object]` like this: `$uiRouterGlobals.params.myParam`
