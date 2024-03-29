# devops - overview

## what is devops

[Devops - `wikipedia.fr`](https://fr.wikipedia.org/wiki/Devops)

> Apparu vers 2010, le mouvement Devops se caractérise principalement par la promotion de l'automation et du suivi (monitoring) de toutes les étapes de la création d'un logiciel, depuis le développement, l'intégration, les tests, la livraison jusqu'au déploiement, l'exploitation et la maintenance des infrastructures. Les principes Devops soutiennent des cycles de développement plus courts, une augmentation de la fréquence des déploiements et des livraisons continues, pour une meilleure atteinte des objectifs économiques de l'entreprise.

[Patrick Debois - `fr.wikipedia.org`](https://fr.wikipedia.org/wiki/Patrick_Debois)

> Inventeur du mot devops qui désigne une approche fédérée des développements informatiques (build) et des opérations (run).

[Patrick Debois - site perso - `www.jedi.be`](http://www.jedi.be/presentations/)

[Patrick Debois - `twitter.com`](https://twitter.com/patrickdebois)

[Il était une fois … l’histoire du DevOps - `www.oxalide.com` - 20140627](https://www.oxalide.com/il-etait-fois-lhistoire-du-mouvement-devops/)

[DevOps Culture (Part 1) - `itrevolution.com` - 20120501](https://itrevolution.com/devops-culture-part-1/)

### DevOps pipeline

![DevOps Pipeline](/images/devops/devops-pipeline.png)

#### article "Construire un pipeline DevOps"

[Contruire un pipeline DevOps - `jch.blog4ever.com` - Jean Chambard - 20180217](https://jch.blog4ever.com/contruire-un-pipeline-devops)

> TLDR : Liste et explique les outils associés à chaque étape de la pipeline.
>
> Etapdes de la pipeline : Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
>
> **Plan** :
>
> - Micro Focus (anciennement HPE) [Agile Manager](https://software.microfocus.com/fr-fr/software/agile-project-management-software-development)
> - Microsoft [Team Fondation Server](https://www.visualstudio.com/fr/tfs/) (TFS)
> - CA [Agile Central](https://www.ca.com/fr/products/ca-agile-central.html) (anciennement Rally)
> - Atlassian [Jira Software](https://fr.atlassian.com/software/jira) (connu pour son outil de bug tracking)
> - [Trello](https://trello.com/) (de la société éponyme, spin off de Fog Creek Software) : orienté tâches ;
> - CollabNet [ScrumWorks](https://www.collab.net/products/scrumworks)
> - Thoughtworks [Mingle](https://www.thoughtworks.com/mingle/)
> - [Wrike](https://www.wrike.com/fr/) (de la société éponyme)
> - [Asana](https://asana.com/fr/) (de la société éponyme) : orienté tâches
>
> **Code** :
>
> - [Git](https://git-scm.com/) (l'outil) ou [GitHub](https://github.com/) (le service)
> - Mercurial [Source Version Control](https://www.mercurial-scm.org/) (SVC)
> - Canonical [Bazaar](http://bazaar.canonical.com/en/)
> - Fossil [Source Version Control](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki)
>
> **Build** :
>
> - [Hudson](http://hudson-ci.org/)
> - [Jenkins](https://jenkins.io/)
> - Atlassian [Bamboo](https://fr.atlassian.com/software/bamboo)
> - Jetbrains [Teamcity](https://www.jetbrains.com/teamcity/)
> - Microsoft [TFS](https://www.visualstudio.com/fr/tfs/)
>
> **Test** :
>
> - [Selenium](http://www.seleniumhq.org/), pour tester toutes les applications avec une interface utilisateur basée sur un navigateur Web.
> - Micro Focus (Ex HPE) [Unified Functionnel Testing](https://software.microfocus.com/en-us/products/unified-functional-automated-testing/overview) (UFT).
> - Tricentis [Tosca](https://www.tricentis.com/software-testing-tools/), son challenger.
> - Smartbear [TestComplete](https://smartbear.com/product/testcomplete/overview/)
> - IBM [Rational](https://www-03.ibm.com/software/products/fr/rtw) Test Workbench. Il faut mieux avoir la suite Rational et un bon Mainframe pour ce genre d'outils.
>
> **Release** :
>
> - [Sonatype Nexus](http://www.sonatype.org/nexus/)
> - [Apache Archiva](https://archiva.apache.org/index.cgi)
> - [JFrog Artifactory](https://jfrog.com/artifactory/)
>
> **Deploy** :
>
> - *déploiement*
>   - [Jenkins](https://jenkins.io/). En sus d'assurer l'intégration continue, Jenkins est aussi capable de faire du déploiement continu. Mais cela reste assez rudimentaire. Pour des outils un peu plus évolués, il faut s'orienter vers des outils payants, qui offrent de nombreux plugins et interfaces.
>   - Electric Cloud [ElectricFlow](http://electric-cloud.com/products/electricflow/)
>   - XebiaLabs [XL-Deploy](https://xebialabs.com/products/xl-deploy/). Un des leaders en France.
>   - CA Technologies [Automic Release Automation](https://automic.com/fr/products/automic-release-automation) (rachat). Notons qu'Automic a réalisé un belle cartographie des différents outils, qui vaut le coup d'oeil.
>   - Octopus [Deploy](https://octopus.com/)
>   - IBM [UrbanCode Deploy](https://www-03.ibm.com/software/products/fr/ucdep) (rachat)
>
> - *provisioning*
>   - [Chef](https://www.chef.io/chef/).
>   - [Puppet](https://puppet.com/fr).
>   - [Ansible](https://www.ansible.com/). Sans doute le plus simple des 3 produits, et fonctionnant sans agent, ce qui fait son succès, mais aussi le plus limité de ce fait.
>   - Mentionnons aussi SaltStack et Fabric, des outils assez frustres de déploiement mais qui ont l'avantage d'être simples et gratuits.
>
> - *suivi*
>   - L'outil le plus connu est certainement XebiaLabs [XL-Release](https://xebialabs.com/products/xl-release/).
>   - IBM [UrbanCode](https://www-03.ibm.com/software/products/fr/ucrel) Release
>   - CA Technologies [Automic Release Automation](https://automic.com/fr/products/automic-release-automation)
>   - BMC [Release Process Management](http://www.bmcsoftware.fr/it-solutions/release-process-management.html)
>
> **Operate** :
>
> - Les conteneurs Linux [LXC](https://linuxcontainers.org/fr/)
> - [Docker](https://www.docker.com/) (qui n'est qu'une évolution des conteneurs LXC) et Docker Swarm pour la gestion des clusters, du routage, de la scalability.
> - Apache [Mesos](http://mesos.apache.org/) ; ce n'est pas un système de container mais plutôt un OS distribué supportant un système de container tel que Docker. Intéressant pour sa scalability.
> - [Kubernetes](https://kubernetes.io/) : un système open source conçu à l'origine par Google et offert à la Cloud Native Computing Foundation. Il vise à fournir une « plate-forme permettant d'automatiser le déploiement, la montée en charge et la mise en œuvre de conteneurs d'applications sur des clusters de serveurs ». A noter que Docker offre maintenant le support de Kubertenes dans la Docker Community Edition pour les developpeurs sous Windows et macOS, et dans la Docker Enterprise Edition.
> - Les conteneurs [Windows](https://www.microsoft.com/fr-fr/cloud-platform/containers) de chez Microsoft
>
> **Monitor** :
>
> - Dynatrace DCRUM et Purepath ([APM](https://www.dynatrace.com/capabilities/#application-monitoring--performance-lifecycle-management))
> - Appdynamics [APM](https://www.appdynamics.com/product/application-performance-management/)
> - New Relic [APM](https://newrelic.com/application-monitoring)
>
> En complément :
>
> - [ELK](https://www.elastic.co/fr/products) : acronyme pour 3 projets open source, Elasticsearch, Logstash, et Kibana. Ce triptyque est très répandu et utilisé notamment pour la supervision de la sécurité, mais pas que.
> - [Splunk](https://www.splunk.com/fr_fr) : C'est une sorte de plate-forme d'Intelligence Opérationnelle (par opposition à la Business Intelligence) temps réel. On peut ainsi explorer, surveiller, analyser et visualiser les données machine via Splunk.
> - [DataDog](https://www.datadoghq.com/) : DataDog est une excellente alternative à Splunk. La solution fonctionne aussi sur des environnements dans le Cloud.

#### GitHub Actions

[GitHub Actions now supports CI/CD, free for public repositories](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/)

[GitHub Actions - Subscribe to beta (will until end 2019)](https://github.com/features/actions)

[A curated list of awesome actions to use on GitHub](https://github.com/sdras/awesome-actions)

[Official doc Automating your workflow with GitHub Actions - `help.github.com`](https://help.github.com/en/categories/automating-your-workflow-with-github-actions)

[Official GitHub Actions collection - `github.com/actions`](https://github.com/actions)

[GitHub Action and `semantic-release` discussion](https://github.com/semantic-release/semantic-release/issues/974)

##### GitHub Blog official announcement

- [GitHub Actions: built by you, run by us - `github.blog` - 20181017](https://github.blog/2018-10-17-action-demos/)
- [GitHub Actions: Updates to GitHub Actions (limited public beta) - `github.blog` - 20190808](https://github.blog/changelog/2019-08-08-updates-to-github-actions-limited-public-beta/)
- [GitHub Actions: Publishing packages from a GitHub Action to GitHub Package Registry - `github.blog` - 20190816](https://github.blog/changelog/2019-08-16-publishing-packages-from-a-github-action-to-github-package-registry/)
- [GitHub Actions: Proxying packages with GitHub Package Registry and other updates - `github.blog` - 20190911](https://github.blog/2019-09-11-proxying-packages-with-github-package-registry-and-other-updates/)

#### GitHub Package Registry

[GitHub publie GitHub Package Registry en beta ouverte - `alm.developpez.com` - 20190512](https://alm.developpez.com/actu/260693/GitHub-publie-GitHub-Package-Registry-en-beta-ouverte-un-nouveau-service-qui-permet-de-gerer-les-livrables-associes-aux-depots/)

[Official doc About GitHub Package Registry - `help.github.com`](https://help.github.com/en/articles/about-github-package-registry)

[Your packages, at home with their code - Subscribe to beta](https://github.com/features/package-registry)

##### GitHub Blog official announcement

- [Introducing GitHub Package Registry - `github.blog` - 20190510](https://github.blog/2019-05-10-introducing-github-package-registry/)
- [Updated deletion policy for packages - `github.blog` - 20190613](https://github.blog/changelog/2019-06-13-updated-deletion-policy-for-packages/)
- [GitHub Actions: Publishing packages from a GitHub Action to GitHub Package Registry - `github.blog` - 20190816](https://github.blog/changelog/2019-08-16-publishing-packages-from-a-github-action-to-github-package-registry/)

### resources

[`devops.com`](https://devops.com/)

[DORA - DevOps Research and Assessment](https://devops-research.com/)

[Accelerate - Nicole Forsgren, Jez Humble and Gene Kim - 20180327](https://itrevolution.com/book/accelerate/)

> Scientific study giving results and methodology about the puppet.com states of Devops from 2014 to 2017 (the books authors contributed to theses studies)
>
> Martin Fowler preface

[The state of devops 2021 - `puppet.com`](https://puppet.com/resources/report/2021-state-of-devops-report)

> DevOps is not just automation ... and DevOps is not the cloud
>
> - Team identities and clear interaction paradigms matter.
> - Cultural blockers are keeping mid-evolution firms stuck in the middle.
> - Platform teams are key to success at scale.
>
> DevOps success requires support from every level of the organization : The most highly evolved firms benefit from top-down enablement of bottom‐up transformation.
>
> Automating repetitive tasks may not be sufficient for DevOps, but it is absolutely necessary.
>
> Stuck in the middle :
>
> - organizational resistance to change
> - legacy architecture
> - shortage of skills
> - limited or lack of automation
> - unclear goals or objectives
>
> Stop talking about culture, start doing stuff
>
> The role of platforms and self-service
>
> Risk aversion impedes progress
>
> How can leaders change their culture? Practical ideas for change
>
> - One of the most important interventions a leader can make is making the team understand why the status quo is no longer good enough.
> - take a long hard look at who you are hiring and how you’re hiring them.
> - think about how you can constantly, every day, “nudge” behavior in the right direction via praise, reward and recognition and directly, overtly, challenge those behaviors that do not align with the direction you are trying to go
>

[The state of devops 2020 - `puppet.com`](https://puppet.com/resources/report/2020-state-of-devops-report)

> 1/ Scaling DevOps practices with internal platform teams
> Platform as product not as project
>
> 2/ Change management in the DevOps era
> engineering‐driven companies have the greatest implementation success and highest levels of efficiency.
> Top challenges reported by all groups :
>
> - Incomplete test coverage.
> - Organizational mindset.
> - Tightly coupled application architecture.

[The state of devops 2019 - `puppet.com`](https://puppet.com/resources/report/2019-state-of-devops-report)

> Highly focused on security subjects

[The state of devops 2018 - `puppet.com`](https://puppet.com/resources/whitepaper/state-of-devops-report)

[The state of devops 2017 - `puppet.com`](https://puppet.com/blog/2017-state-devops-report-here)

> High performing organizations that effectively utilize DevOps principles achieve:
>
> - 46x more frequent software deployments than their competitors.
> - 96x faster recovery from failures.
> - 440x faster lead time for changes.
> - Higher levels of customer satisfaction and operational efficiency.

[The state of devops 2016 - `puppet.com`](https://puppet.com/resources/whitepaper/2016-state-of-devops-report)

[The state of devops 2015 - `puppet.com`](https://puppet.com/resources/whitepaper/2015-state-devops-report)

[The state of devops 2014 - `puppet.com`](https://puppet.com/resources/whitepaper/2014-state-devops-report)

[The state of devops 2013 - `puppet.com`](https://puppet.com/resources/whitepaper/2013-state-devops-report)

[Containers + Kubernetes + OpenStack : la plateforme du futur ? - Rafaël Portolano, Dynatrace - 20171128](https://www.informatiquenews.fr/containers-kubernetes-openstack-plateforme-futur-rafael-portolano-dynatrace-54732)

### devops and outsourcing

[Will DevOps Kill IT Outsourcing?: Part 1 - `devops.com` - 20150803](https://devops.com/will-devops-kill-it-outsourcing-part-1/)

> According to [a report out earlier this spring by outsourcing research firm Information Services Group (ISG)](http://www.cio.com/article/2917376/outsourcing/it-outsourcing-deal-values-hit-10-year-low.html), average outsourcing contract values saw their worst first quarter in a decade, dropping by 27 percent year-over-year. Big deals over $30 million were particularly hit hard, declining by 25 percent in both number and value.
>
> "I hear many more negative experiences organizations have had with outsourcing arrangements than I do positive ones," he says. "Poor quality. Higher-than-expected management overhead required. Inflexibility. Process challenges. All are reasons cited for why the arrangements didn’t live up to expectations."
>
> The anecdotal stories are also piling up of big name enterprises pulling more of their IT resources back in house after years of outsourcing.
>
> "Outsourcing in an enterprise setting is often implemented in a way that advances outdated waterfall-like practices and processes that are antithetical to continuous delivery," Braunhut says.
>
> "To be most effective, enterprises need to own the transformation, and it has to be a truly collaborative effort across disciplines–business leadership, engineering, system administration, security & compliance,"says Thomas Enochs, vice president of customer success at Chef. "ollaboration and transformation are difficult to achieve with outside third parties or vendors. They need to own and drive the change themselves, and not be dependent on others."

## cloud

### VMs vs Containers

[Containers and VMs - A Practical Comparison](https://www.youtube.com/watch?v=L1ie8negCjc)

```text

      **VM**                                                   **Containers**

+-----------------+                                         +-----------------+ <-+
|       App       |                                         |       App       |   | All
|                 |                                         |                 |   | this part
+-----------------+                                         +-----------------+   | is a
         |                                                  | OS Dependencies |   | container
         |                                                  +-----------------+ <-+
         V
+-----------------+                                         +--------+--------+
|   Dependencies  |  <-- config                             |        | Docker |
+-----------------+                                         |        +--------+
|       OS        |                                         |                 |
|                 |                                         |      OS         |
+-----------------+                                         +-----------------+

     < VM >   NIC, Storage, Size                                  < VM >
     < VSphere, HV, NSX, VSAN > NIC, Storage,                     < HV >
                                Agents, Kernel

+-----------------+                                         +-----------------+
|                 |                                         |                 |
|    Physical     |                                         |    Physical     |
|                 |                                         |                 |
+-----------------+                                         +-----------------+
```

### IaaS

Infrastructure As A Service

Amazon EC2, Windows Azure, RackSpace, CloudWatt, ...

[openstack](https://www.redhat.com/fr/topics/openstack)

[Dropbox saved almost $75 million over two years by building its own tech infrastructure - `www.geekwire.com` - 20180223](https://www.geekwire.com/2018/dropbox-saved-almost-75-million-two-years-building-tech-infrastructure/)

### PaaS

Platform As A Service

Heroku, ...

### SaaS

Software As A Service

Any software hosted elsewhere on the internet (a webmail, a source code repository, a billing solution, etc ...)

### FaaS

Function As A Service

Just host a simple function, give it data and get a result.

## containers and containers orchestrators

[What is a Container? - VMware Cloud-Native](https://www.youtube.com/watch?v=EnJ7qX9fkcU)

- Simplist form of what a container is : a sandbox for a process (goal is to running a process in isolation)

Most fundamentals notions of the runtime definition of a container :

**process namespace** (only that process shown by `ps` command)

**Cgroups** allows to restrict what containerized process are allowed to do (capabilities, ressources, ...)

Container life cycle and associated process are bounds.

- An image is a tree of images (image of OS, images of binaries (ssh, perl, ...), image of your app)

Each image can be seen as a binary snapshot (ssh in version x.y.z for ex).

It means you can compose your image with several others images instead of creating a monolitic full stack image.

- Docker

a docker file is a starting point for an image.

A container is packaged with all of his dependencies.

With a classical install for your app, your are limited by deps installed on your system.

With a container, it is expected that all the deps above the kernel are packaged inside the container.
So when you run your container inside an OS, it don't install anything. It sits above the OS in its own world.
If you delete your image, you the OS state is unchanged.

- Docker host

A docker host tight the runtime container, the images and the docker file together.

A docker host have a cache of the docker registry. The registry contains the images of binaries (each available versions).

You can pull and push from the registry. There is a diff with the cache to pull/push only what is needed.

The docker client talk (pull, create, run, commit, ...) to the daemon in docker host. Not only container life cycle management
but also network and storage config.

A docker host can contains also a Volume from a docker image. A Volume is the saved state (storage) of the container.
Deleting a container is also deleting his state, the Volume.

[Characterizing and Contrasting Container Orchestrators - `devops.com` - 20170920](https://devops.com/characterizing-and-contrasting-container-orchestrators/)

> super quick evaluation of :
>
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
> - BlaBlaCar @Nicolas Tricot : 45 mins entre `git push` et deploy prod
