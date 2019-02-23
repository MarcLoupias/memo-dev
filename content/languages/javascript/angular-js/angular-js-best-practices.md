---
htmlHead:
    title: 'marlou knowledge base' 
    containerClass: 'markdown-body'
    metaTags:
        - name: viewport
          content: 'width=device-width, initial-scale=1, minimal-ui'
        - name: robots
          content: none
    links:
        - href: '../../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../../main.css'
          rel: stylesheet
          media: all
        - href: '../../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../../index.js'

---

# AngularJS - best practices

## REGLES GENERALES BASIQUES

- Un fichier de source par ctrl / serv / direc
- Pas de logique dans les ctrl
- Pas de regles metier dans les templates. Passer par des services.
- 95% du code de l'appli doit être dans des services et couvert pas des TU
- Pas de manipulation du DOM ailleurs que dans une directive (compile ou link)
- follow [angularjs-styleguide](https://github.com/toddmotto/angularjs-styleguide)

## DE JQUERY A ANGULARJS

- [AngularJS-pour-les-developpeurs-jQuery](http://bigint.fr/blog/2013-12-18/AngularJS-pour-les-developpeurs-jQuery)

## CODING STYLE

- [angularjs-google-style](https://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html)
- [Règles chez Paypal](https://medium.com/@bluepnume/sane-scalable-angular-apps-are-tricky-but-not-impossible-lessons-learned-from-paypal-checkout-c5320558d4ef#.epy69vvcr)
- [Best-Practices](https://github.com/angular/angular.js/wiki/Best-Practices)
- [angular-styleguide (John Papa)](https://github.com/johnpapa/angular-styleguide)
- [angular-styleguide (Minko Gechev)](https://github.com/mgechev/angularjs-style-guide)
- [angularjs-styleguide (Todd Motto)](https://github.com/toddmotto/angularjs-styleguide)
- [opinionated-angular-js-styleguide-for-teams (Todd Motto)](http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/)

## git

[AngularJS Git Commit Message] (https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit?pli=1)

## MODULE DECLARATION

- [IIFE](http://toddmotto.com/minimal-angular-module-syntax-approach-using-an-iife/)

## MINIFICATION

- [ngmin](https://github.com/btford/ngmin)

## CONTROLLERS USAGE

- [rethinking-angular-js-controllers (Todd Motto)](http://toddmotto.com/rethinking-angular-js-controllers/)

## form validation

[big resume] (http://www.ng-newsletter.com/posts/validations.html)

## SCAFFOLDING

best scaffolding practices for generator-angular discussed [here](https://github.com/yeoman/generator-angular/issues/109) related to [Angular Best Practice for App Structure (Google doc)](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

## SCAFFOLDING COMPARISON (this guy is insane)

- [comparison-of-angularjs-application-starters](http://www.dancancro.com/comparison-of-angularjs-application-starters/)
- [comparison spreadsheet ? (need to be logged in gmail)](https://docs.google.com/spreadsheets/d/1r8rJy2Q5p5QORYKcye93UECwOlSgFL24c5fyF7dqhaM/edit?pli=1#gid=1607194899)

## ARCHITECTURE

[Introduction to Angular 1.x and ngCourse](https://ngcourse-1.rangle.io/index.html)

[Rangle's Angular Training Book](https://angular-2-training-book.rangle.io/)

## w3c-validation

[should-i-care-about-w3c-validation] (http://stackoverflow.com/questions/18607437/should-i-care-about-w3c-validation)

## PREPARER MIGRATION ANGULAR 2

- [angular-2-preparation-killing-controllers](http://www.codelord.net/2015/10/07/angular-2-preparation-killing-controllers/)

## MANAGING A MODEL LAYER

- [angular-model-objects-with-javascript-classes](https://medium.com/opinionated-angularjs/angular-model-objects-with-javascript-classes-2e6a067c73bc#.rscv8l8qv)

## Au secours, mon code AngularJS est pourri ! - Thierry Chatel, Devoxx 2014

[video de la conf](https://www.youtube.com/watch?v=OccKqXj0kTM)

- attention aux composants

bcp de composants opensource, certains sont bons, d'autres très mauvais

- ne pas optimiser (sauf quand VRAIMENT nécessaire)

il propose de publier dans la vue avec des fonctions (donc plusieurs calculs à chaque digest)

- travailler le modèle

il parle du view model, et recommande donc de préparer le modèle à publier dans la vue et de ne pas publier directement 
le json

ne veut pas stocker non plus les données à publier dans le modèle

- service dans le scope

si beaucoup d'usage de fonctions d'un service dans une vue, se simplifier la vie et publier directement l'instance du 
service, ou bien écrire un service de façade ne contenant que la partie à publier

- structure de la webapp

ne pas organiser par type (controller/ directives/ services/ etc ...).

découpage fonctionnel, en bout de ligne découper en controller, directives, services.

1 fichier js = 1 module

- contrôleur

initialise le scope et rien d'autre.

sert à effectuer les bindings et c'est tout.

pas de traitement

pas de requetes http

liaison entre services et scope

doivent rester légers

syntaxe controllerAs

- services

contient tout le code métier et une bonne partie du code de présentation

pas de règles métiers dans les templates

permettent de conserver des données (car service = singleton) globales

si données concernent seulement une vue, ne pas les conserver et simplement les renvoyer.

utiliser les promesses pour les services asynchrones

découper les services en couches

- promesses

code unique qu'on soit en sync ou async

ne travailler que sur les promesses et pas les résultats

en cas d'échec : soit promesse en erreur soit throw une exception

- filtres

ne jamais modifier les données en entrée

- directives

priviléger les bindings aux maniplations du DOM

s'appuyer sur le html plutôt que de le remplacer ou de le générer

attributs html = interface de la directive

pas d'héritage implicite des données du scope, on passe par un attr de la directive

scope isolé

- tests

doit être aussi propre que le code applicatif
 
imbriquer les describe pour avoir des beforeEach communs (factorisation du code des tests) valable en e2e

e2e : factoriser les elementFinder

**conclusion**

faire simple :
- partir du html
- bien connaitre js
- faire un vrai modèle objet (bonnes pratiques POO)
