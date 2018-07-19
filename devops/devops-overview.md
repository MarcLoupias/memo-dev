# devops - overview

## what is devops

[Devops - wikipedia.fr](https://fr.wikipedia.org/wiki/Devops)

> Apparu vers 2010, le mouvement Devops se caractérise principalement par la promotion de l'automation et du suivi (monitoring) de toutes les étapes de la création d'un logiciel, depuis le développement, l'intégration, les tests, la livraison jusqu'au déploiement, l'exploitation et la maintenance des infrastructures. Les principes Devops soutiennent des cycles de développement plus courts, une augmentation de la fréquence des déploiements et des livraisons continues, pour une meilleure atteinte des objectifs économiques de l'entreprise.

### resources

[devops.com](https://devops.com/)

[DORA - DevOps Research and Assessment](https://devops-research.com/)

[Accelerate - Nicole Forsgren, Jez Humble and Gene Kim - 20180327](https://itrevolution.com/book/accelerate/)

> Scientific study giving results and methodology about the puppet.com states of Devops from 2014 to 2017 (the books authors contributed to theses studies)
> 
> Martin Fowler preface

[The state of devops 2017 - puppet.com](https://puppet.com/blog/2017-state-devops-report-here)

> High performing organizations that effectively utilize DevOps principles achieve:
> 
> - 46x more frequent software deployments than their competitors.
> - 96x faster recovery from failures.
> - 440x faster lead time for changes.
> - Higher levels of customer satisfaction and operational efficiency.

[The state of devops 2016 - puppet.com](https://puppet.com/resources/whitepaper/2016-state-of-devops-report)

[The state of devops 2015 - puppet.com](https://puppet.com/resources/whitepaper/2015-state-devops-report)

[The state of devops 2014 - puppet.com](https://puppet.com/resources/whitepaper/2014-state-devops-report)

[The state of devops 2013 - puppet.com](https://puppet.com/resources/whitepaper/2013-state-devops-report)

[Containers + Kubernetes + OpenStack : la plateforme du futur ? - Rafaël Portolano, Dynatrace - 20171128](https://www.informatiquenews.fr/containers-kubernetes-openstack-plateforme-futur-rafael-portolano-dynatrace-54732)

### devops and outsourcing

[Will DevOps Kill IT Outsourcing?: Part 1 - devops.com - 20150803](https://devops.com/will-devops-kill-it-outsourcing-part-1/)

> According to [a report out earlier this spring by outsourcing research firm Information Services Group (ISG)](http://www.cio.com/article/2917376/outsourcing/it-outsourcing-deal-values-hit-10-year-low.html), average outsourcing contract values saw their worst first quarter in a decade, dropping by 27 percent year-over-year. Big deals over $30 million were particularly hit hard, declining by 25 percent in both number and value.
> 
> "I hear many more negative experiences organizations have had with outsourcing arrangements than I do positive ones," he says. "Poor quality. Higher-than-expected management overhead required. Inflexibility. Process challenges. All are reasons cited for why the arrangements didn’t live up to expectations."
> 
> The anecdotal stories are also piling up of big name enterprises pulling more of their IT resources back in house after years of outsourcing.

## cloud

### IaaS

**Infrastructure As A Service**

Amazon EC2, Windows Azure, RackSpace, CloudWatt, ...

[openstack](https://www.redhat.com/fr/topics/openstack)

### PaaS

**Platform As A Service**

Heroku, ...

### SaaS

**Software As A Service**

Any software hosted elsewhere on the internet (a webmail, a source code repository, a billing solution, etc ...)

### FaaS

**Function As A Service**

Just host a simple function, give it data and get a result.

## containers and containers orchestrators

[Characterizing and Contrasting Container Orchestrators - devops.com - 20170920](https://devops.com/characterizing-and-contrasting-container-orchestrators/)

> super quick evaluation of :
> - Nomad
> - Docker Swarm
> - Kubernetes
> - Mesos-Marathon

### docker, kubernetes

[The Advantages of Using Kubernetes and Docker Together - 20180507](https://cmelendeztech.com/posts/2018/05/kubernetes-docker-deployments.html)

> - Everything Starts With Your Local Environment
> - Use Docker to Pack and Ship Your App
> - Use Kubernetes to Deploy and Scale Your App
> - You’ll Deliver Quickly, Consistently, and Predictably

[Docker, Kubernetes et Istio, c'est utile pour mon monolithe? (D. Gageot) - DevoxxFR 2018](https://www.youtube.com/watch?v=Z_sNyT0hcVw)

> Pour développer et mettre en production une architecture à base de micro-services, Docker, Kubernetes et Istio s'imposent. Docker nous donne l'isolation des services, Kubernetes permet de les distribuer sur un cluster et Istio apporte de l'intelligence au réseau.
>
> Mais voilà, comme 80% des développeurs, c'est une application monolithique et paléolithique que je dois moderniser. Comment puis-je tirer tous les bénéfices de ces outils ? Puis-je le faire sans toucher une ligne de code de mon application ?
>
> Simplification des montées de version, Déploiement sur le Cloud, Sécurisation des flux, Terminaison SSL, Blue/Green deployments, A/B Testing, Monitoring des Apis... Autant de cas concrets que l'on mettra en oeuvre sans toucher au monolithe !!

### links

- [post linkedin : Développeur tu mets  combien de temps pour pousser ton code en prod ? : Denis Barthélemy R&D director @ One2Team](https://www.linkedin.com/feed/update/urn:li:activity:6324113425068814336)

> - LesFurets.com @Dimitri Baeli : J+1 (h+1 hotfix) (500K LoC, codebase age 10 ans, 25 devs)
> - BlaBlaCar @Nicolas Tricot : 45 mins entre git push et deploy prod

