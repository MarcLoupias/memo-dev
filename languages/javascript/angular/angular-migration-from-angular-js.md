# Angular - Migration from AngularJS

[Upgrade guide ng2 doc](https://angular.io/docs/ts/latest/guide/upgrade.html)

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
> - Start using ES6 or Javascript 2015
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
>  - Les [modules](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)  : 
>  pour appliquer le paragraphe précédent sur le découplage
>  - Les [arrow functions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) : 
>  pour simplifier les retours issues de promises, l’utilisation des fonctions sur les tableaux et le binding du `this`
>  - La [notation objet simplifiée](http://ariya.ofilabs.com/2013/02/es6-and-object-literal-property-value-shorthand.html) 
>  et la [décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition) : 
>  pour réduire le code et augmenter la lisibilité
>  - Les classes : pour coller à la syntaxe d’Angular 2 et éventuellement utiliser les [décorateurs d’ES7](https://github.com/wycats/javascript-decorators)
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

[Quelques grands principes pour aller vers Angular 2.x en venant d’Angular 1.4 ? : blogtech.soprasteria.com](http://blogtech.soprasteria.com/2017/05/24/quelques-grands-principes-pour-aller-vers-angular-2-x-en-venant-dangular-1-4/)

> Très détaillé avec contextualisation + plein de bons liens en fin d'article

[Gillespie59/angular2-migration-sample : github.com](https://github.com/Gillespie59/angular2-migration-sample)

> a short example

[ngmigrate/ngmigrate.github.io : github.com](https://github.com/ngmigrate/ngmigrate.github.io)

> source code of the Todd Motto migration guide [ng-migrate](http://developer.telerik.com/angular-2-migration-guide/)

[ngParty/ng1-migration-workshop : github.com](https://github.com/ngParty/ng1-migration-workshop)

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

Check full example at [sample-app-angularjs - github.com/ui-router](https://github.com/ui-router/sample-app-angularjs)

If you don't want to migrate from IIFE to ES6 modules and a bundlers (you want to upgrade ui-router first before the bundlers and ES6 modules), you can import a mono-bundle backward compatible, cf [
Uirouter For Angularjs Umd Bundles
](https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles/) post.
