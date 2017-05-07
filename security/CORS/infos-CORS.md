
### CORS (Cross-Origin Resource Sharing)

#### Why ?
- Because of [Same Origin Policy] (http://en.wikipedia.org/wiki/Same_origin_policy)

> The policy permits scripts running on pages originating from the same site – a combination of scheme, hostname, and port number – to access each other's DOM with no specific restrictions, but prevents access to DOM on different sites. 
Same-origin policy also applies to `XMLHttpRequest` and to `robots.txt`.

- [Cross Origin Ressource Sharing] (http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

#### Infos
- [dev.com : requête: Cross-site HTTP requests] (http://www.developpez.net/forums/d755910/applications/sig-systeme-d-information-geographique/ign-api-geoportail/requete-cross-site-http-requests/)
- [developer.mozilla.org : CORS] (https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS?redirectlocale=en-US&redirectslug=HTTP_access_control)
- [developer.mozilla.org : Server-Side Access Control] (https://developer.mozilla.org/en-US/docs/Server-Side_Access_Control)
- [github.com/angular : issue 5009] (https://github.com/angular/angular.js/issues/5009)
- [enable-cors.org] (http://enable-cors.org/) **Very usefull**
- [cors-why-and-how] (http://haanto.com/cors-why-and-how/)
- [CORS & proxy in javascript front project] (http://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/)

> When accessing a ressource from a website with a different domain/port, recent browsers refuse to interpret response because of CORS mechanism.
> The server needs to put some headers to allow browsers to interpret responses.

#### http headers

- `"Access-Control-Allow-Origin: *"` allow all domains
- `"Access-Control-Allow-Origin: http://example.com:8080 http://foo.example.com"` specify a defined domain list.
- NOTE : Domain list is not allow, a single value is allowed. So the server MUST do the check by itself and set it if contained in the list.
For example if u have a system to configure the allowed origin list in your backend, when writing headers in the response, u compare the request origin with your configured list, if it is u set the header with the request origin value, if not you set nothing.
- `"Access-Control-Allow-Credentials: true"` to also send the cookies

#### Accessing custom headers in response
Server MUST return `Access-Control-Expose-Headers` containing the exposed headers.
Without that header, the javascript client CANNOT read them.

#### Tuto
- [html5rocks.com : CORS] (http://www.html5rocks.com/en/tutorials/cors/)

#### Specs
- [w3c : CORS] (http://www.w3.org/TR/cors/)

#### Play! Impl
- [play-2-0-1-and-setting-access-control-allow-origin] (http://stackoverflow.com/questions/14430119/play-2-0-1-and-setting-access-control-allow-origin)
- [configuring-play-framework-for-cross-domain-http-requests] (http://www.entreotrascosas.net/configuring-play-framework-for-cross-domain-http-requests/)

Need to add a route for `OPTIONS` http method and a suited controller.
route ex : 
```
OPTIONS       /*path                 controllers.CorsCtrl.checkPreFlight(path)
```

#### Angular perform OPTIONS action instead of POST
- [angularjs-performs-an-options] (http://stackoverflow.com/questions/12111936/angularjs-performs-an-options-http-request-for-a-cross-origin-resource)
