
# html tips

## stocker une image directement dans le html

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABCCAMAAACb1/MKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2REIwQjlDOEE2NzExRTM4NDc3RUZBRkY1OEZBQTY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU2REIwQjlEOEE2NzExRTM4NDc3RUZBRkY1OEZBQTY2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTZEQjBCOUE4QTY3MTFFMzg0NzdFRkFGRjU4RkFBNjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTZEQjBCOUI4QTY3MTFFMzg0NzdFRkFGRjU4RkFBNjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6VTeR+AAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACBJREFUeNrswTEBAAAAwqD1T20JT6AAAAAAAAD4mwADABmGAAHGlE9YAAAAAElFTkSuQmCC"
                     width="98" height="66" alt="Toto"/>
```

## donner une baseref à l'ensemble d'un site via une balise :

[tag_base : www.w3schools.com] (http://www.w3schools.com/tags/tag_base.asp)

## plusieurs h1 dans une page

[les-balises-h1-multiples-autorisees-en-html5 : blog.lesieur.name] (http://blog.lesieur.name/les-balises-h1-multiples-autorisees-en-html5/)

## HTML and CSS components every 2016 modern page should have

[source : www.quora.com](https://www.quora.com/What-are-the-main-HTML-and-CSS-components-every-2016-modern-page-should-have)

## Semantic html

[A Look Into Proper HTML5 Semantics : www.hongkiat.com](http://www.hongkiat.com/blog/html-5-semantics/)
[HTML Living Standard — Last Updated 17 December 2016](https://html.spec.whatwg.org/multipage/semantics.html)

Proper semantics means :
- a more searchable content that leads to a better search engine ranking. 
- increase accessibility, as assistive technologies such as screen readers can better interpret the meaning of our content.

### Semantic Elements Before HTML5

- `<body></body>`
- `<form></form>`
- `<img/>`
- `<table></table>`
- `<a></a>`
- `<ul><li></li></ul>`
- `<p></p>`
- `<h1></h1>`
- `<h2></h2>`
- `<hN></hN>`
- ...

### Non-Semantic Elements

- `<div></div>`
- `<span></span>`

### Text Semantics in HTML5

- `<strong></strong>`
- `<em></em>`
- `<div></div>`

### Document Outline in HTML5

- `<header></header>` every sectioning element (body, article, section, nav and aside) can have its own header and footer
- `<footer></footer>` every sectioning element (body, article, section, nav and aside) can have its own header and footer
- `<section></section>` for sections grouped around a specific theme
- `<article></article>` for complete or self-contained compositions such as a blog post or a widget
- `<nav></nav>` for navigation blocks
- `<aside></aside>` for complementary content such as sidebars.

### Tips For Semantically Structured Content

- The outermost sectioning element is always the `<body></body>` tag.
- Sections in HTML5 can be nested.
- Each section has its own heading hierarchy. Each of them can have an `h1` tag.
- While the document outline is primarily defined by the 5 sectioning elements, it also needs proper headings for each section.
- It’s always the first heading element (let it be h1 or a lower rank heading tag) that defines the heading of the given section. The following heading tags inside the same section need to be relative to this. (If the first heading is an `h3` inside a sectioning element, don’t put an `h3` after that.)
- The sections defined by the `<nav></nav>`, and the `<aside></aside>` tags don’t belong to the main outline of the HTML document, they are usually not rendered initially by assistive technologies.
- Each section (`body`, `section`, `article`, `aside`, `nav`) can have their own `<header></header>` and `<footer></footer>` tags, that defines the `header` (such as logo, author’s name, dates, meta info, etc.) and the `footer` (copyright, notes, links, etc.) of that section.

[image::http://media02.hongkiat.com/html-5-semantics/document-outline-example.jpg]

