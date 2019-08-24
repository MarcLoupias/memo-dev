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
        - href: '../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../main.css'
          rel: stylesheet
          media: all
        - href: '../github.css'
          rel: stylesheet
    scripts:
        - src: '../index.js'

---

# devops - metrics

The DevOps movment have defined several metrics to evaluate an organization DevOps capabilities.

## The Software delivery performance metrics

### deploy frequency

Consider this metric has "batch size". The more frequently we deploy, the smaller the size of the batch.

Deploy means goin into production or to an app store.

### delivery lead time

The time it takes to go from code committed to code successfully running in production.

Highers performers deploy in production in less than an hour. Lower performers deploy monthly or less.

[Continuous Delivery - Jez Humble - 2012](https://www.youtube.com/watch?v=skLJuksCRTw)

Jez Humble definition is :

> "How long would it take your organization to deploy a change that involved just one single line of code ?
> Do you do this on a repeatable, reliable basis ?"

### Mean Time To Recover

Time needed to restore the service of the application when an incident occurs.

### change fail rate

The percentage of changes to production leading to a failure.
