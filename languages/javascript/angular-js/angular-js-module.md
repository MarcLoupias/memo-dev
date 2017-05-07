### AngularJs Modules

ref [angular.module] (https://docs.angularjs.org/api/ng/function/angular.module)

recommandations :
- [John Papa @ ng-module] (https://github.com/johnpapa/angular-styleguide#modules)

[module dep naming clash] (http://stackoverflow.com/questions/30374934/angularjs-module-dependencies-naming-clash/30376123#30376123)

#### angular.module === namespace ?

***NO***

- [This AngularJS modules/dependencies thing is a lie] (http://michalostruszka.pl/blog/2015/05/21/angular-dependencies-naming-clash/)
- [Hack for target a precise component in a precise module] (http://stackoverflow.com/questions/30374934/angularjs-module-dependencies-naming-clash/30376123#30376123)
(encapsulate the service u want with another service who call a new injector set to the right module only)
- [angular repo issue discussion] (https://github.com/angular/angular.js/issues/10805)

#### so how it works ?

- modules are ref to components for the injector.
- the injector index is flat, it means that any component from any module registered in the injector is available to injection in everyone.
- modules cannot avoid name collision. So components names **must** be uniques.
- there is no error risen when 2 components with the same name are registered to the injector. The last one is kept.

#### Others reading
- [differents modules managements, very good reading] (https://scott.mn/2014/03/03/javascript_modules/)
