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

# *no silver bullet* F.Brooks - notes

[No Silver Bullet: Essence and Accidents of Software Engineering](http://www.cs.nott.ac.uk/~pszcah/G51ISS/Documents/NoSilverBullet.html)

by Frederick P. Brooks, Jr.

> ref: Brooks, Frederick P., "No Silver Bullet: Essence and Accidents of Software Engineering," Computer, Vol. 20, No. 4 (April 1987) pp. 10-19. 

## synthesis

A project can be seen as innocent and straightforward but can become a monster of missed schedules, blown budgets, and flawed products.

Need for a **silver bullet** to drop software costs.

But there is no silver bullet ; the purpose of the article is to show why by examining :
- the nature of the software problem
- the properties of the bullets proposed in the past

There is no breakthrough, but there is things to do to improve software engineering, slowly.

> There is no royal road, but there is a road.

Nice metaphor with medicine, from magical theories to modern medicine, the road is hard, long, step by step, require 
discipline but it works better every day.

> So it is with software engineering today.

## TLDR

- Essential difficulties are the conception parts
- Accidental difficulties are the writing parts
- All the past and actual breakthroughs concerns writing a software
- A software is grown, not built ; so attacking the essentials difficulties means using :
  - quick feedback loop
  - great designers (great people)

## A - Does It Have to Be Hard?--Essential Difficulties

In comparison to hardware productivity enhancement software engineering is slow. 
But hardware enhancement is an exception against all others technologies. 

Following Aristotle, Brooks divide software engineering difficulties in :
- essence difficulties (inherent in the nature of software)
- accidents difficulties (difficulties that today attend its production but are not inherent)

The software essence is a construct of interlocking concepts: data sets, relationships among data items, algorithms, 
and invocations of functions.

> I believe the hard part of building software to be the specification, design, and testing of this conceptual construct, 
> not the labor of representing it and testing the fidelity of the representation.

> If this is true, building software will always be hard. There is inherently no silver bullet. 

The inherent properties of this irreducible essence of modern software systems are :
- complexity
- conformity
- changeability
- invisibility

### complexity

- software systems differ profoundly from computers, buildings, or automobiles, where repeated elements abound
- computers are more complex than most things people build, Software systems have orders-of-magnitude more states than computers do
- the complexity of the whole increases much more than linearly
- the complexity of software is an essential property, not an accidental one
- many of the classic problems of developing software products derive from this essential complexity and its nonlinear increases with size

complexity is the source of the difficulty of :
- communication among team members (leads to product flaws, cost overruns, schedule delays)
- enumerating all the possible states of the program (leads to unreliability)
- invoking function (makes programs hard to use)
- extending programs to new functions (side effects)
- from complexity of structure come the unvisualized states (security trapdoors)
- management (remendous learning and understanding burden that makes personnel turnover a disaster)

### conformity

- software must conform to interfaces designed by humans (including human institutions and systems), not by nature (or god).
- much complexity comes from conformation to other interfaces
- cannot be simplified out by any redesign of the software alone

### changeability

- the software entity is constantly subject to pressures for change
- manufactured things are infrequently changed after manufacture
- successful software have a long life
  - users pushes new behaviors
  - they need to adapt to new hardware 

### invisibility

- software is invisible and unvisualizable. A building or a machine can be viewed globally with a plan, software are too
complex for that
- visualizing a software require several diagrams and schemes, each of them is a bias
- this cause communication issues

## B - Past Breakthroughs Solved Accidental Difficulties

### High-level languages

- it frees a program from much of its accidental complexity
- language development approaches closer and closer to the sophistication of users 

so there is a maximum gain here

### Time-sharing

- the principal effect of timesharing is to shorten system response time
- as this response time goes to zero, at some point it passes the human threshold of noticeability, about 100 milliseconds

so beyond that threshold, no benefits are to be expected

### Unified programming environments

mostly Unix

attack the accidental difficulties that result from using individual programs together, by providing integrated libraries, 
unified file formats, and pipes and filters

## C - Hopes for the Silver

potential silver bullets :

- High-level language advances (Ada, Java, ...)
- Object-oriented programming (abstract data types and hierarchical types)
- Artificial intelligence (rule-based programming)
- Expert systems (put at the service of the inexperienced programmer the experience and accumulated wisdom of the best programmers)
- "Automatic" programming (the generation of a program for solving a problem from a statement of the problem specifications)
- Graphical programming (software is very difficult to visualize, a software system is not a 3-space dimension realization)
- Program verification (much of the essence of building a program is in fact the debugging of the specification not the program itself)
- Environments and tools
- Workstations

## D - Promising Attacks on the Conceptual Essence

### Buy versus build

> The most radical possible solution for constructing software is not to construct it at all.

### Requirements refinement and rapid prototyping

- The hardest single part of building a software system is deciding precisely what to build.
- For the truth is, the client does not know what he wants.
- it is really impossible for a client to specify completely, precisely, and correctly the exact requirements of a 
modern software product before trying some versions of the product

> Therefore, one of the most promising of the current technological efforts, and one that attacks the essence, 
> not the accidents, of the software problem, is the development of approaches and tools for rapid prototyping of 
> systems as prototyping is part of the iterative specification of requirements. 

**The secret is that it (ie : the software) is grown, not built.**

### Great designers

The central question in how to improve the software art centers, as it always has, on people.

Great designs come from great designers. Software construction is a creative process. Sound methodology can empower and 
liberate the creative mind; it cannot inflame or inspire the drudge. 
