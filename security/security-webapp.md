# security webapp

## Top 10 OWASP (10 risques de sécurité les plus critiques)

### 1 - Injection

SQL, LDAP, XPath, Parseur XML, ...

#### Exemple avec SQL

Saisir dans un champ de saisie de mot de passe :

```
e' or '1' = '1
```

#### Exemple avec XML

```
<?xml version="1.0" encoding="ISO-8859-1"?>
    <!DOCTYPE foo [
        <!ELEMENT foo ANY >
        <!ELEMENT xxe SYSTEM "file:///etc/passwd" >]>
    <foo><&xxe;</foo>
```

### 2 - Violation de gestion d'authentification et de session

L'authentification devrait être déléguée à un service tiers (Kerberos, OAuth, JWT, ...)

La session devrait être gérée via un cookie :

```
set-cookie:MonCookie="XXXX";Version=1;Secure;HttpOnly
```

### 3 - Exposition de données sensibles

Protection par cryptographie.

Analyse des données (stockées ou pas)

Mot de passe : `bcrypt`, `PBKDF2`, `scrypt` (hash solo trop faible)

### 4 - Cross-Site Scripting (XSS)

[Cross-site Scripting (XSS) : owasp.org](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))

> Cross-site scripting attacks may occur anywhere that possibly malicious users are allowed to post unregulated material to a trusted web site for the consumption of other valid users.
> 
> The most common example can be found in bulletin-board web sites which provide web based mailing list-style functionality. 

[XSS (Cross Site Scripting) Prevention Cheat Sheet : owasp.org](https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet)

AngularJS gère en natif ce problème (sanitize).

### 5 - références directes non sécurisées

```
http://example.com/app/accountInfo?acct=notmyacct
```

Pour taper sur un autre compte par exemple.

Autre exemple, usage d'autoincrements SQL comme ID REST.

Applicativement il faut s'assurer qu'un user ne reçoivent que les données auxquelles il a accès.

Remplacer également les id SQL par des uuid.

### 6 - mauvaise config secu

Taf des devops. Config OS, middleware, réseau, remplacement des mdp par défaut, etc ...

Question dev attention aux logs.

### 7 - Manque de contrôle d'accès au niveau fonctionnel

RBAC à impl. Un user lambda ne doit pas accéder à l'administration de l'app.

### 8 - Falsification de requête interdite (CSRF)

- vérifier que la requête est "Same Origin" (headers standards)
- config & impl CORS
- utiliser un token spécifique (Double cookie defense via XSRF-TOKEN)

Exemple d'attaque :

- *user* se connecte sur le site de sa banque utilisant un cookie pour gérer la session
- *user* effectue quelques actions (check des comptes etc ...)
- *user* **ne se delog pas**
- *user* clique sur un lien lolcat reçu en mail. La page web chargée effectue un call sur le site
de la banque de *user* pour effectuer une transaction. Si CORS n'est pas configuré par la banque
alors le navigateur transmettra le cookie de session toujours valide avec le call du site frauduleux
 et sa transaction sera acceptée.

CORS configuration is **server-side**.

A server using `"Access-Control-Allow-Origin: *"` allows all domains, it is **very bad**.

[What are the security risks of setting Access-Control-Allow-Origin? : stackoverflow.com](http://stackoverflow.com/questions/12001269/what-are-the-security-risks-of-setting-access-control-allow-origin)

> By responding with `Access-Control-Allow-Origin: *`, the requested resource allows sharing with every origin. This basically means that any site can send an XHR request to your site and access the server’s response which would not be the case if you hadn’t implemented this CORS response.

> So any site can make a request to your site on behalf of their visitors and process its response. If you have something implemented like an authentication or authorization scheme that is based on something that is automatically provided by the browser (cookies, cookie-based sessions, etc.), the requests triggered by the third party sites will use them too.

### 9 - Utilisation de composants avec des vulnérabilités connues

OWASP publie un composant MAVEN nommé [`dependency-check-maven`](https://www.owasp.org/index.php/OWASP_Dependency_Check) pour check les vulnérabilités de son projet par ex.

[13 tools for checking the security risk of open-source dependencies](https://techbeacon.com/13-tools-checking-security-risk-open-source-dependencies-0)

### 10 - redirections et renvois non validés

```
http://www.example.com/redirect.jsp?url=evil.com
```

Par exemple si on permet aux users la saisie de liens (forum par ex), difficile de valider le lien de redirection.


## ressources

[OWASP : the free and open software security community](https://www.owasp.org/index.php/Main_Page)

[Protéger son application web des risques de sécurité les plus critiques (Pascal Abaziou) Devoxx2017](https://www.youtube.com/watch?v=qjR-BW5EG0c)
