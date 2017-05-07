### decorator usage in angularjs

#### decorator for a service
- [from off doc] (https://code.angularjs.org/1.4.8/docs/api/auto/service/$provide#decorator)
- [using-module-decorator-in-angularjs-1-4] (http://www.bennadel.com/blog/2870-using-module-decorator-in-angularjs-1-4.htm)

#### decorator for a directive
- [experiment-decorating-directives] (http://angular-tips.com/blog/2013/09/experiment-decorating-directives/)
- [overriding-directive-definitions-in-angularjs] (http://www.bennadel.com/blog/2926-overriding-directive-definitions-in-angularjs.htm)
- [angular-hacking-core : brian ford] (http://briantford.com/blog/angular-hacking-core)
- [decorating-the-ng-click-directive-in-angularjs : stackoverflow] (http://stackoverflow.com/questions/18335574/decorating-the-ng-click-directive-in-angularjs)

#### exemple : decorator de `ng-if`
Permet de rajouter un paramètre à `ng-if` dans le html sous la forme d'un autre attribut (`ng-if-param`).
Les valeurs passées à ce paramètre servent d'entrée pour un service exécuté dans le decorator.
Très utile pour la gestion des droits par exemple.

Usage dans le html :
```
<div ng-if="ngIfValue" ng-if-param="paramValue"></div>
```

```javascript
(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$provide'];

    function config($provide) {

        $provide.decorator("ngIfDirective", ['$delegate', 'customService', function($delegate, customService) {
            var original = $delegate[0];
            var link = original.link;

            // redéfinition de la fonction link de la directive angular ng-if
            original.compile = function() {
                return function($scope, $element, $attr, ctrl, $transclude) {

                    // check maison sur la base d'un attribut ng-if-param
                    if($attr.ngIfParam) {
                        var paramValue = eval($attr.ngIfParam);
                        if (customService.fn(paramValue)) {
                            // on substitue la valeur de ng-if par false
                            $attr.ngIf = "false";
                        }
                    }

                    // appliquer le comportement normal de ng-if
                    link.apply(this, arguments);
                };
            };

            return $delegate;
        }]);
    }

})(angular);
```
