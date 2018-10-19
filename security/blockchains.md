# blockchains

## quelques sources

[intro très rapide](https://www.youtube.com/watch?v=r43LhSUUGTQ) (bof bof)

[BarCamp "La Blockchain pour les développeurs" : PaloIT](https://www.youtube.com/watch?v=6hmQT8H-JJk) (bof bof)

[Why Blockchain is Hard - medium.com/@jimmysong - 20180514](https://medium.com/@jimmysong/why-blockchain-is-hard-60416ea4c5c)

**What is a blockchain?**

> Many companies use the word “blockchain” to mean some sort of magical device by which all their data will never be wrong.
> 
> So what is a blockchain? Technically speaking, a blockchain is a linked list of blocks and a block is a group of ordered transactions.
> 
> The main thing distinguishing a blockchain from a normal database is that there are specific rules about how to put data into the database. That is, it cannot conflict with some other data that’s already in the database (consistent), it’s append-only (immutable), and the data itself is locked to an owner (ownable), it’s replicable and available. Finally, everyone agrees on what the state of the things in the database are (canonical) without a central party (decentralized).
> 
> Decentralization implies there is no single point of failure. Immutable audit trail. 
> 
> This benefit come at a great cost.

**The Cost of Blockchains**

> *Development is stricter and slower*
> 
> A small bug could corrupt the entire database or cause some databases to be different than other ones. Of course, a corrupted or split database no longer has any consistency guarantees.
> 
> You need consensus, or the agreement of all players in the system, in order to change the database.
> 
> *Incentive structures are difficult to design*
> 
> *Maintenance is very costly*
> 
> The costs of maintaining a blockchain are orders of magnitude higher and the cost needs to be justified by utility. 
> 
> *Users are sovereign*
> 
> If the user is “misbehaving”. There’s no way to kick out the user that’s spamming your blockchain with frivolous data or has figured out a way to profit in some fashion that causes other users lots of inconvenience.
> 
> *All upgrades are voluntary*
> 
> *Scaling is really hard*

**Centralization is a lot easier**

> First, a lot of these industries that are being sold on blockchain are really overdue for IT infrastructure upgrades
> 
> Second, blockchain is a way to look like you’re on the leading edge of technology.
> 
> Third, people really don’t like government control of certain industries and want a different adjudication mechanism than the legal framework
> 
> The result is a lot of people that are hyped up on the promises without actually understanding the abilities or costs.

**So what is blockchain good for?**

> We’ve already established that a blockchain is very expensive relative to centralized databases. So the only reason you should be using a blockchain is to decentralize. That is, remove the single point of failure or control.

> The one exception we’ve found is money. Unlike most industrial use cases, money is better if it doesn’t change. Immutability and difficulty in changing the rules is a positive for money and not a detriment. This is why blockchain is the right tool for the job when it comes to Bitcoin.

[Public key infrastructure (PKI) will soon run on blockchain technology : nexusgroup.com 20170322](https://www.nexusgroup.com/blog/public-key-infrastructure-pki-will-soon-run-blockchain-technology/)

[Cécile Monteil - La Blockchain : un jeu d'enfant, Finance-Fiction , Popfinance](https://www.youtube.com/watch?v=cL1PWRaZq4g) (bof bof)

[La Blockchain en détail (Benoît Lafontaine - Yann Rouillard) : Octo](https://www.youtube.com/watch?v=J0MgFQ-j6nE) (prometteur !)

[c-est-quoi-la-blockchain : blockchainfrance.net](https://blockchainfrance.net/decouvrir-la-blockchain/c-est-quoi-la-blockchain/)

[État des lieux de la blockchain en France : acteurs, régulation, formation… : blogdumoderateur.com : 20171127](https://www.blogdumoderateur.com/etat-des-lieux-blockchain-france/)

> La Chaintech comprend entre 20 et 30 start-ups, dont 5 à 10 vraiment installées qui génèrent des revenus et bénéficient d’une vraie visibilité.

> Nous sommes un des seuls pays qui a commencé à adapter son droit commun à la technologie blockchain, à créer un droit spécifique aux blockchains, et ce il y a déjà plus d’un an avec l’ordonnance Macron sur les minibons.

> De par la nature de la communauté, on apprend encore beaucoup sur le tas, en s’informant en ligne.

[La blockchain : une révolution technologique selon le Président chinois Xi Jinping, Pékin veut utiliser la technologie comme moteur de développement - www.developpez.com - 20180606](https://www.developpez.com/actu/207814/La-blockchain-une-revolution-technologique-selon-le-President-chinois-Xi-Jinping-Pekin-veut-utiliser-la-technologie-comme-moteur-de-developpement/)

[Déconstruire les mythes de la Blockchain - www.latribune.fr - 20181017](https://www.latribune.fr/opinions/tribunes/deconstruire-les-mythes-de-la-blockchain-794001.html)

> Réalité 1 : la Blockchain ne supprime pas les intermédiaires
> Réalité 2 : la Blockchain ne supprime pas le besoin de confiance
> Réalité 3 : le monde physique détruit les propriétés de la Blockchain
> Réalité 4 : la Blockchain ne permet pas de réduire les coûts
> Réalité 5 : les contrats intelligents portent très mal leur nom
> Réalité 6 : la blockchain d'entreprise ou pseudo-blockchain est une innovation incrémentale, pas une révolution

## questions

A priori les certificats utilisés dans une blockchain sont autosignés, comment gérer la révocation des certificats ?

Question déterminante, en tant que user de la blockchain je veux :
- révoquer ma paire de clefs si elle est perdue ou volée
- révoquer ma paire de clefs pour augmenter la taille de chiffrement de mes clefs (evol techno nécessitant d'augmenter la taille des clefs cf [cette explication sur wikipedia](https://fr.wikipedia.org/wiki/Chiffrement_RSA#S.C3.A9curit.C3.A9))
- savoir si la paire de clefs d'une autre personne est révoquée

## blockchain pki

### blockcerts.org

> The Open Standard for Blockchain Certificates.

> Build apps that issue and verify blockchain-based certificates for academic credentials, professional certifications, workforce development, and civic records.

[github organization](https://github.com/blockchain-certificates)

[www.blockcerts.org](http://www.blockcerts.org/)

### University paper

[Stephanos Matsumoto](http://www.stevematsumoto.net/cv/)

[IKP: Turning a PKI Around with Blockchains, Stephanos Matsumoto & Raphael M. Reischuk](https://eprint.iacr.org/2016/1018.pdf) to appear at [38th IEEE Symposium on Security and Privacy (S&P), San Jose, CA, May 2017](http://www.ieee-security.org/TC/SP2017/program-papers.html)

### articles

[How Will Blockchain Impact PKI? : blog.css-security.com](https://blog.css-security.com/blog/how-will-blockchain-impact-pki)

### influence & inspirations

[Web of trust](https://en.wikipedia.org/wiki/Web_of_trust)

> As time goes on, you will accumulate keys from other people that you may want to designate as trusted introducers. Everyone else will each choose their own trusted introducers. And everyone will gradually accumulate and distribute with their key a collection of certifying signatures from other people, with the expectation that anyone receiving it will trust at least one or two of the signatures. This will cause the emergence of a decentralized fault-tolerant web of confidence for all public keys.

 [Phil Zimmermann](https://en.wikipedia.org/wiki/Phil_Zimmermann), 1992

