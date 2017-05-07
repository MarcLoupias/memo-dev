
# how browsers init a web page

## Here's what happens when a browser loads a website

1. Fetch the HTML page (e.g. `index.html`)
2. Begin parsing the HTML
3. The parser encounters a `<script>` tag referencing an external script file.
4. The browser requests the script file. Meanwhile, the parser blocks and stops parsing the other HTML on your page.
5. After some time the script is downloaded and subsequently executed.
6. The parser continues parsing the rest of the HTML document.

Step 4 causes a bad user experience. Your website basically stops loading until you've downloaded all scripts. If there's one thing that users hate it's waiting for a website to load.

## Why does this even happen?

Any script can insert its own HTML via `document.write()` or other DOM manipulations. This implies that the parser has to wait until the script has been downloaded & executed before it can safely parse the rest of the document. After all, the script could have inserted its own HTML in the document.

However, most javascript developers no longer manipulate the DOM while the document is loading. Instead, they wait until the document has been loaded before modifying it. For example:

```html
<!-- index.html -->
<html>
    <head>
        <title>My Page</title>
        <script type="text/javascript" src="my-script.js"></script>
    </head>
    <body>
        <div id="user-greeting">Welcome back, user</div>
    </body>
</html>
```

Javascript:

```javascript
// my-script.js
document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.getElementById("user-greeting").textContent = "Welcome back, Bart";
});
```

Because your browser does not know `my-script.js` isn't going to modify the document until it has been downloaded & executed, the parser stops parsing.

## Antiquated recommendation

The old approach to solve this problem was to put `<script>` tags at the bottom of your `<body>`, because this ensures the parser isn't blocked until the very end.

This approach has its own problem: the browser cannot start downloading the scripts until the entire document is parsed. For larger websites with large scripts & stylesheets, being able to download the script as soon as possible is very important for performance. If your website doesn't load within 2 seconds, people will go to another website.

In an optimal solution, the browser would start downloading your scripts as soon as possible, while at the same time parsing the rest of your document.

## The modern approach

Today, browsers support the `async` and `defer` attributes on scripts. These attributes tell the browser it's safe to continue parsing while the scripts are being downloaded.

### async

```html
<script type="text/javascript" src="path/to/script1.js" async></script>
<script type="text/javascript" src="path/to/script2.js" async></script>
```

Scripts with the async attribute are executed asynchronously. This means the script is executed as soon as it's downloaded, without blocking the browser in the meantime.
This implies that it's possible script 2 is downloaded & executed before script 1.

According to http://caniuse.com/#feat=script-async, 90% of all browsers support this.

### defer

```html
<script type="text/javascript" src="path/to/script1.js" defer></script>
<script type="text/javascript" src="path/to/script2.js" defer></script>
```

Scripts with the `defer` attribute are executed in order (i.e. first script 1, then script 2). This also does not block the browser.

Unlike async scripts, defer scripts are only executed after the entire document has been loaded.

According to http://caniuse.com/#feat=script-defer, 90% of all browsers support this. 92% support it at least partially.

An important note on browser compatibility: in some circumstances IE <= 9 may execute deferred scripts out of order. If you need to support those browsers, please read this first!

## Conclusion

The current state-of-the-art is to put scripts in the `<head>` tag and use the `async` or `defer` attributes. This allows your scripts to be downloaded asap without blocking your browser.

The good thing is that your website should still load correctly on the 20% of browsers that do not support these attributes, while speeding up the other 80%.

## sources

- [Where is the best place to put `<script>` tags in HTML markup?] (http://stackoverflow.com/a/24070373)
- [developers.google.com : Supprimer les fichiers JavaScript qui bloquent l'affichage] (https://developers.google.com/speed/docs/insights/BlockingJS#recommandations)

