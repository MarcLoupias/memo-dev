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

# manipulation des processus

## `ps`

[The `ps` Command - www.linfo.org](http://www.linfo.org/ps.html)

lister tous les processus actifs sur le système

```bash
$ ps -ef
```

filtrer la liste précédente avec des mots clefs

```bash
# filtrer la liste avec le mot clef "jboss"
$ ps -ef | grep jboss
```
