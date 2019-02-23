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

# java - play - gestion config

http://stackoverflow.com/questions/14673722/maintaining-seperate-dev-prod-config-files-on-heroku-doesnt-work

logic in application.conf
http://stackoverflow.com/questions/6699955/playframework-route-file-separate-production-routes-from-dev-routes/6703337#6703337

code source de l'api embarquée par Play pour gérer application.conf:
https://github.com/typesafehub/config
