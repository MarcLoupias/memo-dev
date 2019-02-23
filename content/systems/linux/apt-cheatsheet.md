---
htmlHead:
    title: 'marlou knowledge base' 
    containerClass: 'markdown-body'
    metaTags:
        - name: viewport
          content: 'width=device-width, initial-scale=1, minimal-ui'
        - name: robots
          content: none
    links:
        - href: '../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../main.css'
          rel: stylesheet
          media: all
        - href: '../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../index.js'

---

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
