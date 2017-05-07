- [Directive onDestroy] (http://stackoverflow.com/questions/17203005/angularjs-directive-destroy)
- [Unbinding watchers] (http://www.bennadel.com/blog/2480-unbinding-watch-listeners-in-angularjs.htm)

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
