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
