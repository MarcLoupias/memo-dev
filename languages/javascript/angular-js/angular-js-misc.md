# AngularJS - misc

## framework Google support duration

[angularjs-1-x-support-lifecycle : stackoverflow.com] (http://stackoverflow.com/questions/37037251/angularjs-1-x-support-lifecycle)

## AngularJS origins

Un super texte sur [les origines d'angular] (http://java.dzone.com/articles/java-origins-angular-js)

## browser console

It is possible to access angular services via the browser console at runtime :

```javascript
angular.element(document.body).injector().get('serviceName');
```

At this point you have access to the singleton service instance.

## XML management

**Utiliser des webservices retournant du xml avec AngularJS**

Utiliser jQuery : [jquery.parsexml] (http://api.jquery.com/jquery.parsexml/)

Côté angular faire un call de webservice via `$http`.
Le xml retourné est dans `res.data`.

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

Ce fonctionnement permet d'avoir des méthodes utilitaires dans le prototype de chaque type créé pour accéder au data via des règles métiers ou autre.
