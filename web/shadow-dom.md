# Shadow DOM

Inclus dans les spécs des Web Components qui sont :

- HTML Templates
- Custom Elements
- HTML Imports
- Shadow DOM

## Buts

Le but est de créer ses propres balises HTML (directives / components en angular)

Buts du Shadow DOM :

- Isoler le DOM (depuis l'extérieur, cacher l'arbre des composants du shadow DOM)
- Contrôler la portée du CSS
  - le CSS de la page n'impacte pas le composant
  - le CSS du composant n'impacte pas la page

## Support navigateurs
 
http://caniuse.com/#feat=shadowdomv1

Angular permet de supporter le shadow DOM du point de vue des composants.
Option `ViewEncapsulation.Native` à ajouter à la définition du `@Component`.

React et VuesJS ont du support via un module tiers.

## Avantages / inconvénients

### Avantages

- Cloisonnement du CSS
- Mécanisme de composition
- Web Components
- Standard W3C

### Inconvéninents

- Support des navigateurs pas encore super top (2017)
- Polyfills complexes
- Partage de CSS commun compliqué (usage de CSS commun dans les composants)
- Encapsulation du CSS (CSS modules + efficace)

## Ressources 

[Le ShadowDOM pour les nuls (Romain Linsolas) Devoxx2017](https://www.youtube.com/watch?v=IXBcboy4zaw)
