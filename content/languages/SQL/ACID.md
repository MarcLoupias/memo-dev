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

# ACID

It is a set of properties for database transactions.

## **A**tomicity

Atomicity requires that each transaction be "all or nothing": if one part of the transaction fails, then the entire transaction fails, and the database state is left unchanged.

## **C**onsistency

The consistency property ensures that any transaction will bring the database from one valid state to another.

## **I**solation

The isolation property ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially, i.e., one after the other.

## **D**urability

The durability property ensures that once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors.
