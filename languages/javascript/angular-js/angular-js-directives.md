# AngularJS directives

## definition

[the-hitchhikers-guide-to-the-directive/](http://amitgharat.wordpress.com/2013/06/08/the-hitchhikers-guide-to-the-directive/)

```javascript
var myModule = angular.module(...); 
myModule.directive('directiveName', function (injectables) {
  return {
    restrict: 'A',
    template: '<div></div>',
    templateUrl: 'directive.html',
    replace: false,
    priority: 0,
    transclude: false,
    scope: false,
    terminal: false,
    require: false,
    controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        post: function postLink(scope, iElement, iAttrs, controller) { ... }
      }
    },
    link: function postLink(scope, iElement, iAttrs) { ... }
  };
});
```

## params on directives

Les différentes solutions pour gérer les paramètres d'une directive [sur ce gist](https://gist.github.com/CMCDragonkai/6282750).

## compile

- [angularjs-append-html-to-an-element-in-directive](http://stackoverflow.com/questions/21452706/angularjs-append-html-to-an-element-in-directive-and-make-a-local-function-to) [plunkr demo](http://plnkr.co/edit/IlTIWrvG5lA0B4JwEPoS?p=info)

## link

- [angular-js-directives-difference-controller-link](http://jasonmore.net/angular-js-directives-difference-controller-link/)
- [custom-directives](http://tutorials.jenkov.com/angularjs/custom-directives.html)

**intercept user click**

```javascript
return {
    restrict: 'A',
    scope: true,
    link: function (scope, elem) {
        elem.bind('click', function () {
            // impl ...
        });
    }
};
```

## onDestroy and watchers

- [Directive onDestroy](http://stackoverflow.com/questions/17203005/angularjs-directive-destroy)
- [Unbinding watchers](http://www.bennadel.com/blog/2480-unbinding-watch-listeners-in-angularjs.htm)

Une directive qui est détruite lève un event destroy.

Donc dans le controleur de la directive il faut écouter cet event :
```javascript
scope.$on('$destroy', function() {
  console.log("destroy");
});
```

Pour le watcher, quand il est posé il retourne une fonction. Cet fonction détruit le watcher si elle est exécutée :
```javascript
var unbindWatcher = $scope.$watch(
  "clickCount",
  function( newClickCount ) {
 
     console.log( "Watching click count." );
 
     if ( newClickCount >= 5 ) {
 
    $scope.isShowingFeedback = true;
 
    // Once the feedback has been displayed,
    // there's no more need to watch the change
    // in the model value.
    unbindWatcher();
 
  }
 
 }
);

```

## existing directives

### ng-grid

[ng-grid site doc](http://ui-grid.info/)

select directive in a cell :
[plunkr demo](http://plnkr.co/edit/VABAEu?p=preview).  
Related to : [editable-nggrid-with-both-dropdowns-and-selects](http://technpol.wordpress.com/2013/12/06/editable-nggrid-with-both-dropdowns-and-selects/)

typehead directive in a cell : [issue 435](https://github.com/angular-ui/ng-grid/issues/435)
[plunkr demo](http://plnkr.co/edit/cum0CBuoJUvGIBu85aBS?p=preview)

### tag-list

- [angular-taglist](https://github.com/chrispittman/angular-taglist)
- [plunkr demo](http://plnkr.co/edit/0vzZsn70SGQkIKKZoVEP?p=preview)
- the best one by far : [decipherinc.github.io/angular-tags](http://decipherinc.github.io/angular-tags/)

### l18n

- [angular-translate](http://pascalprecht.github.io/angular-translate/)
- [angular-translate](http://www.ng-newsletter.com/posts/angular-translate.html)
- [trad libellés](http://www.frangular.com/2012/12/traduction-des-libelles-dans-les-vues-angularjs.html)
- [doc off i18n](http://docs.angularjs.org/guide/i18n)

### ng-model

- [doc off : ngModel.NgModelController](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController)
- [ngModel.$render](http://stackoverflow.com/questions/21083543/when-ngmodels-render-is-called-in-angularjs)
- [ng-if="false" -> ng-model not removed](http://stackoverflow.com/questions/24042811/angularjs-ng-if-hiddenremoved-ng-model-variable-not-removed-from-scope)

### angular-ui

[bootstrap-3-with-angularjs](http://stackoverflow.com/questions/16327846/bootstrap-3-with-angularjs)

### ng-cookies

- [HTTP_cookie](http://en.wikipedia.org/wiki/HTTP_cookie#Setting_a_cookie)
- [ajax-et-l-echange-de-donnees-en-javascript](http://fr.openclassrooms.com/informatique/cours/ajax-et-l-echange-de-donnees-en-javascript/les-cookies-1)
- [ngCookies](https://docs.angularjs.org/api/ngCookies)

### AngularJS feature flipping

[angular-feature-toggle : github.com/yairhaimo](https://github.com/yairhaimo/angular-feature-toggle)
