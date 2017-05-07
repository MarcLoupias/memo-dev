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
