# regex

## ressources

[regex101 online tester](https://regex101.com/)

[Enfin maîtriser les Expressions Rationnelles - Christophe Porteneuve - `javascript.developpez.com` - 2014](https://javascript.developpez.com/tutoriels/maitriser-expressions-rationnelles/)

## exemples

`/^[A-Za-z0-9]{18}[0-9]{2}$/`

- `/` le premier slash indique le début de la regex
- `^` indique le début de la string
- `$` indique la fin de la string
- `[A-Za-z0-9]` il s'agit d'une **classe** qui spécifie les caractères autorisés, en l'occurrence n'importe quel caractère alphabétique en majuscule ou minuscule ou n'importe quel chiffre
- `{18}` il s'agit d'un **quantificateurs** qui permet d'indiquer le nombre de caractères (ou une plage par ex `{2.4}` signifie de 2 à 4 caractères)
- `/` le dernier slash indique la fin de la regex

Dans cet exemple on demande donc une chaine de caractères dont les 18 premiers sont alphanumériques et les 2 derniers numériques.
