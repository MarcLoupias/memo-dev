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

# typings

[Type System](https://en.wikipedia.org/wiki/Type_system)

In programming languages, a type system is a set of rules that assigns a property called type to the various constructs of a computer program, such as variables, expressions, functions or modules.[1] These types formalize and enforce the otherwise implicit categories the programmer uses for algebraic data types, data structures, or other components (e.g. "string", "array of float", "function returning boolean").

The main purpose of a type system is to reduce possibilities for bugs in computer programs[2] by defining interfaces between different parts of a computer program, and then checking that the parts have been connected in a consistent way.

This checking can happen **statically** (**at compile time**), **dynamically** (**at run time**), or as a combination of static and dynamic checking.

## static vs dynamic typings

### static type checking

Static type checking is the process of verifying the type safety of a program based on analysis of a program's text (source code).
If a program passes a static type checker, then the program is guaranteed to satisfy some set of type safety properties for all possible inputs.

Can be ran before compile time, at write time.

### dynamic type checking

Dynamic type checking is the process of verifying the type safety of a program at runtime.

### combination

Combination of static and dynamic type checking enable downcasting :

In class-based programming, downcasting or type refinement is the act of casting a reference of a base class to one of its derived classes.

Example in Java :

```java

public class Fruit{}  // parent class
public class Apple extends Fruit{}  // child class

public static void main(String args[]) {
    // The following is an implicit upcast:
    Fruit parent = new Apple();
    // The following is a downcast. Here, it works since the variable `parent` is
    // holding an instance of Apple:
    Apple child = (Apple)parent;
}

```

## manifest vs inferred typings

### manifest typing

Manifest typing is explicit identification by the software programmer of the type of each variable being declared.

For example: if variable X is going to store integers then its type must be declared as integer.

```C

int addone(int x) {
    int result; /* declare integer result */

    result = x + 1;
    return result;
}

```

The type system rejects, at compile-time, such fallacies as trying to pass a string to `addone` function.

### inferred typing

Type inference refers to the automatic detection of the data type of an expression in a programming language.

This JavaScript example would not work in C language :

```javascript

function addOneThenOne(x) {
     var result;  /* inferred-type variable result */
     var result2; /* inferred-type variable result #2 */

     result = x + 1;
     result2 = result + 1.0;

     return result2;
 }

 addOneThenOne(2); // return 4

```

## nominal vs structural typings

### nominal typing

A nominal or nominative type system (or name-based type system) is a major class of type system, in which compatibility and equivalence of data types is determined by explicit declarations and/or **the name** of the types.

Nominal typing means that two variables are type-compatible **if and only if** their declarations name the same type.

For example, in C, two `struct` types with different names in the same translation unit are never considered compatible, even if they have identical field declarations.

C++, C#, Java, Objective-C, Delphi, Swift, and Rust all primarily use both nominal typing and nominal subtyping.

### structural typing

A structural type system (or property-based type system) is a major class of type system, in which type compatibility and equivalence are determined by the type's actual structure or definition, and not by other characteristics such as its name or place of declaration.

### pros vs cons

Nominal typing is useful at preventing accidental type equivalence, which allows better type-safety than structural typing. The cost is a reduced flexibility, as, for example, nominal typing does not allow new super-types to be created without modification of the existing subtypes.

## duck typing

"If it walks like a duck and it quacks like a duck, then it must be a duck."

Usually evaluated at runtime, some languages have capabilities to evaluate it at compile time.

### duck typing is not equal to structural typing

The main difference is that structural typing is enforced during static analysis found in statically typed languages, while duck typing is a runtime phenomenon emerging from the object semantics of dynamically typed languages.

In other wors, structural typing is a static typing and duck typing is a dynamic typing.
