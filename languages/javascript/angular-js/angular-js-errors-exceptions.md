
#### Erreurs d'exécution (contexte Angular)
L'[`$exceptionHandler`] (https://code.angularjs.org/1.4.9/docs/api/ng/service/$exceptionHandler) catch la plupart des exceptions. 
En tout cas toutes celles attrapées par le contexte angular.
Le comportement par défaut du handler est de log via `$log.error()`.

On peut décorer ce comportement pour affichage dans un toast, cf règle [Y110] (https://github.com/johnpapa/angular-styleguide#style-y110) du style-guide John Papa.

```javascript
/* recommended */
angular
    .module('blocks.exception')
    .config(exceptionConfig);

exceptionConfig.$inject = ['$provide'];

function exceptionConfig($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

extendExceptionHandler.$inject = ['$delegate', 'toastr'];

function extendExceptionHandler($delegate, toastr) {
    return function(exception, cause) {
        $delegate(exception, cause);
        var errorData = {
            exception: exception,
            cause: cause
        };
        /**
         * Could add the error to a service's collection,
         * add errors to $rootScope, log errors to remote web server,
         * or log locally. Or throw hard. It is entirely up to you.
         * throw exception;
         */
        toastr.error(exception.msg, errorData);
    };
}
```

#### Erreurs liées aux requêtes http
L'usage d'un [interceptor http] (https://code.angularjs.org/1.4.9/docs/api/ng/service/$http#interceptors) permet de catcher à coup sur tous les problèmes sur toutes les requêtes exécutées à partir de $http.

```javascript
// register the interceptor as a service
$provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
  return {
    // optional method
    'request': function(config) {
      // do something on success
      return config;
    },

    // optional method
   'requestError': function(rejection) {
      // do something on error
      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    },



    // optional method
    'response': function(response) {
      // do something on success
      return response;
    },

    // optional method
   'responseError': function(rejection) {
      // do something on error
      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    }
  };
});

$httpProvider.interceptors.push('myHttpInterceptor');


// alternatively, register the interceptor via an anonymous factory
$httpProvider.interceptors.push(function($q, dependency1, dependency2) {
  return {
   'request': function(config) {
       // same as above
    },

    'response': function(response) {
       // same as above
    }
  };
});
```

**Restangular** propose un système built-in via [setErrorInterceptor] (https://github.com/mgonto/restangular#seterrorinterceptor)

#### Erreurs liées au routage

- routeur standard
cf [Y112] (https://github.com/johnpapa/angular-styleguide#style-y112) de John Papa.

```javascript
/* recommended */
var handlingRouteChangeError = false;

function handleRoutingErrors() {
    /**
     * Route cancellation:
     * On routing error, go to the dashboard.
     * Provide an exit clause if it tries to do it twice.
     */
    $rootScope.$on('$routeChangeError',
        function(event, current, previous, rejection) {
            if (handlingRouteChangeError) { return; }
            handlingRouteChangeError = true;
            var destination = (current && (current.title ||
                current.name || current.loadedTemplateUrl)) ||
                'unknown target';
            var msg = 'Error routing to ' + destination + '. ' +
                (rejection.msg || '');

            /**
             * Optionally log using a custom service or $log.
             * (Don't forget to inject custom service)
             */
            logger.warning(msg, [current]);

            /**
             * On routing error, go to another route/state.
             */
            $location.path('/');

        }
    );
}
```

- `ui-router`
Cf [wiki ui-router] (https://github.com/angular-ui/ui-router/wiki#state-change-events).

**$stateNotFound**

```javascript
// somewhere, assume lazy.state has not been defined
$state.go("lazy.state", {a:1, b:2}, {inherit:false});

// somewhere else
$rootScope.$on('$stateNotFound', 
function(event, unfoundState, fromState, fromParams){ 
    console.log(unfoundState.to); // "lazy.state"
    console.log(unfoundState.toParams); // {a:1, b:2}
    console.log(unfoundState.options); // {inherit:false} + default options
})
```

**$stateChangeError**

```javascript
$rootScope.$on('$stateChangeError', 
function(event, toState, toParams, fromState, fromParams, error){ ... })
```
