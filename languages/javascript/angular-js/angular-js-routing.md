# AngularJS - ui routing

## ui-router
- [ui-router](https://github.com/angular-ui/ui-router)
- [ui-router wiki](https://github.com/angular-ui/ui-router/wiki)

## Tuto
- [Using nested views in AngularJS with UI-Router](http://cacodaemon.de/index.php?id=57)
- [Advanced routing and resolves](https://medium.com/opinionated-angularjs/a2fcbf874a1c)

## Examples
- [ui-router sample](http://angular-ui.github.io/ui-router/sample/#/contacts)
- [plunkr](http://plnkr.co/edit/gmtcE2?p=preview)

## url management

- [add args in url](http://stackoverflow.com/questions/14174394/how-can-i-change-params-in-url-with-angularjs)

```javascript
$location.search('year', $scope.year);
```

- get specific arg

```javascript
$location.search().year;
```

- [clear args in url](http://stackoverflow.com/questions/17376416/angularjs-how-to-clear-query-parameters-in-the-url)

- remove all args

```javascript
$location.url($location.path());
```

- remove a specific args

```javascript
$location.search('coords', null);
```

## issues

### Multiples parents views for a single child view

[stackoverflow question](http://stackoverflow.com/questions/34386009/angular-ui-router-child-state-with-multiple-parent-states)

[ui-router closed issue](https://github.com/angular-ui/ui-router/issues/1072)
