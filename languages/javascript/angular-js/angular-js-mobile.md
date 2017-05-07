#### angular on mobile

[ng-newsletter : angular-on-mobile] (http://www.ng-newsletter.com/posts/angular-on-mobile.html)

#### mobile resize event detection in an angular context
```javascript
// put this code in the angular.module('yourApp').run(AppInitFn); with other init stuff
var _widthScreen = angular.element($window).width();
$(window).on('resize', function () {
  if (_widthScreen !== angular.element($window).width()) {
    _widthScreen = angular.element($window).width();
    $rootScope.$broadcast(PJEvents.BODY_RESIZE);
  }
});
```

#### mobile size
```javascript
SMALL_SCREEN_MAX_WIDTH: 768
MIDDLE_SCREEN_MAX_WIDTH: 992

// smallResolution === smartphone viewport. > is tablet viewport
$rootScope.isSmallResolution = function () {
  return angular.element($window).width() < vars.SMALL_SCREEN_MAX_WIDTH;
};
```
