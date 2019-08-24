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
        - href: '../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../main.css'
          rel: stylesheet
          media: all
        - href: '../github.css'
          rel: stylesheet
    scripts:
        - src: '../index.js'

---

# code reviews

[nice article about code reviews](http://java.dzone.com/articles/dont-waste-time-code-reviews)

[Code review discipline and working contracts : www.youtube.com : 20171016](https://www.youtube.com/watch?v=iGBWyhiqBsk)

> **working contracts** :
>
> Every single person in the room must agree (anonymously) this is something to do, the rules are described
> on a postit. Ex : "**code review**"
>
> - each person will do pull request code review everyday
> - each person choose the moment to code review to avoid **switching context** problem
>
> Code review alternative is **pair programming**.
>
> Pivotal Labs do that at full time, there is no personal working station (!?!)
>
> Never interrupt someone to do a code review because : **switching context**.
>

[Le code source de l'éditeur d'images Photoshop 1.0 révèle qu'il fut écrit en Pascal; Pour Grady Booch, c'est un exemple de code bien écrit - 20180523](https://www.developpez.com/actu/205327/Le-code-source-de-l-editeur-d-images-Photoshop-1-0-revele-qu-il-fut-ecrit-en-Pascal-Pour-Grady-Booch-c-est-un-exemple-de-code-bien-ecrit/)

> 179 fichiers contenus dans le dossier archivé comportent environ 128 000 lignes de code
>
> Et pour ce qui concerne la nature de ces lignes de code, environ 75 % d’entre elles sont écrites avec le langage Pascal et 15 % en langage Assembleur 68000
>
> « En ouvrant les fichiers qui constituaient le code source de Photoshop 1.0, je me sentais un peu comme Howard Carter lorsqu’il a d’abord percé la tombe du roi Toutankhamon. Quelles merveilles m’attendaient ? Je n’ai pas été déçu par ce que j’ai trouvé. En effet, ce fut un merveilleux voyage pour ouvrir les rouages d’une application que j’avais utilisée il y a plus de 20 ans.
>
> Architecturalement, c’est un système très bien structuré. Il y a une séparation cohérente de l’interface et de l’abstraction, et les décisions de conception prises pour subdiviser ces abstractions — avec généralement un type majeur pour chaque combinaison d’interface et d’implémentation — facilitèrent le suivi. Les abstractions sont assez matures. La dénomination cohérente, la granularité des méthodes, la simplicité à couper le souffle des implémentations, parce que chaque type était si bien abstractisé, tout concourt à rendre facile le discernement de la texture du système ».
>
> « les tuiles, les filtres, les abstractions pour la mémoire virtuelle (pour s’occuper d’images beaucoup plus grandes que les tampons d’affichage ou que la mémoire principale pourrait normalement gérer) sont tous présents dans la première version. Pourtant, il avait un peu plus de 100 000 lignes de code, par rapport à plus de 10 millions dans la version actuelle ! Ensuite et maintenant, une grande partie du code fait référence à l’entrée/sortie et à la myriade de formats de fichiers que Photoshop doit prendre en charge ».
>
> « Il n’y a que quelques commentaires dans le code source de la version 1.0, dont la plupart sont associées à des extraits de code du langage Assembleur. Cela dit, le manque de commentaires n’est tout simplement pas un problème. Ce code est si alphabétisé, si facile à lire, que les commentaires auraient même pu gêner. […] Ce sont de très petits éléments de la base du code global, mais leur apparence me rappelle qu’aucun code n’est une île ».
