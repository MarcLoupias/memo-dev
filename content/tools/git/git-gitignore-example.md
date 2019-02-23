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

# git - `.gitignore`

```
######################
# Node
######################
/node/**
/node_modules/**

######################
# SASS
######################
.sass-cache/**

######################
# Bower
######################
/bower_components/

######################
# Eclipse
######################
*.pydevproject
.project
.metadata
/bin/**
/tmp/**
/tmp/**/*
*.tmp
*.bak
*.swp
*~.nib
local.properties
.classpath
.settings/**
.loadpath
/src/main/resources/rebel.xml

# External tool builders
.externalToolBuilders/**

# Locally stored "Eclipse launch configurations"
*.launch

# CDT-specific
.cproject

# PDT-specific
.buildpath

######################
# Intellij
######################
.idea/**
*.iml
*.iws
*.ipr
*.ids
*.orig
######################
# Windows
######################
# Windows image file caches
Thumbs.db

# Folder config file
Desktop.ini

######################
# Mac OSX
######################
.DS_Store
.svn

# Thumbnails
._*

# Files that might appear on external disk
.Spotlight-V100
.Trashes

######################
# Directories
######################
/build/**
/deploy/**
/e2e/reports
/unit.test

######################
# Logs
######################
*.log

######################
# Others
######################
*.*~
*~
.merge_file*
```
