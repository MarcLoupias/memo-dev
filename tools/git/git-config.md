# git config

[git-config : git-scm.com](https://git-scm.com/docs/git-config)

## config files

### config files on windows systems

the order in which Git for Windows sources configuration information is as follows:

1. `C:\ProgramData\Git\config`
2. system config (e.g. `C:\Program Files\Git\mingw64\etc\gitconfig`)
3. global config (`%HOMEPATH%\.gitconfig`)
4. local config (repository-specific `.git/config`)

### list config via CLI

`git config --list`

Print all the config:
```
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
```

`git config --list --show-origin`

Print all the config and shows config file origin for each property :
```
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

`git config --system --list --show-origin`

```
file:"C:\\Program Files\\Git\\mingw64/etc/gitconfig"    credential.helper=manager
```

`git config --global --list --show-origin`

```
file:C:/Users/robert/.gitconfig  user.name=rob
file:C:/Users/robert/.gitconfig  user.email=me@robert.tld
file:C:/Users/robert/.gitconfig  core.autocrlf=false
```

`git config --local --list --show-origin`

```
file:.git/config        core.repositoryformatversion=0
file:.git/config        core.filemode=false
file:.git/config        core.bare=false
```

### `.gitattributes` file

[gitattributes : git-scm.com](https://git-scm.com/docs/gitattributes)

For line endings management, check [text](https://git-scm.com/docs/gitattributes#_effects) option.

### changing config values via CLI

#### pattern

`git config <scope> <property> <value>`

#### example

`git config --global user.name "Robert Duchmoul"`
