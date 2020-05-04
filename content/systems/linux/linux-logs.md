# Linux - logs

Situés dans `/var/log/`

Le compte utilisateur de base ( `/home/<user>/` ) doit être ajouté au groupe `adm` pour avoir le droit de consulter les fichiers de logs.

`auth.log`

Contient toutes les traces de tentatives (réussies ou non) de logs de tous les utilisateurs (y compris root) ainsi que diverses infos associées comme la console utilisée.
boot

`daemon.log`

Contient les traces relatives aux démons en exécution sur le système.

`kern.log`

Traces pour l'activité du Kernel.

`messages`

Divers messages systèmes.

`syslog`

Idem.

`user.log`

Messages relatifs aux utilisateurs.

`dpkg.log`

log du gestionnaire de paquet de Debian

`Xorg.<n>.log`

log de Gnome. 1 fichier par écran ?

`/apt/term.log`

fichier de log de APT le gestionnaire de paquet Debian qui encapsule DPKG.
On peut y lire toutes les traces de manipulation de APT.
