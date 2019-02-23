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

# js - download files

[Téléchargement d'un fichier Excel via service avec Angular 4 - www.developpez.net - 20180210](https://www.developpez.net/forums/d1813419/javascript/bibliotheques-frameworks/angular/telechargement-d-fichier-excel-via-service-angular-4-a/)

> Tu ne peux pas écrire sur le disque depuis le navigateur.
> 
> Il te faut donc ouvrir le fichier dans un nouvel onglet, le navigateur donnera alors la main à l'utilisateur pour ouvrir directement le fichier dans son tableur ou pour l'enregistrer sur son disque.
> 
> Ça se fait en passant un [`Blob`](https://developer.mozilla.org/fr/docs/Web/API/Blob) à [`URL.createObjectURL`](https://developer.mozilla.org/fr/docs/Web/API/URL/createObjectURL) qui retourne une url que tu vas ouvrir assez classiquement via [`window.open`](https://developer.mozilla.org/fr/docs/Web/API/Window/open).

[Enregistrer sous ou ouvrir des données csv - www.developpez.net - 20180423](https://www.developpez.net/forums/d1844070/javascript/general-javascript/enregistrer-sous-ouvrir-donnees-csv/)

> Quand je clique sur un bouton mon code construit des données csv dans une variable.
> Donc je suis au moment ou ma variable contient ce genre de données :
> Exploitation;Ilot;Parcellaire;Action;Nom;Date;Commentaire;Traitement
> test;test;test;test;test;test;test;test
> 
> J'aimerais arriver ici que cela déclenche une boite de dialogue enregistrer sous mes données csv ou ouvrir mes données avec excel. 
>
> Je te remercie ça fonctionne avec ce code du coup : (response sont mes données)
> 
> ```javascript
> let parsedResponse = response;
> let blob = new Blob([parsedResponse], { type: 'text/csv' });
> let url = window.URL.createObjectURL(blob);
> 
> if (navigator.msSaveOrOpenBlob) {
>     navigator.msSaveBlob(blob, 'export.csv');
>  } else {
>     let a = document.createElement('a');
>     a.href = url;
>     a.download = 'export.csv';
>     document.body.appendChild(a);
>     a.click();
>     document.body.removeChild(a);
> }
> 
> window.URL.revokeObjectURL(url);
> ```
