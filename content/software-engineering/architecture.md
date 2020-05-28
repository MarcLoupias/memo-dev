# architecture

## ports and adapters

### or hexagonal ?

[HexagonalArchitecture - Alistair Cockburn](http://wiki.c2.com/?HexagonalArchitecture/)

> Finally, after many years, I understood better what this architecture is about, and have shifted to calling it PortsAndAdaptersArchitecture, because each facet of the hexagon represents a port (a technology-independent protocol capturing a reason for a discussion), and the things in the outer layer are GoF-style Adapters mapping that protocol to different external technologies.

### how it works

#### Archi hexagonale - article blog octo

[Architecture Hexagonale : trois principes et un exemple d’implémentation - blog.octo.com - 20180717](https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation/)

##### principes

L’architecture hexagonale s’appuie sur trois principes et techniques :

- Séparer explicitement *Application*, *Domain*, et *Infrastructure* (IHM, métier et serveur / bdd / filesystem / ...)
- Les dépendances vont vers le *Domain* (le métier ne dépend pas d'une lib externe sauf core lib type lodash, c'est App et Infra qui dépendent du métier)
- On isole les frontières par des *Ports* et *Adapters* (des interfaces et leurs implémentations)

##### principe 1 - séparation

![Architecture hexagonale structure](/images/software-engineering/architecture/archi_hexa_00.png)

À gauche, le côté *Application*

C’est le côté par lequel **l’utilisateur** ou les programmes extérieurs vont **interagir avec l’application**.

Au centre, le *Domain*

C’est la partie que l’on veut isoler de ce qui est à gauche et à droite. On y trouve tout le code qui concerne et implémente la **logique métier**.

À droite, le côté *Infrastructure*

C’est ici qu’on va retrouver ce dont votre application a besoin, ce qu’elle pilote pour fonctionner. On y trouve les détails d’infrastructure essentiels comme le code qui interagit avec votre base de données, les appels au système de fichier, ou le code qui gère des appels HTTP à d’autres applications dont vous dépendez par exemple.

![Architecture hexagonale example](/images/software-engineering/architecture/archi_hexa_01.png)

##### principe 2 - inversion dépendances

![Architecture hexagonale inversion deps](/images/software-engineering/architecture/archi_hexa_02.png)

- le *Domain* ne dépend pas du côté *Application*, c’est le côté *Application* qui dépend du *Domain* (par le biais de l'interface)
- le *Domain* ne dépend pas du côté *Infrastructure*, c’est l’inverse : c’est le côté *Infrastructure* qui dépend du *Domain* (par le biais de l'interface)

Tout dépend du *Domain*, le *Domain* ne dépend de rien.

##### principe 3 - isoler les frontières

![Architecture hexagonale isoler frontieres](/images/software-engineering/architecture/archi_hexa_04.png)

- Pour résumer, le code applicatif pilote le code métier à travers une interface définie dans le code métier.
- Le code métier pilote l’infrastructure à travers une interface définie aussi dans le code métier.

Ces interfaces jouent le rôle d’**isolants explicites entre intérieur et extérieur**.

###### métaphore ports and adapters

![Architecture hexagonale ports and adapters](/images/software-engineering/architecture/archi_hexa_05.png)

###### métaphore hexagone

![Architecture hexagonale hexagonal](/images/software-engineering/architecture/archi_hexa_06.png)

##### testing

En terme de tests automatisés on va réussir à tester avec un effort raisonnable :

- Tout le Domain unitairement,
- L’intégration entre Application et Domain – sans l’Infrastructure
- L’intégration entre Domain et Infrastructure – sans l’Application

Le test remplace la couche Application

![Architecture hexagonale tests rempla couche app](/images/software-engineering/architecture/archi_hexa_11.png)

La couche infra est remplacée par un mock

![Architecture hexagonale tests rempla couche infra](/images/software-engineering/architecture/archi_hexa_12.png)

#### ports and adapters - dossier-andreas.net

[Ports-And-Adapters / Hexagonal Architecture - www.dossier-andreas.net](http://www.dossier-andreas.net/software_architecture/ports_and_adapters.html)

![ports and adapters](/images/software-engineering/architecture/ports-and-adapters.png)

A **port** is an entry point, provided by the core logic. It defines a set of functions.

**Primary ports** are the main API of the application. They are called by the primary adapters that form the user side of the application. Examples of primary ports are functions that allow you to change objects, attributes, and relations in the core logic.

**Secondary ports** are the interfaces for the secondary adapters. They are called by the core logic. An example of a secondary port is an interface to store single objects. This interface simply specifies that an object be created, retrieved, updated, and deleted. It tells you nothing about the way the object is stored.

An **adapter** is a bridge between the application and the service that is needed by the application. It fits a specific port.

A **primary adapter** is a piece of code between the user and the core logic. One adapter could be a unit test function for the core logic. Another could be a controller-like function that interacts both with the graphical user interface and the core logic. The primary adapter calls the API functions of the core logic.

A **secondary adapter** is an implementation of the secondary port (which is an interface). For instance, it can be a small class that converts application storage requests to a given database, and return the results of the database in a format requested by the secondary port. It can also be a mock database object needed to unit tests certain parts of the core logic. The core logic calls the functions of the secondary adapter.

##### Par rapport à l'article du blog Octo

- **Primary ports** = interfaces dans la couche *Domain* qui sera étendue par un adapter de la couche *App*.
- **Secondary ports** = interfaces dans la couche *Domain* qui sera étendue par un adapter de la couche *Infra*.
- **primary adapter** = impl de l'adapter dans la couche *App* qui étend l'interface de la couche *Domain*.
- **secondary adapter** = impl de l'adapter dans la couche *Infra* qui étend l'interface de la couche *Domain*.

#### conf Devoxx France 2018

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

#### architecture hexagonale - blog xebia

[Pérennisez votre métier avec l’architecture hexagonale ! - blog.xebia.fr - 20160316](http://blog.xebia.fr/2016/03/16/perennisez-votre-metier-avec-larchitecture-hexagonale/)

## clean architecture

[La Clean Architecture : catalyseur de productivité - medium.com/@mickalwegerich - 20180507](https://medium.com/@mickalwegerich/la-clean-architecture-catalyseur-de-productivit%C3%A9-68ff61aa38ff)

[Robert C Martin - Clean Architecture and Design - www.youtube.com - 2013](https://www.youtube.com/watch?v=Nsjsiz2A9mg)

[Robert C Martin - A Little Architecture - blog.cleancoder.com - 20160104](http://blog.cleancoder.com/uncle-bob/2016/01/04/ALittleArchitecture.html)

[Robert C Martin - The Clean Architecture - blog.cleancoder.com - 20120813](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

> ![Clean Architecture](/images/software-engineering/architecture/CleanArchitecture.jpg)
>
> Over the last several years we’ve seen a whole range of ideas regarding the architecture of systems. These include:
>
> - [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) (a.k.a. Ports and Adapters) by Alistair Cockburn and adopted by Steve Freeman, and Nat Pryce in their wonderful book [Growing Object Oriented Software](http://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)
> - [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/) by Jeffrey Palermo
> - [Screaming Architecture](http://blog.cleancoders.com/2011-09-30-Screaming-Architecture) from a blog of mine last year
> - [DCI](http://www.amazon.com/Lean-Architecture-Agile-Software-Development/dp/0470684208/) from James Coplien, and Trygve Reenskaug.
> - [BCE](http://www.amazon.com/Object-Oriented-Software-Engineering-Approach/dp/0201544350) by Ivar Jacobson from his book Object Oriented Software Engineering: A Use-Case Driven Approach

## misc

[Podcast Les vices de l'agilité - Choisir les technos avant de commencer à coder - Mickael Azerhad - 20180725](https://soundcloud.com/michael-az-948266686/les-vices-de-lagilite-choisir-les-technos-avant-de-commencer-a-coder)

[Software Architecture & Design Tutorial - www.tutorialspoint.com](https://www.tutorialspoint.com/software_architecture_design/index.htm)
