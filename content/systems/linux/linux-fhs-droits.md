---
htmlHead:
    title: 'marlou knowledge base' 
    containerClass: 'markdown-body'
    metaTags:
        - name: viewport
          content: 'width=device-width, initial-scale=1, minimal-ui'
        - name: robots
          content: none
    links:
        - href: '../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../main.css'
          rel: stylesheet
          media: all
        - href: '../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../index.js'

---

# Linux - Gestion des droits du FHS

## Notion de droits

Les droits d'accès aux fichiers (appelés encore modes ou permissions) sont un point essentiel du système Unix. Ils permettent de définir des droits différents sur un même fichier selon la catégorie d'utilisateurs.

Ainsi les manipulations de fichiers sont restreintes selon les droits alloués à chaque fichier. A chaque catégorie d'utilisateur correspond des droits spécifiques sur un fichier.

## Affichage des droits

```

$ ls -l

drwxr-xr-x 1 marco 197121     0 mai    7 23:10 _book/
-rw-r--r-- 1 marco 197121    56 mai    7 20:52 book.json
drwxr-xr-x 1 marco 197121     0 mai    7 21:19 divers/
drwxr-xr-x 1 marco 197121     0 mai    7 21:42 files-formats/
drwxr-xr-x 1 marco 197121     0 mai    7 22:33 languages/
drwxr-xr-x 1 marco 197121     0 mai    8 19:21 linux/
drwxr-xr-x 1 marco 197121     0 mai    7 19:33 node_modules/
-rw-r--r-- 1 marco 197121   193 mai    7 22:51 README.md
drwxr-xr-x 1 marco 197121     0 mai    7 22:35 security/
drwxr-xr-x 1 marco 197121     0 mai    7 22:49 software-engineering/
-rw-r--r-- 1 marco 197121 13721 mai    7 23:10 SUMMARY.md
drwxr-xr-x 1 marco 197121     0 mai    7 22:55 tools/
drwxr-xr-x 1 marco 197121     0 mai    7 23:03 web/

```

Liste les fichiers et leurs droits du répertoire `linux`.

La 1ère colonne indique le type de fichier suivi de ses droits d'accès. 
`d` pour directory et `-` pour fichier suivi des 3 blocs de droits `rwx` ce qui donne par exemple `drwxr-xr-x` ou `-rwxr-xr-x`.

La 3ème colonne indique le nom du compte propriétaire (UID).

La 4ème colonne indique le groupe de user (GID) auquel appartient le propriétaire.

La dernière colonne indique le nom du fichier (ou répertoire).

## Droits d'accès

3 types de droits :
- read
- write
- execute

### read (`r`)

Pour un fichier permet de lire le contenu. Pour un répertoire permet d'en lister le contenu.

### write (`w`)

Pour un fichier permet la modification et la suppression du fichier.

Pour un répertoire permet la modification et la suppression de tous les fichiers du répertoire indépendamment des droits sur ces fichiers.

### execute (`x`)

Sans effet si le fichier n'est pas un exécutable (pas forcément binaire, ça peut être un script).

Pour un fichier permet l'exécution par le système (ou l'interprétation pour un script).

Pour un répertoire permet d'accéder aux fichiers contenus dans ce répertoire.

## Catégories d'utilisateurs

### Propriétaire

Le propriétaire d'un fichier est l'utilisateur qui le crée.

Désigné par la lettre `u` (`owner`).

Le `UID` désigne par un identificateur numérique unique le propriétaire d'un fichier.

### Groupe

Un groupe d'utilisateur est un ensemble d'utilisateurs privilégiés ayant en général des permissions moindre que le propriétaire 
d'un fichier mais plus grandes que la catégorie qui suit. Cette catégorie est désignée par la lettre `g` (`group`).

Le `GID` désigne par un identificateur numérique unique le groupe auquel appartient le propriétaire d'un fichier.

### Autres

Cette catégorie regroupe tous les utilisateurs qui ne sont ni le propriétaire d'un fichier ni faisant partir du même 
groupe que le propriétaire. On les désignent par la lettre `a` (`other`).

## Identification des droits

A chaque catégorie d'utilisateur on associe un triplet de droits : lecture, écriture et exécution. 
Au total 9 droits (3*3) sont affectés à chaque fichier.

Lorsqu'un droit est alloué, on voit la lettre correspondante (`r`, `w `ou `x`). 
Si le droit est refusé, on voit un tiret (`-`).

`-rwxr-xr-x` : Dans cet exemple on est sur un fichier dont :
- le propriétaire a tous les droits
- le groupe peut seulement lire
- les autres peuvent seulement lire

Combinaison des droits :

`---` aucun
`--x` exécution
`-w-` écriture
`-wx` écriture et exécution
`r--` lecture
`r-x` lecture et exécution
`rw-` lecture et écriture
`rwx` lecture, écriture et exécution

## Changement des droits (`chmod`)

Il est offert au propriétaire d'un fichier (et seulement à lui seul) de modifier les droits du fichier. 
C'est-à-dire qu'il peut supprimer des droits ou bien en rajouter de nouveaux à chacune des trois catégories d'utilisateur.

Pour cela, on utilise la commande `chmod` (change mode) selon la syntaxe suivante :

`chmod droits fichier`

### notation symbolique

Pour affecter à chaque catégorie les droits voulus, on peut utiliser une notation symbolique selon la syntaxe :

`chmod catégorie+opération+liste-des-droits fichier`

| Catégorie | Description
| --------- | -----------
| `u` | propriétaire
| `g` | groupe
| `a` | autres

| Opération | Description
| --------- | -----------
| `+` | ajouter
| `-` | retirer
| `=` | définir

| Droit | Description
| ----- | -----------
| `r` | lecture
| `w` | écriture
| `x` | exécution

- `chmod g=rwx book.json` Alloue au groupe tous les droits.
- `chmod g-w book.json` Retire au groupe le droit d'écriture.
- `chmod a-rwx book.json` Retire aux autres tous les droits.
- `chmod u=rw book.json` Alloue au propriétaire les droits en lecture et en écriture.
- `chmod a+r book.json` Rajoute aux autres le droit en lecture.

### notation numérique

L'avantage de la notation numérique sur la précédente est de permettre sur un fichier la définition absolue des 
droits de toutes les catégories en même temps selon la syntaxe :

`chmod serie-de-3-chiffres fichier`

Ainsi on remplace chacun des triplets par un nombre compris entre 0 et 7. 
Ce qui nous fait un nombre à trois chiffres en guise de notation numérique.
Le tableau ci-après permet de faire la convertion entre les différentes triplets possibles et 
leur notation octale (nombre en base 8).

| Triplet | Nombre binaire | Nombre octal
| ------- | -------------- | ------------
| `---` | `000` | `0`
| `--x` | `001` | `1`
| `-w-` | `010` | `2`
| `-wx` | `011` | `3`
| `r--` | `100` | `4`
| `r-x` | `101` | `5`
| `rw-` | `110` | `6`
| `rwx` | `111` | `7`

- `chmod 640 book.json` `rw-r-----`
- `chmod 700 book.json` `rwx------`
- `chmod 661 book.json` `rw-rw-r--`
- `chmod 761 book.json` `rwxrw-r--`
- `chmod 610 book.json` `rw-r-----`

## `umask`

TODO

## Droits étendus

TODO

### SUID

TODO

### SGID

TODO

### Sticky Bit

TODO
