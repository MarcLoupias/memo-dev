# nodejs - links

## presentations

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

[NodeJS 5 bonnes raisons pour lesquelles vous devriez y jeter un oeil (A. Victoor, T. Abaléa) - Devoxx 2018](https://www.youtube.com/watch?v=nFs_opDO7jM&list=PLTbQvx84FrARa9pUtZYK7t_UfyGMCPOBn&index=83)

> - explication sympa sur les workers le module `child_process` et le module `cluster`
> - explication usage `cluster` pour éviter les interruptions de service lors des déploiements
> - chrome dev tools sur `chrome://inspect/#devices`
> - leurs 5 bonnes raisons : simplicité, légèreté, JS moderne, écosystème, pourquoi pas

[Node.js partout - Cristophe Porteneuve - WEB2DAY 2017](https://www.youtube.com/watch?v=IwpBluLjynI)

> seule stack présente dans l'intégralité des uses cases connus (du serveur web à l'IoT)
>
> rétro :
>
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
> Electron (Visual Studio Code, Slack, GitHub Desktop, Atom, ...)
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

[question Java/C++/C# vs Node.js - 20170718](https://medium.com/@_ericelliott/companies-who-trust-node-js-4bfb8385ab84)

> From comments in article [The Shocking Secret About Static Types](https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3) by Eric Elliott - 20160505
>
> **[question from pwadev](https://medium.com/@pwadev33/hi-eric-ive-been-seeing-a-lot-of-java-c-c-devs-saying-that-you-shouldn-t-use-node-js-d4c831db105)**
>
> I’ve been seeing a lot of Java/C++/C# devs saying that you shouldn’t use Node.js to build a production app because it isn’t stable enough or maintainable enough partly due to it’s lack of static typing. They say Electron isn’t usable for desktop development for the same reasons.
> [...]
> Do you think Node.js is stable enough for creating commercial apps without needing tons of maintenance or should I use a language like Java instead?
>
> **[answer from Eric Elliott](https://medium.com/@_ericelliott/companies-who-trust-node-js-4bfb8385ab84)**
>
> Companies who trust Node.js: Walmart, PayPal, Adobe, LinkedIn, IBM, Microsoft, Netflix, Uber, Medium, New York Times, etc…
>
> PayPal made the switch from Java to Node in spite of the fact that PayPal’s entire engineering team was mostly familiar with Java, and not familiar with JavaScript.
>
> Much of PayPal’s middle-tier infrastructure is now powered by Node and the team is now confident to push changes to production at a much higher pace than they ever did with Java.
>
> You can see this for yourself looking at the vast improvement in all their apps since 2012. Learning to embrace change helped them stay relevant and restored their position as an innnovative company.
>
> If the leading provider of global online payment solutions trusts Node in spite of the fact that the whole team was previously deeply invested in Java, and screwing up could impact the global payment economy that PayPal supports, that should tell you everything you need to know.
>
> But in case it doesn’t, here’s my experience: I have a background in C++ and Java. I never built a large production C++ app that had an uptime you could measure in months or years. Because of the manual memory management and complicated (very imperative) type system, I was always fighting memory leaks or trying to escape strict typing with dynamic hacks. It felt too manual, rigid and restrictive.
>
> My experience with Java was worse. Java made it hard to use simple functions as a basic building block. A lot of great work can be done by composing simple functions, but in Java, even the most trivial things require the overhead of class building and object instantiation, and even objects in Java are harder to compose than they need to be.
>
> I kept my “Design Patterns” book on my desk when I was building apps with Java, constantly consulting it to figure out how to work around restrictions in the language.
>
> Java was purpose built to abstract away from specific hardware platforms. It’s just a language, and nothing but classes and objects feel like first class citizens.
>
> I thought all OO programming languages were like Java or C++ that until I started coding in JavaScript. JavaScript’s support for annotation-free types makes generic function programming default behavior. Support for first class functions and closures means powerful higher-order functions are at our fingertips whenever we need them. The syntax for those features is simple, easy to both write and read.
>
> In other words, JavaScript can do a lot more with a lot less code, syntax noise, and cognitive overhead.
>
> I have built many successful mission-critical apps in Node used by millions of people, with rock-solid performance and uptime, with development finishing twice as fast or even orders of magnitude faster than the legacy apps they replaced. I’ve been involved in PHP, Ruby on Rails, and Java ports to Node that have all been very successful.
>
> When I code in Java or C++ now I feel like I’ve been stuck in a straight jacket.
>
> Detractors will say “without static types you’ll have lots of bugs”, to which I say “type correctness does not guarantee program correctness.”
>
> Whether or not you use static types, you should still use other bug prevention measures such as TDD (40% — 80% fewer bugs in production) code review (every hour in code review saves 33 hours in maintenance), and automated CI/CD.
>
> It turns out, when you’re doing all that, very few type errors slip out into production anyway. Read “The Shocking Secret About Static Types”. Turns out that evidence finds static types have a very small impact on over-all bug density.
>
> If you want reliable production apps, don’t use type system training wheels as your primary guarantee. Instead, invest in a good quality TDD + CI/CD process and code review.
>
> Static types are cool, but anybody who tells you that you need them to build large, enterprise-scale apps is feeding you biassed opinion, ignorant of the facts, ignoring many thousands of mission critical enterprise apps that have been a huge success partially thanks to Node.
>
> Node is such a solid choice these days it makes a great default workhorse for middle-tier web platform apps. And I haven’t even mentioned Universal JavaScript or Next.js yet. Google it. You’ll thank me.

[From Java to Node - the PayPal story - 20160601](http://blog.builtinnode.com/post/from-java-to-node---the-paypal-story)

> Node solved a problem for PayPal, it allowed them to do more, faster. Their existent model couldn't catch up with existent trends, starting with the introduction of full stack developers. The biggest problem at PayPal was the barrier between the server and the browser. Node was a great solution from the beginning because it allowed them to write applications in JavaScript both for the browser and the server.
>
> This app was built in Kraken.js on express, using the templating engine Dust and the Java software used an internal framework that was mostly based on Spring.  The first production tests showed great promise and also brought peace of mind, as the node app responded to requests about 45% faster than the Java app, a very visible difference for the user.

[PayPal Switches from Java to JavaScript](https://www.infoq.com/news/2013/11/paypal-java-javascript)

[How Netflix and Paypal did product transformation using Node.js? - 20180503](https://hackernoon.com/how-netflix-and-paypal-did-product-transformation-using-node-js-22074e13caad)

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

V8 compiles JavaScript directly into assembly level code.

- **Compiler** : dissects the JS code
- **Optimizer** : Optimizer called crankshaft create abstract syntax tree(AST) which further converts to SSA : static single assignment and gets optimized
- **Garbage Collector** : V8 divides the memory into 2 spaces Old spaces and new spaces both belongs to heap memory and keeps track of JS objects, any new objects is stored in new space. When new space is fully occupied V8’s garbage collector removes dead objects from new space and puts into old space. Gabage collector play vial role in keeping NodeJs lightweight.

### the event loop

[The Node.js Event Loop, Timers, and `process.nextTick()`](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

```text
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

> Cross-platform asynchronous I/O [http://libuv.org/](http://libuv.org/)

#### workers

[Don't Block the Event Loop (or the Worker Pool) - nodejs.org](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

[why is it so hard to add threads to nodejs? or web workers? - `github.com/nodejs`](https://github.com/nodejs/worker/issues/4)

[Understanding the NodeJS cluster module - www.acuriousanimal.com - 20170812](http://www.acuriousanimal.com/2017/08/12/understanding-the-nodejs-cluster-module.html)

[Using cluster module with HTTP servers -  www.acuriousanimal.com - 20170818](http://www.acuriousanimal.com/2017/08/18/using-cluster-module-with-http-servers.html)

> demo http cluster, how the master manage load balancing with the same port

[Clusteriser votre application Node.js - blog.xebia.fr - 20150113](https://blog.xebia.fr/2015/01/13/clusteriser-votre-application-node-js/)

[Node JS workers - any need for them? - stackoverflow.com - 2013](https://stackoverflow.com/questions/14981154/node-js-workers-any-need-for-them)

### https in node

[How to Use SSL/TLS with Node.js - www.sitepoint.com - 20180125](https://www.sitepoint.com/how-to-use-ssltls-with-node-js/)

## ECMAScript support

[kangax's compat-table applied only to Node.js](http://node.green/)

## fork

[Node.js forké à nouveau pour donner naissance à Ayo : www.developpez.net 20170825](https://www.developpez.net/forums/d1742355/webmasters-developpement-web/javascript-ajax-typescript-dart/javascript/javascript-cote-serveur/node-js-forke-nouveau-donner-naissance-ayo/#post9562073)

[`ayojs/ayo` : `github.com`](https://github.com/ayojs/ayo)

## install

### debian

[http://blog.nicolargo.com/2012/09/installer-facilement-nodejs-et-npm-sur-une-debian-stable.html](http://blog.nicolargo.com/2012/09/installer-facilement-nodejs-et-npm-sur-une-debian-stable.html)

via [package manager (from official repo)](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

via [backports (fait avec ça)](https://github.com/joyent/node/wiki/backports.debian.org)

binaires (node et npm) dans `/usr/bin/`

modules (bower grunt yo et les generators) dans `/usr/lib/node_modules/`

[Installer node en user](http://tnovelli.net/blog/blog.2011-08-27.node-npm-user-install.html)

[Installer des modules nodes globalement sans sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo-linux.md)

nodejs & npm install en user

#### dépendances pour compiler node

```bash
sudo apt-get install gcc
sudo apt-get install g++
sudo apt-get install make
```

#### configurer le chemin custom

```bash
./configure --prefix=~/dev/tools/nodejs
```

#### lancer le build

```bash
make
make install
```

#### node_modules symlink

Create `~/.node_modules` symlink. (This directory will be automatically searched when you load modules using require "module" in scripts. I'm not sure why Node doesn't search `~/.local/lib/node_modules` by default.)

```bash
ln -s dev/tools/nodejs/lib/node_modules .node_modules
```

#### PATH management

```bash
add this to ~/.profile
```

#### nodejs & npm path

```bash
export PATH=$HOME/dev/tools/nodejs/bin:$PATH
```

#### Test

```bash
which npm
```

should return the npm path defined above

From there, installing Yeoman & angular app generator

```bash
npm install -g yo
npm install -g generator-angular
```
