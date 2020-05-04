---
home: true
heroText: Marlou knowledge base
tagline: Knowledge base, Today I Learned, Cheatsheet ... Call this as you want ...
xfeatures:
- title: Data
  details: Knowledge about data and files formats.
  link: data
- title: DevOps
  details: The DevOps practices and related tools.
  link: devops
- title: Divers
  details: Section fourre-tout mais toujours liées à l'informatique ... Forcément !
  link: divers
- title: Network
  details: Knowledge about networks associated subjects. Low and high level.
  link: network
- title: Languages
  details: Programming languages documentation and notes.
  link: languages
- title: Platforms, frameworks and libs
  details: Documentation and notes about platforms like Node or frameworks like Vue.
  link: platforms-frameworks-libs
- title: Security
  details: Security subjects, encryption, auth, CORS, etc ...
  link: security
- title: Software Engineering
  details: Must read lists (articles, books or authors) and fundamentals.
  link: software-engineering
- title: Systems
  details: Stuff related to operating systems.
  link: systems
- title: Tools
  details: Various tools from Git to text editor and aso online tools.
  link: tools
- title: Web
  details: Everything about the web. Including languages, tools, concepts, etc ...
  link: web
footer: ISC Licensed | Copyright © 2016-present Marc Loupias
---

# memo-dev

[memo-dev available here](http://memo-dev.marc-loupias.fr)

<p>This website is a personal reminder for work. Aka : memo, knowledge base, cheatsheets, til, ...</p>
<p>Sometimes in english, et parfois en français ...</p>
<p>Writing things to learn, and uses this book as a knowledge index.</p>
<p>Any comments welcome ...</p>

> Others similar repo linked [there](https://github.com/RichardLitt/meta-knowledge)

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>
