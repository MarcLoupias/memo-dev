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

# Compilateur

## Définitions

[Compilateur - fr.wikipedia.org](https://fr.wikipedia.org/wiki/Compilateur)

> Un compilateur est un programme qui transforme un code source écrit dans un langage de programmation (le langage source) en un autre langage informatique (appelé langage cible)
> 
> Pour qu'il puisse être exploité par une machine, le compilateur traduit le code source, écrit dans un langage de haut niveau d'abstraction, facilement compréhensible par l'humain, vers un langage de plus bas niveau, un langage d'assemblage ou langage machine.
> 
> Inversement, un programme qui traduit un langage de bas niveau vers un langage de plus haut niveau est un décompilateur. 

[Langage machine](https://fr.wikipedia.org/wiki/Langage_machine)

> C'est le langage natif d'un processeur, c'est-à-dire le seul qu'il puisse traiter. Il est composé d'instructions et de données à traiter codées en binaire. 

## Présentation générale

Les étapes de la compilation incluent :

- le **prétraitement**, nécessaire pour certains langages comme C, qui prend en charge la substitution de macro et de la compilation conditionnelle.
- l'**analyse lexicale**, qui découpe le code source en petits morceaux appelés jetons (tokens).
- l'**analyse syntaxique** implique l'analyse de la séquence jeton pour identifier la structure syntaxique du programme.
- l'**analyse sémantique** est la phase durant laquelle le compilateur ajoute des informations sémantiques à l'arbre d'analyse et construit la table des symboles.
- la **transformation** du code source en code intermédiaire ;
- l'application de techniques d'**optimisation sur le code intermédiaire** : c'est-à-dire rendre le programme « meilleur » selon son usage (voir infra) ;
- la **génération de code** avec l'allocation de registres et la traduction du code intermédiaire en code objet, avec éventuellement l'insertion de données de débogage et d'analyse de l'exécution ;
- l'**édition des liens**.

## Lever vs Parser

[An Overview of Lexing and Parsing - savage.net.au](http://savage.net.au/Ron/html/graphviz2.marpa/Lexing.and.Parsing.Overview.html)

Same at [An Overview of Lexing and Parsing - www.perl.com](https://www.perl.com/pub/2012/10/an-overview-of-lexing-and-parsing.html/)

[lexers vs parsers - stackoverflow.com](https://stackoverflow.com/questions/2842809/lexers-vs-parsers)

Lexer synonyms : tokenizer, scanner, ...

## Compiler vs Transpiler

[What is the main difference between Compiler and Transpiler - stackoverflow.com](https://stackoverflow.com/questions/40605642/what-is-the-main-difference-between-compiler-and-transpiler)

> **Compiler** - compiles code to a lower level code.
> 
> Example:
> 
> - "Developer code" -> "Machine code"
> - PHP -> C
> - Java -> bytecode
> 
> **Transpiler** - compiles code to same level of code/abstraction.
> 
> Example:
> 
> - "Developer code" -> "Another developer code or version"
> - JavaScript ES2015+ -> JavaScript ES5




