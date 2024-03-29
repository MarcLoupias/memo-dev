# Git - workflow

## differents sources for brainstorming

The main important one, which is "devops compatible" : [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)

### others workflows

- [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) ([diagram](http://nvie.com/img/git-model@2x.png))
- [differents workflow comparison](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [GitLab workflow](http://doc.gitlab.com/ee/workflow/gitlab_flow.html) (Continuous Delivery oriented)
- [Feature driven development](https://en.wikipedia.org/wiki/Feature-driven_development)
- [merge fast-forward vs no-ff](http://stackoverflow.com/a/2850413)
- [Pull Request Merge Strategies: The Great Debate](https://developer.atlassian.com/blog/2014/12/pull-request-merge-strategies-the-great-debate/)
- [Pull request versus Merge request](http://stackoverflow.com/questions/22199432/pull-request-vs-merge-request)
- [A guide to the Kernel Development Process](https://www.kernel.org/doc/html/v4.16/process/development-process.html)

## Git workflow list

- [Centralized workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow)
- [Feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
- [Anti-Gitflow workflow](http://endoflineblog.com/gitflow-considered-harmful)
- [Git DMZ workflow](https://gist.github.com/djspiewak/9f2f91085607a4859a66) (Continuous Delivery oriented possible but not mandatory)
- [GitLab workflow](http://doc.gitlab.com/ee/workflow/gitlab_flow.html) (Continuous Delivery oriented)
- [GitHub flow](http://www.nicoespeon.com/fr/2013/08/quel-git-workflow-pour-mon-projet/#le-github-flow) (Continuous Delivery oriented) (best one, simple : A single branch, always deployable. Every dev is branched from this branch)
- [GitHub Flow - Article Original par Scott Chacon - 20110831](http://scottchacon.com/2011/08/31/github-flow.html) (Scott Chacon est l'auteur de [Pro Git](https://git-scm.com/book/fr/v2) et également employé chez GitHub.)
- [Shared repository workflow (same as GitHub flow)](https://gist.github.com/seshness/3943237) (Continuous Delivery oriented)
- [Simple Git flow](http://blogs.atlassian.com/2014/01/simple-git-workflow-simple/) (Continuous Delivery oriented)
- [Trunk based development](https://trunkbaseddevelopment.com/)
- [Trunk-based Development vs. Git Flow - www.toptal.com - 201705xx](https://www.toptal.com/software/trunk-based-development-git-flow)

[Git team workflows: merge or rebase? - www.atlassian.com/blog - 20131028](https://www.atlassian.com/blog/git/git-team-workflows-merge-or-rebase)

> **Rebase as cleanup:**
>
> - You’re developing locally.
> - Your code is ready for review.
> - Review is done and ready to be integrated into the target branch.
>
> **Rebase team policy:**
>
> *When a feature branch’s development is complete, rebase/squash all the work down to the minimum number of meaningful commits and avoid creating a merge commit*
>
> Pros:
>
> - Code history remains flat and readable.
> - Manipulating a single commit is easy (e.g. reverting them).
>
> Cons:
>
> - Squashing can hide context
> - Rebasing doesn’t play well with pull requests
> - Rebasing can be dangerous!
> - It’s more work
> - you need to force push at some point
>
> **Merge team policy:**
>
> *When a feature branch is complete merge it to your target branch (master or develop or next).*
>
> Pros:
>
> - Traceability
>
> Cons:
>
> - History can become intensely polluted by lots of merge commits

## opensource contrib on GitHub

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

> - Introduction to GitHub 0:47
> - Exploring GitHub 1:47
> - Exploring a Repository 4:07
> - How to install Git SCM 2:15
> - How to authenticate with GitHub using SSH 3:34
> - Identifying How to Contribute to an Open Source Project on GitHub 2:15
> - How to Fork and Clone a GitHub Repository 2:41
> - Setting up the project locally 1:18
> - How to create a Pull Request on GitHub 6:19
> - How to Collaborate on a Pull Request on GitHub 2:21
> - How to update a Pull Request on GitHub 2:57
> - How to rebase a Git Pull Request branch 3:39
> - How to squash multiple Git commits 2:53
> - Getting a Pull Request Merged and Wrapping up 1:13

## merging strategy

[Dilemne avec worklow Git et intégration continue - www.developpez.net/forums - 2016](https://www.developpez.net/forums/d1599839/general-developpement/alm/usine-logicielle/dilemne-worklow-git-integration-continue/)

In a **CI strategy** you can merge in master at the start of the day to prevent painful merges at a later time.
In a **synchronization point strategy** you only merge in from well defined points in time, for example a tagged release.

### synchronization point strategy

Based on [an email from Linus Torvalds](https://www.mail-archive.com/dri-devel@lists.sourceforge.net/msg39091.html) about merging strategy for linux dev.

#### TLDR

Goals : I want clean history, but that really means (a) clean and (b) history.

##### clean

- People can (and probably should) rebase their *private* trees (their own work). That's a *cleanup*.
- But never other peoples code. That's a "destroy history".

##### history

- Keep your own history readable
- Don't expose your crap.
- Don't merge *upstream* (ie : pull) code at random points.
- Don't merge *downstream* (ie : push) code at random points either.

### Continuous Integration strategy

Based on [Martin Fowler quotes](http://martinfowler.com/bliki/FeatureToggle.html) in [GitLab documentation](http://doc.gitlab.com/ee/workflow/gitlab_flow.html#do-not-order-commits-with-rebase).

> If your feature branches commonly take more than a day of work, look into ways to create smaller units of work and/or use feature toggles.

#### pros

- merge your work every day
- pull others work every day
- CI oriented
- painless merge
- easier for devs to handle

##### cons

- feature flipping is mandatory to be able to deliver a clean product
- more difficult for dev to handle
