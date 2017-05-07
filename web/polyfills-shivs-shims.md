# Polyfills, Shivs et Shims

[HTML5 : Comprendre les Polyfills, Shivs et Shims](https://la-cascade.io/html5-comprendre-les-polyfills-shivs-et-shims/)

Les shims sont un bout de code qui intercepte un appel API (en développement web, une requête pour une fonctionnalité HTML5, CSS ou JavaScript) et fournit un programme de remplacement. Les polyfills (le terme a été inventé par Remy Sharp) sont un shim simplifié, en ceci qu’ils sont du code ajouté dans la page pour donner au développeur la technologie dont il aurait besoin de manière native dans le navigateur.

## [modernizr](http://modernizr.com/docs/)

lib js qui sert à :
- détecter si les features HTML5 & CSS3 sont implémentées dans les browsers.
- proposer une impl basique de certaines fonctionnalités.
