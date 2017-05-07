# code complexity

## Nombre cyclomatique

cf [définition wikipedia] (https://fr.wikipedia.org/wiki/Nombre_cyclomatique)

> Le nombre cyclomatique, la complexité cyclomatique ou la mesure de McCabe est un outil de métrologie logicielle développé par Thomas McCabe en 1976 pour mesurer la complexité d'un programme informatique. Cette mesure comptabilise le nombre de « chemins » au travers d'un programme représenté sous la forme d'un graphe.

## NPath complexity

cf [developpez.net] (http://www.developpez.net/forums/d961599/general-developpement/alm/usine-logicielle/qualimetrie/npath-complexity/#post7472939)

> La complexité NPath tente de répondre à la question « combien y-a-t-il de possibilités de chemins différents ? », en parcourant le code et en multipliant par le nombre de possibilités à l'entrée de chaque boucle (par exemple *2 pour un if, *7 pour un switch de 6 cas et un cas par défaut).

## TLDR nombre cyclomatique vs comlexité NPath

- la complexité cyclomatique compte le nombre de chemins sur la route

- la complexité NPath le nombre total de possibilités pour arriver du début à la fin de la route en empruntant ces chemins

## Discussing Cyclomatic Complexity

cf [page sonar] (http://www.sonarqube.org/discussing-cyclomatic-complexity/)

Googling on Cyclomatic Complexity (CC), gives some interesting results… Among those results, you’ll find the two following definitions :

- A measure of the complexity of a software module, equal to e – n + 2, where e is the number of edges in the control flow graph and n is the number of nodes in this graph (that is, the cyclomatic number of the graph plus one)
- A measurement of the intricacy of a program module based on the number of repetitive cycles or loops that are made in the program logic. It is used as a general measure of complexity for software quality control as well as to determine the number of testing procedures
- …

Those two definitions, though perfectly true, are one of the reason for Sonar to exist: going away from the fact that code source quality is a notion only accessible to elite. Sonar is about democratization of the source code quality concepts to be understandable and usable by every stakeholder in a development project.

Having said that, what is it that CC is trying to represent? This is roughly the number of different paths in your source code and there are two ways in java to begin a new path : 

- Calling a method (CC + 1)
- Encountering the following keywords : if, while, repeat, for, &&, ||, catch, case, etc … (CC + 1)

The good news is that calculating the cyclomatic complexity is a human accessible operation. Moreover, according to the previous definition it’s easy to understand that the more paths you have in your application, the more complex your application will be.

But does that mean a program with a high cyclomatic complexity has a poor quality ? For sure not ! Otherwise all developers would prevent themselves from doing anything beyond a simple “HelloWorld” program whose cyclomatic complexity is 1 and would quickly lose their jobs :-)

Having a high total cyclomatic complexity on a program just means that a lot of logic has been implemented in the program but you cannot deduce any quality information from there. When zooming on classes or methods, that’s another story.

Is it better to have a method with a CC of 30, or three methods with a CC of 10 each ? If you have been in charge of source code maintenance for an application written by somebody else, you know the answer : when having three methods with a CC of 10 each, the chance is higher that the program is more maintainable, with a better separation of logic. As a consequence, you also decrease the risk to inject a bug. The **CC value by method can be used to evaluate the quality of the source code**.

At the class level, you can follow the same logic : high CC by class could be the witness of bad levels of decoupling, encapsulation and cohesion.

**In fact, what matters in a program is not its total cyclomatic complexity but the fact that each of its methods / classes has a suitable low level of CC**.

## Articles

- [NPath complexity and cyclomatic complexity explained : modess.io] (https://modess.io/npath-complexity-cyclomatic-complexity-explained/)

- [Complexité cyclomatique : www-igm.univ-mlv.fr] (http://www-igm.univ-mlv.fr/~dr/XPOSE2008/Mesure%20de%20la%20qualite%20du%20code%20source%20-%20Algorithmes%20et%20outils/complexite-cyclomatique.html)
