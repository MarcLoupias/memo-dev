# divers - articles

## comparatif des frameworks / lib dispo pour Js

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
> - IE avait jscript et pas JavaScript
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
>
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
>
> - le principe de sandbox est vital pour des raisons de sécurité
> - le lien direct des browsers aux drivers sans réelle couche OS marche très mal

## evol web impact desktop

[gif dematerialisation](https://buffer-pictures.s3.amazonaws.com/ecf704408c7078fe1b822fee1c7b99f6.9801e31a3103c06fb006e4a8faf3263a.gif)

## site listes articles

[putain de code](http://putaindecode.io/fr/articles/)

## metier developpeur

[Entre industrialisation et artisanat, le métier de développeur. - Arnaud Lemaire - Agile Pays Basque 2018](https://www.youtube.com/watch?v=bQfumbBN6YQ) [slides](https://speakerdeck.com/lilobase/entre-industrialisation-et-artisanat-le-metier-de-developpeur-agilepaysbasque-2018)

> Définition ingénierie :
>
> "The engineering method is the use of heuristics to cause the best change in a poorly understood or uncertain situation within the available resources."
>
> Billy Vaughn Koen in [Definition of the Engineering Method](https://files.eric.ed.gov/fulltext/ED276572.pdf)
>
> Normalement le terrain (les practitioners) drivent les académiques qui prennent compte de leurs retours pour expliquer comment fonctionner.
>
> En dev logiciel depuis 40 ans on fait l'inverse, l'académique dit il faut faire comme ça, et le terrain dit que ça ne fonctionne pas.
>
> On passe du domaine du problème au domaine de solution via l'ingénierie.
>
> Pour transposer au dev il remplace le terme ingénierie par développement.
>
> "Essentially, all models are wrong, but some are useful."
>
> Box, George E.P.; Norman R. Draper in Empirical Model-Building and Response (1987)
>
> Pourquoi ? Parce que tous les modèles sont des simplifications de la réalité.
>
> Problème dans en mode client/fournisseur c'est que le client adore venir avec ses propres modèles obsolètes et inadaptés.
>
> Le problem space a une vitesse de changement beaucoup plus lente que le solution space qui a lui une vitesse de changement extrême.
>
> Le problème c'est que les gens cherchent à modéliser le solution space au lieu de modéliser le solution space.
>
> "Models are useless, modeling is everything"
>
> En tant que dev on doit discuter du problem space avec le business et pas du solution space entre nous.
>
> Normalement le client n'a pas à imposer une solution technique, c'est pas son métier c'est celui du dev.
>
> Il faut aller chercher la spécifité métier sur chaque projet. C'est le DDD (Domain Driver Dev).
>
> Ne s'étudie pas. Ne pas se restreindre à son espace de confort (qui est dans la solution zone).
>
> En logiciel on n'a pas d'humains dans la production. Qu'est-ce qu'il veut dire par là :
>
> - En ingénierie la finalité est de produire une documentation expliquant le design.
> - Quand le design est ok, il est donné à l'équipe de production (aux skills différentes)
> - L'équipe de prod construit le produit
>
> Image des ingénieurs qui pondent des specs filées aux grouillots qui produisent.
>
> Citation de What is Software Design ? Jack W. Reeves
>
> Qui dit que c'est le code qui est la spec. Le build est réalisé par le compilateur.
>
> Living Documentation (reconstruire le design à partir du code source) (ex: [asciidoctor](https://asciidoctor.org/))
>
> On prend le code source et on en tire une modélisation et surtout pas l'inverse.
>
> "Any tool that lets a non-programmer buld executable programs will eventually become sufficiently complicated that the user is effectively a programmer"
>
> The Verraes Hypothesis.
>
> C'est l'example de rational rose et UML où on pouvait soi-disant générer du soft utilisable sur la base de diagrammes UML.
>
> Ne fonctionne pas.
>
> Engineering is about feedback loop.
>
> De l'empirical au defined. Empirical on fait le prototype en premier et defined on fait les specs upfront.
>
> La différence entre les deux c'est le cout du prototypage qui est très faible en empirical et très cher en upfront.
>
> En logiciel notre cout est très faible (c'est le compilo qui produit) mais on fonctionne en specs upfront.
>
> Ce qui coute très cher c'est la longueur de la boucle de feedback, sauf lorsque le cout du prototype est énorme (avionnique)
>
> Le seul moyen de savoir que ça marche c'est de tester avant.
>
> Pratiques de l'extreme programming pour avoir plein de feedback loops.
>
> Quelque chose à de la valeur seulement lorsqu'il a été livré.
>
> Focus sur CI voire Continuous Delivery.
>
> Pas possible faire du CD sans tests.
>
> Constraint theory, dans un système séquentiel si une étape est un goulot d'étranglement il ralentit l'ensemble.
>
> "Adding human resources to a late software project makes it later", Fred Brooks (The Mythical Man-Month 1975)
>
> **"pull based approach" C'est à l'étape en contrainte de tirer le travail plutôt que ce soit les étapes précédentes essaient de bourrer l'étape en contrainte.**
>
> **"The quality of today is the productivity of tomorrow"**
>
> Jean-Baptiste Dusseaut @BodySplash
>
> La surqualité n'existe pas, soit on en a soit on en a pas.
>
> Knows your fundamentals not your tools.
>
> Engineering is about designing solution.
>
> Go beyond Clean code.
>
> Our job is to create application, not writing beautiful code.

## nb de développeurs

[4,7 millions de développeurs en Europe, Londres et Paris en tête : blog.jobtic.fr](http://blog.jobtic.fr/47-millions-de-developpeurs-europe-londres-paris-tete/)

[La moitié du temps des développeurs perdue sur du mauvais code - www.zdnet.fr - 20180914](https://www.zdnet.fr/amp/actualites/la-moitie-du-temps-des-developpeurs-perdue-sur-du-mauvais-code-39873625.htm)

> La société estime à 18 millions le nombre de développeurs dans le monde
> chacun contribuant au PIB à hauteur de 51.000 dollars chaque année, pour un total de 918 milliards de dollars au niveau mondial

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

[CDEFI (Conférence des Directeurs des Ecoles Françaises d'Ingénieurs) - Chiffres clés - Les écoles françaises d'ingénieurs](http://www.cdefi.fr/fr/la-cdefi/chiffres-cles)

> Avec plus  de  19  000  créations  nettes  d’emplois  en  2016,  derniers  chiffres  officiels  connus,  le  secteur  logiciels  et  services  a  été  fortement  créateur  d’emplois   pour   la   septième   année   consécutive   et   les   chiffres   des   recrutements  réalisés  en  2017  seront  dans  la  droite  ligne  de  ces  excellents  résultats

[Rapport d'activité 2017 SYNTEC numérique, page 5](https://syntec-numerique.fr/sites/default/files/Documents/Rapport_dactivites_2017_Syntec_Numerique_0.pdf)

[Les développeurs nés dans les années 70 auraient commencé à écrire leurs premières lignes de code plus tôt](https://www.developpez.net/forums/d1806349/club-professionnels-informatique/actualites/developpeurs-nes-annees-70-auraient-commence-ecrire-leurs-premieres-lignes-code-plus-tot/#post9951654)

## compétences dev front, dev back, devops

[A roadmap to becoming a web developer in 2017](https://medium.freecodecamp.com/a-roadmap-to-becoming-a-web-developer-in-2017-b6ac3dddd0cf)

[Les développeurs en France en 2017 : profil, salaire, technologies, langages, emploi ...](http://www.blogdumoderateur.com/etude-stackoverflow-2017/)

[Parole d’expert : Le rôle de Tech lead selon Damien Beaufils : blog.openclassrooms.com :20171121](http://blog.openclassrooms.com/blog/2017/11/21/parole-dexpert-role-de-tech-lead-selon-damien-beaufils/)

## internaliser les devs ou externaliser

[Faut-il internaliser ou externaliser ses développements web ?](https://blog.capsens.eu/faut-il-internaliser-ou-externaliser-ses-d%C3%A9veloppements-web-d3d17c6b3246) (20170208) TLDR : Il vaut mieux internaliser. Contre-exemple : Slack, Skype

[Vers une ré-internalisation de l'informatique ?](http://cestpasmonidee.blogspot.fr/2016/06/vers-une-re-internalisation-de.html) (20160612)
TLDR : Les enjeux ont changés, différenciation concurrentielle et agilité (réduction TTM) permettent d'avoir un edge sur la concurrence, ces enjeux nécessitent une internalisation des devs.

[SAIP, l’appli d’alerte attentat qui n’a jamais fonctionné : www.franceculture.fr : 20171222](https://www.franceculture.fr/numerique/saip-lappli-dalerte-attentat-qui-na-jamais-fonctionne)

> Daniel Glazman : l'état se repose trop sur des partenaires extérieurs, il doit internaliser les compétences, les fidéliser, prendre des contractuels pour se redoter d'une compétence très sérieuse.

## contrats agile

[contrat-agile.org](http://www.contrat-agile.org/index.html)

[exemple échec projet soidisant agile au forfait](https://www.linkedin.com/pulse/saffranchir-du-cycle-en-v-agile-canada-dry-ou-comment-maxime-blanc/?trackingId=eyA9bFyVj%2BGOj5CFrusMUw%3D%3D)

## propriété intellectuelle

En tant que salarié, tout ce qui est réalisé dans le cadre de ton travail, pour l'employeur et avec les moyens de l'employeur appartient a l'entreprise. Aucune clause n'est nécessaire pour le preciser.

Il y a une clause spécifique aux logiciels dans le code de la propriété intellectuelle (L113-9) et [une jurisprudence associée](http://www.itlaw.fr/index.php/articles/153-developpeurs-de-logiciels-et-droit-dauteur).

Donc bien que [L111-1](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006278868&cidTexte=LEGITEXT000006069414) indique que :

> L'auteur d'une œuvre de l'esprit jouit sur cette œuvre, du seul fait de sa création, d'un droit de propriété incorporelle exclusif et opposable à tous.

L'article [L113-9](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006278890&cidTexte=LEGITEXT000006069414) fait une exception pour le logiciel :

> Sauf dispositions statutaires ou stipulations contraires, les droits patrimoniaux sur les logiciels et leur documentation créés par un ou plusieurs employés dans l'exercice de leurs fonctions ou d'après les instructions de leur employeur sont dévolus à l'employeur qui est seul habilité à les exercer.
>
> Toute contestation sur l'application du présent article est soumise au tribunal de grande instance du siège social de l'employeur.
>
> Les dispositions du premier alinéa du présent article sont également applicables aux agents de l'Etat, des collectivités publiques et des établissements publics à caractère administratif.

## lois données

[RGPD : comment la CNIL vous accompagne dans cette période transitoire ? - www.cnil.fr - 20180219](https://www.cnil.fr/fr/rgpd-comment-la-cnil-vous-accompagne-dans-cette-periode-transitoire)

[RGPD : se préparer en 6 étapes](https://www.cnil.fr/fr/principes-cles/rgpd-se-preparer-en-6-etapes)

> - Etape 1 Désigner un pilote
> - Etape 2 Cartographier
> - Etape 3 Prioriser
> - Etape 4 Gérer les risques
> - Etape 5 Organiser
> - Etape 6 Documenter

## intrusion

[Affaire Bluetouff - thinkerview 20180627](https://youtu.be/d4MiF4AWtsw?t=1537)

> télécharger des documents depuis un site non-sécurisé mais qui devrait l'être, jurisprudence

### articles

[RGPD : la version européenne de USA Today pèse 500 Ko contre 5,2 Mo pour la version originale, D'après les mesures d'un webmaster - www.developpez.com - 20180523](https://www.developpez.com/actu/206032/RGPD-la-version-europeenne-de-USA-Today-pese-500-Ko-contre-5-2-Mo-pour-la-version-originale-d-apres-les-mesures-d-un-webmaster/)

> « En raison du #GDPR, USA Today a décidé de lancer une version séparée de son site web pour les utilisateurs de l'UE, qui a supprimé tous les scripts de pistage et les publicités. Le site semblait très rapide, j'ai donc fait une vérification de performance. Qu’est-ce qu’internet peut être rapide sans toute la camelote ! 5.2 Mo → 500 Ko »

[RGPD : les achats programmatiques de publicité en Europe chutent de 25 à 40 % dans certains cas  - https://www.developpez.net - 20180526](https://www.developpez.net/forums/d1857121/webmasters-developpement-web/general-conception-web/webmarketing/rgpd-achats-programmatiques-publicite-europe-chutent-25-40-certains-cas/#post10262653)

## management

[L'expert en réunion (Ou comment se passe une réunion avec Zaebos)](https://www.youtube.com/watch?v=R-jpehaofiw)

[Why The Command-and-Control Mindset Is Killing Your Company : corporate-rebels.com](http://corporate-rebels.com/mindset/) March 26, 2017

[L'Étrange Défaite : Marc Bloch : 1940](https://fr.wikipedia.org/wiki/L%27%C3%89trange_D%C3%A9faite)

> L'Étrange Défaite. Témoignage écrit en 1940 est un témoignage sur la bataille de France écrit en 1940 par Marc Bloch, officier et historien, qui a participé aux deux guerres mondiales. Dans ce livre, il ne raconte pas ses souvenirs personnels, mais il s'efforce, en témoin objectif, de comprendre les raisons de la défaite française lors de la bataille de France pendant la Seconde Guerre mondiale. Rédigé sur le moment, L'Étrange Défaite a marqué les esprits dès sa parution par la pertinence des constats qui y sont faits.
>
> L'analyse et les critiques formulées dans ce livre sont parfaitement appliquables dans nombre d'entreprises :
>
> - organisation ultra pyramidale (nécessité de validation de validation de validation des solutions)
> - rétention d'information (entre personnels ou services)
> - guerre de chefs (effective pour de mauvaises raisons ou bien crainte de faire la guerre quand elle est nécessaire)
> - ignorance du terrain (ignorance des réalités, prises de décisions sans rapport avec les capacités réelles du terrain, etc ...)
> - ...

[Why can't big companies figure out that recruiting 3 really great senior developers often leads to better results than 10 average junior developers? - www.quora.com - 201702xx](https://www.quora.com/Why-cant-big-companies-figure-out-that-recruiting-3-really-great-senior-developers-often-leads-to-better-results-than-10-average-junior-developers)

### recruitment

[What is a good software engineer? And why core skills matters even more than technical ones. - medium.com - Arnaud Lemaire - 20210526](https://medium.com/sundaytech/what-is-a-good-software-engineer-252b3b874bc6)

- core skills instead of soft skills
- degrees doesnt matter
- avoid expert beginner
- do i want to work with this person
- is he/she aware when being in its unknow/unknowns zone
- can he leveirage his experience
- no asshole policy

[How Developers Stop Learning: Rise of the Expert Beginner - daedtech.com - Erik Dietrich - 2012](https://daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner/)

[Effet Dunning-Kruger - fr.wikipedia.org](https://fr.wikipedia.org/wiki/Effet_Dunning-Kruger)

Etapes :

- montagnes de la stupidité (sur évalulation de ses propres compétences)
- vallée de l'humilité
- plateau de la consolidation (auto-évaluation réaliste de ses propres compétences)

### productivity

[Be Productive, Not Busy. - brainprick.com - 20150615](http://brainprick.com/be-productive-not-busy/)

![less-work](http://brainprick.com/wp-content/uploads/2015/06/less-work.jpeg)

[Calculating Loss of Productivity Due to Overtime Using Published Charts — Fact or Fiction - 2001](https://fr.scribd.com/document/75599238/Calculating-Loss-of-Productivity-Due-to-OT-Using-Charts-Nov-2001)

### Ron Westrum - organizational culture models

> [Ron Westrum](https://en.wikipedia.org/wiki/Ron_Westrum)
>
> [What is your organizational culture: Pathological, Bureaucratic or Generative? - langerman.co.za](https://langerman.co.za/cultural-types/)
>
> Based on [Westrum, R., 2004. A typology of organisational cultures. Quality of Safe Health Care, Volume 13, pp. 22-27](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1765804/pdf/v013p0ii22.pdf).
>
> Define organizational cultures as "... *an organizational* culture is the organization’s pattern of response to the problems and opportunities it encounters".
>
> Each culture is driven by multiple factors including the priorities of the organizations leaders, which causes a response from the organizations workforce.
>
> Note that the culture created within an organization dictates how that organization will respond to any problems it may encounter.
>
> Negatively impacting cultures, such as pathological or bureaucratic cultures, hinder the flow and processing of information across the various areas of the organization.
>
> 3 models :
>
> - Pathological: negative, and power-oriented.
>   - cooperation low
>   - messengers shot
>   - responsibilities avoided
>   - bridging discouraged
>   - failure leads to scapegoating (bouc-émissaire)
>   - novelty crushed
> - Bureaucratic: negative, and rule-oriented.
>   - cooperation modest
>   - messengers neglected
>   - responsibilities narrow (étroites)
>   - bridging tolerated
>   - failure leads to justice
>   - novelty leads to problems
> - Generative: positive, and performance-oriented.
>   - cooperation high
>   - messengers trained
>   - shared risks
>   - bridging encouraged
>   - failure leads to inquiry
>   - novelty enacted
>
> Factors that can facilitate this change in culture have been identified and are :
>
> - Splitting work into smaller batches to be processed and completed by teams.
> - Ensuring that these teams have a good understanding of the flow of the information/work from the organisation to the customers and allowing them visibility to this flow.
> - Organisations must actively and frequently request customer feedback with regards to their products and product design.
>
> Organizational culture is imperative for the success of an organization and the effective and efficient functioning of the teams within it. This shift in cultural types will improve the organization culture and, in the long-term, improve the functionality of the organization by optimizing information processing and efficiency.

### aristotle project (google)

[Teams. The Most Successful Ones Shared These 5 Traits - www.inc.com/michael-schneider - 20170719](https://www.inc.com/michael-schneider/google-thought-they-knew-how-to-create-the-perfect.html)

> Google made the ancient Greek philosopher Aristotle proud by proving, **"The whole can be greater than the sum of its parts."**

[Google Project Aristotle - 5 Keys to Team Success - searchitoperations.techtarget.com/blog - 20160914](https://searchitoperations.techtarget.com/blog/Modern-Operations-Apps-Stacks/Google-Project-Aristotle-5-Keys-to-Team-Success)

> - Data was gathered and assessed from 180 Google teams.
> - Two-year long effort started in 2012.
> - No patterns detected to correlate why some succeeded and others didn’t.
> - Teams with similar makeup or even some of the same members demonstrated varying results.
> - Metrics like personal friendships, strong management, team structure, personal interests, gender, longevity provided no clear insight.
> - Group norms were found to be key to teams’ success. Group norms are unwritten and often unspoken rules guiding the behavior of the teams.
> - Final determination was that a group of superior individuals was less important than the collective ability of the team.
>
> **Five Keys to Success**
>
> - Psychological safety
> - Dependability : Dependability means that they can count on each other to do their job.
> - Structure and clarity : Clear direction and goals is vital.
> - Meaning of work : the job they were performing was also a key element in the success of the team
> - Impact of work : Team members want to feel that they are not simply wasting their time when doing things.

[Scrum Life #33 - Quand personne ne parle en Rétro - La sûreté psychologique - JP Lambert](https://www.youtube.com/watch?v=tgkauosoMvE&feature=youtu.be)

### The Wetware Crisis: the Thermocline of Truth

[What is wetware ? - searchdatacenter.techtarget.com](https://searchdatacenter.techtarget.com/definition/Wetware)

> Wetware is slang (fr : argot) used describe the human element of an information technology (IT) architecture.

[The Wetware Crisis: the Thermocline of Truth - brucefwebster.com - Bruce F. Webster - 20080415](http://brucefwebster.com/2008/04/15/the-wetware-crisis-the-themocline-of-truth/)

> A thermocline is a distinct temperature barrier between a surface layer of warmer water and the colder, deeper water underneath.
>
> A thermocline can prevent dissolved oxygen from getting to the lower layer and vital nutrients from getting to the upper layer.
>
> In many large or even medium-sized IT projects, there exists a thermocline of truth, a line drawn across the organizational chart that represents a barrier to accurate information regarding the project’s progress.
>
> Several major (and mutually reinforcing) factors tend to create this thermocline :
>
> - the IT software development profession largely lacks automated, objective and repeatable metrics that can measure progress and predict project completion
> - IT engineers by nature tend to be optimists, as reflected in the common acronym SMOP: "simple matter of programming."
> - managers (including IT managers) like to look good and usually don’t like to give bad news, because their continued promotion depends upon things going well under their management
> - upper management tends to reward good news and punish bad news, regardless of the actual truth content
>
> As the project delivery deadline draws near, the thermocline of truth starts moving up the levels of management because it is becoming harder and harder to deny or hide just where the project stands.
>
> Sometimes, even then management may not be willing to hear or acknowledge where things really are but instead insist on a "quick fix" to get things done.
>

## hommes politiques

[JM JANCOVICI - La connaissance des politiques est nulle en matière énergétique](https://www.youtube.com/watch?v=mm7jghN51gU)

Extensible à tout sujet technique.

### projets publics

[Logiciel unique à vocation interarmées de la solde - fr.wikipedia.org](https://fr.wikipedia.org/wiki/Logiciel_unique_%C3%A0_vocation_interarm%C3%A9es_de_la_solde)

> Le coût direct du projet (sous-traitance, ressources humaines et fonctionnement des structures de conduite de projet) est estimé à 80 millions d'euros par la Cour des comptes.
>
> Le lancement du logiciel a été émaillé de nombreux problèmes : moins-perçus, trop perçus, militaires non payés automatiquement. La Cour des comptes estime à 465 millions d'euros les erreurs de calculs de Louvois pour la seule année 2012.
>
> Le Figaro rapporte que la note actuelle est de 470 millions d’euros, entre le prix d’achat et le coût des dysfonctionnements de Louvois ; cette somme ne tenant pas compte de son remplacement ni du dédommagement de Steria et de ses sous-traitants.
>
> La catastrophe industrielle vient des 174 primes et indemnités - qui changent parfois chaque mois pour chaque militaire - que le logiciel doit gérer
>
> Outre ces explications liées au fonctionnement du domaine métier de la solde, il apparaît également que la conception fonctionnelle de ce système d'information ait été insuffisante à modéliser une telle complexité.
>
> En effet, les spécifications fonctionnelles générales n'étaient même pas rédigées avec suffisamment d'acuité alors même que la réalisation du logiciel était entamée.
>
> Enfin, la gouvernance de ce projet est restée à l'image de la conception embryonnaire et de la complexité du métier, à savoir difficilement efficace. Concrètement, trop de comités, mais surtout trop d'acteurs participent de près ou de loin à ce logiciel, sans qu'aucune véritable autorité ne les coordonne, ni ne formule de réelles orientations.

[SIRHEN, ou savoir quand arrêter un projet - www.zdnet.fr - 20180722](https://www.zdnet.fr/blogs/green-si/sirhen-ou-savoir-quand-arreter-un-projet-39871527.htm)

> SIRHEN, le projet de paye unifiée des 1,2 millions d'employés de l'Éducation Nationale, enseignants et non enseignants, est stoppé
>
> 321 millions d'euros d'investissements
>
> En 2007 les multiples systèmes RH, développés en spécifique, sont complexes, mal urbanisés puisqu'ils intègrent la gestion des agents avec le processus de gestion de la préparation de rentrée et des processus amont. Ils sont orientés gestion et non pilotage.
>
> SIRHEN c'est donc l'idée de n'avoir qu'une seule base de données pour gérer toutes les ressources humaines de l'Éducation Nationale et des applications mieux urbanisées autour.
>
> Estimé à 60 millions d'euros au départ, la mise en place de cet ERP, toujours développé en spécifique, est vite devenue un gouffre financier. De 250 millions d'euros fin 2016 quand un premier signal d'alarme a été tiré on est passé à 320 millions d'euros quand le Ministre Jean Michel Blanquer l'a stoppé cette semaine, donc sans valider son budget prévisionnel qui devait monter à près de 500 millions d'euros.
>
> La Cours des comptes à remis fin 2016 un rapport sur la dérive de ce projet avec une note de synthèse qui met en avant une complexité sous-estimée au départ qui s'est traduite par une dérive budgétaire et un pilotage gravement défaillant, que ce soit du projet ou de la très nombreuse sous-traitance.

[Rapport Cour des Comptes - 20161219](https://www.ccomptes.fr/fr/documents/34332)

[L'Éducation nationale décide de débrancher SIRHEN, son logiciel visant à gérer son personnel - www.developpez.net - 20180723](https://www.developpez.net/forums/d1876546/club-professionnels-informatique/actualites/l-education-nationale-decide-debrancher-sirhen-logiciel-visant-gerer-personnel/)

> Évalué initialement à 80 millions d’euros, son coût a été plusieurs fois réévalué pour atteindre 323,3 millions d’euros en 2017.
>
> le ministère avait [...] restreint son utilisation aux seuls 18 000 fonctionnaires de direction, soit 2 % des effectifs
>
> En clair, SIRHEN assure la gestion administrative de 18 000 fonctionnaires.

[Bug des cartes grises : l'Etat condamné à indemniser des automobilistes - www.ledauphine.com - 20180507](https://www.ledauphine.com/france-monde/2018/05/07/bug-des-cartes-grises-l-etat-condamne-a-indemniser-les-automobilistes)

> Dans le cadre de la modernisation du service public, depuis le 1er novembre 2017, les 101 préfectures et 233 sous-préfectures ne sont plus à même de délivrer des cartes grises.
>
> Les Français doivent obligatoirement effectuer trois démarches en ligne : le changement du titulaire du certificat, la déclaration de la vente d’un véhicule et la modification de l’adresse sur le certificat
>
> Mais là où le bât blesse, c'est que l'outil mis à disposition par le ministère de l'Intérieur, le site internet de l’Agence nationale des titres sécurisés (ANTS), n'en finit pas de connaître des bugs informatiques.
>
> Résultat : moins d'un mois après sa mise en service, 187 000 dossiers étaient déjà bloqués. Et les retards n'ont eu de cesse de s'accumuler. A la mi-mars, près de 300 000 dossiers étaient en souffrance. Fin mars, les médias évoquaient même le chiffre de 400 000 à 450 000 demandes non satisfaites !
>
> Une situation qui a conduit automobilistes furieux et concessionnaires à se retourner contre l'Etat.

[Prélèvement de l'impôt à la source : "les bogues sont légion et pour certains pas de possibilité de s’en prémunir", d'après une note technique - www.developpez.net - 20180903](https://www.developpez.net/forums/d1889859/club-professionnels-informatique/actualites/prelevement-l-impot-source-bogues-legion-d-apres-note-technique/#post10450699)

[dsn.flandre-info.fr](http://dsn.flandre-info.fr/)

> blog d'un petit éditeur de logiciel de paie à propos du prélèvement à la source

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

[Etat des lieux métier de l'info en France 2016 - Web2day - Daniel Glazman](https://www.youtube.com/watch?v=GU7DbfmBjxE)

> syntec convention collective inadaptée car branche tech capée trop vite, il faut passer manager pour évoluer.
> Dans les autres pays on a 2 branches (manager et tech), les managers évoluent vers CEO les techs vers CTO, c'est logique
>
> 80% des devs sont en SS2I, or les SS2I ne développent rien, elles ne sont donc pas des boites de High Tech
> les boites comme "le bon coin" ou "Tinder" ne le sont pas non plus
>
> absence d'écosystème High Tech fait que les talents s'exilent (commutation de paquets et carte à puce sont des exemples
> d'innovations par des français réalisées à l'étranger)
>
> axiome "nul n'est irremplaçable" est faux. Pour avoir de l'innovation il faut les meilleurs donc des gens irremplaçables.
>
> le cout pour démarrer une boite est très faible, un PC, une chaise, un bureau et un cerveau
>
> 50K étudiants dans le logiciel par an (1/3 de Bengalore en Inde)
> On est tout petit, on est excellent dans l'imagerie depuis des décennies. Tous les diplômes s'expatrient par manque de débouchés.
> Au point que certaines boites aux USA dans l'imagerie sont staffées à 40% de frenchies
>
> ... passage sur ce que l'etat pourrait faire pour aider à sortir des boites
>
> explique qu'il a créé le 2ème logiciel de messagerie à la fin des années 80

## salaires

[Developer Open Salaries (spreadsheet opened by unknown](https://docs.google.com/spreadsheets/d/1pY64JMN8UnwEy4mIP4_gr4BhOAa6Il6o3CqA_j0wRdI/edit#gid=1922656675)

### france vs USA

[À coût de la vie égal, le salaire d'un professionnel de l'IT à San Francisco est 67 % plus élevé que celui d'un Parisien](https://www.developpez.net/forums/d1812737/emploi-etudes-informatique/emploi/salaires/cout-vie-egal-salaire-d-professionnel-l-it-san-francisco-67-plus-eleve-celui-d/#post9990292)

> étude Hired sur 2017 : 420 000 demandes d'entretien et offres d'emploi, 10 000 entreprises et 69 000 candidats
>
> Le salaire moyen global est de 135 000 dollars US
>
> Paris est la ville où le salaire est le plus faible avec 56 000 USD (48 000 euros)

[commentaire yento sur developpez](https://www.developpez.net/forums/d1812737-7/emploi-etudes-informatique/emploi/salaires/cout-vie-egal-salaire-d-professionnel-l-it-san-francisco-67-plus-eleve/#post10178605)

> 300k c'est la norme pour les big 4 en web ou les big 4 en finance
>
> Une fois enlevée 40% de taxe, ca fait que 15k par mois

### international

[What is the average Node.js salary? - www.quora.com - 2015](https://www.quora.com/What-is-the-average-Node-js-salary)

> - USA between 130K$ and 160K$
> - average USA 90K$, UK 48.5K$, India around 10K$
> - Ukrainian JS dev between 8K$ and 60K$ depending on experience (junior to senior)

[Node.js vs Ruby on Rails (Infographic)](https://vizteck.com/blog/node-js-vs-ruby-on-rails-infographic/)

> Outsourcing JavaScript in Pakistan, India or Philippine : between 24K$ to 90K$ depending on experience

[How Much Do Freelance Developers Cost Around the World? (2017) - 20170707](https://www.codementor.io/blog/how-much-do-freelance-developers-cost-around-the-world-2626eu0rzy)

> We surveyed 5,302 freelance developers from around the world
>
> The least expensive regions showed average rates about 30% - 40% less than the most expensive regions.
>
> USA is 70$/h, north africa is 41$/h while western european is 63$/h
>
> The 10 least expensive countries have, on average 28% lower hourly rates than the 10 most expensive.
>
> Pakistan is 43$/h, Australia is 74$/h while France is 67$/h
>
> The ten least expensive cities have, on average 54% lower hourly rates than the ten most expensive.
>
> Lahore is 29$/h while Munich is 91$/h

## durée de travail

[Microsoft and GitHub Workers Take a Stand Against Grueling, Inhumane '996' Culture in China - gizmodo.com - 20190419](https://gizmodo.com/microsoft-and-github-workers-take-a-stand-against-gruel-1834210579)

> For tech workers in China, a brutal work schedule of 9am to 9pm, 6 days a week (usually just called “996") is not only commonplace, it’s been hailed as “a huge blessing” by the likes of Alibaba’s eccentric and fantastically wealthy taskmaster, Jack Ma.
>
> Chinese workers took to GitHub, [...] to start a blacklist of sorts.
>
> The repo itself was given the name 996.icu—as named because of this demanding schedule’s likeliness to send exhausted coders to the hospital’s intensive care unit.
>
> As a sign of wide support, 996.icu has been starred nearly 260,000 times since its creation, making it one of the most popular repositories in the site’s history.
>
> Microsoft and GitHub workers today released an open letter, making plain their intention to “stand in solidarity with tech workers in China” and resist potential attempts by the Chinese government to pressure Microsoft into censoring 996.icu. “We must entertain the possibility that Microsoft and GitHub will be pressured to remove the repository,” the letter reads. “We encourage Microsoft and GitHub to keep the 996.ICU GitHub repository uncensored and available to everyone.”

[MSWorkers/support.996.ICU](https://github.com/MSWorkers/support.996.ICU)

## stacks utilisées

[Étude sur l’évolution des technologies backend par année de création des entreprises : hired.com](https://hired.com/blog/france/technologies-backend-les-plus-en-vogue/)

> 2017
>
> - .net et PHP tombent en désuétude
> - nodejs et ruby sont les plus dynamiques parmi les nouvelles entreprises
> - java et python sont stables

[Étude sur le salaire moyen des développeurs Front-end par stack et par année d’expérience : hired.com](https://hired.com/blog/france/salaire-des-developpeurs-front-end/)

> 2017
> 40% Angular, 40% React, 20% backbone

[Étude sur le nombre moyen de demandes d’entretien reçues par type de profil et par marché : hired.com](https://hired.com/blog/france/entretiens/)

> 2017
> L’échantillon concerne uniquement les postes de Software Engineer :
>
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

[100 outils pour lancer sa startup sans développeur ni graphiste (et presque sans argent) - www.maddyness.com - 20180404](https://www.maddyness.com/2018/04/04/100-outils-pour-lancer-sa-startup-sans-developpeur-ni-graphiste-et-presque-sans-argent/)

> référentiel de liens sur :
>
> - Le graphisme (design, photos, vidéos...)
> - Le prototypage
> - Le site de présentation et la landing page
> - Un site e-commerce
> - Les outils social media (contenus, reach, automatisation...)
> - L'emailing
> - La gestion de projet (communiquer, brainstormer, organiser)
> - La vente
> - Les applications mobiles
> - L'administratif, le financier, le réglementaire
> - L'analytique et le marketing comportemental
> - Le growth hacking (automatisation, scrapping)
> - Les RP et les médias

## teaching

[Separating Programming Sheep from Non-Programming Goats : 20060714](https://blog.codinghorror.com/separating-programming-sheep-from-non-programming-goats/)

[Which Programming Language Should I Learn First?](http://carlcheo.com/startcoding#resources)

[which-programming-language-should-i-learn-first-infographic.png](http://carlcheo.com/wp-content/uploads/2014/12/which-programming-language-should-i-learn-first-infographic.png)

[The most essential list of resources for Front-End beginners : 2017](https://github.com/thedaviddias/Resources-Front-End-Beginner)

[nodeschool.io](https://nodeschool.io/fr-fr/)

[Programme d’informatique dès l’école primaire ? : framablog.org : 20140115](https://framablog.org/2014/01/15/informatique-ecole-primaire/?print=print)

> **Proposition d’orientations générales pour un programme d’informatique à l’école primaire**
>
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

[Aux origines de l'intelligence artificielle - www.franceculture.fr - 20180331](https://www.franceculture.fr/numerique/aux-origines-de-lintelligence-artificielle)

[Machine Learning: The High Interest Credit Card of Technical Debt - 2014](https://ai.google/research/pubs/pub43146)

> Machine learning offers a fantastically powerful toolkit for building complex systems quickly. This paper argues that it is dangerous to think of these quick wins as coming for free. Using the framework of technical debt, we note that it is remarkably easy to incur massive ongoing maintenance costs at the system level when applying machine learning. The goal of this paper is highlight several machine learning specific risk factors and design patterns to be avoided or refactored where possible. These include boundary erosion, entanglement, hidden feedback loops, undeclared consumers, data dependencies, changes in the external world, and a variety of system-level anti-patterns.

Took from [Machine learning and tech debt: A publication from Google on www.funfunforum.com](https://www.funfunforum.com/t/machine-learning-and-tech-debt-a-publication-from-google/5221) :

> Another worry for real-world systems lies in hidden feedback loops. Systems that learn from world behavior are clearly intended to be part of a feedback loop. For example, a system for predicting the click through rate (CTR) of news headlines on a website likely relies on user clicks as training labels, which in turn depend on previous predictions from the model. This leads to issues in analyzing system performance, but these are the obvious kinds of statistical challenges that machine learning researchers may find natural to investigate [2].

[Exponential growth of supercomputing power, 1995-2060 (logarithmic scale)](https://www.futuretimeline.net/21stcentury/images/future-timeline-technology-singularity.jpg)

[Human-level artificial intelligence could be achieved "within five to ten years", say experts - www.futuretimeline.net - 20180925](https://www.futuretimeline.net/blog/2018/09/25.htm)

[Santé : nos données personnelles peuvent-elles sauver des vies ?](https://www.franceculture.fr/emissions/dimanche-et-apres/sante-nos-donnees-personnelles-peuvent-elles-sauver-des-vies)

> 38:20 Les dossiers patients se vendent entre 100 et 150 euros l'unité sur le darkweb (pour feed les IA du domaine médical)

[Éric Sadin : l'asservissement par l'Intelligence Artificielle ? - Thinkerview - 20181108](https://www.youtube.com/watch?v=VzeOnBRzDik)

> objectif du dev de l'IA par les GAFA est de supprimer le libre arbitre par l'analyse des états successifs de l'individu pour lui proposer des choix

## Economie

### Le graphique de l'éléphant (Branko Milanovic)

> Les revenus augmentent partout sauf pour les classes populaires et moyennes des pays industrialisés où il stagne voire baisse.On constate également un accroissement massif des inégalités partout.

[Découvrez le "graphique éléphant" qui résume TOUT : www.nouvelobs.com - 20160711](https://www.nouvelobs.com/economie/20160710.OBS4373/decouvrez-le-graphique-elephant-qui-resume-tout.html)

[Graphique de l'Eléphant, le retour : www.atlantico.fr - 20160715](http://www.atlantico.fr/decryptage/graphique-elephant-retour-quand-matraquage-classes-moyennes-occidentales-concurrence-chine-saute-aux-yeux-jean-marc-siroen-2764315.html)

### cout des bugs

A l'échelle mondiale chiffré à 100 milliards de dollars (chiffre 2008 ?) par le département du commerce US (cf [Gérard Berry : Pourquoi et comment le monde devient numérique : www.franceculture.fr redif du cours de 2008](https://www.franceculture.fr/emissions/les-cours-du-college-de-france/gerard-berry-pourquoi-et-comment-le-monde-devient-numerique))

### soutenabilité du numérique

[Devoxx2017 - Le monde devient numérique a t il les moyens de le rester (Alexandre Monnin)](https://www.youtube.com/watch?v=bl6Ivdy777A)

[Jancovici Conférence Ajaccio (part 1/2)](https://www.youtube.com/watch?v=kjq88rO57-U) et [Jancovici Conférence Ajaccio (Part 2/2)](https://www.youtube.com/watch?v=jCNI9eniN8U)

> probablement le meilleur condensé d'infos de Jancovici sur la non soutenabilité du modèle économique actuel et donc de la société numérisée en l'état

[Lean ICT – Les impacts environnementaux du Numérique](https://theshiftproject.org/lean-ict/)

> Le projet « Lean ICT » du Shift présente une réflexion sur les pratiques et actions permettant de limiter les impacts environnementaux directs et indirects du Numérique, tout en maximisant l’effet net des leviers du Numérique en matière de transition écologique. Il s’inscrit dans un contexte où la consommation énergétique du Numérique augmente plus vite que les prévisions, et où par extension, les émissions de gaz à effet de serre (GES) induites augmentent aussi.

[Le rapport final “Lean ICT : Pour une sobriété numérique” est disponible - 20180329](https://theshiftproject.org/wp-content/uploads/2018/11/Rapport-final-v8-WEB.pdf) ([Résumé aux décideurs](https://theshiftproject.org/wp-content/uploads/2018/10/R%C3%A9sum%C3%A9-aux-d%C3%A9cideurs_Pour-une-sobri%C3%A9t%C3%A9-num%C3%A9rique_Rapport_The-Shift-Project.pdf))

[Déployer la sobriété numérique : le nouveau rapport du Shift sur l’impact environnemental du numérique - theshiftproject.org - 20201014](https://theshiftproject.org/article/deployer-la-sobriete-numerique-rapport-shift/)

## FAI

[Forfait Fist First - Made in Groland](https://www.youtube.com/watch?v=y4fCg0tfVfU)

## GAFAM

### Microsoft

[notes about MS - sebsauvage.net](http://sebsauvage.net/wiki/doku.php?id=microsoft)

[Microsoft to acquire GitHub for $7.5 billion - news.microsoft.com - 20180604](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/)

[A bright future for GitHub - `blog.github.com` - 20180604](https://blog.github.com/2018-06-04-github-microsoft/)

## Médias

[Comment les médias ont raté le virage du numérique : Nicolas Kayser-Bril : 20180125](https://m.usbeketrica.com/article/comment-medias-rate-virage-numerique)

## Transhumanisme

[Transhumanisme : le Grolandais augmenté, c’est pour 2030 - Groland - Le Zapoï du 16/09](https://www.youtube.com/watch?v=yTzIE3iXYNQ)

## ATAWAD

AnyTime, AnyWhere, AnyDevice

[Mobiquité : fr.wikipedia.org](https://fr.wikipedia.org/wiki/Mobiquit%C3%A9)

## LOL

[Il demande à un freelance de développer le "Facebook des propriétaires canins" pour 500€ - 20180430](https://www.naddymess.fr/freelance-developper-facebook-proprietaires-canins-pas-cher/)
