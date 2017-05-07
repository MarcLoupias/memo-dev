# Security Basics

## Services

Les services de base de la sécurité

### Authentification

Identification = qui suis-je

Authentification = preuve de l'identification

#### Facteur mémoriel

un secret connu de l'utilisateur seul, typiquement mot de passe ou clef privée

#### Facteur matériel

un secret stocké sur un objet unique (clef usb, carte à puce, ...)

#### Facteur corporel

authentification biométrique

basée sur des informations biologiques uniques (empreintes digitales, empreintes rétinienne, voix, ...)

#### Facteur réactionnel

un geste unique reproductible seulement par la bonne personne (signature manuscrite)

#### Authentification simple vs forte

Authentification simple = usage d'un seul facteur d'authentification.
Très courant sur internet, par exemple login + mdp

Authentification forte = concaténation de plusieurs facteurs par facteur mémoriel via mot de passe + facteur matérial via sms sur portable.
Permet une protection supplémentaire face au phishing.

### Intégrité

garantie de non modification par un tiers d'un contenu

### Confidentialité

protection contre la lecture non autorisée par un tiers

- confidentialité de la transmission (TLS par ex)
- confidentialité de l'archive (contenu) (SMIME par ex)

### Non-répudiation

Un expéditeur ne doit pas pouvoir, par la suite, nier à tort avoir envoyé un message.

## Terminologie

- **Texte en clair** : c'est le message à protéger.
- **Texte chiffré** : c'est le résultat du **chiffrement** du **texte en clair**.
- **Chiffrement** : c'est la méthode ou l'algorithme utilisé pour transformer un **texte en clair** en **texte chiffré**.
- **Déchiffrement** c'est la méthode ou l'algorithme utilisé pour transformer un **texte chiffré** en **texte en clair**.
- **Clé** : c'est le secret partagé utilisé pour **chiffrer** le **texte en clair** en **texte chiffré** et pour **déchiffrer** le **texte chiffré** en **texte en clair**. On peut parfaitement concevoir un algorithme qui n'utilise pas de **clé**, dans ce cas c'est l'algorithme lui-même qui constitue la **clé**, et son principe ne doit donc en aucun cas être dévoilé.
- **Cryptographie** : cette branche regroupe l'ensemble des méthodes qui permettent de **chiffrer** et de **déchiffrer** un **texte en clair** afin de le rendre incompréhensible pour quiconque n'est pas en possession de la **clé** à utiliser pour le **déchiffrer**.
- **Cryptanalyse** : c'est l'art de révéler les **textes en clair** qui ont fait l'objet d'un **chiffrement** sans connaître la **clé** utilisée pour **chiffrer** le **texte en clair**.
- **Cryptologie** : il s'agit de la science qui étudie les communications secrètes. Elle est composée de deux domaines d'étude complémentaires : la **cryptographie** et la **cryptanalyse**.
- **Décrypter** : c'est l'action de retrouver le **texte en clair** correspondant à un **texte chiffré** sans posséder la clé qui a servit au chiffrement. Ce mot ne devrait donc être employé que dans le contexte de la cryptanalyse.
- **Crypter** : en relisant la définition du mot **décrypter**, on peut se rendre compte que le mot crypter n'a pas de sens et que son usage devrait être oublié. Le mot **cryptage** n'a pas plus de sens non plus.
- **Coder, décoder** : c'est une méthode ou un algorithme permettant de modifier la mise en forme d'un message sans introduire d'élément secret. Le Morse est donc un code puisqu'il transforme des lettres en trait et points sans notion de secret. L'ASCII est lui aussi un code puisqu'il permet de transformer une lettre en valeur binaire.

src : résumé pris depuis [Introduction à la Cryptographie](http://ram-0000.developpez.com/tutoriels/cryptographie/) partie 2.

## Histoire

### Périodes

[Cryptologie : art ou science du secret ? - Une histoire de codes: www.ssi.gouv.fr](https://www.ssi.gouv.fr/particulier/bonnes-pratiques/crypto-le-webdoc/cryptologie-art-ou-science-du-secret/)

#### Cryptographie mécanique

Usage de moyens mécaniques pour chiffrer un message. 

**La sécurité repose sur le secret de fabrication**.

- Nabuchodonosor (-600)
> Aux alentours de -600, Nabuchodonosor, roi de Babylone, employait une méthode originale : il écrivait sur le crâne rasé de ses esclaves, attendait que leurs cheveux aient repoussé, et il les envoyait à ses généraux. Il suffisait ensuite de raser à nouveau le messager pour lire le texte. Il s'agit toutefois de stéganographie à proprement parler et non pas de cryptographie : l'information est cachée et non pas codée.

> En utilisant cette technique, l'interception du message par un tiers est tout de suite remarquée.

- Le code de César (-50)
substitution monoalphabétique. A -> D, B -> E, etc ...

- ...

- Enigma

> Le chiffrement effectué par la machine Enigma est à la fois simple et astucieux. Chaque lettre est remplacée par une autre, l'astuce est que la substitution change d'une lettre à l'autre. La machine est alimentée par une pile électrique. Quand on appuie sur une touche du clavier, un circuit électrique est fermé, et une lettre d'un tableau d'affichage s'allume qui indique par quelle substitution le chiffrement a été effectué.

[Enigma : fr.wikipedia.org](https://fr.wikipedia.org/wiki/Enigma_(machine))

#### Cryptographie mathématique

**La sécurité repose sur les mathématiques, tout est public**.

Mise en oeuvre du [Principe de Kerckhoffs](https://fr.wikipedia.org/wiki/Principe_de_Kerckhoffs) :
> La sécurité d’un système de chiffrement ne doit pas dépendre de la préservation du secret de l’algorithme. La sécurité ne repose que sur le secret de la clé.

Il s'agit de la cryptographie qui utilise les mathématiques pour chiffrer un message. Cette cryptographie a commencé aux environs de la fin de la deuxième guerre mondiale et c'est celle que l'on utilise de nos jours.

[Claude Shannon](https://fr.wikipedia.org/wiki/Claude_Shannon) est considéré par plusieurs comme le père de la cryptographie mathématique. Il a travaillé pendant plusieurs années dans les Laboratoires Bell où il a produit un article intitulé A mathematical theory of cryptography (Une théorie mathématique de la cryptographie). (1945)

À la fin des travaux de Shannon, les progrès de la cryptographie ont ralenti jusqu'à ce que Hellman et Diffie présentent leur document sur la cryptographie à clé publique.

Dans les années 1970, l'utilisation des ordinateurs a permis trois avancées majeures publiques (c'est-à-dire non secrètes et non contrôlées par les services de renseignement) :

##### Le développement d'un standard public de chiffrement

[Data Encryption Standard](https://fr.wikipedia.org/wiki/Data_Encryption_Standard) (DES, 17 mars 1975)

[Advanced Encryption Standard](https://fr.wikipedia.org/wiki/Advanced_Encryption_Standard) (AES, 2001)

##### Le développement de l'échange de clés Diffie-Hellman

Publication de l'article [New Directions in Cryptography](http://www-ee.stanford.edu/~hellman/publications/24.pdf) (Nouvelles directions en cryptographie) par [Whitfield Diffie](https://fr.wikipedia.org/wiki/Whitfield_Diffie) et [Martin Hellman](https://fr.wikipedia.org/wiki/Martin_Hellman).

##### Le développement du chiffrement asymétrique

Le chiffrement asymétrique utilise une paire de clés mathématiquement liées, dont chacune décrypte le cryptage effectué par l'autre. Ces algorithmes ont la propriété supplémentaire que l'une des clés appariées ne peut être déduite de l'autre par tout procédé connu autre que de très nombreux essais et erreurs. Un algorithme de ce type est appelé algorithme de chiffrement à clé publique ou algorithme à clé asymétrique.

Le chiffrement RSA (nommé par les initiales de ses trois inventeurs) est un algorithme de cryptographie asymétrique, décrit en 1977 par [Ronald Rivest](https://fr.wikipedia.org/wiki/Ronald_Rivest), [Adi Shamir](https://fr.wikipedia.org/wiki/Adi_Shamir) et [Leonard Adleman](https://fr.wikipedia.org/wiki/Leonard_Adleman).

##### Fonction de hashage (message digest, condensat)

Le hachage est une fonction appliquée à une chaîne de caractères ou de bits pour produire une valeur de hachage (une suite de bits). La valeur de hachage est une empreinte numérique du message. La valeur de hachage est également appelée message digest ou somme de contrôle. La fonction de hachage fournit une sortie de longueur fixe : quelle que soit la longueur du message qu'on lui soumet, la fonction de hachage produit toujours une valeur de hachage contenant le même nombre de bits.

Une fonction de hachage cryptographique est une fonction à sens unique, c'est-à-dire une fonction dont l'inverse est impossible à calculer, même en utilisant une grande puissance de calcul durant une longue période de temps.

Permet :

- vérification de l'intégrité d'un message
- signature électronique quand combinée à algorithme de chiffrement asymétrique
- stockage d'une représentation sécurisée d'un mot de passe ([PBKDF2](https://fr.wikipedia.org/wiki/PBKDF2)) 

#### Cryptographie quantique

Il s'agit de la cryptographie dont les bases reposent sur la physique quantique. Nous sommes en train de la voir émerger de nos jours et nul doute qu'elle ne remplace dans les années qui viennent la cryptographie basée sur les mathématiques.

N'est pas encore exploitable en production. Horizon de recherche.

## Cryptographie moderne

Elle repose sur 3 facteurs :

- La qualité des algorithmes

La qualité d’un algorithme repose sur sa fiabilité mathématique et surtout pas sur le secret de sa réalisation 

- Les implémentations des algorithmes

Il est souvent bien plus facile de contourner une mauvaise implémentation que d’attaquer un algorithme

- La gestion des clefs

Une faille dans la gestion des clefs peut remettre en cause la fiabilité de l’ensemble

### Algorithmes de base

#### Fonction de hashage

CHECKSUM, CRC, MD5

Famille SHA1

Famille SHA2

Famille SHA3

#### Chiffrement symétrique

- Chiffrement et déchiffrement rapide.
- Nécessite un protocole d'échange de clef sûr.

##### DES

[Data Encryption Standard](https://fr.wikipedia.org/wiki/Data_Encryption_Standard)

Clef de 56 bits.

Standard de 1977

##### 3DES

3 passes dans DES en utilisant 2 ou 3 clefs distinctes (112 ou 168 bits)

##### IDEA

International Data Encryption Algorithm

##### AES

[Advanced Encryption Standard](https://fr.wikipedia.org/wiki/Advanced_Encryption_Standard)

Standard actuel. Publié en 2001.

#### Chiffrement asymétrique

- Introduit par Diffie et Hellman en 1976
- Clef de chiffrement différente de clef de déchiffrement
- Couple de clefs créées ensemble (une clef privée, une publique)
- Impossible de découvrir une clef à partir de l'autre
- Tout texte chiffré avec une clef est déchiffré avec l'autre et seulement avec l'autre

##### DH

##### RSA

- Rivest Shamir Adelman.
- Créé en 1976, domaine public depuis septembre 2000.
- Cf [nombre premier : fr.wikipedia.org](https://fr.wikipedia.org/wiki/Nombre_premier)
- 100 à 1000 fois plus lent que le chiffrement symétrique

Robustesse fondée sur :
- non divulgation de la clef privée.
- il est très difficile de décomposer en facteurs premiers un nombre (si le nombre est suffisamment grand).
- absence de méthode mathématique pour déduire la clef privée à partir de la clef publique.

Dangers :
- augmentation puissance de calcul (résolu en augmentant la taille des clefs)
- avancées théoriques éventuelles (recherche mathématique)
- cryptographie quantique (inexploitable en l'état)

### Attaques

#### Force brute

Essayer toutes les clefs possibles. 

Principal danger : l’augmentation de la puissance des machines. 

Parades : augmenter la longueur des clefs, choisir des algorithmes coûteux 

En 97, 3h pour casser une clef de 40 bits.

[Quand le chiffrement des données est mis à mal par des mathématiciens : nextinpact.com](https://www.nextinpact.com/news/87466-quand-chiffrement-donnees-est-mis-a-mal-par-mathematiciens.htm)

#### Analyse statistique

- basée sur les propriétés des messages en clair (exemple : le «e» représente 14.5 % des caractères utilisés dans un texte en français).

- La méthode utilisée par Morse pour optimiser son code est dépassée. Il existe des tables statistiques pour des motifs de plusieurs lettres.

- Parade : utiliser un algorithme tel que le cryptogramme ait une entropie maximale.

#### Attaque à texte en clair connu

L’attaquant connaît un message en clair et son équivalent chiffré. Il tente d’en déduire la clef.

#### Attaque de l’algorithme

Par exemple, pour les algorithmes qui génèrent une clef secrète aléatoirement, il arrive que l’aléa ne soit pas parfait et donc reproductible par l’attaquant.

#### Attaque sur l'usage

Le plus souvent les attaques exploitent le mode d’usage de l’algorithme de chiffrement, pas sur le chiffrement lui même. Exemples :

- Analyse du nombre de caractères envoyés et de l’écho du serveur pour calculer la longueur du mot de passe (pas d’écho pendant la frappe du mot de passe)
- Analyse statistique de la vitesse de frappe des caractères en fonction de leur position sur le clavier !

### PKI

#### Pourquoi ?

Postulat de départ : Chaque utilisateur a une paire de clef.

Questions : 

- La clé est-elle bien celle appartenant à la personne avec qui les échanges sont envisagés ?
- Le possesseur de cette clé est-il digne de confiance ?
- La clé est-elle toujours valide ?

Un **certificat** permet de répondre à ces questions.

En combinant signatures électroniques et certificats, on obtient une autorité de confiance (Autorité de Certification, AC) qui certifie les paires de clefs.

Une AC est un tiers de confiance.

Une PKI est l'ensemble des matériels, logiciels, personnes, règles et procédures nécessaire à une Autorité de Certification pour créer, gérer et distribuer des certificats X509.

#### Fonctions

- Emettre et révoquer des certificats
- Publier les certificats dans un annuaire
- Eventuellement fournir un service de séquestre et de recouvrement de clés privées
- ...

Exemple : [MetaPKI en version 9.2.5 : www.ssi.gouv.fr](https://www.ssi.gouv.fr/entreprise/qualification/metapki-en-version-9-2-5/)

#### PGP ring of trust

#### Certificats X509

### Applications

#### SSL/TLS

#### Signature Electroniques

Une fonction de hashage est appliquée sur le document à signer. Elle permet d'obtenir son empreinte numérique (unique pour ce document).

Cette empreinte (ou condensat, ou message digest) est ensuite chiffrée avec la clef privée du signataire.

Le document est alors signé.

N'importe quelle personne peut vérifier la signature, il lui suffit de :
- hasher le document avec le même algorithme de hashage
- déchiffrer la signature avec la clef publique de la personne prétendant avoir signé le document
- comparer les deux empreintes numériques, si elles sont identiques, alors le signataire est considéré comme authentique.

Vérifie également l'intégrité par ricochet. 

#### SMIME

#### OAuth

## sources

- [Introduction à la Cryptographie : ram-0000.developpez.com](http://ram-0000.developpez.com/tutoriels/cryptographie/)
- [L'identification et l'authentification : ssi.ac-strasbourg.fr](https://ssi.ac-strasbourg.fr/bonnes-pratiques/recommandations/lidentification-et-lauthentification/)
