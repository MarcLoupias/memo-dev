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
        - href: '../../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../../main.css'
          rel: stylesheet
          media: all
        - href: '../../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../../index.js'

---

# java - play - config idea

utiliser le plugin sbt suivant :
https://github.com/mpeltonen/sbt-idea

il faut ajouter la ligne
addSbtPlugin("com.github.mpeltonen" %% "sbt-idea" % "1.5.2")

au fichier plugins.sbt

puis exec dans la console play la commande suivante :
gen-idea
