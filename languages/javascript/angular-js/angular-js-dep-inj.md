# Dependency Injection

## article

- [services-and-dependency-injection-in-angularjs] (http://henriquat.re/basics-of-angular/services-dependency-injection/services-and-dependency-injection-in-angularjs.html)
- [Understanding Dependency Injection - Wiki AngularJS officiel] (https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection)
- [source de l'article précédent sur stackoverflow] (http://stackoverflow.com/questions/16828287/what-things-can-be-injected-into-others-in-angular-js/16829270#16829270)

## scope and namespace with the angular injector

For services, angularJs injector is flat.

For constants, angularJs injector is namespaced.

Exemple, for a module structure like this :

```
app

app.moduleA
app.moduleA.aaaaService
app.moduleA.aaaaConstants
app.moduleA.subModuleA
app.moduleA.subaaaaModuleA

app.moduleB.bbbbService
app.moduleB.bbbbConstants
app.moduleB.subModuleB
app.moduleB.subbbbbModuleB
```

If you call bbbbService in aaaaService without linking the depency in moduleA module declaration, it will **works**. AngularJs injector is flat in that case.

If you call bbbbConstants in aaaaService without linking the dependency in moduleA module declaration, it will **fail**. AngularJs injector is **not** flat in that case.
