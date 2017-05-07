# git workflow

## differents sources for brainstorming
- [A successful git branching model](http://nvie.com/posts/a-successful-git-branching-model/) ([diagram](http://nvie.com/img/git-model@2x.png))
- [differents workflow comparison](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [GitLab workflow](http://doc.gitlab.com/ee/workflow/gitlab_flow.html) (Continuous Delivery oriented)
- [Feature driven development](https://en.wikipedia.org/wiki/Feature-driven_development)
- [merge fast-forward vs no-ff](http://stackoverflow.com/a/2850413)
- [Pull Request Merge Strategies: The Great Debate](https://developer.atlassian.com/blog/2014/12/pull-request-merge-strategies-the-great-debate/)
- [Pull request versus Merge request](http://stackoverflow.com/questions/22199432/pull-request-vs-merge-request)

## git workflow list

- [Centralized workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow)
- [Feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
- [Anti-Gitflow workflow](http://endoflineblog.com/gitflow-considered-harmful)
- [git DMZ workflow](https://gist.github.com/djspiewak/9f2f91085607a4859a66) (Continuous Delivery oriented possible but not mandatory)
- [GitLab workflow](http://doc.gitlab.com/ee/workflow/gitlab_flow.html) (Continuous Delivery oriented)
- [github flow](http://www.nicoespeon.com/fr/2013/08/quel-git-workflow-pour-mon-projet/#le-github-flow) (Continuous Delivery oriented) (best one, simple : A single branch, always deployable. Every dev is branched from this branch)
- [Shared repository workflow (same as github flow)](https://gist.github.com/seshness/3943237) (Continuous Delivery oriented)
- [Simple git flow](http://blogs.atlassian.com/2014/01/simple-git-workflow-simple/) (Continuous Delivery oriented)


## merging strategy
In a **CI strategy** you can merge in master at the start of the day to prevent painful merges at a later time.
In a **synchronization point strategy** you only merge in from well defined points in time, for example a tagged release.

### synchronization point strategy
Based on [an email from Linus Torvalds](https://www.mail-archive.com/dri-devel@lists.sourceforge.net/msg39091.html) about merging strategy for linux dev.

#### TLDR
Goals : I want clean history, but that really means (a) clean and (b) history.

##### clean
- People can (and probably should) rebase their _private_ trees (their own work). That's a _cleanup_.
- But never other peoples code. That's a "destroy history".

##### history
- Keep your own history readable
- Don't expose your crap.
- Don't merge _upstream_ (ie : pull) code at random points.
- Don't merge _downstream_ (ie : push) code at random points either.

### Continuous Integration strategy
Based on [Martin Fowler quotes](http://martinfowler.com/bliki/FeatureToggle.html) in [gitlab documentation](http://doc.gitlab.com/ee/workflow/gitlab_flow.html#do-not-order-commits-with-rebase).
> If your feature branches commonly take more than a day of work, look into ways to create smaller units of work and/or use feature toggles.

##### pros
- merge your work every day
- pull others work every day
- CI oriented
- painless merge
- easier for devs to handle

##### cons
- feature flipping is mandatory to be able to deliver a clean product
- history is fucked up
