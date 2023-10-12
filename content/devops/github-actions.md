# devops - GitHub Actions

## overview

[Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

### GHA YAML API documentation

[About YAML syntax for workflows](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)

### workflow

A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

Workflows are defined in the `.github/workflows` directory in a repository.

You can reference a workflow within another workflow. For more information, see [Reusing workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows).

[Using workflows](https://docs.github.com/en/actions/using-workflows)

### event

An event is a specific activity in a repository that triggers a workflow run. For example, activity can originate from GitHub when someone creates a pull request, opens an issue, or pushes a commit to a repository.

[Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

[YAML `on`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on)

### job

A job is a set of `steps` in a workflow that is executed on the same runner.
Each step is either a shell script that will be executed, or an action that will be run.
Steps are executed in order and are dependent on each other.
Since each step is executed on the same runner, you can share data from one step to another.
For example, you can have a step that builds your application followed by a step that tests the application that was built.

[Using jobs](https://docs.github.com/en/actions/using-jobs)

[YAML `jobs`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobs)

Each job is executed on a dedicated runner, see [this issue for impacts](https://github.com/actions/checkout/issues/19).

#### shared jobs

Jobs can be shared between workflows.

- [GitHub Actions: sharing/referencing jobs between workflows](https://stackoverflow.com/questions/61211405/github-actions-sharing-referencing-jobs-between-workflows)
  - [Reusing workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
  - [Allow reusable workflows to be located at arbitrary locations and be local](https://github.com/actions/runner/issues/1493)

### action

An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task.
Use an action to help reduce the amount of repetitive code that you write in your workflow files.

You can write your own actions, or you can find actions to use in your workflows in the GitHub Marketplace.

[Creating actions](https://docs.github.com/en/actions/creating-actions)

[Finding and customizing actions](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions)

[Actions marketplace](https://github.com/marketplace?type=actions)

#### common actions

##### repo checkout

[`actions/checkout@v4`](https://github.com/actions/checkout)

##### platform set up

[`actions/setup-node@v3`](https://github.com/actions/setup-node)

[`denoland/setup-deno@v1`](https://github.com/denoland/setup-deno)

##### persist data

- [`actions/upload-artifact@v3`](https://github.com/actions/upload-artifact)
- [`actions/download-artifact@v3`](https://github.com/actions/upload-artifact)

#### using an action in a job step

[YAML `jobs.<job_id>.steps[*].uses`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses)

### runner

A runner is a server that runs your workflows when they're triggered.
Each runner can run a single job at a time.
GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine.

[About larger runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners)

[Hosting your own runners](https://docs.github.com/en/actions/hosting-your-own-runners)

#### define the runner in a job

[YAML `jobs.<job_id>.runs-on`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on)

## cache management

- [Caching dependencies to speed up workflows](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)
- [GitHub Actions — How To Share Data Between Jobs](https://levelup.gitconnected.com/github-actions-how-to-share-data-between-jobs-fc1547defc3e)
- [`bahmutov/npm-install@v1](https://github.com/bahmutov/npm-install)
- [Do Not Let NPM Cache Snowball on CI](https://glebbahmutov.com/blog/do-not-let-npm-cache-snowball/)

## links

[GitHub Actions workflows](https://docs.github.com/en/actions/quickstart)

- [About YAML syntax for workflows](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)
- [GitHub Actions doc](https://docs.github.com/en/actions/quickstart)
- [GitHub Actions starter workflows](https://github.com/actions/starter-workflows)
- [semantic-release GHA doc](https://semantic-release.gitbook.io/semantic-release/recipes/ci-configurations/github-actions)
- [deno setup for GHA doc](https://github.com/denoland/setup-deno)
- [GitHub Actions Deno CI example](https://github.com/actions/starter-workflows/blob/main/ci/deno.yml)
- [GitHub Actions Node.js CI example](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml)
- [GitHub Actions — How To Share Data Between Jobs](https://levelup.gitconnected.com/github-actions-how-to-share-data-between-jobs-fc1547defc3e)
- [GitHub Actions Storing workflow data as artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)
