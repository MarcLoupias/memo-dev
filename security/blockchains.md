# blockchains

## quelques sources

[intro très rapide](https://www.youtube.com/watch?v=r43LhSUUGTQ) (bof bof)

[BarCamp "La Blockchain pour les développeurs" : PaloIT](https://www.youtube.com/watch?v=6hmQT8H-JJk) (bof bof)

[Public key infrastructure (PKI) will soon run on blockchain technology : nexusgroup.com 20170322](https://www.nexusgroup.com/blog/public-key-infrastructure-pki-will-soon-run-blockchain-technology/)

[Cécile Monteil - La Blockchain : un jeu d'enfant, Finance-Fiction , Popfinance](https://www.youtube.com/watch?v=cL1PWRaZq4g) (bof bof)

[La Blockchain en détail (Benoît Lafontaine - Yann Rouillard) : Octo](https://www.youtube.com/watch?v=J0MgFQ-j6nE) (prometteur !)

[c-est-quoi-la-blockchain : blockchainfrance.net](https://blockchainfrance.net/decouvrir-la-blockchain/c-est-quoi-la-blockchain/)

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

### influence & inspirations

[Web of trust](https://en.wikipedia.org/wiki/Web_of_trust)

> As time goes on, you will accumulate keys from other people that you may want to designate as trusted introducers. Everyone else will each choose their own trusted introducers. And everyone will gradually accumulate and distribute with their key a collection of certifying signatures from other people, with the expectation that anyone receiving it will trust at least one or two of the signatures. This will cause the emergence of a decentralized fault-tolerant web of confidence for all public keys.

 [Phil Zimmermann](https://en.wikipedia.org/wiki/Phil_Zimmermann), 1992

