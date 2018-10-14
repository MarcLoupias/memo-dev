# Génie Logiciel

- [Définition wikipédia](https://fr.wikipedia.org/wiki/G%C3%A9nie_logiciel)

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

- YAGNI (You aren't gonna need it)

> Always implement things when you actually need them, never when you just foresee that you need them. (Ron Jeffries)

[You aren't gonna need it : en.wikipedia.org](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)

## Inversion of Control

- [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control)
- [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)
- [Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
- [Service Locator Pattern](https://en.wikipedia.org/wiki/Service_locator_pattern)
- [Dead-Simple Dependency Injection - Scala - Rúnar Óli Bjarnason - 2012](https://www.youtube.com/watch?v=ZasXwtTRkio)

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
- monorepo impose le [trunk based development](https://trunkbaseddevelopment.com/) (commit quotidiens sur le trunk + feature toggle)

Le monorepo est la pratique actuelle des géants comme Google et Facebook.

Exemple Google (janvier 2015) :
- 1 repo (exclus : Chrome, Android, ...)
- 25K ingés
- 1 milliard de fichiers
- 35 millions de commits
- 9 millions de fichiers sources
- 2 milliards de lignes de code

[Pourquoi votre entreprise devrait stocker l'ensemble de son code dans un seul repo (Thierry Abaléa) Devoxx2017](https://www.youtube.com/watch?v=7Dfes-qJQ54)

[Why Google Stores Billions of Lines of Code in a Single Repository : Rachel Potvin@Google 20150914](https://www.youtube.com/watch?v=W71BTkUbdqE)

### continuous integration

[wikipedia](https://en.wikipedia.org/wiki/Continuous_integration)

> Continuous integration (CI) is the practice, in software engineering, of merging all developer working copies to a shared mainline several times a day.

### continuous delivery

[wikipedia](https://en.wikipedia.org/wiki/Continuous_delivery)

> Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software faster and more frequently. The approach helps reduce the cost, time, and risk of delivering changes by allowing for more incremental updates to applications in production. A straightforward and repeatable deployment process is important for continuous delivery.

### continuous deployment

[wikipedia](https://en.wikipedia.org/wiki/Continuous_delivery#Relationship_to_continuous_deployment)

>  Continuous deployment means that every change is automatically deployed to production.

### continuous delivery / deployment and semver

[Semantic Versioning with Continuous Deployment by Mark Seemann : blog.ploeh.dk](http://blog.ploeh.dk/2013/12/10/semantic-versioning-with-continuous-deployment/)

### feature flipping

[feature-flipping : blog.octo.com](http://blog.octo.com/feature-flipping/)

[feature flags explained : featureflags.io](http://featureflags.io/feature-flags/) (very good link, with lots of use case, eg : early access)

**drawback**

[Settings are evil - MPJ's Musings - FunFunFunction #62](https://www.youtube.com/watch?v=glZ1C-Yu5tw)

> TLDR : Feature toggle generate combinatorial explosion of test cases -> lower quality

Martin Fowler deal with this question in [his feature toggle article](https://martinfowler.com/bliki/FeatureToggle.html) :

> A common question we hear about feature toggles concerns testing - **does using feature toggles mean a combinatorial 
> explosion of tests**? In general there's **no need to test all combinations of features**. 
> For release toggles it's usually sufficient to run two combinations :
> 
> - all the toggles on that are expected to be on in the next release
> - all toggles on
> 
> This is pretty much the same as what you need to do with feature branches if you want to find any integration bugs.
> 
> **It's very important to retire release toggles once the pending features have bedded down in production**. 
> This involves removing the definitions on the configuration file and all the code that uses them. 
> **Otherwise you will get a pile of toggles that nobody can remember how to use**. In one memorable example I heard of, 
> it required making a special recompilation of the linux kernel to handle enough command line switches.

[Feature branches vs. feature toggles : fournines.wordpress.com : 20111120](https://fournines.wordpress.com/2011/11/20/feature-branches-vs-feature-toggles/)

> The biggest mistake you can make when deciding on how to use branches is trying to define "one branching strategy to rule them all".

> Feature toggle should not be systematicly used. It should be only if the team experience pain merges.

> Features branches cons :
> - the feature branch is not merged in the mainline, so there is no CI on it
> - concurrent feature branch works can lead to big conflicts when merging. The last team to merge will have to handle 
> all the issues.

> Conflicts could symptomatic of underlying problems :
> - poor design
> - no cohesive view of the domain (no or bad modelization)
> - or multiple logical views of the domain
> - refactor-rage (a dev doing lot's of cow boy refactoring)

> Feature toggle can be impl at build time or at runtime. Build time means you need several CI pipeline, run time increase
> increase code complexity.

> Feature toggles are certainly an interesting concept, and seem to mesh well with the principle of building composable 
> applications. However, they are not without their pitfalls, so if you are thinking about trying them out, make sure 
> that they are the most appropriate solution to the actual problem that you’re trying to solve.

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

- [Allen Holub](https://en.wikipedia.org/wiki/Allen_Holub)
  - [The death of Agile](https://www.youtube.com/watch?v=vSnCeJEka_s)
  - [#NoEstimates](https://www.youtube.com/watch?v=QVBlnCTu9Ms)

- [Eric Elliott : "Programming JavaScript Applications" (O’Reilly)](https://leanpub.com/u/ericelliott)
  - [github profile](https://github.com/ericelliott)
  - massive article writer on [medium.com](https://medium.com/@_ericelliott)
  
- David Heinemeier Hansson (Creator of Ruby on Rails)
  - [The Majestic Monolith : medium.com 20160229](https://m.signalvnoise.com/the-majestic-monolith-29166d022228)
  
- [Gérard Berry](https://fr.wikipedia.org/wiki/G%C3%A9rard_Berry)
  - le lambda calcul et la programmation fonctionnelle ;
  - la programmation parallèle et temps réel ;
  - la conception assistée par ordinateur de circuits intégrés synchrones ;
  - la vérification formelle de programmes et circuits ;
  - la modélisation du calcul en général.
  - [Dominer l’informatique avec Gérard Berry - France Culture - 20171030](https://www.franceculture.fr/emissions/la-grande-table-2eme-partie/dominer-linformatique-avec-gerard-berry)
  - [Pourquoi et comment le monde devient numérique - Collèges de France - 20080117](https://www.college-de-france.fr/site/gerard-berry/inaugural-lecture-2008-01-17-18h00.htm)
  - [Le meilleur des mondes informatiques - 20180829](https://www.franceculture.fr/emissions/la-methode-scientifique/gerard-berry-le-meilleur-des-mondes-informatiques)
    - ordinateur est la plus souple des machines puisqu'on peut lui télécharger ce qu'elle peut faire 
    - problème de sémantique avec l'informatique, on mélange tout (algo, numérique, IoT, ...). Nous sommes absents de l'industrie (1 seule société dans les 100 premières mondiales) alors que nous sommes très en pointe en recherche.
    - pourtant l'informatique est partout autour de nous
    - absence de formation pour les gens qui utilisent sans rien comprendre
    - cite [Jean-Marie Hullot](https://fr.wikipedia.org/wiki/Jean-Marie_Hullot) créateur de [l'IPhone pour Steve Jobs](http://www.graphmobile.com/dossier/2-iphone-histoire.htm).
    - histoire informatique, au début tout était dur. Bootstraping, on commence par faire des petites choses dures, qui permettent de faire plus facilement des choses plus dures, etc ... 
    - langage [Esterel](https://fr.wikipedia.org/wiki/Esterel_(langage)) servant dans l'aviation. Permet de gérer le temps et de fournir des preuves de programmes (par ex le programme de l'ascenseur n'autorise pas l'ascenseur à monter ou descendre avec la porte ouverte).
    - 3 formes de communications possible : *asynchrone* (internet par ex, on envoie un message on ne sait pas si il va arriver ni quand), *synchrone* (on envoie un message et on fait comme si il arrivait en temps zéro), *vibratoire* (envoie message qui arrive à une vitesse connue, par le GPS), c'est en étudiant comment programmer sur ces 3 paradigmes et en les faisant communiquer qu'ils ont développé Esterel.
    - question de Manuel Serrano (chercheur INRIA dev de [Hop.js](http://hop.inria.fr/home/index.html)) : Années 90 mise en réseau des ordis nous entraine dans l'ère de la prog distribuée. Web a spécificité, grosse diff entre machines serveurs qui font beaucoup de traitements et clients qui sont plus nombreux mais en font moins. On a eu la prog multi-tiers début 2000, question de savoir comment on peut parler de la prog asynchrone et de la temporalité des programmes. Ont pris le langage Esterel et ils l'ont adapté au web pour donner [hip-hop](https://github.com/manuel-serrano/hiphop). Quelles seront les grandes étapes à franchir pour améliorer la sureté et la sécurité notamment pour l'internet des objets où la communication est encore plus fréquente que sur le web ?
    - réponse de G. Berry : algo distribués très différents des algos séquentiels. Peuvent être horriblement simple à écrire et horriblement compliqués à comprendre. Un des plus connus et utilisé est TCP (Transfert Control Protocol). Algo très délicats, souvent mon gros. En synchrone tout le monde partage le temps. En asynchrone non. En IoT, on a des interfaces asynchrones, tout va se mélanger. Bcp de questions, énorme source d'erreurs. Ex en asynchrone chacun veut 2 objets, chacun en possède un, et aucun ne veut lacher le sien, ça s'appele un dead lock qui entrain un blocage du système. On a pas les théories mathématiques qui faut. Pour la prog classique on a [le lambda calculus de Church](https://fr.wikipedia.org/wiki/Lambda-calcul). On a pas l'équivalent en distribué. En synchrone on peut faire de la vérification formelle. Pas en asynchrone. La dominence du web fait que les gens sont incroyablement tolérants à la mauvaise qualité.

- [Jacques Printz](https://www.eyrolles.com/Accueil/Auteur/jacques-printz-15337)
> a été titulaire de la chaire de génie logiciel du Cnam. A dirigé les développements logiciels des ordinateurs Bull DPS7. Consultant en systèmes d’information auprès de grandes entreprises et administrations. Auteur de nombreux ouvrages sur le génie logiciel. 

- [Louis Pouzin](https://fr.wikipedia.org/wiki/Louis_Pouzin)
> inventeur du datagramme et concepteur du premier réseau à commutation de paquets, à la base de ce qui deviendra Internet. Lauréat du Queen Elizabeth Prize for Engineering en 2013. Militant du multilinguisme dans l’espace numérique et d’une nouvelle gouvernance d’Internet

- [François Anceau](https://www.lip6.fr/actualite/personnes-fiche.php?ident=P242)
> a été titulaire de la chaire des techniques fondamentales de l'informatique du Cnam, responsable de recherche à l'Imag, Bull et l'Ecole Polytechnique. Pionnier en France des architectures de circuits intégrés, en particulier sur leur preuve formelle et leur synchronisation interne.

- [Najah Naffah](https://fr.wikipedia.org/wiki/Najah_Naffah)
> Précurseur à l’INRIA de la notion de routeur de réseau, puis du poste de travail intelligent, en dirigeant le projet Kayak. Il a ensuite exercé des responsabilités de direction dans l’Industrie (Bull, EDS, Sabre, Prologue), et maintenant de conseil en management.

- [Daniel Glazman](http://glazman.org/weblog/) Former co-chairman of the W3C CSS Working Group
  - [Sommes-nous à la merci de nos systèmes informatiques ? - France Culture -  20171205](https://www.franceculture.fr/emissions/linvite-des-matins-2eme-partie/sommes-nous-a-la-merci-de-nos-systemes-informatiques)
  
- Rich Hickey [Clojure](https://clojure.org/) author, [The problems of programming](https://pbs.twimg.com/media/DL-3OUcUMAAaXID.jpg)

- [TJ Holowaychuk](https://github.com/tj)
  - founder of Express, Koa, Commander, ...
  
- [http://tinyclouds.org](Ryan Dahl)
  - founder of Node.js, denom, ...
  - [Interview with Ryan Dahl, Creator of Node.js - www.mappingthejourney.com - 20170831](https://www.mappingthejourney.com/single-post/2017/08/31/episode-8-interview-with-ryan-dahl-creator-of-nodejs/)

- [Top 10 Programming Books Every Software Developer Should Read](https://www.youtube.com/watch?v=UX4YijQ3zhc)

## histoire
- [Software crisis](https://en.wikipedia.org/wiki/Software_crisis)
Fin des années 70, les ordinateurs sont montés en puissance, donc permettent le développement de programmes plus puissants et plus complexe. Dégradation massive de la qualité du à la complexité. C'est le début des recherches en génie logiciel pour définir les bonnes pratiques du développement logiciel (gestion qualité, méthodes, invention programmation procédurale puis objet).
- [bulle internet](https://en.wikipedia.org/wiki/Dot-com_bubble) Fin 90 début 2000 le crash boursier entraine de nombreux licenciements de développeurs suite aux réductions du couts et aux sociétés déposants le bilan. Les développeurs ont alors tendance à se transformer en oui:oui pour éviter de perdre leur emploi, entrainant une dégradation massive de la qualité des productions. Ce phénomène associé à l'arrivée de nombreux jeunes développeurs sur le marché du travail quelques années après sont les deux phénomènes responsables de l'immaturité de l'industrie du développement logiciel dénoncée par Robert C. Martin (cf Martin pour une explication plus détaillée dans [The Future of Programming](https://www.youtube.com/watch?v=ecIWPzGEbFc))
- [Jeff Bezos API Mandate explained by Google employee](https://plus.google.com/+RipRowan/posts/eVeouesvaVX)
> 1) All teams will henceforth expose their data and functionality through service interfaces.
> 2) Teams must communicate with each other through these interfaces.
> 3) There will be no other form of interprocess communication allowed:  no direct linking, no direct reads of another team's data store, no shared-memory model, no back-doors whatsoever.  The only communication allowed is via service interface calls over the network.
> 4) It doesn't matter what technology they use.  HTTP, Corba, Pubsub, custom protocols -- doesn't matter.  Bezos doesn't care.
> 5) All service interfaces, without exception, must be designed from the ground up to be externalizable.  That is to say, the team must plan and design to be able to expose the interface to developers in the outside world.  No exceptions.
> 6) Anyone who doesn't do this will be fired.

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

## architecture

[Architectural patterns - www.dossier-andreas.net](http://www.dossier-andreas.net/software_architecture/)

> - Model-View-Controller
> - Presentation-Abstraction-Control
> - Pipe-And-Filter
> - Layered Systems
> - Microkernel
> - Client-Server and N-Tier Systems
> - Repository
> - Blackboard
> - Finite State Machine
> - Process Control
> - Multi Agent System
> - Broker a.k.a. Service Oriented Architecture
> - Master-Slave
> - Interpreter a.k.a. Virtual Machine
> - Hub-And-Spoke
> - Message Bus a.k.a. Event Bus
> - Structural Model
> - Ports-And-Adapters a.k.a. Hexagonal Architecture
> - Peer-to-peer
> - Event sourcing
> - CQRS 

### clean architecture

[La Clean Architecture : catalyseur de productivité - medium.com/@mickalwegerich - 20180507](https://medium.com/@mickalwegerich/la-clean-architecture-catalyseur-de-productivit%C3%A9-68ff61aa38ff)

[Pérennisez votre métier avec l’architecture hexagonale ! - blog.xebia.fr - 20160316](http://blog.xebia.fr/2016/03/16/perennisez-votre-metier-avec-larchitecture-hexagonale/)

[Robert C Martin - Clean Architecture and Design - www.youtube.com - 2013](https://www.youtube.com/watch?v=Nsjsiz2A9mg)

[Robert C Martin - A Little Architecture - blog.cleancoder.com - 20160104](http://blog.cleancoder.com/uncle-bob/2016/01/04/ALittleArchitecture.html)

[Ports-And-Adapters / Hexagonal Architecture - www.dossier-andreas.net](http://www.dossier-andreas.net/software_architecture/ports_and_adapters.html)

[Architecture hexagonale pour les nuls (Y. Chéné) - DevoxxFrance 2018](https://www.youtube.com/watch?v=Hi5aDfRe-aE)
 
> a substituer à l'architecture en couche connue de tous
> 
> tackling complexity in the heart of software (Eric Evans 2003)
> 
> "ports and adapters architecture" ou "Object Structural" ou "Hexagonal Architecture" (cf Alistair Cockburn)
> 
> Archi similaires : Clean Architecture, Onion Architecture
> 
> Règle 1 : Pas de framework ou de dépendances sur le domaine, on écrit tout en vanilla (on peut avoir éventuellement des dépendances sur des libs générales, par ex en js ça serait lodash)
> 
> Règle 2 : Le domaine est le central, c'est l'extérieur qui appelle le domaine. Le domaine n'appelle jamais l'extérieur. Il ne doit donc jamais y avoir de code d'infra dans le domaine, en d'autres termes toutes les I/O sont à l'extérieur.
> 
> le reste de la prez il commente un exemple avec Spring Boot

[Podcast Les vices de l'agilité - Choisir les technos avant de commencer à coder - Mickael Azerhad - 20180725](https://soundcloud.com/michael-az-948266686/les-vices-de-lagilite-choisir-les-technos-avant-de-commencer-a-coder)

[Software Architecture & Design Tutorial - www.tutorialspoint.com](https://www.tutorialspoint.com/software_architecture_design/index.htm)

## divers

[The worst mistake of computer science - www.lucidchart.com/techblog - 20150831](https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/)

> In commemoration of the 50th anniversary of Sir Hoare’s null, this article explains what null is, why it is so terrible, and how to avoid it.
