# node.js links

## node.js 2018

[Node.js roadmap: What’s next for the JavaScript runtime - 20180226](https://www.infoworld.com/article/3257673/node-js/nodejs-roadmap-whats-next-for-the-javascript-runtime.html)

> Although Node.js 10 will debut in April 2018, more features are under consideration for 2018 and 2019
> 
> - N-API and HTTP/2
> - Better diagnostic capabilities
> - A faster release schedule for V8
> - Better support of ECMAScript (ES) 6 modules
> - progress on security triage for third-party NPM modules
> - Functional testing for third-party modules
> - Use of JavaScript promises in the Node.js core
> - Support for more build/automation infrastructure

[Node.js core contributor James M Snell presentation about node in 2018](https://www.youtube.com/watch?v=_H_HskEf-0U)

## node.js 2017

[Node.js partout - Cristophe Porteneuve - WEB2DAY 2017](https://www.youtube.com/watch?v=IwpBluLjynI)

> seule stack présente dans l'intégralité des uses cases connus (du serveur web à l'IoT)
> 
> rétro :
> - 200911 : annonce officielle à JsConf de Berlin
> - 201309 : 1ère formations en France
> - 201310 : formation Node.js au catalogue DI
> - 201410 : Node.js démystifié (Paris Web)
> - 201502 : NodeSchool Paris 1 (1050+ membres), session n°14 201706
> 
> **croissance de l'écosystème**
> 
> Plateforme opensource à plus forte croissance mondiale. (cf [modulecounts.com](http://www.modulecounts.com/))
> 
> 500 nouveaux modules par jour (500K au total). (Maven 120/j, 190K)
> 
> npm est le référentiel de facto pour Node, jQuery, CSS, outils CLI (phonegap, cordova), ...
> 
> 371 millions modules téléchargés par jour (201802 : [570 millions par jour !!](https://twitter.com/seldo/status/961415623694729216))
> 
> accélération permanente
> 
> npm devient un canal universel d'installation
> 
> **croissance de l'adoption**
> 
> 22 millions de téléchargements de Node.js par mois (la France représente 1%)
> 
> 7 millions d'utilisateurs (mai 2017)
> 
> croissance annuelle de 100% (stable sur 6 ans)
> 
> 2ème techno la plus demandée (après Android) (source stackoverflow)
> 
> La Fondation Node comprend les plus gros (IBM, Intel, MS, Google, Paypal, RedHat, Yahoo, SAP, Joyent, ...)
> 
> Investissements massifs des gros acteurs
> 
> la quasi totalité du Fortune 500 a migré vers Node.js (depuis Java EE) avec succès
> 
> Netflix : (qui stream 8TB/s) bootup -98% (le système mettait 1H20 pour boot, aujourd'hui moins de 3mins), instances EC2 -75%, latence réduite. Economie mensuelle de presque 100 millions de dollars
> 
> Paypal : RPS x2 (Requetes Par Secondes), temps de réponse -35%, conso AWS divisée par 7. On démarré la migration Node.js sur le paiement en ligne (8,4 milliards de dollars de transaction par jour).
> 
> Groupon : temps chargement pages -50%
> 
> Uber, LinkedIn, Walmart, NASA, SpaceX, Tesla, Yahoo, eBay, Medium, Trello, Storify, SitePen, JSBin, Yammer, Zendesk
> 
> **frontend**
> 
> Incontournable en frontend (Babel, ESLint, React, Angular, Vue, Grunt, Gulp, Webpack, ...)
> 
> **mobile**
> 
> Cordova (50% du top 10 des AppStores), SDK natifs, mobile backend, ...
> 
> **desktop**
> 
> Electron (Visual Studio Code, Slack, Github Desktop, Atom, ...)
> 
> Permet de faire du multi plateforme (bien mieux que Java)
> 
> **cloud**
> 
> Tous les fournisseurs de cloud supportent Node.js
> 
> **API & Microservices**
> 
> avec renaissances des clients riches les APIs explosent
> 
> Twitter 15 milliards d'appels API par jour (Facebook 7B+, Google 10B+)
> 
> Le SPAM email commence à passer sous les calls d'API sur l'ensemble d'internet
> 
> Plus de 15K APIs publiques
> 
> Emergence du B2D (Business to Developer), Auth0 / Stormpath, Parse / Backendless, Cloudinary, Firebase, Heroku, GitHub, ...
> 
> Hébergement de fonctions stateless (contient ton code spécifique, le reste est fourni par la plateforme / service)
> 
> **IoT**
> 
> Internet of Things
> 
> Tous les microcontrollers ont un support node intégré (basé V8 ou Shakra core)
> 
> **France**
> 
> On a tout le temps 5 ans de retard. Hype Cycle : US puis Europe du Nord, puis GB puis nous puis Europe du Sud
> 
> Conservatisme très fort. Pas encore présent sur le radar technique des gros groupes.

## architecture

[Understanding Node.js Event-Driven Architecture](https://medium.freecodecamp.com/understanding-node-js-event-driven-architecture-223292fcbc2d)

[What you should know to really understand the Node.js Event Loop - 20170720](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c)

[Java EE threads v/s Node.js - which is better for concurrent data processing operations - 20130609](http://bijoor.me/2013/06/09/java-ee-threads-vs-node-js-which-is-better-for-concurrent-data-processing-operations/)

> The most important differences between NodeJS and Java are the concurrency and I/O models. Java uses multi­threaded synchronous I/O while NodeJS uses single threaded asynchronous I/O.

[Node.js — How is it different? - Siddhartha Chowdhury - 20180206](https://medium.com/@siddharthac6/node-js-how-is-it-different-94f97480a4bb)

> **When does Node.js fails ?**
> 
> Node’s underlying architecture implementation fails when some CPU intensive work is involved.
> 
> By CPU intensive I mean works like Image processing, audio encoding, media conversions, etc.
> 
> All these jobs involves huge CPU computations and almost no I/O. Hence when the event (which involves as such work) handler is fired, it keeps the the event loop busy until the time the CPU processing is finished, **it halts all other events in the process**. 
> 
> This case is where C++, Java, Python and all other excels coz their underlying architecture makes use of multiple threads to handle concurrency at their core.

### Pramod Chandrayan articles

[Getting Started With Node.js : A Beginners Guide - Pramod Chandrayan - 20171105](https://codeburst.io/getting-started-with-node-js-a-beginners-guide-b03e25bca71b)

> - Introduction to Node.js
> - Setting up Node.js
> - npm : Node Package Manager
> - An Example To conclude

[All About Node.Js You Wanted To Know ? - Pramod Chandrayan - 20171029](https://codeburst.io/all-about-node-js-you-wanted-to-know-25f3374e0be7)

> panorama

[How Node.Js Single Thread mechanism Work ? Understanding Event Loop in NodeJs - Pramod Chandrayan - 20171125](https://codeburst.io/how-node-js-single-thread-mechanism-work-understanding-event-loop-in-nodejs-230f7440b0ea)

> detailled event loop explanation

### V8 Engine : Run time Environment

It’s an open sourceJIT(Just In Time) compiler written in C++.

V8 compiles Javascript directly into assembly level code.

- **Compiler** : dissects the JS code
- **Optimizer** : Optimizer called crankshaft create abstract syntax tree(AST) which further converts to SSA : static single assignment and gets optimized
- **Garbage Collector** : V8 divides the memory into 2 spaces Old spaces and new spaces both belongs to heap memory and keeps track of JS objects, any new objects is stored in new space. When new space is fully occupied V8’s garbage collector removes dead objects from new space and puts into old space. Gabage collector play vial role in keeping NodeJs lightweight.

### the event loop

[The Node.js Event Loop, Timers, and `process.nextTick()`](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

```
   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

Phases Overview

- **timers**: this phase executes callbacks scheduled by `setTimeout()` and `setInterval()`.
- **I/O callbacks**: executes almost all callbacks with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`.
- **idle, prepare**: only used internally.
- **poll**: retrieve new I/O events; node will block here when appropriate.
- **check**: `setImmediate()` callbacks are invoked here.
- **close callbacks**: e.g. `socket.on('close', ...)`.

Between each run of the event loop, Node.js checks if it is waiting for any asynchronous I/O or timers and shuts down cleanly if there are not any.


Powered by [libuv/libuv](http://libuv.org/)

> Cross-platform asynchronous I/O http://libuv.org/


## ECMAScript support

[kangax's compat-table applied only to Node.js](http://node.green/)

## fork

[Node.js forké à nouveau pour donner naissance à Ayo : www.developpez.net 20170825](https://www.developpez.net/forums/d1742355/webmasters-developpement-web/javascript-ajax-typescript-dart/javascript/javascript-cote-serveur/node-js-forke-nouveau-donner-naissance-ayo/#post9562073)

[ayojs/ayo : github.com](https://github.com/ayojs/ayo)

## install

### debian

http://blog.nicolargo.com/2012/09/installer-facilement-nodejs-et-npm-sur-une-debian-stable.html

via package manager (from official repo) :
https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager

via backports (fait avec ça) :
https://github.com/joyent/node/wiki/backports.debian.org

binaires (node et npm) dans `/usr/bin/`

modules (bower grunt yo et les generators) dans `/usr/lib/node_modules/`

Installer node en user http://tnovelli.net/blog/blog.2011-08-27.node-npm-user-install.html

Installer des modules nodes globalement sans sudo https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo-linux.md

nodejs & npm install en user

**dépendances pour compiler node**

```
sudo apt-get install gcc
sudo apt-get install g++
sudo apt-get install make

```

**configurer le chemin custom**

```
./configure --prefix=~/dev/tools/nodejs

```

**lancer le build**

```
make
make install

```

**node_modules symlink**

Create `~/.node_modules` symlink. (This directory will be automatically searched when you load modules using require "module" in scripts. I'm not sure why Node doesn't search `~/.local/lib/node_modules` by default.)

```
ln -s dev/tools/nodejs/lib/node_modules .node_modules

```

**PATH management**

```
add this to ~/.profile

```

**nodejs & npm path**

```
export PATH=$HOME/dev/tools/nodejs/bin:$PATH

```


**Test**

```
which npm

```

should return the npm path defined above

From there, installing Yeoman & angular app generator

```
npm install -g yo
npm install -g generator-angular

```

