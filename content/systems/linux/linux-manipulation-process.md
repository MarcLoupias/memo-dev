# manipulation des processus

## `ps`

[The `ps` Command - www.linfo.org](http://www.linfo.org/ps.html)

lister tous les processus actifs sur le système

```bash
ps -ef
```

filtrer la liste précédente avec des mots clefs

```bash
# filtrer la liste avec le mot clef "jboss"
$ ps -ef | grep jboss
```

## `htop`

[htop official website](https://hisham.hm/htop/) [`hishamhm/htop` - `github.com`](https://github.com/hishamhm/htop)

> htop is an interactive text-mode process viewer for Unix systems. It aims to be a better 'top'.

[htop explained - peteris.rocks/blog - 20170102](https://peteris.rocks/blog/htop/)

[System process monitoring with Htop - codeforgeek.com - 20141222](https://codeforgeek.com/2014/12/system-process-monitoring-htop/)

### install

```bash
sudo apt-get install htop
```

### view management

**F2** to customize layout (add columns, etc ...).

**F5** to toggle the view between *list view* or *tree view*.

In *list view*, **F6** is used to sort the list.

In *tree view*, **F6** is used to expand / collapse nodes.

Process are colored in white, and threads in green.

Filter the view with **F4** and type the command used to launch the process you want to filter.
For example to filter all Node.js processes just type `node`.

### signals

Select a process and **F9**, it opens a list of signals to send to the process.
