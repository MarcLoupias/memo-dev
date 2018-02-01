
# articles divers

## comparatif des frameworks / lib dispo pour Js

[rich-javascript-applications-the-seven-frameworks-throne-of-js-2012](http://blog.stevensanderson.com/2012/08/01/rich-javascript-applications-the-seven-frameworks-throne-of-js-2012/)

[framework_javascript.pdf](http://www.thecodingmachine.com/sites/default/files/framework_javascript.pdf)

[angular vs backbone & ember](http://www.quora.com/JavaScript-Frameworks/What-are-the-advantages-of-using-AngularJS-compared-to-BackboneJS-and-EmberJS)

[MVC vs MVVM vs MVP by IgorMinar](https://plus.google.com/+IgorMinar/posts/DRUAkZmXjNV)

## Angular 2.0 - contenu ?

[comparatif](http://www.infoq.com/fr/news/2013/07/angularjs-1-2-et-2-0)

## npm dependency house of cards

[One programmer almost broke the internet by deleting 11 lines of code](http://www.businessinsider.fr/us/npm-left-pad-controversy-explained-2016-3/)

[11 lignes de codes qui disparaissent et ce sont des centaines de projets open source qui sont mis à mal : korben.info](https://korben.info/11-lignes-de-codes-disparaissent-centaines-de-projets-open-source-mis-a-mal.html)

## evergreen browsers

[evergreen-browsers](http://tomdale.net/2013/05/evergreen-browsers/)

## guerre des navigateurs 

[The third browser war is over and it's a bloodshed - Daniel Glazman - WEB2DAY 2016](https://www.youtube.com/watch?v=ceMLuRBn--M)

> A été chairman au CSS working group, (sepcs HTML2, 4, CSS2 et 3). Connait bien le processus de standardisation de l'intérieur
> 
> A bossé chez Netscape
> 
> Au tout début (années 90), rien n'était standardisé (non cross device, non cross platform, non cross device)
> 
> **Contexte**
> 
> - HTML+, nov 1993
> - HTML4, dec 1997 (1er vrai standard)
> - CSS1, dec 1996 (idée de décoreller la présentation du contenu)
> - CSS2, may 1998
> - IE avait jscript et pas javascript
> 
> **1994**
> 
> W3C consortium industriel (fondé 19941001 par MIT), chaque membre représente les intérêts industriels de son employeur
> 
> **1995**
> 
> beaucoup de conflits
> 
> *processus de standardisation*
> 
> - prime au premier arrivant, au premier standardisant, et surtout au premier shipant (le 1er à déployer)
> - la pratique de Microsoft est de proposer un standard au moment où ils déploient pour forcer la direction
> 
> **1997**
> 
> la situation se calme quand la personne chargée de mener la politique de MS est changé de poste
> 
> **2003**
> 
> AOL qui possède Netscape licencie tout le monde.
> 
> IE reste tout seul, et du coup sans concurrence ne fait plus rien. (MS se concentre également sur Longhorn / Vista pendant 8 ans)
> 
> Rien de 2003 à 2008 sauf pour l'internationalisation.
> 
> Mozilla démarre gentiment et surtout tout petit (5 personnes)
> 
> Le W3C se focus sur le web sémantique et XHTML.
> 
> Apple annonce webkit (fork de KHTML)
> 
> Opéra a Presto
> 
> Google bosse sur webkit
> 
> **2010**
> 
> *processus de standardisation*
> 
> - la pratique des débuts (soumettre et déployer le même jour) est terminée
> - on soumet et on discute pour avoir une solution la plus avantageuse possible
> - on implémente en parallèle en espérant que ça dévie pas trop pour conserver le first mover advantage
> - le web standard project pousse pour l'adoption des standards qui devient un argument commercial
> - la standardisation devient un prérequis dans la loi fédérale pour les produits liés à l'état fédéral
> 
> **2013**
> 
> Blink est forké depuis Webkit par Google et Opera
> 
> **2016**
> 
> Chrome est un semi-monopole
> 
> Deux nouveaux entrants :
> - LG (groupe coréen) pour des montres avec un screen circulaires (veulent y adapter les CSS)
> - [Brave](https://www.brave.com/), un navigateur basé sur Blink écrit par [Brandon Eich](https://fr.wikipedia.org/wiki/Brendan_Eich) (inventeur de JavaScript)
> 
> *moteurs de rendus*
> 
> | - | modern | standards | cross platform | speed | 
> | - | ------ | --------- | -------------- | ----- |
> | Gecko | OK | OK | OK | OK |
> | WebKit | OK | OK | OK | OK |
> | Blink | OK | OK | OK | OK |
> | Edge | OK | OK | KO | OK |
> | Servo | OK | OK | OK | OK |
> 
> Servo écrit en Rust est le petit nouveau. MultiThreadé et layout parallèle. Ultra performant. Va probablement beaucoup changer la donne sur mobile.
> Meilleure vitesse mais surtout meilleure conso. (d'où la collaboration Mozilla / Samsung).
> 
> Opera a abandonné Presto et est passé sur Blink
> 
> Un process par tab, chaque process multithreadé + layout parallèle = gains x30 à x50.
> 
> *part de marché des navigateurs*
> 
> Tout device :
> 
> - Chrome 58.7%
> - Safari 12.7%
> - IE + Edge 10.3%
> - Firefox 10.0%
> - Opera 3.2%
> 
> La cause c'est les centaines de millions de portables low cost utilisés en Asie et en Afrique (tous Android)
> 
> Crée un énorme avantage pour le process de standardisation pour Google.
> 
> *processus de standardisation*
> 
> - Les coréens de LG jouent le jeu
> - MS est devenu l'élève modèle
> - Google se met à se comporter comme MS en 95. Ils shipent et démerdez-vous. Tant que c'est "good enough" pour eux c'est ok.
> - ex avec Web Components (Google en a besoin pour GMail qui est ultra complexe) qui est fait pour eux uniquement. 
> Ils se foutent de la standardisation. Fait très vite, très mal.
> 
> *web OS*
> 
> ne croit pas à leur réussite :
> - le principe de sandbox est vital pour des raisons de sécurité
> - le lien direct des browsers aux drivers sans réelle couche OS marche très mal

## evol web impact desktop

[gif dematerialisation](https://buffer-pictures.s3.amazonaws.com/ecf704408c7078fe1b822fee1c7b99f6.9801e31a3103c06fb006e4a8faf3263a.gif)

## site listes articles

[putain de code](http://putaindecode.io/fr/articles/)

## nb de développeurs

[4,7 millions de développeurs en Europe, Londres et Paris en tête : blog.jobtic.fr](http://blog.jobtic.fr/47-millions-de-developpeurs-europe-londres-paris-tete/)

[Combien y a-t-il de professionnels dans la population mondiale de développeurs ? : developpez.com](https://www.developpez.com/actu/140439/Combien-y-a-t-il-de-professionnels-dans-la-population-mondiale-de-developpeurs-Et-quelles-sont-les-caracteristiques-des-developpeurs/)

> En 2014, IDC estimait qu’il y avait environ 18,5 millions de développeurs dans le monde et qu’environ 11 millions d’entre eux étaient des professionnels et 7,5 millions des amateurs.
>
> La firme Evans Data, pour sa part, révélait dans un rapport de 2016 sur l’étude de la population mondiale des développeurs et sa répartition géographique qu’il y avait 21 millions de développeurs sur la planète.
>
> 94 % des développeurs étaient des hommes et seulement 4 % des femmes ;
> 
> 34 % des développeurs étaient localisés en Asie, 30 % en Europe, 25 % en Amérique du Nord, 5 % en Amérique du Sud, 4 % en Afrique et 2 % en Océanie.
> 
> la majorité des développeurs étaient des professionnels (77 %), mais qu’une partie non négligeable d’entre eux était formée d’amateurs (23 %).
>
> (Mobile, IoT, Desktop et Cloud) 7 % travaillent dans les 4 domaines, 23 % dans 3 domaines, 36 % dans 2 domaines et 34 % dans 1 domaine
> 
> 17 % de ces développeurs avaient moins d’un an d’expérience, 43 % d’entre eux avaient de 1 à 6 ans d’expérience et 47 % d’entre eux avaient plus de 6 années d’expérience.
> 

[Évaluation du nombre annuel de jeunes diplômés en STIC - munci.org - 2012](https://munci.org/La-France-forme-suffisamment-d-etudiants-aux-metiers-de-l-informatique)

> - AU MINIMUM 4000 bac+2 + 2000 bac+3 + 4800 masters + 7400 ingénieurs, SOIT AU MINIMUM 18 000 JEUNES DIPLÔMES en STIC
> - selon le Syntec Numérique, le système éducatif produit autour de "16 000 ingénieurs informaticiens par an"
> - selon l’association Pasc@line : "on compte 15.000 ingénieurs formés par an en France dans le secteur du numérique"
> Commentaire : il semble que le Syntec Numérique et l’association Pasc@line voient des ingénieurs de partout… en réalité, les chiffres qu’ils annoncent ci-dessus ne correspondent pas uniquement aux "ingénieurs" mais à tous les diplômés en informatique…

[Les développeurs nés dans les années 70 auraient commencé à écrire leurs premières lignes de code plus tôt](https://www.developpez.net/forums/d1806349/club-professionnels-informatique/actualites/developpeurs-nes-annees-70-auraient-commence-ecrire-leurs-premieres-lignes-code-plus-tot/#post9951654)

## compétences dev front, dev back, devops

[A roadmap to becoming a web developer in 2017](https://medium.freecodecamp.com/a-roadmap-to-becoming-a-web-developer-in-2017-b6ac3dddd0cf)

[Les développeurs en France en 2017 : profil, salaire, technologies, langages, emploi ...](http://www.blogdumoderateur.com/etude-stackoverflow-2017/)

[Parole d’expert : Le rôle de Tech lead selon Damien Beaufils : blog.openclassrooms.com :20171121](http://blog.openclassrooms.com/blog/2017/11/21/parole-dexpert-role-de-tech-lead-selon-damien-beaufils/)

## internaliser les devs ou externaliser

[Faut-il internaliser ou externaliser ses développements web ?](https://blog.capsens.eu/faut-il-internaliser-ou-externaliser-ses-d%C3%A9veloppements-web-d3d17c6b3246) (20170208) TLDR : Il vaut mieux internaliser. Contre-exemple : Slack, Skype

[Vers une ré-internalisation de l'informatique ? ](http://cestpasmonidee.blogspot.fr/2016/06/vers-une-re-internalisation-de.html) (20160612)
TLDR : Les enjeux ont changés, différenciation concurrentielle et agilité (réduction TTM) permettent d'avoir un edge sur la concurrence, ces enjeux nécessitent une internalisation des devs.

## contrats agile

[contrat-agile.org](http://www.contrat-agile.org/index.html)

[exemple échec projet soidisant agile au forfait](https://www.linkedin.com/pulse/saffranchir-du-cycle-en-v-agile-canada-dry-ou-comment-maxime-blanc/?trackingId=eyA9bFyVj%2BGOj5CFrusMUw%3D%3D)

## management

[Why The Command-and-Control Mindset Is Killing Your Company : corporate-rebels.com](http://corporate-rebels.com/mindset/) March 26, 2017

[L'Étrange Défaite : Marc Bloch : 1940](https://fr.wikipedia.org/wiki/L%27%C3%89trange_D%C3%A9faite)

> L'Étrange Défaite. Témoignage écrit en 1940 est un témoignage sur la bataille de France écrit en 1940 par Marc Bloch, officier et historien, qui a participé aux deux guerres mondiales. Dans ce livre, il ne raconte pas ses souvenirs personnels, mais il s'efforce, en témoin objectif, de comprendre les raisons de la défaite française lors de la bataille de France pendant la Seconde Guerre mondiale. Rédigé sur le moment, L'Étrange Défaite a marqué les esprits dès sa parution par la pertinence des constats qui y sont faits.

> L'analyse et les critiques formulées dans ce livre sont parfaitement appliquables dans nombre d'entreprises :
> - organisation ultra pyramidale (nécessité de validation de validation de validation des solutions)
> - rétention d'information (entre personnels ou services)
> - guerre de chefs (effective pour de mauvaises raisons ou bien crainte de faire la guerre quand elle est nécessaire)
> - ignorance du terrain (ignorance des réalités, prises de décisions sans rapport avec les capacités réelles du terrain, etc ...)
> - ...

## hommes politiques

[JM JANCOVICI - La connaissance des politiques est nulle en matière énergétique](https://www.youtube.com/watch?v=mm7jghN51gU)

Extensible à tout sujet technique.

## SS2I

[Des SSII aux SS3I ? Sociétés au service des individus de l’ingénierie informatique : Devoxx2014](https://www.youtube.com/watch?v=y6h0jSwkLZA)

> 580K travailleurs dans le numérique (dont 3% d'indépendant (22K))
>
> cout réel d'un salarié = salaire brut * 1,8 à 2,2
>
> exemple : 
> ptit jeune à 36KE cout en réalité 65KE
> nb jours travaillés en syntec : 217j/an
> seuil de rentabilité : 65K / 217 = 300e de TJM environ
>
>

[Etat des lieux métier de l'info en France 2016 - Web2day - Daniel Glazman](https://www.youtube.com/watch?v=GU7DbfmBjxE)

> syntec convention collective inadaptée car branche tech capée trop vite, il faut passer manager pour évoluer. 
> Dans les autres pays on a 2 branches (manager et tech), les managers évoluent vers CEO les techs vers CTO, c'est logique

> 80% des devs sont en SS2I, or les SS2I ne développent rien, elles ne sont donc pas des boites de High Tech
> les boites comme "le bon coin" ou "Tinder" ne le sont pas non plus
 
> absence d'écosystème High Tech fait que les talents s'exilent (commutation de paquets et carte à puce sont des exemples
> d'innovations par des français réalisées à l'étranger)

> axiome "nul n'est irremplaçable" est faux. Pour avoir de l'innovation il faut les meilleurs donc des gens irremplaçables.

> le cout pour démarrer une boite est très faible, un PC, une chaise, un bureau et un cerveau

> 50K étudiants dans le logiciel par an (1/3 de Bengalore en Inde)
> On est tout petit, on est excellent dans l'imagerie depuis des décennies. Tous les diplômes s'expatrient par manque de débouchés.
> Au point que certaines boites aux USA dans l'imagerie sont staffées à 40% de frenchies

> ... passage sur ce que l'etat pourrait faire pour aider à sortir des boites

> explique qu'il a créé le 2ème logiciel de messagerie à la fin des années 80

## stacks utilisées

[Étude sur l’évolution des technologies backend par année de création des entreprises : hired.com](https://hired.com/blog/france/technologies-backend-les-plus-en-vogue/)

> 2017
> - .net et PHP tombent en désuétude
> - nodejs et ruby sont les plus dynamiques parmi les nouvelles entreprises
> - java et python sont stables

[Étude sur le salaire moyen des développeurs Front-end par stack et par année d’expérience : hired.com](https://hired.com/blog/france/salaire-des-developpeurs-front-end/)

> 2017
> 40% Angular, 40% React, 20% backbone

[Étude sur le nombre moyen de demandes d’entretien reçues par type de profil et par marché : hired.com](https://hired.com/blog/france/entretiens/)

> 2017
> L’échantillon concerne uniquement les postes de Software Engineer :
> - Développeur Fullstack 
> - Développeur Frontend
> - Développeur Backend
> - Développeur Mobile
> - Ingénieur DevOps

## Apple Store

[Le jour où Simon a perdu 40 millions : www.frenchweb.fr](http://www.frenchweb.fr/le-jour-ou-simon-a-perdu-40-millions-2/298269)

## femmes dans l'info (sciences en général)

[post sur dev.com donnant des stats intéressantes](https://www.developpez.net/forums/d1737512-2/club-professionnels-informatique/actualites/blizzard-envisage-recruter-plus-femmes-issues-groupes-minoritaires-sous-representes/#post9532917)

- les femmes dans le secteur de la recherche est de 52% aux Philippines
- D'autres pays sont proches de la parité, comme la Malaisie et le Vietnam, alors que l'Indonésie et Singapour se situent encore autour de 30%.
- En Malaisie, l'informatique est un métier de filles, et on trouve 70% de dames dans les facultés de programmation([cf lien](https://ticetsociete.revues.org/955)).
- Selon le rapport de l’UNESCO, "dans plusieurs pays arabes, les femmes représentent plus de quatre chercheurs sur dix travaillant dans le domaine des sciences exactes et naturelles (Koweït, Égypte et Irak) et des sciences médicales et de la santé (Koweït, Égypte, Iraq, Jordanie et Maroc)".
- "Les données récentes disponibles pour dix pays (arabes) révèlent que les femmes représentent entre 34% et 56,8% des diplômés du supérieur dans les sciences, l'ingénierie et l'agriculture, un ratio relativement élevé"
- "Environ 37 % des chercheurs dans le monde arabe sont des femmes, soit plus que dans l’Union européenne (33 %)", affirme encore l’étude.

## meme

[quand-on-avance-la-deadline-dun-projet](http://lesjoiesducode.fr/post/165074053165/quand-on-avance-la-deadline-dun-projet)

## startups

[Comment nous avons lancé notre startup sans développeur : business.lesechos.fr 20170917](https://business.lesechos.fr/entrepreneurs/communaute/start-9464-comment-nous-avons-lance-notre-startup-sans-developpeur-313198.php#xtor=CS1-36)

## teaching

[Separating Programming Sheep from Non-Programming Goats : 20060714](https://blog.codinghorror.com/separating-programming-sheep-from-non-programming-goats/)

[Which Programming Language Should I Learn First?](http://carlcheo.com/startcoding#resources)

[which-programming-language-should-i-learn-first-infographic.png](http://carlcheo.com/wp-content/uploads/2014/12/which-programming-language-should-i-learn-first-infographic.png)

[The most essential list of resources for Front-End beginners : 2017](https://github.com/thedaviddias/Resources-Front-End-Beginner)

[nodeschool.io](https://nodeschool.io/fr-fr/)

[Programme d’informatique dès l’école primaire ? : framablog.org : 20140115](https://framablog.org/2014/01/15/informatique-ecole-primaire/?print=print)

> **Proposition d’orientations générales pour un programme d’informatique à l’école primaire**
> - Des logiciels aux concepts
> - Des langages simples
> - Des langages moins simples
> - La notion d’information
> - La notion d’algorithme
> - La notion de machine
> - Un enseignement adapté à l’élève et à son rapport au monde
> 
> Auteurs : Serge Abiteboul, Jean-Pierre Archambault, Gérard Berry, Colin de la Higuera, Gilles Dowek, Maurice Nivat
>
> Ce document a été envoyé au Conseil Supérieur des Programmes (CSP), le samedi 7 décembre 2013

## open source company contrib

[Who contributed the most to open source in 2017? : medium.freecodecamp.org](https://medium.freecodecamp.org/the-top-contributors-to-github-2017-be98ab854e87)

## IA

[vocabulaire : www.frenchweb.fr](https://www.frenchweb.fr/vocabulaire-de-lintelligence-artificielle-12-termes-a-connaitre/307870)

## Economie

**Le graphique de l'éléphant (Branko Milanovic)**

> Les revenus augmentent partout sauf pour les classes populaires et moyennes des pays industrialisés où il stagne voire baisse.On constate également un accroissement massif des inégalités partout.

[Découvrez le "graphique éléphant" qui résume TOUT : www.nouvelobs.com - 20160711](https://www.nouvelobs.com/economie/20160710.OBS4373/decouvrez-le-graphique-elephant-qui-resume-tout.html)

[Graphique de l'Eléphant, le retour : www.atlantico.fr - 20160715](http://www.atlantico.fr/decryptage/graphique-elephant-retour-quand-matraquage-classes-moyennes-occidentales-concurrence-chine-saute-aux-yeux-jean-marc-siroen-2764315.html)

**cout des bugs**

A l'échelle mondiale chiffré à 100 milliards de dollars (chiffre 2008 ?) par le département du commerce US (cf [Gérard Berry : Pourquoi et comment le monde devient numérique : www.franceculture.fr redif du cours de 2008](https://www.franceculture.fr/emissions/les-cours-du-college-de-france/gerard-berry-pourquoi-et-comment-le-monde-devient-numerique))

## FAI

[Forfait Fist First - Made in Groland](https://www.youtube.com/watch?v=y4fCg0tfVfU)

## Médias

[Comment les médias ont raté le virage du numérique : Nicolas Kayser-Bril : 20180125](https://m.usbeketrica.com/article/comment-medias-rate-virage-numerique)

## Transhumanisme

[Transhumanisme : le Grolandais augmenté, c’est pour 2030 - Groland - Le Zapoï du 16/09](https://www.youtube.com/watch?v=yTzIE3iXYNQ)
