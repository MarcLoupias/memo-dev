# tools - release workflow

By release workflow, i mean all the tasks starting to the commit to be published (excluding Work In Progress, aka WIP commits, to be squashed).

The tasks are :

- commit to be released
- CHANGELOG generation
- CHANGELOG commit
- tagging
- npm packaging
- git push
- git PR/MR (Pull Request / Merge Request) resolution (including CI job)
- release to npm registry or deploy to environment (depending of the deliverable nature)

The operational workflow varies depending on *where* theses tasks are executed.

They can be executed on the developer computer or/and in the CI pipeline.

The release workflow is highly coupled the Git workflow, anyway this is another matter.

We could resume the release workflow this way :

```text

commit ---> CHANGELOG ---> tag ---> merge

                            |
                            |
                            V

                         package ---> release

```

## foundation basics

Theses tools are based on Git, a common commits messages convention, the semver specification and obviously npm.

### codebase (Git)

The famous [Source Control Manager](https://git-scm.com/).

Manage the codebase contained in a repository.

### codebase revisions (Git commits messages convention)

Popularized by AngularJS team. Can be [found here](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

Each codebase revision is hold in a commit. Each commit contain a commit message.

Commit message standardization leads to :

- CHANGELOG generation automation.
- version generation (tagging) automation.

### versions system (Semver)

Popularized by npm to manage the version system.

[Dedicated website semver.org](https://semver.org/).

It is about how to structure a version number and for what meaning.

### deliverable management (npm)

The [node package manager](https://www.npmjs.com/).

- Manage the dependencies in a project.
- Structure the deliverable (named "package" in npm world), the npm registry store the deliverable. Users download packages from it.

The following npm CLI commands are especially involved :

- [`npm version`](https://docs.npmjs.com/cli/version.html)
- [`npm pack`](https://docs.npmjs.com/cli/pack.html)

Commands like `npm build`, `npm test`, `npm ci` are obviously also involved, but they are already involved in the development process.

### articles

[These 6 essential tools will release, version, and maintain your NPM modules for you - hackernoon.com - 20180425](https://hackernoon.com/these-6-essential-tools-will-maintain-your-npm-modules-for-you-4cbbee88e0cb)

> - Automate your releases and semantic versioning with `semantic-release`
> - Use `commitizen` with `cz-convential-changelog` to capture additional details about each commit
> - Run Automated Tests that generate Code Coverage reports
> - Maintain coverage standards with `Codecov`
> - Ensure consistent code formatting, and avoid simple mistakes by Linting your code
> - Keep your dependencies up to date with `GreenKeeper`

[Semantic Release with Lerna and Conventional Commits - michaljanaszek.com/blog - 20180616](https://michaljanaszek.com/blog/lerna-conventional-commits)

> In this tutorial, I will show you how to configure Lerna with Conventional Commits to achieve automatic Semantic Release based only on the history of commits.
>
> Conventional Commits + Conventional Changelog + Semantic Release + Commitlint

## tools overview

### monorepo management

[lerna/lerna - github.com](https://github.com/lerna/lerna) / [lernajs.io](https://lernajs.io/)

> A tool for managing JavaScript projects with multiple packages

Lerna config belongs to `lerna.json` file.

Logs goes into `lerna-debug.log` file.

**Features**

- Version / tag management in 2 modes :
    - Fixed/Locked mode (every package got the same version number / tag)
    - Independent mode (each package got his own version number / tag)
- Common `devDependencies` (hoisting of common dependencies, most of the `devDependencies` are commons)

### dependencies automatic management

[greenkeeper.io](https://greenkeeper.io/) [greenkeeperio - github.com](https://github.com/greenkeeperio)

> Get safety & consistency with real-time monitoring and automatic updates for npm dependencies

### commit message management

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)

> A specification for adding human and machine readable meaning to commit messages

Commit message structure :

```text
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

[conventional-changelog/commitlint - github.com](https://github.com/conventional-changelog/commitlint)

> Lint commit messages

[commitizen/cz-cli - github.com](https://github.com/commitizen/cz-cli)

> The commitizen command line utility.

[commitizen/cz-conventional-changelog - github.com](https://github.com/commitizen/cz-conventional-changelog)

> A commitizen adapter for the angular preset of [conventional-changelog](https://github.com/conventional-changelog).

### `CHANGELOG.md` management

[npmtrends.com comparison](https://www.npmtrends.com/standard-version-vs-semantic-release-vs-conventional-changelog-vs-generate-changelog-vs-@semantic-release/github-vs-@semantic-release/release-notes-generator-vs-@semantic-release/npm)

2 years time range give a better view :

- **generate-changelog** have really low usage.
- **conventional-changelog** is the older and the most used but adoption seems stable.
- **semantic-release** is growing quite fast since mid-2018, close to **conventional-changelog** adoption and still growing.

#### lob/generate-changelog

[lob/generate-changelog - github.com](https://github.com/lob/generate-changelog)

The simpler one.

Limited to the `CHANGELOG.md` file generation.

Recommendations available for the tag and push tasks.

#### conventional-changelog

**Executed on the developer computer manually by the developer.**

[conventional-changelog - github.com](https://github.com/conventional-changelog)

[standard-version](https://github.com/conventional-changelog/standard-version) is the high level entry point repo.

`standard-version` does the following:

1. bumps the version in metadata files (package.json, composer.json, etc).
2. uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to update _CHANGELOG.md_
3. commits _package.json (et al.)_ and _CHANGELOG.md_
4. tags a new release

**Others tools**

[releaser-tools - github.com/conventional-changelog](https://github.com/conventional-changelog/releaser-tools)

> Create a GitHub/GitLab/etc. release using a project's commit messages and metadata.

#### semantic-release

**Executed by a CI job.**

[semantic-release - github.com](https://github.com/semantic-release)

[semantic-release - semantic-release.gitbook.io](https://semantic-release.gitbook.io/semantic-release/)

> **semantic-release** automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.
>
> This removes the immediate connection between human emotions and version numbers, strictly following the [Semantic Versioning](http://semver.org) specification.

#### conventional-changelog versus semantic-release

[explain the relationship to semantic-release - github.com/conventional-changelog](https://github.com/conventional-changelog/standard-version/issues/3)

[How is it different than `semantic-release` - github.com/conventional-changelog](https://github.com/conventional-changelog/standard-version/issues/22)

> [`semantic-release`](https://github.com/semantic-release/semantic-release) is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry.
>
> `standard-version` is different because it handles the versioning, changelog generation, and git tagging for you **without** automatic pushing (to GitHub) or publishing (to an npm registry). Use of `standard-version` only affects your local git repo - it doesn't affect remote resources at all. After you run `standard-version`, you still have to ability to review things and correct mistakes if you want to.
>
> They are both based on the same foundation of structured commit messages (using [Angular format](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)), but `standard-version` is a good choice for folks who are not yet comfortable letting publishes go out automatically. In this way, you can view `standard-version` as an incremental step to adopting `semantic-release`.
