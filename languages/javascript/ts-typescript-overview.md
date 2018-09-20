## TypeScript
développé par Microsoft

>  C'est un sur-ensemble de JavaScript (c'est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, pouvant ainsi être interprété par n'importe quel navigateur web ou moteur JavaScript.

- [site officiel : typescriptlang.org](http://www.typescriptlang.org/)
- [TypeScript : fr.wikipedia.org](https://fr.wikipedia.org/wiki/TypeScript)


#### articles
- [blog développeurs sur msdn.org](https://blogs.msdn.microsoft.com/typescript/2015/03/05/angular-2-built-on-typescript/)
- [dev.com angular basé sur typescript](http://typescript.developpez.com/actu/82182/Angular-2-sera-base-sur-TypeScript-convergence-de-AtScript-et-TypeScript-1-5-c-est-une-collaboration-entre-Google-et-Microsoft/)
- [angular-et-typescript-un-mariage-heureux : blog.xebia.fr](http://blog.xebia.fr/2014/03/12/angular-et-typescript-un-mariage-heureux/)
- [definitive guide to typescript](https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/)

#### documentation
- [angular typescript quickstart](https://angular.io/docs/js/latest/quickstart.html)

##### `tsconfig.json`

[`tsconfig.json` official doc - www.typescriptlang.org](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[`tsconfig.json` schema on json.schemastore.org](http://json.schemastore.org/tsconfig)

#### best practices
- [typescript - best practices](http://definitelytyped.org/guides/best-practices.html)

#### videos
- [TypeScript, le JavaScript statiquement typé : Devoxx2015](https://www.youtube.com/watch?v=YjI7mi7AGzA&list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b&index=109)
> 
> Migration progressive (passer les `.js` en `.ts` suffit à migrer sur `typescript` et inversement pour rollback)
> 
> Facilité apprentissage (juste le fait de typer)
>
> Compatible `ES6` (ajoute des polyfills, 90% de babel, donc autant faire `ES5` -> `typescript` plutôt que `ES5` -> `ES6` -> `TS`
>
> Refactoring simplifié du fait des types (erreurs à la compilation)
>
> Assitance IDE meilleure (Webstorm nickel)
>

#### Erreurs courantes après migration ES5/ES6 vers TS

`TS2339: Property 'xxx' does not exist on type 'Yyyy'.`

Cf issue 6373 : [Getting error TS2339: Property does not exist on type for a valid ES6 class](https://github.com/Microsoft/TypeScript/issues/6373)

Cf issue 2606 : [ES6 should be valid TypeScript](https://github.com/Microsoft/TypeScript/issues/2606)

```javascript
class Car {
    constructor(weight) {
        this.weight = weight;
    }
}
```

is invalid ts code, it will output `Error:(3, 14) TS2339: Property 'weight' does not exist on type 'Car'.`

```javascript
class Car {
    weight: number;

    constructor(weight: number) {
        this.weight = weight;
    }
}
```

is required by TS.

Anyway it is a non-blocker to generate the target javascript bundle.

If the input code is syntactically correct (prior to type checking) then it can generate ES output, and it is "valid" TS. At this first level, TS is a superset of ES, in that the set of valid TS programs is larger than the set of valid ES programs (because it includes all the valid ES programs plus those with type annotations).

The second level is type-correctness, which is what your error is complaining about. At this level, TS can act as a subset of ES: some valid ES programs, such as your example, are not type-correct TS programs.
