# Linux - Description du FHS

FHS = Filesystem Hierarchy Standard

[FHS sur wikipedia](https://fr.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)

sources :

- [Système de fichiers sous Unix, Hugo ETIEVANT : developpez.com](http://cyberzoide.developpez.com/unix/sys.php3)
- [Patrice KARATCHENTZEFF : p.karatchentzeff.free.fr](http://p.karatchentzeff.free.fr/freesoft/debian/debian-guide/html/ch9.html#s9.2)
- [Linux est ton meilleur ami (Pierre Antoine Grégoire - Olivier Robert - Nicolas Helleringer) : devoxx2017](https://www.youtube.com/watch?v=xqdWi6SblV8)

## Arborescence

L'architecture du système de fichiers est sous la forme d'un arbre dont le répertoire noté `/` est la racine. Tous les autres répertoires en sont les noeuds et les fichiers les feuilles.

- Tous les caractères sont acceptés pour le nommage sauf espace et les caractères accentués.
- pas de notion de disque dur physique ou logique comme sous Windows.
- Le FHS est transparent par rapport aux points de montages (qui peuvent correspondre à des DD physiques).
- **Tout est fichier** : disquette, CDROM, disque dur, interfaces réseau, …
- Un fichier préfixé par un `.` est caché.

Cette arborescence peut légèrement varier en fonction des distributions.

```text
/
/bin/
/boot/
/dev/
/etc/
/home/
/lib/
/lib64/
/lost+found/
/media/
/mnt/
/opt/
/proc/
/root/
/sbin/
/srv/
/tmp/
/usr/
/var/
```

### `/bin/` binaries

Contient :

- les exécutables des commandes de bases pour tous les utilisateurs.
- les fichiers exécutables indispensables au fonctionnement du système.

Par exemple `cat`, `ls`, `cp`, `zip`, `unzip`, ...

### `/boot/`

Contient les fichiers liés au noyau, les noyaux eux-mêmes,  et leurs fichiers de configurations.

Contient un dossier grub si un chargeur d'amorçage est installé contenant son paramétrage (`grub.conf`)

### `/dev/` devices

Ensemble de répertoires et fichiers système décrivant les périphériques.

- `/dev/hda` est le premier disque dur IDE reconnu par le système.
- `/dev/hda1` est la 1ère partition de ce disque dur.
- `/dev/cdrom` est le lecteur cd.

### `/etc/` editing text configuration

Ce répertoire contient l'ensemble des fichiers de configuration du système. Lorsque vous désirez changer quelque chose au système qui impacte tous les utilisateurs de votre ordinateur - comme votre connexion Internet ou bien un changement de carte vidéo - vous aurez probablement à vous loguer en `root` et à modifier un fichier dans `/etc/`.

Contient les fichiers de configuration du système.

- `/etc/fstab` est le fichier décrivant les points de montages à monter au démarrage du système.
- `/etc/passwd` est le fichier listant les utilisateurs du système.
- `/etc/group` est le fichier listant les groupes du système.

Contient de nombreux sous répertoires importants, par exemple :

- `/etc/X11/` fichiers de config de Xwindow (serveur du bureau graphique)
- `/etc/init.d/` scripts de démarrage des différents services
- `/etc/cron/` les tâches à mettre automatiquement en route (= planificateur de tâches)
- `/etc/skel/` les fichiers à recopier automatiquement à la création d'un utilisateur

Contient des sous répertoires pour des applications

- `/etc/samba/` qui contient les fichiers de config de samba (`samba.conf`)

### `/home/`

(= `Documents And Settings` sous Windows)

C'est l'endroit où l'on place le répertoire personnel de tous les utilisateurs normaux - c'est-à-dire tous sauf le `root`.
Chaque répertoire personnel est appelé du nom de l'utilisateur; par exemple `/home/jane`.
Si vous utilisez un système de taille conséquente, comme pour une école ou une entreprise,
votre administrateur système a peut-être créé des répertoires supplémentaires pour contenir les répertoires personnels:
`/home1` et `/home2` par exemple.
Dans d'autres systèmes, on peut apercevoir un niveau supplémentaire de sous-répertoire :

```text
/home/eleves/nomdutilisateur,
/home/equipe/nomdutilisateur, etc...
```

Votre répertoire personnel est l'endroit où vous placez vos travaux personnels, votre courrier électronique et
tous les autres documents, ainsi que vos fichiers de configurations personnelles.
C'est votre "chez vous" dans le système...

Les fichiers de configuration sont généralement cachés.

Parmi les fichiers importants :

- `.bashrc` qui est un script exécuté à chaque connexion. Permet de définir des alias, des commandes ou de positionner des variables d'environnement.
- `.bash_logout` idem mais lors de la déconnexion
- `.bash_history` historique des commandes utilisées

### `/lib/` libraries

Contient les librairies partagées utilisées par le système et les applications.

`/lib/modules/` contient les modules additionnels du noyau.
`/lib64/` idem que `/lib/` mais version 64bit

### `/lost+found/`

Les fichiers abimés ou trouvés après un crash du sytème vont ici.

### `/media/`

Point de montage pour les médias amovibles. (CDROM, disquettes, clés USB, ...)

### `/mnt/` mount

Points de montage pour le système de fichiers.

### `/opt/` optionnal

Logiciels optionnels.

Répertoire cross-distribution.

Par exemple Chrome s'installe dans `/opt/chrome/`.

### `/proc/` process

Fichiers permettant d'accéder à des infos sur le matériel, la config du noyau, et les processus en cours d'exécution.

Les fichiers `uptime`, `stat`, `meminfo`, `cpuinfo` contiennent des infos sur l'état du système.

Pour chaque processus actif, un répertoire est créé du nom du `PID` du processus.

Chacun de ces dossiers contient les fichiers suivants :

- `cmdline` qui contient la ligne de commande utilisée pour lancer l'application
- `status` qui contient des infos sur l'état du processus (attente, exec, etc …)
- `exe` qui est un lien vers le fichier exécutable du processus

### `/root/`

Répertoire de l'utilisateur `root`.

Attention à la confusion avec la racine du FHS (`/`) en discutant en anglais.

### `/sbin/` system binaries

Contient des utilitaires pour l'administration du système.
Par exemple, `halt`, `reboot`, `ifconfig`, `fdisk`, `iptables`, ...

### `/srv/` services

Données pour les services hébergés par le système. Par exemple sites web, FTP, ...

### `/tmp/` temporary

Données temporaires. Est vidé à chaque démarrage. Possède le `StickyBit` (cf gestion des droits.)

Correspond au `Temp` (système et utilisateur) sur windows

### `usr` Unix System Ressource

Contient toute une série de sous dossiers semblables à ceux de la racine (`/`) mais qui ne sont pas nécessaires au fonctionnement minimal du système.

En d'autres termes, les fichiers y figurant ne sont pas considérés comme vitaux pour le système.

Par exemple :

- `/usr/bin/` exécutables en complément de `/bin/`
- `/usr/include/` headers des librairies partagées
- `/usr/lib/` librairies partagées
- `/usr/sbin/` scripts et exécutables en complément pour l'administration du système. (`addgroup`, `adduser`, `dpkg-reconfigure`, ...)
- `/usr/src/` les sources du noyau et des programmes
- `/usr/man`, `/usr/doc`, `/usr/info` manuel linux, documentation et pages d'infos.

### `/var/` variables

Fichiers variables, bases de données, sites web, …

`/var/log/` contient les logs du système

## Noms

- tous les caractères alphanumériques plus la ponctuation sont des caractères valides
- pas de notion d'extention de fichier
- pas de caractères accentués
- distingue les minuscules des majuscules (`monfichier` et `monFichier` sont deux fichiers distincts !)

## Chemins

- L'arborescence du filesystem part de la racine `/`
- Les répertoires sont séparés par des `/`
- Un fichier est identifié par son **chemin absolu** depuis la racine du filesystem `/repertoire-1/repertoire-2/fichier`
- Le répertoire parent est identifié par `..`
- Le répertoire courant est identifié par `.`
- Un fichier peut être identifié par son chemin relatif par rapport au répertoire courant `./repertoire-2/fichier` si l'on est dans `/repertoire-1/`

## Types de fichiers

### exécutable

Forme binaire (exécutable) des programmes.

### répertoire

Collection de répertoire et de fichiers.

### lien

Pointeur vers un autre fichier.

Se crée avec la commande `ln`.

#### lien symbolique

Un simple pointeur

`ln -s fichier-a-pointer nom-du-lien`

#### lien physique

Comme un lien symbolique mais le lien occupe autant d'espace disque que le fichier référencé.

`ln fichier-a-pointer nom-du-lien`

### fichier

Le fichier standard, ce n'est ni un exécutable, ni un répertoire ni un lien.

### fichier caché

Un fichier normal mais préfixé par un `.`.

Ne sera pas affiché par les commandes de listage des fichiers sauf option particulière.

`ls -l` va lister les fichiers du répertoire courant sauf les fichiers cachés.

`ls -la` va lister les fichiers du répertoire courant ainsi que les fichiers cachés.

## Navigation

`pwd` (print working directory) permet de connaitre le répertoire courant (working directory)

La commande `cd` (change directory) permet de naviguer dans le FHS en changeant le répertoire courant.

- `cd ..` change la working directory pour le répertoire parent du répertoire courant actuel.
- `cd ../..` change la working directory pour le répertoire parent du répertoire parent du répertoire courant actuel.
- `cd /` change la working directory pour la racine du FHS.
- `cd /home` change la working directory pour le répertoire `home` en partant de la racine (chemin absolu).
- `cd home` change la working directory pour le répertoire `home` contenu dans la working directory courante.
- `cd ../home` change la working directory pour le répertoire `home` contenu dans le parent de la working directory courante.

## Commandes

- `rm` Supprime un fichier ou un répertoire.
- `mv` Déplace ou renomme un fichier ou un réperoire.
- `mkdir` Crée un réperoire.
- `rmdir` Supprime un répertoire.
- `cp` Copie un fichier ou un répertoire.
- `pwd` Affiche le chemin du répertoire courant.
- `cd` Se déplace dans le système de fichier.
- `ls` Affiche la liste des fichiers et répertoires.
- `ln` Crée un lien vers un fichier.

## Meta-caracteres

`*` remplace zéro, un ou plusieurs caractères dans l'expression où il apparait.

Par exemple : `ls -l *.json` liste tous les fichiers `.json` du répertoire courant.

`?` remplace un seul caractère dans l'expression où il apparait.

Par exemple : `ls -l ??ok.json` liste tous les fichiers ayant deux caractères suivis de `ok.json` dans le répertoire courant.
