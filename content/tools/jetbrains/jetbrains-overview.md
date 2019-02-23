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

# jetbrains - overview

## IntelliJ IDEA

[ref card](http://www.jetbrains.com/idea/docs/IntelliJIDEA_ReferenceCard.pdf)

## WebStorm

[WebStorm/PhpStorm double quotes in TypeScript auto import](https://stackoverflow.com/questions/39779272/webstorm-phpstorm-double-quotes-in-typescript-auto-import)

**`import` : double quotes to single quote**

To get `import { MyComponent } from './my.component';` instead of `import {MyComponent} from "./my.component";`.

1. Settings/Preferences
2. Editor | Code Style | TypeScript
3. "Punctuation" tab | Generated code -> Quote marks

**`import` : curly brace spaces**

To get `import { MyComponent } from './my.component';` instead of `import {MyComponent} from './my.component';`.

Spaces | Whithin | ES6 import/export braces
