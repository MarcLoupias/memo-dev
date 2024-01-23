# htmx overview

## official links

[`htmx.org`](https://htmx.org/)

[repo](https://github.com/bigskysoftware/htmx)

## articles

[HTMX, pour un développement web simplifié - `www.sfeir.dev` - 20230726](https://www.sfeir.dev/front/htmx-pour-un-developpement-web-simplifie-vous-avez-peut-etre-la-chance-davoir-connu-lage-des-pages-web-statiques-sans-interactions-puis-lavenement-de-flash-et-jquery-pour-finir-aujourdh/)

[A First Look at HTMX and How it Compares to React - `www.builder.io` - 20230915](https://www.builder.io/blog/htmx-vs-react)

## tools

[gist `htmx + mock requests = SPA?`](https://gist.github.com/edofic/7c6fc369ef960315422914e946f4854b) [`mock-requests` pkg](https://www.npmjs.com/package/mock-requests)

```html
<!DOCTYPE html>
<html>

<head>
  <title>Hello Page</title>
  <script src="https://unpkg.com/htmx.org@1.9.2"></script>
  <script src="https://unpkg.com/mock-requests@1.3.2/index.js"></script>
  <script language="javascript">
    MockRequests.setDynamicMockUrlResponse('/ui/button',
      {
        dynamicResponseModFn:
          function (request, response, parameters) {
            console.log("A mock request was made: ", request, response, parameters)
            return "hello"; // hardcoded here but full request is available for dynamically generating
          },
        usePathnameForAllQueries: true
      });
  </script>
</head>

<body>
  <h1>Hello</h1>
  <button hx-get="/ui/button" hx-swap="afterend">Load</button>
</body>

</html>
```
