
[from what-is-npm-shrinkwrap-and-when-is-it-needed : javascript.tutorialhorizon.com] (http://javascript.tutorialhorizon.com/2015/03/21/what-is-npm-shrinkwrap-and-when-is-it-needed/)

The `npm shrinkwrap` command lets you lock down the version numbers all the packages and their descendant packages in your `node_modules` directory. Lets examine why and when you should be using this command in your application development.

The npm package manager does a pretty good job at maintaining and installing dependencies for all the packages your project requires. It does so by installing a hierarchy of packages in the `node_modules` directory.

There are 2 main problems with the way `npm install` works

1. Although npm recommends using [semver] (https://github.com/npm/node-semver) for application versioning, it is completely upto the package author to honor this rule. This can be problematic if the package you depend on does not follow semver and a newer version of the package has breaking changes.
Even if the package author follows semver, there is still a probability that a bug might get introduced in a compatible version.
2. The other issue arises due to the way `npm install` works. Since running an `npm install` install a hierarchy of packages to be installed, if you wished to manually control the version numbers of the packages that you want to be installed, you could do that by using the exact version numbers in your `package.json`. However that only solves the problem for the direct dependents of your package. It does not give you control over the installed versions of the deeply nested packages that are the dependencies of your dependencies and beyond.

This can be crucial to you in a production environment because you need to ensure that each production re-deployment always always installs the same versions of the package as the other deployments.

This is where `npm shrinkwrap` comes into play. When you run `npm shrinkwrap` in a project after running `npm install`, it creates a file called `npm-shrinkwrap.json` which lists the exact package versions of all the installed packages in the entire hierarchy. If you check this into your version control and your collegue clones and does an `npm install`, then this time they will get the exact package version for the full hierarchy as specified in the `npm-shrinkwrap.json` file.

In order to update your `npm-shrinkwrap.json` file, you would need to run `npm update <package_name>`, thereby specifying the exact package that needs to be updated and then re-run `npm shrinkwrap` to updated your `npm-shrinkwrap.json` file.

If you need to find out which packages have become outdated, simply run

`npm outdated`

The above command will simply read the repository and inform you of any outdated packages. You can then examine them and decide whether or not you want to include them in production after thoroughly testing them.

Also note that by default `npm shrinkwrap` does not include your `devDependencies` unless you pass run it with the `-–dev` flag.

`npm shrinkwrap --dev`

----------------------

Procédure de gestion des dépendances de développement via [npm] (https://www.npmjs.com/)
===============================================================

**N.B.** Part du principe que `npm` ne gère que les dépendances de développement, mais pourrait également s'appliquer à une vâche près si `npm` servait aussi à gérer les dépendances de développement.

**Commandes `npm` impliquées**
- [npm install] (https://docs.npmjs.com/cli/install)
- [npm shrinkwrap] (https://docs.npmjs.com/cli/shrinkwrap)
- [npm outdated] (https://docs.npmjs.com/cli/outdated)
- [npm update] (https://docs.npmjs.com/cli/update)

Objectifs
---------

- Figer les dépendances de développement sur une version donnée de la webapp.
- S'assurer que tous les intervenants travaillent avec les mêmes dépendances (occurences et versions) de développement.
- S'assurer que Jenkins soit en mesure de build une application avec le bon contexte en fonction des versions désirées de la webapp.

Attention à la dette technique
------------------------------
Figer les versions c'est contracter de la dette technique. 
Ces environnements évoluent très très vite (plusieurs versions par mois, voire par semaine pour certains paquets).
Plus on attend pour payer sa dette plus elle coute cher.

Workflow
--------

### 1/ Initialisation

#### Première installation
Définir un fichier `package.json` et exécuter `npm install --save` pour installer les dépendances et modifier le `package.json` avec les dernières version disponibles. (`npm install --save-dev` pour les dépendances de développement)

**Attention** à la gestion de [semver] (https://github.com/npm/node-semver) par npm !!
`"browser-sync": "2.7.13"` entrainera l'installation de la version `2.7.13`.
`"browser-sync": "^2.7.13"` entrainera l'installation de la dernière version mineure disponible (2.9.10 par exemple) et si l'option `--save-dev` est active cela entrainera également la modification du `package.json` en `"^2.9.10"`.

#### Figer la première installation
Exécuter `npm shrinkwrap --dev` (génère le fichier `npm-shrinkwrap.json`, `--dev` permet d'inclure les `devDependencies`)

**Important** : 
- le contenu du `package.json` doit matcher parfaitement avec les modules réellements installés dans `../node_modules/` sinon la commande `npm shrinkwrap` échoue.
- si `npm install` est rejoué, il prendra le contenu de `npm-shrinkwrap.json` et ne tiendra pas compte des nouvelles versions. Les versions sont donc **figées**.

### 2/ monitorer la dette technique
Exécuter `npm outdated` produit une liste des packages avec 3 colonnes : `Current` (les versions installées), `Wanted` (les versions définies dans le package.json), `Latest` (les versions les + récentes disponibles sur le `registry`).

`npm outdated --depth=10`
affiche la liste des packages mais en tenant compte de la profondeur (sur 10 niveaux) et va donc également donner les sub-sub-n-packages sur 10 niveaux.
La colonne `Location` indiquera quel package ou sub-package est concerné.

### 3/ updater un package
Pour updater les `devDependencies` et modifier le `package.json` (afin de pouvoir derrière exécuter un `npm shrinkwrap`) **supprimer d'abord le `npm-shrinkwrap.json`** puis exécuter `npm update --dev --save`

`--dev` permet de prendre en compte les `devDependencies`

`--save` permet de modifier le `package.json`

Il convient ensuite de refixer les versions en passant par la case `npm shrinkwrap --dev`.

**Solution alternative**
Peut être moins risquée (à voir à l'usage), supprimer manuellement tout le contenu de `../node_modules/` et réexécuter l'installation.

