# Understanding Tracking Branches in Git
- [source] (http://www.lornajane.net/posts/2014/understanding-tracking-branches-in-git)
- [git-scm.com - Git-Branching-Remote-Branches **must read**] (https://git-scm.com/book/it/v2/Git-Branching-Remote-Branches)

## What is a tracking branch?

This is a branch which knows which remote branch it is related to, and making this link allows us to take advantage of some neat git tricks. In particular:

- You can `git push` or `git pull` without specifying remote or branch and it will use its tracking sister branch by default
- The `git status` command will include information about how far behind your tracking branch you are - useful to remind you that you haven't pushed your changes yet! It looks like this:

```
$ git status
# On branch branch1
# Your branch is ahead of 'origin/branch1' by 1 commit.
#   (use "git push" to publish your local commits)
#
nothing to commit, working directory clean
```

## Which branches are tracking what?

Let's start with getting a handle on what branches are currently tracking other branches, using `git branch -vv`

```
$ git branch -vv
  branch1    c98bacf [origin/branch1] A random change of 24459 to ideas2.txt
  experiment 09a0eb9 A random change of 16603 to list2.txt
* master     09a0eb9 [origin/master] A random change of 16603 to list2.txt
```

This shows three branches, two of them are tracking branches on another remote. It's common for the branches to have the same names on the various remotes but it's only a convention; you can actually call them anything you like (but beware of getting confused!)

## Remove a current tracking relationship

`git branch --unset-upstream`

## Link a branch to an upstream branch

If you're pushing a branch (even if it exists in both places) to a remote location and you want to create the link:
```
$ git push -u origin feature
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (9/9), 746 bytes | 0 bytes/s, done.
Total 9 (delta 2), reused 0 (delta 0)
To /home/lorna/.../scripts/origin.git
 * [new branch]      feature -> feature
Branch feature set up to track remote branch feature from origin.
```
If you're creating a local version of an existing remote branch:
```
$ git fetch origin
remote: Counting objects: 9, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 9 (delta 2), reused 0 (delta 0)
Unpacking objects: 100% (9/9), done.
From /home/lorna/.../scripts/origin
 * [new branch]      feature    -> origin/feature
```
Then:
```
$ git checkout feature
Branch feature set up to track remote branch feature from origin.
Switched to a new branch 'feature'
```
Addenda : If you have already an existing remote branch (`upstream` is the remote alias):
```
git checkout foo
git branch -u upstream/foo
```
or 
```
git branch -u upstream/foo foo
```

## Which branches get pushed/pulled?

This is an area of confusion because the defaults changed between versions of git. Take a look at your config (use `git config --list`) and find a setting called `push.default`. The usual default is `simple` which will only push/pull the branch to/from the branch you're currently on and the one it tracks. You can optionally set this to be `matching` (this was once the default) which will then push/pull all changes between all branches and their remote tracking sisters. Sometimes this second option is cumbersome if you have a branch that is not the one you're working on get into a state where it won't merge!
