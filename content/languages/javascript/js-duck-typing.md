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

# js - duck typing

[Duck Typing in Javascript](https://stackoverflow.com/questions/3379529/duck-typing-in-javascript)

[Duck Typing - en.wikipedia.org](http://en.wikipedia.org/wiki/Duck_typing)

> If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

> In a class-based object-oriented programming language (C++, for example) to make both objects look like a duck you must inherit their classes from a common "interface" class, so the compiler would let you call `duck` methods on them. That is called a strong typing. 

> Now this is how it's done in Javascript:

```javascript
var duck = {  
    appearance: "feathers",  
    quack: function duck_quack(what) {  
        print(what + " quack-quack!");  
    },  
    color: "black"  
};

var someAnimal = {  
    appearance: "feathers",  
    quack: function animal_quack(what) {  
        print(what + " whoof-whoof!");  
    },  
    eyes: "yellow"  
};  

function check(who) {  
    if ((who.appearance == "feathers") && (typeof who.quack == "function")) {  
        who.quack("I look like a duck!\n");  
        return true;  
    }  
    return false;  
}  

check(duck);  // true
check(someAnimal);  // true
```

> See, the `check` function check whether the passed object looks like a duck (it checks appearance and its' ability to quack). We pass two different objects to it and it will return `true` on both. Besides the appearance and quacking these may be completely different things, but IN THIS PARTICULAR `check` function they behave the same way (have a common interface), they both look like a "duck". We can call the `quack` method on both objects (and who cares what they really are).
