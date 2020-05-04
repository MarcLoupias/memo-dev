# Tests d'application frontend nouvelle génération : Cypress.io

## Etat de l'art fin 2017

rappel déf + expliquer les principaux courants et tendances qui ont fait évoluer le dev web ces dernières années

### rappel définitions

#### test unitaire

diff entre tests unitaires et tests de collaboration (impact sur le Behavior Driven Dev, article mocking is a code smell)

#### test intégration

#### test e2e

- fake (serveurs de mocks, configs applicatives différentes)
- true (stack réelle, environnement de stagging (preprod))

### devops

build en un clic

CI/CD/CD

always ready to deploy

importance des tests

boucle de feedback

### nouvelle architecture front

passage du templating côté serveur indissocié du backend à séparation nette du frontend qui devient une application à part entière consommant des endpoints REST. (SPA)

peut être une application hybride pour mobile

PWA, Reactive

de plus en plus de logique transférée côté front

de plus en plus de nouvelle logique côté front du fait de la complexification des IHM

### Selenium / Webdriver

(solution de testing actuelle datant du templating côté serveur)

- fonctionnement et problèmes
  - lourd à mettre en oeuvre (binaire selenium, navigateur)
  - flaky
  - lent

mettre en évidence ces problèmes par l'exemple (sujet du tutu) plutôt que l'affirmer simplement

- décliner les solutions basées sur selenium / webdriver
  - protractor, cuncumber, nightwatch

check [`browser.wait`](https://www.blackpepper.co.uk/what-we-think/blog/if-youre-using-browser-sleep-in-your-cucumber-protractor-selenium-tests-youre-doing-it-wrong). Permet de faire à peu près ce que fait cypress out of the box mais [en devant coder tout](https://stackoverflow.com/questions/30205235/protractor-waiting-for-element-to-be-in-dom?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa).

[cf doc officielle selenium](https://docs.seleniumhq.org/docs/04_webdriver_advanced.jsp) avec les explicits et implicits waits.

## protractor vs cypress

sujet du tuto, prendre protractor qui est un grand classique d'utilisation de selenium pour tester des SPA AngularJS / Angular

et le comparer à cypress pour voir la plus-value de cypress

### théorie

#### archi de selenium

explications de l'archi

#### archi de cypress

explications de l'archi

### exemple basique

#### TodoMVC

présententation de ce repo.

A ce stade on a une webapp toute bête qui utilise le localStorage comme backend.

- [exemple avec TodoMVC app + protractor](https://github.com/MatthewVita/TodoMVC-Protractor-Example)

#### protractor

##### installation + dépendances

##### exécution

#### cypress

##### installation + dépendances

##### exécution

manque réécriture des mêmes tests que pour protractor.

### ajouter un backend

un backend express sans BDD

avec simulation latence réseau + traitements serveurs via un timeout côté serveur

modifier la webapp en conséquence

on s'approche des conditions réelles

#### impacts sur protractor

les tests fails

obligé d'ajouter des timeouts

augmentation de la durée d'exécution

les tests peuvent échouer + facilement

#### impacts sur cypress

les tests sont toujours OK

exécution plus longue

possibilté de stub les xhr entrainant une amélioration de l'exécution

### simuler des problèmes

ajouter des erreurs dans le code front pour voir le debug

#### debug avec protractor

#### debug avec cypress

msg erreur, time travel, vidéos, usage debugger navigateur

### combinaison TI + fake e2e

#### impacts protractor

très difficile à réaliser

#### impacts e2e

les TI peuvent être écrits via cypress

données récupérées pour les tests e2e stubbés

### nouveau champ de test

- tester facilement le comportement du front en fonction des retours http (200, 4xx, 5xx, ...)
- assertions sur les payload de sortie du front (POST, PUT)
