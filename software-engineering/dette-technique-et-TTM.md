# Dette technique et TTM

## Dette technique (Technical Debt)

- [Martin Fowler : Technical Debt](http://martinfowler.com/bliki/TechnicalDebt.html)
- [Wikipedia : Dette technique](https://fr.wikipedia.org/wiki/Dette_technique)
- [blog.octo.com : maitriser sa dette technique](http://blog.octo.com/maitriser-sa-dette-technique/)
- [c2.com : Technical Debt](http://www.c2.com/cgi/wiki?TechnicalDebt)
- [cetic.be : Dette technique des développements](https://www.cetic.be/Dette-technique-des-developpements)

- [Vos managers ne veulent pas entendre parler de la dette technique, tant mieux ! : Freddy Mallet (@SonarSource) Devoxx2015](https://www.youtube.com/watch?v=hpGxwgVrGDU&list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b&index=6)

> "Les ruptures technologiques doivent se faire dans la continuité."
>
> Idée générale est d'ignorer la dette sur le code legacy qui n'a pas besoin d'évoluer
> et de se focus uniquement sur le delta entre les versions pour que le nouveau soit nickel.
> Il faut être très rigoureux sur la qualité du nouveau code (ex : test coverage 80%+)

### image du tapis roulant

La dette technique appliquée au développement logiciel, en particulier en web, c'est à peu près comme avancer sur un tapis roulant en sens inverse.
Au début ce tapis roulant fonctionne très lentement. Il faut affecter une partie de son énergie pour s'assurer que le tapis continue de tourner lentement en effaçant la dette.
Si on ne le fait pas, on va peut être avancer plus vite au début, mais plus le tapis ira vite plus on ralentira, et on finira par faire du sur-place puis par tomber.

## Time To Market

- [Wikipedia : Time To Market](https://en.wikipedia.org/wiki/Time_to_market)

Egalement nommé Time To Deliver (TTD)

## Relation TD & TTM

- [refacto & techno debt is not a choice but a responsability](http://www.velocitypartners.net/blog/2014/04/03/refactoring-and-technical-debt-its-not-a-choice-its-a-responsibility-part-2/)
- [Technical deb vs ROI](http://www.ontechnicaldebt.com/blog/technical-debt-vs-roi-your-code-may-be-elegant/)

## speed vs quality
- [software-development-speed-vs-quality : from coderlifestyle.com](http://coderlifestyle.com/software-development-speed-vs-quality-a-tech-shop-conundrum/)
- [discussion reddit](https://www.reddit.com/r/programming/comments/3eep2m/software_development_speed_vs_quality_a_tech_shop/)

## risques et difficultés projets

Cf projet SIRHEN ([www.zdnet.fr](https://www.zdnet.fr/blogs/green-si/sirhen-ou-savoir-quand-arreter-un-projet-39871527.htm), [dev.com](https://www.developpez.com/actu/216005/L-Education-nationale-decide-de-debrancher-SIRHEN-son-logiciel-visant-a-gerer-son-personnel-qui-a-deja-englouti-320-millions-d-euros/))

- quand la techno choisie évolue très vite (typiquement tout ce qui est web based) : risque que la dette s'accumule plus vite que la capacité à la résorber jusqu'à aboutir en quelques années à une obsolescence totale conduisant à un nouveau risque : Difficulté à trouver des techniciens sur la techno obsolète.
- confier la rédaction des EDB et specs à du personnel connaissant le métier mais n'ayant aucune compétence de rédaction de specs.
- quand le domaine métier évolue tout le temps avec des méthodos de gestion de projet provoquant des effets tunnels
- sur un domaine métier déjà informatisé qui évolue peu pendant une longue période, le personnel se repose sur le SI existant et oublie peu à peu le métier (du fait de l'habitude et du fait du turnover), lorsqu'il faut refondre l'appli plus personne ne connait complètement le métier
- implémentation du métier dans une techno propriétaire non standard
- implémentation du métier mélangée aux considérations techniques (I/O, BDD, fichiers, etc ...), cf Clean Architecture

## stats and reports

[Chaos Report - www.standishgroup.com - 1994](https://www.standishgroup.com/sample_research_files/chaos_report_1994.pdf)

For 1994, USA spend 250b$ per year on IT application dev on around 175K projects.

Average cost per project :
- large company is 2.322m$
- medium company is 1.331m$
- small company is 0.434m$

Sample result for 1994 : T1 = 16.2%, T2 = 52.7%, T3 = 31.1%

- project resolution type 1 (project success) : The project is completed on-time, on-budget, with all features and functions as initially specied
- project resolution type 2 (project challenged) : The project is completed and operationnal but over-budget, over the time estimate, and offers fewer features and functions than originally specified
- project resolution type 3 (project impaired) : The project is canceled at some point during the development cycle

| Year | Successful (%) | Challenged (%) | Failed (%) |
| ---- | -------------- | -------------- | ---------- |
| 1994 | 16 | 53 | 31 |
| 1996 | 27 | 33 | 40 |
| 1998 | 26 | 46 | 28 |
| 2000 | 28 | 49 | 23 | 
| 2004 | 29 | 53 | 18 | 
| 2006 | 35 | 46 | 19 | 
| 2009 | 32 | 44 | 24 |

Conclusions contested by [The rise and fall of the chaos report figures - IEEE Software - 2010](https://www.cs.vu.nl/~x/the_rise_and_fall_of_the_chaos_report_figures.pdf).

## Triangle

- [le-triangle-qualite-cout-delai : geek-directeur-technique.com](http://www.geek-directeur-technique.com/2009/07/10/le-triangle-qualite-cout-delai)

- [Project management triangle](https://en.wikipedia.org/wiki/Project_management_triangle)

```
           SCOPE
             ^
            / \
           /   \
          /     \
         /       \
        / QUALITY \
       /           \
SCOPE /_____________\ TIME

1. The quality of work is constrained by the project's budget, deadlines and scope (features).
2. The project manager can trade between constraints.
3. Changes in one constraint necessitate changes in others to compensate or quality will suffer.
```

## services

[Greenkeeper.io](https://greenkeeper.io/)

> Greenkeeper sits between npm and GitHub, observing all of the modules you depend on. When they get updated, your project gets a new branch with that update. Your CI tests kick in, and we watch them to see whether they pass.
> 
> Based on the test results and your current version definitions we will open up clear, actionable issues for you. If there’s nothing for you to do, we won’t nag you.
> 
> Let the friendly Greenkeeper bot take all the dull work of keeping your dependencies up to date off your shoulders and, optimally, boil it all down to a few clicks. This is as close to fully automatic as we could possibly make it.

#### SQALE : Software Quality Assessment based on Lifecycle Expectations
- [sqale.org](http://www.sqale.org/) Permet d'évaluer la qualité du code. Utilisé par [SonarQube](http://www.sonarsource.com/).
