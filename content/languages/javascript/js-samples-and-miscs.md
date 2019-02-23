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

# js - samples and miscs

## utiliser des webservices retournant du xml avec AngularJS (ES5)

Utiliser jQuery : http://api.jquery.com/jquery.parsexml/

Côté angular faire un call de webservice via `$http`
Le xml retourné est dans `res.data`

```javascript
if (typeof(xml) === 'string') {
  xml = $.parseXML(xml);
}
```

Typer les données via des pseudos classes javascript et faire une methode parse dans chaque classe pour remplir un objet via un simple :

```javascript
function MaClasse(data) {
  this.data1 = '';
  this.data2 = {};
  this.data3 = [];
  
  this.parse(data);
}

MaClasse.prototype.parse = function( data ) {
  // parsing xml attr
  this.data1 = data.attr('data1') || 'default_value';

  // parsing lone xml tag leading to a complex object
  if (data.find('>data2').length > 0) {
    this.data2 = new MaClasseData2( bloc.find('>data2') );
  }
  
  // parsing xml tag list leading to an array
  data.find('>data3').each(function () {
    that.data3.push(new MaClasseData3( $(this) ));
  });
}
```

Ce fonctionnement permet d'avoir des méthodes utilitaires dans le prototype de chaque type créé 
pour accéder au data via des règles métiers ou autre.

## télécharger un fichier (pdf, xls, ...) dans un nouvel onglet 

Dans la promesse success du call au endpoint retournant le flux binaire :

- créer un blob avec le type correspondant :

```javascript
// où response.data correspond au flux de retour

// pdf
var file = new Blob([response.data], {type: 'application/pdf'});

// xls
var file = new Blob([response.data], {type: 'application/vnd.ms-excel'});
```

- sauvegarder le fichier dans le temp du navigateur et ouvrir dans un nouvel onglet

```javascript
if (window.navigator.msSaveOrOpenBlob) { // IE
    window.navigator.msSaveOrOpenBlob(file);
} else { // autres browsers
    var fileURL = window.URL.createObjectURL(file);
    window.open(fileURL, '_blank');
}
```
