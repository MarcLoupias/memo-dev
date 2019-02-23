# memo-dev

[memo-dev available here](https://memo-dev/github.io)

This website is a personal reminder for work. Aka : memo, knowledge base, cheatsheets, til, ... 

Sometimes in english, et parfois en français ...

Writing things to learn, and uses this book as a knowledge index.

Any comments welcome ...

> Others similar repo linked [there](https://github.com/RichardLitt/meta-knowledge).

## how it works

### markdown files

The markdown files belongs in the `content/` folder.

Currently the `content/SUMMARY.md` in the index.

They are linted with [DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint).

Each markdown file contain a [front-matter](https://www.npmjs.com/package/front-matter) to define `<title>`, `<meta>`, `<style>` and `<script>` tags.

### html generation

The `content/*.md` files are converted into `.html` with [MarcLoupias/mdfc-map-to-html](https://github.com/MarcLoupias/mdfc-map-to-html).

Then the `content/*.html` files are moved with their `.jpg` and `.png` into the `docs/` folder for deployment.

Then `docs/SUMMARY.html` is renamed `docs/index.html`.

Then `node_modules/github-markdown-css/github-markdown.css` is copied into `docs/` folder.

Then `assets/*.*` are copied into `docs/` folder.

Then the `docs/` folder is bundled with parcel.

Then the `docs/` folder is ready to serve.

### css

#### general design

[sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

#### code highlight

Using [highlight.js](https://highlightjs.org).

### bundler

[parcel](https://en.parceljs.org/) is used to bundle the files in the `docs/` folder.

### host

[GitHub pages](https://help.github.com/en/categories/github-pages-basics) with the `docs/` folder configuration is used to deploy.

## TODO

- A new `index.html` page in the form of a SPA to support a full text research with [lunr](https://www.npmjs.com/package/lunr).
- A TravisCI job with a [GitHub Webhook](https://developer.github.com/webhooks/) to lint the markdown and generate automatically the `docs/` folder when editing the `content/` folder from the GitHub UI.
