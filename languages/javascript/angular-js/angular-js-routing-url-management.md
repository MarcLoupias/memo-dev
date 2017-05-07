
- [add args in url] (http://stackoverflow.com/questions/14174394/how-can-i-change-params-in-url-with-angularjs)
```javascript
$location.search('year', $scope.year);
```

- [clear args in url] (http://stackoverflow.com/questions/17376416/angularjs-how-to-clear-query-parameters-in-the-url)

- remove all args
```javascript
$location.url($location.path());
```

- remove a specific args
```javascript
$location.search('coords', null);
```
