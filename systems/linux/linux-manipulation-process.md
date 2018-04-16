# manipulation des processus

## `ps`

[The `ps` Command - www.linfo.org](http://www.linfo.org/ps.html)

lister tous les processus actifs sur le système

```bash
$ ps -ef
```

filtrer la liste précédente avec des mots clefs

```bash
# filtrer la liste avec le mot clef "jboss"
$ ps -ef | grep jboss
```

