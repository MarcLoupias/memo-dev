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
        - href: '../../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../../main.css'
          rel: stylesheet
          media: all
        - href: '../../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../../index.js'

---

# angular

## prez

- [ng-europe & beyond](http://angularjs.blogspot.fr/2014/10/ng-europe-angular-13-and-beyond.html)
- [AngularJS-vs-Angular-2-Should-I-Stay-or-Should-I-Go : blog.wishtack.com](http://www.blog.wishtack.com/single-post/2016/05/18/AngularJS-vs-Angular-2-Should-I-Stay-or-Should-I-Go)

## angular news

[What’s new in Angular: Version 6 release is imminent - 20180314](https://www.infoworld.com/article/3213244/javascript/whats-new-in-angular-5-easier-progressive-web-apps.html)

## ngEurope (articles de Christophe Galant)
- [ngEurope part 1](http://blog.ebiznext.com/2014/11/04/angular-europe-ngeurope-2014-14/)
- [ngEurope part 2](http://blog.ebiznext.com/2014/11/13/angular-europe-ngeurope-2014-24/)
- [ngEurope part 3](http://blog.ebiznext.com/2014/11/17/angular-europe-ngeurope-2014-34/)

## migration angularJs to angular

- [Angular 2 : Préparez vous dès maintenant à la migration (Benoit Lemoine) : Devoxx2016](https://www.youtube.com/watch?v=5U4OasGuo0o&index=111&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)

## articles divers

- [Difference Between Angular vs Angular 2 : blog.learnstartup.net (2017-05-30)](https://blog.learnstartup.net/p/difference-between-angular-vs-angular-2/)

- [How I stopped loving Angular : 20170920](https://codeburst.io/how-i-stopped-loving-angular-c2935f7378c4)

> opiniated but well argumented article. Comments are also valuables.

### angular DI

- [Angular Singleton Service and a Loading Indicator](https://medium.com/@weswhite/angular-singleton-service-and-a-loading-indicator-ca3cc7892722)

> Intéressant car montre qu'en Angular il y a un injecteur par module, pour voir un singleton global à la webapp il faut effectuer des manipulations contrairement à AngularJS où il n'y a qu'un seul injecteur pour tous les modules et où tous les services sont des singletons globaux à la webapp.

- [Dependency Injection in Angular, Pascal Precht : 20150518 (update 20170808)](https://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html)

> full overview of Angular DI system with updates when the framework is updated

- [Angular deprecates ReflectiveInjector and introduces StaticInjector. Should you care? : 20170808](https://blog.angularindepth.com/angular-introduces-staticinjector-should-you-care-4e059eca030c)

> focus on the DI breaking change introduced by Angular5 ([see CHANGELOG](https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes))

## angular CLI

[Angular CLI v1.x](https://github.com/angular/angular-cli/wiki/1-x-home)

[Angular CLI v6+](https://github.com/angular/angular-cli/wiki)

[Understanding the Angular CLI Workspace File](https://nitayneeman.com/posts/understanding-the-angular-cli-workspace-file/)

Schema file for Angular CLI's configuration :

- CLI v1.x : `.angular-cli.json`
- CLI v6+ : `angular.json`

## template syntax

[Template Syntax - angular.io](https://angular.io/guide/template-syntax)

A webapp is a tree of component. A component is a template and a JavaScript file.

[Binding syntax: An overview - angular.io](https://angular.io/guide/template-syntax#binding-syntax-an-overview)


