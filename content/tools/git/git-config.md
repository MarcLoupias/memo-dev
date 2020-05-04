# Git - config

[`git-config` : `git-scm.com`](https://git-scm.com/docs/git-config)

## config files

### config files on windows systems

the order in which Git for Windows sources configuration information is as follows:

1. `C:\ProgramData\Git\config`
2. system config (e.g. `C:\Program Files\Git\mingw64\etc\gitconfig`)
3. global config (`%HOMEPATH%\.gitconfig`)
4. local config (repository-specific `.git/config`)

### list config via CLI

```bash
$ git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
```

```bash
$ git config --list --show-origin
file:"C:\\ProgramData/Git/config"       core.symlinks=false
file:"C:\\ProgramData/Git/config"       core.autocrlf=true
file:"C:\\ProgramData/Git/config"       core.fscache=true
file:"C:\\ProgramData/Git/config"       color.diff=auto
file:"C:\\ProgramData/Git/config"       color.status=auto
file:"C:\\ProgramData/Git/config"       color.branch=auto
file:"C:\\ProgramData/Git/config"       color.interactive=true
file:"C:\\ProgramData/Git/config"       help.format=html
file:"C:\\ProgramData/Git/config"       http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
file:"C:\\ProgramData/Git/config"       diff.astextplain.textconv=astextplain
file:"C:\\ProgramData/Git/config"       rebase.autosquash=true
file:"C:\\Program Files\\Git\\mingw64/etc/gitconfig"    credential.helper=manager
file:C:/Users/robert/.gitconfig  user.name=rob
file:C:/Users/robert/.gitconfig  user.email=me@robert.tld
file:C:/Users/robert/.gitconfig  core.autocrlf=false
file:.git/config        core.repositoryformatversion=0
file:.git/config        core.filemode=false
file:.git/config        core.bare=false
```

### list scoped config via CLI

```bash
$ git config --system --list --show-origin
file:"C:\\Program Files\\Git\\mingw64/etc/gitconfig"    credential.helper=manager
```

```bash
$ git config --global --list --show-origin
file:C:/Users/robert/.gitconfig  user.name=rob
file:C:/Users/robert/.gitconfig  user.email=me@robert.tld
file:C:/Users/robert/.gitconfig  core.autocrlf=false
```

```bash
$ git config --local --list --show-origin
file:.git/config        core.repositoryformatversion=0
file:.git/config        core.filemode=false
file:.git/config        core.bare=false
```

### `.gitattributes` file

[`gitattributes` : `git-scm.com`](https://git-scm.com/docs/gitattributes)

For line endings management, check [text](https://git-scm.com/docs/gitattributes#_effects) option.

### changing config values via CLI

#### pattern

`git config <scope> <property> <value>`

#### example

`git config --global user.name "Robert Duchmoul"`

## excluding files

[Three ways of excluding files](http://365git.tumblr.com/post/519016351/three-ways-of-excluding-files)

- Per Project: `.gitignore` file in the repository
- Per Repository: in `.git/info/excludes`
- Per Computer: through settings in `~/.gitconfig`

### global `.gitignore`

Configure a global `.gitignore` file applying to every project on the computer :

Create a gitignore file in your home dir, for ex `~/.gitignore_global`.

A possible content :

```text
# Logs #
########
*.log

# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE files #
#############
nbproject
.~lock.*
.buildpath
.idea
.project
.settings
composer.lock
```

Others examples [here](https://gist.github.com/octocat/9257657) and [here](https://gist.github.com/zpetr/e783d537f8a40bb6ec16).

Then add this file to the current config :

- inside `~/.gitconfig` :

```text
[core]
    excludesfile = /home/user/.gitignore_global
```

- or with CLI :

```bash
git config --global core.excludesfile ~/.gitignore_global
```
