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

# *What is Software Design ?* Jack W. Reeves - notes

[What is Software Design ?](http://user.it.uu.se/~carle/softcraft/notes/Reeve_SourceCodeIsTheDesign.pdf)

by Jack W. Reeves.

> published in 1992 C++ Journal 

## context

Written by a software engineer in a period where C++ have been extended with Object Oriented support.

This support makes abstracting concept and so software design easier.

## TLDR

- Real software runs on computers. It is a sequence of ones and zeros that is stored on some magnetic media. It is not a program listing in C++ (or any other programming language).
- A program listing is a document that represents a software design. Compilers and linkers actually build software designs.
- Real software is incredibly cheap to build, and getting cheaper all the time as computers get faster.
- Real software is incredibly expensive to design. This is true because software is incredibly complex and because practically all the steps of a software project are part of the design process.
- Programming is a design activity -- a good software design process recognizes this and does not hesitate to code when coding makes sense.
- Coding actually makes sense more often than believed. Often the process of rendering the design in code will reveal oversights and the need for additional design effort. The earlier this occurs, the better the design will be.
- Since software is so cheap to build, formal engineering validation methods are not of much use in real world software development. It is easier and cheaper to just build the design and test it than to try to prove it.
- Testing and debugging are design activities -- they are the software equivalent of the design validation and refinement processes of other engineering disciplines. A good software design process recognizes this and does not try to short change the steps.
- There are other design activities -- call them top level design, module design, structural design, architectural design, or whatever. A good software design process recognizes this and deliberately includes the steps.
- All design activities interact. A good software design process recognizes this and allows the design to change, sometimes radically, as various design steps reveal the need.
- Many different software design notations are potentially useful -- as auxiliary documentation and as tools to help facilitate the design process.  They are not a software design.
- Software development is still more a craft than an engineering discipline. This is primarily because of a lack of rigor in the critical processes of validating and improving a design.
- Ultimately, real advances in software development depend upon advances in programming techniques, which in turn mean advances in programming languages. C++ is such an advance.It has exploded in popularity because it is a mainstream programming language that directly supports better software design.
- C++ is a step in the right direction, but still more advances are needed. 
