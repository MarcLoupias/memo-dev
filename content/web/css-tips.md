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

# css tips

## z-index

- [z-index](http://www.alsacreations.com/astuce/lire/84-comment-fonctionne-la-proprit-css-z-index.html)

## flexbox

- [flexbox](http://www.flexboxpatterns.com/home)
- [understanding-flexbox](https://medium.freecodecamp.com/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af)

## CSS methdologies 

- [SMACSS](https://smacss.com/) defines "modules"
- [BEM](https://en.bem.info/) defines "blocks"
- [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) defines "components".

## responsive design vs adaptive design?

- Responsive: There is one basic layout, and it changes responsively to
  screen changes
- Adaptive: For each possible screen size, there is a distinct layout.

## icons

[icons8.com](https://icons8.com/)

## sprites

[Tout sur les sprites CSS - la-cascade.io - 20150324](https://la-cascade.io/tout-sur-les-sprites-css/)

> Les sprites CSS sont une façon de combiner plusieurs images dans un fichier image unique, permettant ainsi d’améliorer la performance de votre site en réduisant le nombre de requêtes HTTP.

[CSS Image Sprites - Pros and Cons - getlevelten.com/blog/ahmad-kharbat - 20150911](https://getlevelten.com/blog/ahmad-kharbat/css-image-sprites-pros-and-cons)

> **ProS**
> 
> - Fewer HTTP requests, which means less server overhead.
> - Fewer HTTP requests also means reduced page load time on browser.
> - Images appear faster (Especially the hover state images) because the Image Sprite is loaded once and for all.
> 
> **Cons**
> 
> - More development time for slicing images, combining them, and programming background positions in the CSS.
> - More maintenance time. Whenever a modification is needed, the whole sprite needs to be re-generated carefully
> - Less SEO friendly. Some images are better be placed in the HTML rather than being backgrounds. HTML images can contain Titles and Alternative texts that are more beneficial to SEO, while CSS backgrounds cannot.

## persons

[Daniel Glazman](https://fr.wikipedia.org/wiki/Daniel_Glazman) ([blog](http://glazman.org/weblog/))

> Former co-chairman of the W3C CSS Working Group, entrepreneur, software engineer
