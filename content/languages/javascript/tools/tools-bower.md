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

# bower

http://bower.io/

## what it is ?

A package manager for the web

## project related files

`.bowerrc` is the configuration file for bower
`bower.json` define a bower package

## project related directories

`bower_components` or `app/bower_components` depending on the app scaffold

## finding bower packages

http://sindresorhus.com/bower-components/

## commands

`bower install` will install the dependencies defined in the current directory's `bower.json`

`bower install <package>` will install the package

`bower install <package>#<version>` will install the package at the specific version

`bower uninstall <package-name>` will uninstall the package
