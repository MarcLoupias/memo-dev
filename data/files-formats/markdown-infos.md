# Markdown infos

## Auteurs

[Aaron Swartz](https://fr.wikipedia.org/wiki/Aaron_Swartz)

[John Gruber](https://fr.wikipedia.org/wiki/John_Gruber)

## Syntax

[Markdown: Syntax : daringfireball.net](http://daringfireball.net/projects/markdown/syntax)

[Markdown : fr.wikipedia.org](http://fr.wikipedia.org/wiki/Markdown)

[Markdown on GitHub](https://help.github.com/categories/writing-on-github/)

## linters

### textlint

[textlint - textlint.github.io](https://textlint.github.io/) ([textlint/textlint - github.com](https://github.com/textlint/textlint))

> The pluggable natural language linter for text and markdown.

### markdownlint

[igorshubovych/markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) with [DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint) ([online parser demo](https://dlaa.me/markdownlint/))

> A Node.js style checker and lint tool for Markdown/CommonMark files. 

[No auto fix in markdownlint explanation issue](https://github.com/DavidAnson/markdownlint/issues/80).

### remarkjs

[remarkjs/remark - github.com](https://github.com/remarkjs/remark) ([remarkjs/remark-lint - github.com](https://github.com/remarkjs/remark-lint))

> Markdown processor powered by plugins based on @unifiedjs (and @vfile, @syntax-tree)

## style-guide

[Markdown Style Guide](http://www.cirosantilli.com/markdown-style-guide/) ([cirosantilli/markdown-style-guide - github.com](https://github.com/cirosantilli/markdown-style-guide/))

> Readable and portable Markdown style guide. 

## tools

### parsers

[Markdown parsers comparator - www.npmtrends.com](https://www.npmtrends.com/markdown-vs-markdown-it-vs-marked-vs-weather-js)

[Choosing the Right Markdown Parser - css-tricks.com - 20160201](https://css-tricks.com/choosing-right-markdown-parser/)

[GitbookIO/markup-it - github.com](https://github.com/GitbookIO/markup-it)

> JavaScript library to parse and serialize markup content (Markdown and HTML) 

[markdown-it/markdown-it - github.com](https://github.com/markdown-it/markdown-it)

> Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed

[markedjs/marked - github.com](https://github.com/markedjs/marked/) [online demo](https://marked.js.org/demo)

> A markdown parser and compiler. Built for speed.

It can be used to [build export in another format](https://marked.js.org/#/USING_PRO.md), [Holi0317/md2bbc example](https://github.com/Holi0317/md2bbc.js).

### unified.js ecosystem

[unified.js.org](https://unified.js.org/) [unifiedjs on medium.com](https://medium.com/unifiedjs) [unifiedjs on twitter.com](https://twitter.com/unifiedjs)

> unified is an interface for processing text with syntax trees and transforming between them.

[syntax-tree - github.com](https://github.com/syntax-tree)

The idea is to convert any text documents (markdown, html, natural language, ...) into a syntax-tree to easily achieve 2 ways transformation.

Syntax-trees comes into 2 types :
    - Concrete Syntax Tree (CST) (contains everything to recreate the exact representation, tabs numbers, spaces, etc ...)
    - Abstract Syntax Tree (AST) (contains just what is needed to recreate exact syntactic representation)
    
They inherits from [unist](https://github.com/syntax-tree/unist), a **Uni**versal **S**yntax **T**ree.
 
Markdown :
    - AST : [mdast](https://github.com/syntax-tree/mdast)
    - Parser/Compiler : [remark](https://github.com/remarkjs/remark) 
    
HTML :
    - AST : [hast](https://github.com/syntax-tree/hast)
    - Parser/Compiler : [rehype](https://github.com/rehypejs/rehype)
    
Natural language :
    - CST : [nlcst](https://github.com/syntax-tree/nlcst)
    - Parser/Compiler : [retext](https://github.com/retextjs/retext)

A virtual file format called [vfile](https://github.com/vfile/vfile) is used to represent processed documents. It contains the file data, the path, the basename, etc ...

```
| ....................... process() ......................... |
| ......... parse() ..... | run() | ..... stringify() ....... |

          +--------+                     +----------+
Input ->- | Parser | ->- Syntax Tree ->- | Compiler | ->- Output
          +--------+          |          +----------+
                              X
                              |
                       +--------------+
                       | Transformers |
                       +--------------+
```

## JavaScript lib

[btford/angular-markdown-directive - github.com](https://github.com/btford/angular-markdown-directive)
