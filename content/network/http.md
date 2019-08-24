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

# http

## RFC HTTP

- [RFC2616 - Hypertext Transfer Protocol -- HTTP/1.1](http://tools.ietf.org/html/rfc2616)
- [RFC7230 – HTTP/1.1: Message Syntax and Routing](http://tools.ietf.org/html/rfc7230)
- [RFC7231 – HTTP/1.1: Semantics and Content](http://tools.ietf.org/html/rfc7231)
- [RFC7232 – HTTP/1.1: Conditional Requests](http://tools.ietf.org/html/rfc7232)
- [RFC7233 – HTTP/1.1: Range Requests](http://tools.ietf.org/html/rfc7233)
- [RFC7234 – HTTP/1.1: Caching](http://tools.ietf.org/html/rfc7234)
- [RFC7235 – HTTP/1.1: Authentication](http://tools.ietf.org/html/rfc7235)

## long polling

[What is HTTP Long Polling? - www.pubnub.com/blog - 20141201](https://www.pubnub.com/blog/2014-12-01-http-long-polling/)

> - The client polls the server requesting new information.
> - The server holds the request open until new data is available.
> - Once available, the server responds and sends the new information.
> - When the client receives the new information, it immediately sends another request, and the operation is repeated.
>
> This effectively emulates a server push feature.
