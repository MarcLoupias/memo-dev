# Git - definitions

## what is Git

- a distributed version control system
- a directory content management system
- a tree history storage system
- a stupid content tracker

## concepts

[glossary](https://git-scm.com/book/commands)

[Comprendre Git - ancien blog de Xavier Pigeon - 2012](http://xpn-engine.blogspot.com/2012/01/comprendre-git.html)

> *Article intéressant avec une approche travaillée sur l'implémentation interne :*
>
> Git est un :
>
> - gestionnaire de contenu,
> - stocké sous la forme d'un graphe acyclique d'objets,
> - accessible par des références.
>
> Git est structuré en 2 partie :
>
> - le **frontend**, qui regroupe les commandes dites porcelain (add, commit, checkout, etc).
> - le **backend**, développé par Linus Torvalds, qui réunit les commandes dites plumbing (hash-object, cat-file).
>
> On retrouve cette distinction dans la littérature informatique et dans les formations : souvent, les formations pour débutants présentent le frontend, et le backend ne sera traité que par les formations avancées. Les dissocier de cette manière est une erreur, car en maîtrisant le backend, on maîtrisera bien mieux le frondend.
>
> Concept #1 : Git est un gestionnaire de contenu.
> Concept #2 : La relation entre commits est un graphe acyclique (ou DAG).
> Concept #3 : Le contenu est accessible sous forme de références.

### repository

Named also a *tree* by some Git users.
It is the whole history of a project (a directory).
Composed by commits. Each node is a commit.
Created by `git init` command (or by `git clone` if you want to copy an existing repository).
Create a self-sufficient `.git` directory. It means that a simple zip on the repository root directory is enough to backup it.

### bare repository

A repository created with `git init` command is for **working**.
A repository created with `git init --bare` command is for **sharing**.
A bare repository doesn't contain a working directory nor a `.git` directory.
GitHub, GitLab, etc ..., create a bare repository on their side.

[What is a bare Git repository : www.saintsjd.com](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/)

Notice that you can add to your remote list a `non-bare` repository but you will not be able to push in it if the branch where
you want to push is checked out in it, Git will deny the push (cause possible inconsistency).

It can be bypassed by setting the `receive.denyCurrentBranch` config variable in the receiver repo to `'ignore'` or `'warn'` but it is not recommended.

### working directory

[difference between working copy and working directory - groups.google.com - `git-users`](https://groups.google.com/forum/#!topic/git-users/PVDjjQ5bE10)

Literally it is the directory where the user is working ;)

A `git status` on a working directory without any changes tracked by Git output this :

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```

### remote

A remote is a distant repository (a repo on another computer).

### commit

Also named *revision*.
It is a state of a directory.
Each commit has one ore more parents commit.
Git stores only the difference between current commit state and parents. So a commit = current project state - parents.

[Comment faire un commit sans faire du Git (Alexandre Garnier) : Devoxx2016](https://www.youtube.com/watch?v=Hd_UpJPDlik&index=88&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)

### branch

A "branch" is an active line of development.
The most recent commit on a branch is referred to as the tip of that branch. The tip of the branch is referenced by a branch head, which moves forward as additional development is done on the branch.

### tag

A ref pointing to a tag or commit object. In contrast to a head, a tag is not changed by a commit.

### merge

`git merge` is the action of merging a source branch in a destination branch.

If the destination branch have not diverged from the root of the source branch, the merge is a fast-forward.

```text
-- M1
    \
     B1 - B2 - B3
```

At the end, the two branches will points on the same commit.

```text
-- M1 - B1 - B2 - B3
```

If the destination branch have diverged from the root of the source branch,

```text
-- M1 - M2
    \
     B1 - B2 - B3
```

Git will create a merge commit containing all the modifications.

```text
-- M1 - M2 - - - M3
    \            /
     B1 - B2 - B3
```

### rebase

`git rebase` allows user to rewrite the history.

```text
-- M1 - M2
    \
     B1 - B2 - B3
```

At this point, instead of merging, we can rewrite our branch history, the goal is to set the B1 parents to M2 instead of M1 :

```text
-- M1 - M2
         \
         B1 - B2 - B3
```

Now we can run a fast-forward merge to keep a clean linear history :

```text
-- M1 - M2 - B1 - B2 - B3
```

### fetch

`git fetch` is the action to update a given remote repository data locally. (you have a local occurrence of all the remote you have added to your remote list).

### pull

`git pull <remote-name> <branch-name>` runs a `git fetch` on the given remote then a `git merge` on the local branch from the remote branch.

### push

Obviously, write access is mandatory on the remote
`git push <remote-name> <branch-name>` write the local branch commits on the remote branch.
The history must be clean enough to allow a fast forward or Git will reject the push.

### range operators

Used mostly with `git log` and `git diff` commands. Provide a tool to compare branches and tags.

Difference depends on the command context. Log work with commits where diff work with commit content.

[What are the differences between double-dot “..” and triple-dot “…” in Git commit ranges? : stackoverflow.com](https://stackoverflow.com/questions/462974/what-are-the-differences-between-double-dot-and-triple-dot-in-git-com)

[What are the differences between double-dot “..” and triple-dot “…” in Git diff commit ranges? : stackoverflow.com](https://stackoverflow.com/questions/7251477/what-are-the-differences-between-double-dot-and-triple-dot-in-git-dif)

#### `..` (dot dot)

```bash
$ git log A..B
# output all of the commits that B has that A doesn't have
```

```bash
$ git diff A..B
# exactly the same as
$ git diff A B
# output all the difference between A and B, if A got diff that B doesn't have and B has diff that A doesn't have, it will output BOTH.
```

#### `...` (dot dot dot)

```bash
$ git log A...B
# filter out all of the commits that both A and B share, thus only showing the commits that they don't both share
```

```bash
$ git diff A...B
# output only the commits in B that A doesn't have (compare from the root of the 2 branches)
```

### ancestry references

Used in a lot of commands stuck with `HEAD` ref to points to ancestors commits.

[What's the difference between HEAD^ and HEAD~ in Git? : stackoverflow.com](https://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git)

- `~` specifies ancestors
- `^` specifies parents

Ancestors are related to the current branch.

A commit can have more then one parent, caret is used to select the parent.

Let's say we have this tree :

```text
-- A1 - A2 - - - A3
    \            /
     B1 - B2 - B3
```

where `HEAD` is `A3`.

#### `^` (caret)

```text
HEAD^ is a shortand for HEAD^1
HEAD^=A2
```

```text
HEAD^^ = HEAD^1^1 = A1
```

```text
HEAD^2 = B3
```

```text
HEAD^2^1 = B2
```

```text
HEAD^2^2 = nothing as B3 has only one parent (B2)
```

#### `~` (tilde)

```text
HEAD~ is a shortand for HEAD~1
```

```text
HEAD~2 = A1
```

```text
HEAD^2~2 = B1
```
