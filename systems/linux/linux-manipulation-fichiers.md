# Linux - Manipuler les fichiers

## `cat`

`cat book.json` affiche le contenu de `book.json` sur la sortie standard

`cat book.json .gitignore` affiche le contenu de `book.json` et de `.gitignore` à la suite sur la sortie standard

`cat book.json .gitignore > content.log` enregistre le contenu de `book.json` et de `.gitignore` à la suite dans un fichier `content.log`

## `tac`

Fait tout pareil que cat mais en lisant les fichiers depuis la dernière ligne vers la première.

## `head`

Affiche les premières ligne d'un fichier (10 par défaut)

## `tail`

Affiche les dernières ligne d'un fichier (10 par défaut)

## `nl`

Affiche le contenu d'un fichier en numérotant les lignes

## `uniq`

Affiche le contenu d'un fichier sans les doublons de lignes

## `sort`

Affiche le contenu d'un fichier en triant les lignes (par ordre alphabétique par défaut)

## `split`

Découpe un fichier par blocs en fonction d'une taille en octets ou d'un nombre de lignes.

La commande `cat` permet de concaténer facilement un fichier découpé avec `split`.

## `diff`

Permet d'afficher les différences entre 2 fichiers.

`diff <options> fichier-1 fichier-2`

## `wc`

Permet de compter le nombre de caractères, de mots et de lignes d'un fichier.

```bash

$ wc book.json
 3  9 56 book.json

```

Le fichier `book.json` comporte 3 lignes, 9 mots, et 56 caractères.

## `file`

Permet de connaitre le type d'un fichier.

```bash

$ file book.json
book.json: ASCII text

```

## `touch`

La commande `touch` permet de créer un nouveau fichier vide.

## `find`

Permet de faire une recherche sur le système de fichier et d'afficher le résultat sur la sortie standard.

### Recherche sur **le nom de fichier**

```bash

$ find . -name "*.json" -print
./book.json
./node_modules/gitbook-plugin-theme-faq/package.json
./node_modules/gitbook-plugin-theme-faq/_i18n/en.json

```

On a recherché tous les fichiers ayant l'extension `.json` dans leur nom de fichier depuis le répertoire courant.

### Recherche sur **la date du fichier**

```bash

$ find . -mtime 2 -print
./divers/divers-articles.md
./languages/javascript/angular-js/angular-js-components.md
./security/security-webapp.md
./software-engineering/genie-logiciel.md
./web/shadow-dom.md

```

On a recherché tous les fichiers ayant été modifiés il y a exactement 2 jours. 
Les fichiers modifiés hier ne sont donc pas affichés, seulement ceux modifiés avant-hier. 

La commande `find` est très puissante et présente de nombreuses options. Se référer à [la man page correspondante](http://www.linux-france.org/article/man-fr/man1/find-1.html).

## `grep`

Permet de rechercher un mot dans un fichier et d'afficher les lignes dans lesquelles ce mot a été trouvé.

### Recherche de tous les fichiers contenant un mot

```bash

$ grep -Ril "optimiser"
security/security-basics.md
web/web-tracking.md

```

- `i` pour ignorer la casse
- `R` pour récursif
- `l` pour obtenir en sortie les noms des fichiers (avec chemin relatif depuis la working directory) et pas leur contenu

On obtient donc la liste de tous les fichiers contenant le mot "optimiser" (sans la casse) depuis la working directory.

## commande pipe `|`

La commande `|` (pipe) permet de chainer les commandes unix. La 1ère commande donne à la seconde sa sortie en entrée, et etc ...

Par exemple pour concaténer 2 fichiers et numéroter les lignes du résultat final :

```bash

$ cat book.json .gitignore | nl
     1  {
     2      "plugins": [ "theme-faq" , "-search", "-lunr" ]
     3  }
     4  # Node rules:
     5  ## Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
     6  .grunt

     7  ## Dependency directory
     8  ## Commenting this out is preferred by some people, see
     9  ## https://docs.npmjs.com/misc/faq#should-i-check-my-node_modules-folder-into-git
    10  node_modules

    11  # Book build output
    12  _book

    13  # eBook build output
    14  *.epub
    15  *.mobi
    16  *.pdf

    17  # jetbrains
    18  .idea/

```

Ajoutons à cette chaine la commande head qui va limiter à 10 lignes l'affichage :

```bash

$ cat book.json .gitignore | nl | head
     1  {
     2      "plugins": [ "theme-faq" , "-search", "-lunr" ]
     3  }
     4  # Node rules:
     5  ## Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
     6  .grunt

     7  ## Dependency directory
     8  ## Commenting this out is preferred by some people, see
     9  ## https://docs.npmjs.com/misc/faq#should-i-check-my-node_modules-folder-into-git

```

On remarquera que la commande `nl` ne numérote pas les lignes vides mais que la commande `head` en tient compte pour limiter son affichage.

Tout est question de paramétrage des commandes pour obtenir le résultat souhaité.

## `du`

Lister la size des fichiers du répertoire courant :

```bash
$ du -sh * | sort -n
```

## `df`

Afficher l'espace disque dispo pour le volume logique :

```bash
$ df -h /home/robert/appli/
Filesystem        Size  Used Avail Use% Mounted on
/dev/boubou/bibi  100G   22G   79G  22% /home/robert/appli
```
