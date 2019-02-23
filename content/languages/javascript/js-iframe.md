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

# js `iframe`

## documentation

[`iframe` : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

## questions

### `iframe` parent redirection

[Why can a child redirect a parent frame? : stackoverflow.com](https://stackoverflow.com/questions/17967423/why-can-a-child-redirect-a-parent-frame)

[How to prevent IFRAME from redirecting top-level window : stackoverflow.com](https://stackoverflow.com/questions/369498/how-to-prevent-iframe-from-redirecting-top-level-window)

[Using JS how can I stop child Iframes from redirecting or at least prompt users about the redirect : stackoverflow.com](https://stackoverflow.com/questions/1794974/using-js-how-can-i-stop-child-iframes-from-redirecting-or-at-least-prompt-users)

**TLDR**

> With HTML5 the iframe sandbox attribute was added.
> 
> ```html
> <iframe src="url" sandbox="allow-forms allow-scripts"></iframe>
> ```
> 
> If you want to *allow* top-level redirects specify `sandbox="allow-top-navigation"`.
> 
