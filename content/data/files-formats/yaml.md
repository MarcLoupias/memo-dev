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

# YAML

## descriptions

Est un format de représentation de données par sérialisation Unicode

Auteur : Clark Evans

http://www.yaml.org/

Exemple :

```yaml

---
receipt:     Oz-Ware Purchase Invoice
date:        2012-08-06
customer:
    given:   Dorothy
    family:  Gale

items:
    - part_no:   A4786
      descrip:   Water Bucket (Filled)
      price:     1.47
      quantity:  4

    - part_no:   E1628
      descrip:   High Heeled "Ruby" Slippers
      size:      8
      price:     100.27
      quantity:  1

bill-to:  &id001
    street: |
            123 Tornado Alley
            Suite 16
    city:   East Centerville
    state:  KS

ship-to:  *id001

specialDelivery:  >
    Follow the Yellow Brick
    Road to the Emerald City.
    Pay no attention to the
    man behind the curtain.
...

```

## specs

[specs at yaml.org](https://yaml.org/) :

- [YAML 1.2](https://yaml.org/spec/1.2/spec.html)
- [YAML 1.1](https://yaml.org/spec/1.1/)
- [YAML 1.0](https://yaml.org/spec/1.0/)

[The YAML Project - github.com](https://github.com/yaml)

> repository list with [yaml/yaml - github.com](https://github.com/yaml/yaml) to discuss issues

## tools

### js-yaml (yaml to js litteral)

[js-yaml - github.com/nodeca](https://github.com/nodeca/js-yaml)

[js-yaml - online webtool](http://nodeca.github.io/js-yaml/)

> to test yaml to js conversion
