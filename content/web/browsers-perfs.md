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

# browsers perfs

## A - Rendering process

[Rendering: repaint, reflow/relayout, restyle - www.phpied.com - 2009](http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)

1. reading HTML -> **DOM tree**
2. reading CSS -> **CSS model**
3. they are both merged in the **render model** (or **render tree**)
4. the **render model** is **paint** (or **draw**) in the browser viewport

### reflow

Parts of the **render tree** (or the whole tree) will need to be revalidated and the node dimensions recalculated.

**Reflow** is also named **layout**, **relayout**, or **layouting**.

### repaint

Parts of the screen will need to be updated, either because of changes in geometric properties of a node or because of stylistic change, such as changing the background color.

**Repaint** is also named **repaint**.

### repaint / reflow triggers

- Adding, removing, updating DOM nodes
- Hiding a DOM node with `display: none` (reflow and repaint) or `visibility: hidden` (repaint only, because no geometry changes)
- Moving, animating a DOM node on the page
- Adding a stylesheet, tweaking style properties
- User action such as resizing the window, changing the font size, or (oh, OMG, no!) scrolling

### browsers optimization

They batch the changes has much as they can.

But sometimes the script may prevent the browser from optimizing the reflows, and cause it to flush the queue and perform all batched changes. This happens when you request style information, such as

- `offsetTop`, `offsetLeft`, `offsetWidth`, `offsetHeight`
- `scrollTop`/Left/Width/Height
- `clientTop`/Left/Width/Height
- `getComputedStyle()`, or `currentStyle` in IE

Because the browser has to give you the most up-to-date value.

### minimizing repaints and reflows

- Don't change individual styles, one by one.
- Batch DOM changes and perform them "offline". Offline means not in the live DOM tree.
  - using ([`documentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment))
  - using `display: none` before making the changes then restore the display
- Don't ask for computed styles excessively. (var caches)
- In general, think about the render tree and how much of it will need revalidation after your change.
  
## B - Layout trashing

[Preventing 'layout thrashing' - wilsonpage.co.uk - 20130919](http://wilsonpage.co.uk/preventing-layout-thrashing/)

Explain how to optimize repaints / reflows.

Introduce [fastdom](https://github.com/wilsonpage/fastdom) lib to industrialize optimizations.
