# angular browser console

It is possible to access angular services via the browser console at runtime :

```javascript
angular.element(document.body).injector().get('serviceName');
```

At this point you have access to the singleton service instance.
