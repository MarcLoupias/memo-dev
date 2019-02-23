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

# TCP

[TCP / HTTP Listening On Ports: How Can Many Users Share the Same Port - stackoverflow.com - 20141128](https://stackoverflow.com/a/27182584)

> Three things must be understood:
> 
> 1.) On a server, a process is listening on a port. Once it gets a connection, it hands it off to another thread. The communication never hogs the listening port.
> 
> 2.) Connections are uniquely identified by the OS by the following 5-tuple: (local-IP, local-port, remote-IP, remote-port, protocol). If any element in the tuple is different, then this is a completely independent connection.
> 
> 3.) When a client connects to a server, it picks a random, unused high-order source port. This way, a single client can have up to ~64k connections to the server for the same destination port.
