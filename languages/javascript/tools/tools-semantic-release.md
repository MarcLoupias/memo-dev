# semantic-release

[semantic-release - github.com](https://github.com/semantic-release)

[semantic-release - semantic-release.gitbook.io](https://semantic-release.gitbook.io/semantic-release/)

> **semantic-release** automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.
>
> This removes the immediate connection between human emotions and version numbers, strictly following the [Semantic Versioning](http://semver.org) specification.

## installation

[Installation - semantic-release.gitbook.io](https://semantic-release.gitbook.io/semantic-release/usage/installation)

- install semantic-release package as devDepencencies

`npm i --save-dev semantic-release`

- install globally the semantic-release CLI to ease the configuration

[semantic-release/cli - github.com](https://github.com/semantic-release/cli)

`npm i -g semantic-release-cli`

Execute the CLI and answer the questions.

## configuration

### TravisCI

[Using semantic-release with Travis CI - github.com/semantic-release](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/travis.md)

When semantic-release-cli is run to setup, it configures automatically the github repository.

Just needs after to create a `.travis.yml` configuration file.

#### `.travis.yml` example

```yaml
language: node_js

node_js:
    - 10

cache: npm

install:
    - npm install

script:
    - npm run test

branches:
    except:
        - '/^v\d+\.\d+\.\d+$/'

jobs:
    include:
        - stage: test
          script:
              - npm run test
        - stage: deploy
          if: branch == master && !fork
          node_js: '10'
          script:
              - npm install -g semantic-release@^15
              - semantic-release

after_failure: "cat /home/travis/build/MarcLoupias/md-file-converter/npm-debug.log"

```

This config will run against `node@10`, install deps and run tests.

If the destination branch is `master` and is not a fork, semantic-release will be also triggered.

If a failure occurs, the npm log will be displayed in the Travis terminal.

### continuous delivery workflow

By default semantic-release used with a single `master` branch will output to a continuous deployment workflow.
As soon as something is merged in `master`, it will trigger the deploy stage.

Using a continuous delivery workflow gives more control over what is released in production.

Just add a `develop` branch, set this branch as default to be the destination for PR.

When you want to deploy, just merge locally your `develop` into `master`, a build will be triggered with the release stage active.

Don't use PR to merge `develop` into `master`, release stage is disabled for PR. This limitation is builtin.
