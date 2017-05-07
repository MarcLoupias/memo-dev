- middleware proxy à exec avec browser-sync :
[http-proxy-middleware] (https://github.com/chimurai/http-proxy-middleware) & [browsersync - option-server] (http://www.browsersync.io/docs/options/#option-server)

- [glob] (https://www.npmjs.com/package/glob)
> "Globs" are the patterns you type when you do stuff like `ls *.js` on
the command line, or put `build/*` in a `.gitignore` file.

- [lodash] (https://lodash.com/)
La librairie javascript Lodash est une alternative à la librairie utilitaire Underscore, alternative se voulant plus performante, plus consistante et ajoutant quelques fonctionnalités supplémentaires.
Autres liens : [github lodash] (https://github.com/lodash/lodash), [article blog.xebia.fr sur lodash] (http://blog.xebia.fr/2013/02/20/lodash-librairie-utilitaire-javascript-alternative-a-underscore/)

- [wiredep] (https://github.com/taptapship/wiredep)
Wire Bower dependencies to your source code.
Ex : 
```html
<html>
<head>
  <!-- bower:css -->
  <!-- endbower -->
</head>
<body>
  <!-- bower:js -->
  <!-- endbower -->
</body>
</html>
```
- [autoprefixer] (https://github.com/postcss/autoprefixer)

> PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter, and Taobao.

```css
:fullscreen a {
    display: flex
}
```
becomes
```css
:-webkit-full-screen a {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex
}
:-moz-full-screen a {
    display: flex
}
:-ms-fullscreen a {
    display: -ms-flexbox;
    display: flex
}
:fullscreen a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}
```

