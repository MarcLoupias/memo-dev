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

## `kill`

[The `kill` man page](https://man7.org/linux/man-pages/man2/kill.2.html)

`int kill(pid_t pid, int sig);`

[Availables signals](https://manpages.ubuntu.com/manpages/focal/en/man7/signal.7.html)

| signal    | id   | comment | meaning                                                                                                                                                                                                                                |
| --------- |------| ------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SIGINT`  | `2`  | Interrupt from keyboard | It politely tells the program to terminate. Performs the same function as Ctrl+C. It’s up to the process whether it will listen to it or not.                                                                                          |
| `SIGTERM` | `15` | Termination signal | This is the default signal of the kill command.                                                                                                                                                                                        |
| `SIGKILL` | `9`  | Kill signal | Unlike other signals, the SIGKILL signal is never sent to the process. Instead, the terminal immediately kills the program and the program doesn’t get the time to save its data or clean up its work. Only use this as a last resort. |

And many more ...

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
