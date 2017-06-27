# Génie Logiciel

- [Définition wikipédia](https://fr.wikipedia.org/wiki/G%C3%A9nie_logiciel)

## paradigmes

### imperative programming

[Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)

> In computer science, imperative programming is a programming paradigm that uses statements that change a program's state.

> Imperative programming focuses on describing how a program operates.

### declarative programming

[Declarative programming](https://en.wikipedia.org/wiki/Declarative_programming)

> is a programming paradigm [...] that expresses the logic of a computation without describing its control flow.

> Many languages that apply this style attempt to minimize or eliminate side effects by describing what the program must accomplish in terms of the problem domain, rather than describe how to accomplish it as a sequence of the programming language primitives (the how being left up to the language's implementation). This is in contrast with imperative programming, which implements algorithms in explicit steps.

### structured programming

[Structured programming](https://en.wikipedia.org/wiki/Structured_programming)

> don't use unrestrained GOTO (Robert C. Martin)

> aimed at improving the clarity, quality, and development time of a computer program by making extensive use of subroutines, block structures, for and while loops—in contrast to using simple tests and jumps such as the go to statement which could lead to "spaghetti code" causing difficulty to both follow and maintain.

### functional programming

[Functional programming](https://en.wikipedia.org/wiki/Functional_programming)

> don't use assignment (Robert C. Martin)

> a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means programming is done with expressions or declarations instead of statements.

[Learning Functional Programming with JavaScript - JSUnconf 2016 : Anjana Vakil](https://www.youtube.com/watch?v=e-5obm1G_FY) - [slides](https://slidr.io/vakila/learning-functional-programming-with-javascript#1)

[Immutable data structures for functional JS : Anjana Vakil](https://2017.jsconf.eu/speakers/anjana-vakil-immutable-data-structures-for-functional-js.html)

[An introduction to functional programming : Mary Rose Cook](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming)

[Robert C Martin - Functional Programming; What? Why? When?](https://www.youtube.com/watch?v=7Zlp9rKHGD4)

- [4:07](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=247s) "Functional Programming: What? When? Why?" or "The Failure of State" 
- [5:10](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=310s) Rich Hickey is the author of Clojure. Listen to his talks. 
- [5:40](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=340s) What is state? Variables. 
- [11:15](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=675s) Structure and Interpretation of Computer Programs. This is a fascinating book. For the first 250 pages, the book uses no assignment statements. 
- [14:15](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=855s) Here's how SICP's model of computing worked before they introduced an assignment statement. Simply replace a function call with its implementation. 
- [15:58](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=958s) Once you introduce assignment. You can no longer replace a function call with its implementation. Why? Because the state of the system may have changed. An assignment statement introduces the concept of time. 
- [18:04](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1084s) Side effect: an assignment statement. If there's no assignment, there's no side effect. 
- [20:22](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1222s) What "hack" have we done to protect us from memory leaks? Garbage collection. 
- [31:46](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1906s) Functional programming was invented in 1957 before OO and structured. But memory was too expensive to make it practical. But memory is cheap now. 
- [32:53](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=1973s) Should we change how we program? We should because: 
  1) Functional programs are simpler - which makes them easier to write and maintain 
  2) There's no temporal coupling - no worrying if some function was called before another function. 
  3) Fewer concurrency issues. In a purely functional program, there's no concurrency because there is no state. 
  4) No asking, "What's the state?" 
- [38:38](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=2318s) We're using multicore CPU's now because we can't increase clock rate anymore. And hardware makers are doing bizarre tradeoffs. They're making individual processors slower but putting more processors in. So individual cores slow down but the chip throughput goes up if you can take advantage of all the cores. 
- [42:00](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=2520s) How are you going to work with an abundance of cores? Maybe we need to walk away from the assignment statement. 
- [49:49](https://www.youtube.com/watch?v=7Zlp9rKHGD4&t=2989s) OO = procedure + state. OO is exposed procedure but hidden state (encapsulation). It's possible to write functional programs using an OO style. All of the objects become immutable.

### object-oriented programming

[Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)

> don't use pointers to functions (Robert C. Martin) (He is talking about pointers in C++)

> based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. A feature of objects is that an object's procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self"). In OOP, computer programs are designed by making them out of objects that interact with one another.

## principes
- [Separation of Concerns](http://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/)

> Découper un problème en plusieurs problèmes plus simples

Low [coupling](https://en.wikipedia.org/wiki/Coupling_%28computer_programming%29), high [cohesion](https://en.wikipedia.org/wiki/Cohesion_%28computer_science%29), [maintainability](http://en.wikipedia.org/wiki/Maintainability), [extensibility](http://en.wikipedia.org/wiki/Extensibility), [reusability](http://en.wikipedia.org/wiki/Reusability).

- Loi de Hofstadter

> Il faut toujours plus de temps que prévu, même en tenant compte de la Loi de Hofstadter.

- Donald Knuth à propos de l'optimisation prématurée

> Premature optimization is the root of all evil

- [Loi de Brooks](https://fr.wikipedia.org/wiki/Loi_de_Brooks)

> Ajouter des personnes à un projet en retard accroît son retard

> Adding manpower to a late software project makes it later 

- [Le mythe du mois-homme](https://fr.wikipedia.org/wiki/Le_Mythe_du_mois-homme)

> Neuf femmes ne font pas un enfant en un mois

- [Principe de Pareto](https://fr.wikipedia.org/wiki/Principe_de_Pareto)

> 80 % des effets sont le produit de 20 % des causes

- [Effet Tunnel](http://christian.hohmann.free.fr/index.php/lean-en-conception-et-developpement/les-basiques-du-lean-en-conception-et-developpement/286-panique-en-developpement-effet-tunnel)

- [Loi de Conway](https://en.wikipedia.org/wiki/Conway's_law)

> Les organisations à l’origine des architectures doivent refléter le système en lui-même.

> organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations

> “The structure of a problem reflects the structure of the organization that created it.” Bill Corcoran’s version of Conway’s Law

- [Facteur PI](https://cavares.com/2016/12/26/le-facteur-%CF%80/)

> Pour un projet innovant, il faut multiplier l’estimation initiale des coûts par 3,14.

- Loi de Parkinson

> Plus on a de temps pour réaliser une tâche, plus cette tâche prend du temps.

- Loi de Murphy

> Toute chose prend plus de temps qu'on ne l'avait prévu

- Loi d'Illich

> Au delà d'un certain seuil de travail, l'efficacité décroit

- Loi de Carson

> Faire un travail de façon continue prend moins de temps que de le faire en plusieurs fois

- Loi de Fraisse

> 1 heure n'est pas toujours égale à 1 heure

- [Loi de Demeter](https://fr.wikipedia.org/wiki/Loi_de_D%C3%A9m%C3%A9ter)

> Ne parlez qu'à vos amis immédiats

La notion fondamentale est qu'un objet devrait faire aussi peu d'hypothèses que possible à propos de la structure de quoi que ce soit d'autre, y compris ses propres sous-composants.

[Exemple concret](http://misko.hevery.com/2008/07/18/breaking-the-law-of-demeter-is-like-looking-for-a-needle-in-the-haystack/) par Misko Hevery

- [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control)

- YAGNI (You aren't gonna need it)

> Always implement things when you actually need them, never when you just foresee that you need them. (Ron Jeffries)

[You aren't gonna need it : en.wikipedia.org](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)

## normes
- [ISO/CEI 29110 : ingénierie de systèmes et l'Ingénierie du logiciel - les processus de cycle de vie pour les très petits organismes](https://fr.wikipedia.org/wiki/ISO/CEI_29110)
- [ISO/CEI 15504 : cadre pour l'évaluation des processus](https://fr.wikipedia.org/wiki/ISO/CEI_15504)

## pratiques

### monorepo

Plusieurs solutions de gestion des repos/projets :
- 1 repo = 1 projet
- 1 repo = 1 micro-service
- monorepo (tout le SI est contenu dans un seul repo)

défaut des 2 premiers : Dependency Hell.

avantages du monorepo :
- version unifiée du code
- unique source de vérité
- réutilisation intensive
- gestion des dépendances simplifiées (tous les projets ont les mêmes versions)
- collaboration inter-équipes améliorées (mais nécessite meilleure communication)
- frontières des équipes et code ownership flexibles (résoud le problème levé par la loi de Conway)

inconvénients du monorep :
- difficulté à faire des montées de version des dépendances (puisque tout le monde est impacté)
- investissement très lourd du tooling pour gérer les projets
- sécurité du code (tout le monde a tout le code)

impact git :
- généralement on fait du feature branching (rend difficile la collaboration)
- monorepo impose le trunk based development (commit quotidiens sur le trunk + feature toggle)

Le monorepo est la pratique actuelle des géants comme Google et Facebook.

Exemple Google (janvier 2015) :
- 1 repo (exclus : Chrome, Android, ...)
- 25K ingés
- 1 milliard de fichiers
- 35 millions de commits
- 9 millions de fichiers sources
- 2 milliards de lignes de code

[Pourquoi votre entreprise devrait stocker l'ensemble de son code dans un seul repo (Thierry Abaléa) Devoxx2017](https://www.youtube.com/watch?v=7Dfes-qJQ54)

### continuous integration

[wikipedia](https://en.wikipedia.org/wiki/Continuous_integration)

> Continuous integration (CI) is the practice, in software engineering, of merging all developer working copies to a shared mainline several times a day.

### continuous delivery

[wikipedia](https://en.wikipedia.org/wiki/Continuous_delivery)

> Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software faster and more frequently. The approach helps reduce the cost, time, and risk of delivering changes by allowing for more incremental updates to applications in production. A straightforward and repeatable deployment process is important for continuous delivery.

### continuous deployment

[wikipedia](https://en.wikipedia.org/wiki/Continuous_delivery#Relationship_to_continuous_deployment)

>  Continuous deployment means that every change is automatically deployed to production.

### continus delivery / deployment and semver

[Semantic Versioning with Continuous Deployment by Mark Seemann : blog.ploeh.dk](http://blog.ploeh.dk/2013/12/10/semantic-versioning-with-continuous-deployment/)

### feature flipping

[feature-flipping : blog.octo.com](http://blog.octo.com/feature-flipping/)

[feature flags explained : featureflags.io](http://featureflags.io/feature-flags/) (very good link, with lots of use case, eg : early access)

## méthodes

### waterfall
- [waterfall - généralités](https://en.wikipedia.org/wiki/Waterfall_model)

### cycle en V
- [cycle en V - généralités](https://en.wikipedia.org/wiki/V-Model_%28software_development%29)

### agiles
- [méthodes agiles - généralités](https://fr.wikipedia.org/wiki/M%C3%A9thode_agile)
- [SCRUM](https://fr.wikipedia.org/wiki/Scrum_%28m%C3%A9thode%29)
- [kanban](https://fr.wikipedia.org/wiki/Kanban_%28d%C3%A9veloppement%29)
- [Extreme programming](https://fr.wikipedia.org/wiki/Extreme_programming)

## auteurs
- [Frederick Brooks](https://fr.wikipedia.org/wiki/Frederick_Brooks)
  - [OS/360](https://fr.wikipedia.org/wiki/OS/360)
  - [Mythe du mois / homme](https://fr.wikipedia.org/wiki/Le_Mythe_du_mois-homme)
  - [No Silver Bullet — Essence and Accidents of Software Engineering](http://www.cs.nott.ac.uk/~pszcah/G51ISS/Documents/NoSilverBullet.html)
- [Grady Booch](https://en.wikipedia.org/wiki/Grady_Booch)
  - Booch Method
  - UML
  - Continuous Integration
- [Gilles Roustan : Artisan développeur](http://gb-prod.fr/2016/06/12/artisan-developpeur.html)
- [William Durand : From STUPID to SOLID code](http://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/)
- [Donald Knuth : Premature Optimization](http://www.c2.com/cgi/wiki?PrematureOptimization)
- [Robert Cecil Martin (Uncle Bob)](https://en.wikipedia.org/wiki/Robert_Cecil_Martin)
  - SOLID concept, Agile Manifesto Software Craftmanship
  - [Clean Code](http://alm.developpez.com/livres/index/?page=Les-livres-en-francais#L2744023272)
- [Sandro Mancuso : Software Craftmanship](http://codurance.com/blog/author/sandro-mancuso/)
- [Martin Fowler : Agile Manifesto, CI](https://fr.wikipedia.org/wiki/Martin_Fowler) [Refactoring](https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672/ref=asap_bc?ie=UTF8)

- [Top 10 Programming Books Every Software Developer Should Read](https://www.youtube.com/watch?v=UX4YijQ3zhc)

## histoire
- [Software crisis](https://en.wikipedia.org/wiki/Software_crisis)
Fin des années 70, les ordinateurs sont montés en puissance, donc permettent le développement de programmes plus puissants et plus complexe. Dégradation massive de la qualité du à la complexité. C'est le début des recherches en génie logiciel pour définir les bonnes pratiques du développement logiciel (gestion qualité, méthodes, invention programmation procédurale puis objet).
- [bulle internet](https://en.wikipedia.org/wiki/Dot-com_bubble) Fin 90 début 2000 le crash boursier entraine de nombreux licenciements de développeurs suite aux réductions du couts et aux sociétés déposants le bilan. Les développeurs ont alors tendance à se transformer en oui:oui pour éviter de perdre leur emploi, entrainant une dégradation massive de la qualité des productions. Ce phénomène associé à l'arrivée de nombreux jeunes développeurs sur le marché du travail quelques années après sont les deux phénomènes responsables de l'immaturité de l'industrie du développement logiciel dénoncée par Robert C. Martin (cf Martin pour une explication plus détaillée dans [The Future of Programming](https://www.youtube.com/watch?v=ecIWPzGEbFc))

## courants

### Software Craftmanship

- [manifesto.softwarecraftsmanship.org](http://manifesto.softwarecraftsmanship.org/#/fr-fr)
- [Software_craftsmanship : fr.wikipedia.org](https://fr.wikipedia.org/wiki/Software_craftsmanship)
- [Software Craftsmanship by Sandro Mancuso @ Devoxx France 20??](https://www.youtube.com/watch?v=AQlsOPMKgBE)

> Agile : Are we building the right thing ?

> Craftsmanship : Are we building the thing right ?

> from Software Craftsmanship by Sandro Mancuso @ Devoxx France 20??

- [Demanding Professionalism in Software Development : Robert C. Martin (Uncle Bob)](https://www.youtube.com/watch?v=p0O1VVqRSK0)
- [Agility and Architecture : Robert C. Martin (Uncle Bob)](https://www.youtube.com/watch?v=0oGpWmS0aYQ)
- [Jim Coplien and Bob Martin Debate TDD](https://www.youtube.com/watch?v=KtHQGs3zFAM)

**Conférences**
- [SOFTWARE DELIVERY CRAFTSMANSHIP MATTERS](https://craft-conf.com/)

## exemples concrets

[odyssée du Continuous Delivery Diego Lemos David Caramelo (Nicolas Bourgeois)](https://www.youtube.com/watch?v=P9G7jBBwLjc&index=80&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)
Présentation Devoxx2016 sur le passage du code legacy au continuous delivery à la Société Générale. Juste génial.

[SOAT Agile Day - Keynote de Romain Niccoli - Etre agile dans un contexte de forte croissance](https://www.youtube.com/watch?v=vUTYKLEneuI)
