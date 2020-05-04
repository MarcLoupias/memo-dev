# apt cheatsheet

## how to get infos about an installed package ?

`apt-cache policy <package-name>`

Example :

```bash
$ apt-cache policy nodejs
nodejs:
  Installed: 5.12.0-1nodesource1~xenial1
  Candidate: 5.12.0-1nodesource1~xenial1
  Version table:
 *** 5.12.0-1nodesource1~xenial1 500
        500 https://deb.nodesource.com/node_5.x xenial/main amd64 Packages
        100 /var/lib/dpkg/status
     4.2.6~dfsg-1ubuntu4.1 500
        500 http://in.archive.ubuntu.com/ubuntu xenial-updates/universe amd64 Packages
     4.2.6~dfsg-1ubuntu4 500
        500 http://in.archive.ubuntu.com/ubuntu xenial/universe amd64 Packages
```
