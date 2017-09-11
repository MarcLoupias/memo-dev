# git tips & tricks

[Protips de Christophe Porteneuve : Devoxx2016](http://tdd.github.io/devoxx-git-protips/?utm_source=porteneuve&utm_medium=slides&utm_campaign=devoxxfr-2016#/)

## cloning

```
# cloning a repository in a specific folder
git clone <url> <dir_name>
```

## branch

```
# list local branch
git branch -l

# list all branches (remote and local, tracked and untracked) : git remote show [remote]
git remote show origin

* remote origin
  Fetch URL: https://github.com/OneBusAway/onebusaway-android
  Push  URL: https://github.com/OneBusAway/onebusaway-android
  HEAD branch: master
  Remote branches:
    amazon-rc2                   new (next fetch will store in remotes/origin)
    amazon-rc3                   new (next fetch will store in remotes/origin)
    arrivalStyleBDefault         new (next fetch will store in remotes/origin)
    develop                      tracked
    master                       tracked
    refs/remotes/origin/branding stale (use 'git remote prune' to remove)
  Local branches configured for 'git pull':
    develop merges with remote develop
    master  merges with remote master
  Local refs configured for 'git push':
    develop pushes to develop (local out of date)
    master  pushes to master  (up to date)

# delete local branch
git branch -d <branch_name>

# delete a local branch with diff from other branch
git branch -D <branch_name>
```

## working directory

```
# change working directory with HEAD of branch_name
git checkout <branch_name>

# change working directory with last branch 
git checkout -

# create and pull a remote branch from a remote
git checkout -b <new_branch> origin/<new_branch>

# create a local branch, do stuff, then push that new branch to the remote repo
git checkout -b mynewfeature
... edit files, add and commit ...
git push -u origin mynewfeature
```

## commit management

```
# delete last commit (will not delete modifications, just the commit)
git reset HEAD^

# delete the 3 last commits (will not delete modifications, just the commits)
git reset --soft HEAD~3

# delete the 3 last commits (including last modifications)
git reset --hard HEAD~3

# rename last commit msg
git commit --amend -m "New commit message"

# rollback local repo after a git pull
use git log to find the hash of the desired commit
then git reset --hard 1234abcd where 1234abcd is the hash of the desired commit.
```

## commit message management

[How to commit a change with both "message" and "description" from the command line? : stackoverflow.com](https://stackoverflow.com/questions/16122234/how-to-commit-a-change-with-both-message-and-description-from-the-command-li/22909204#22909204)

## diff

```
# checking difference between 2 branches and put that log into a file
git diff main-branch..alt-branch > file.name.diff
```

## merge management

```
# cancel a merge (git version >= 1.7.4)
git merge --abort

# merge conflict in favor of "their" changes (origin changes)
git merge --strategy-option theirs
```

## cherry-pick

```
# cherry-pick a specific commit from one branch to another 
# (https://ariejan.net/2010/06/10/cherry-picking-specific-commits-from-another-branch/)
# here master is the targeted branch (ie : where the commit will go)
git checkout master
git cherry-pick 1234abcd
```

### cherry-pick from another repo

[source : git-cherry-pick-from-another-repository : 20160913](https://coderwall.com/p/sgpksw/git-cherry-pick-from-another-repository)

```
# Cloning our fork
$ git clone git@github.com:ifad/rest-client.git

# Adding (as "endel") the repo from we want to cherry-pick
$ git remote add endel git://github.com/endel/rest-client.git

# Fetch their branches
$ git fetch endel

# List their commits
$ git log endel/master

# Cherry-pick the commit we need
$ git cherry-pick 97fedac
```

## files tracking

```
# removing a directory from git tracking without deleting it locally
# first, add the folder to the .gitignore file
# then
git rm -r --cached path_to_your_folder/
```

```
# ignore changes on tracked files
git update-index --assume-unchanged README.md

# list ignored files
git ls-files -v | grep '^h'

# rollback
git update-index --no-assume-unchanged README.d
```

## log

```
# print a log filtered on commit message with regex
git log --grep 'regex'
```

```
# print a log filtered on commit content (+ lines & -lines) with regex
git log -G 'regex'
```

```
# print a log filtered on author name
git log --author="automatix"
```

```
# print a log filtered since commit date
git log --since="2013-01-30"
# print a log filtered until commit date
git log --until="2013-01-30"
```

```
# print a log with a list of modified files
git log --stat
```

```
# print a log of all commits from all branches (just active branch by default)
git log --all
```

```
# print a condensed log where each commit is one line 
git log --oneline
```

```
# print a graphic log in console 
git log --graph
```

```
# print a graphic log in console from all branches where a commit is only one line
git log --graph --oneline --all
```
