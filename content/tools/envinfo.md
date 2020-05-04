# envinfo

[envinfo - `github.com/tabrindle`](https://github.com/tabrindle/envinfo)

> Generate a report about your development environment for debugging and issue reporting
>
> envinfo generates a report of the common details needed when troubleshooting software issues, such as your operating system, binary versions, browsers, installed languages, and more

## prerequisites

### for execution

For current version (20190201), needs at least node 4+

### with npx

Need obviously a complient npm version.

## execution

```bash
npx envinfo
```

## output

```bash
System:
    OS: macOS High Sierra 10.13
    CPU: x64 Intel(R) Core(TM) i7-4870HQ CPU @ 2.50GHz
    Memory: 204.88 MB / 16.00 GB
    Shell: 5.4.2 - /usr/local/bin/zsh
  Binaries:
    Node: 8.11.0 - ~/.nvm/versions/node/v8.11.0/bin/node
    Yarn: 1.5.1 - ~/.yarn/bin/yarn
    npm: 5.6.0 - ~/.nvm/versions/node/v8.11.0/bin/npm
    Watchman: 4.9.0 - /usr/local/bin/watchman
  Utilities:
    CMake: 3.10.2 - /usr/local/bin/cmake
    Make: 3.81 - /usr/bin/make
    GCC: 4.2.1 - /usr/bin/gcc
    Git: 2.17.1 - /usr/local/bin/git
  Servers:
    Apache: 2.4.27 - /usr/sbin/apachectl
    Nginx: 1.13.12 - /usr/local/bin/nginx
  Virtualization:
    Docker: 18.03.1 - /usr/local/bin/docker
    Parallels: 13.3.0 - /usr/local/bin/prlctl
    VirtualBox: 5.2.8 - /usr/local/bin/vboxmanage
  SDKs:
    iOS SDK:
      Platforms: iOS 11.0, macOS 10.13, tvOS 11.0, watchOS 4.0
    Android SDK:
      Build Tools: 27.0.3
      API Levels: 26
      System Images: android-28 | Google Play Intel x86 Atom
  IDEs:
    Android Studio: 3.0 AI-171.4443003
    Atom: 1.23.3
    Emacs: 22.1.1 - /usr/bin/emacs
    Nano: 2.0.6 - /usr/bin/nano
    Vim: 8.0 - /usr/bin/vim
    VSCode: 1.23.1 - /usr/local/bin/code
    Xcode: 9.0/9A235 - /usr/bin/xcodebuild
  Languages:
    Bash: 4.4.12 - /usr/local/bin/bash
    Go: 1.9.3 - /usr/local/bin/go
    Elixir: 1.6.2 - /usr/local/bin/elixir
    Java: 1.8.0_192 - /usr/bin/javac
    Perl: 5.18.2 - /usr/bin/perl
    PHP: 7.1.7 - /usr/bin/php
    Python: 2.7.14 - /usr/local/bin/python
    Ruby: 2.4.1 - ~/.rvm/rubies/ruby-2.4.1/bin/ruby
    Rust: 1.11.0 - ~/.cargo/bin/rustup
    Scala: 2.12.6 - /usr/local/bin/scalac
  Databases:
    MongoDB: 3.6.4 - /usr/local/bin/mongo
    MySQL: 10.2.14 (MariaDB) - /usr/local/bin/mysql
    PostgreSQL: 10.3 - /usr/local/bin/postgres
    SQLite: 3.19.4 - /usr/local/bin/sqlite3
  Browsers:
    Chrome: 67.0.3396.62
    Chrome Canary: 69.0.3447.2
    Firefox: 59.0.2
    Firefox Developer Edition: 61.0
    Firefox Nightly: 61.0a1
    Safari: 11.0
    Safari Technology Preview: 11.2
  npmPackages:
    apollo-client: ^2.3.1 => 2.3.1
    jest: ^22.2.1 => 22.2.1
    ...
    react: ^16.3.2 => 16.3.2
    react-apollo: ^2.1.4 => 2.1.4
    run4staged: ^1.1.1 => 1.1.1
    solidarity: 2.0.5 => 2.0.5
    styled-components: ^3.1.6 => 3.1.6
  npmGlobalPackages:
    create-react-app: 1.5.2
    create-react-native-app: 1.0.0
    envinfo: 5.10.0
    exp: 49.2.2
    gatsby-cli: 1.1.52
    npm: 5.6.0
    react-native-cli: 2.0.1
    solidarity: 2.1.0
    typescript: 2.8.1
```

Can be turned into markdown or json.
