(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{298:function(e,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.ssi.gouv.fr/guide/recommandations-pour-la-securisation-des-sites-web/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sécuriser un site web"),s("OutboundLink")],1)]),e._v(" "),e._m(2),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.ssi.gouv.fr/uploads/2013/05/anssi-guide-recommandations_mise_en_oeuvre_site_web_maitriser_standards_securite_cote_navigateur-v2.0.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide ANSSI - Recommandations pour la mise en œuvre d’un site web : maîtriser les standards de sécurité côté navigateur"),s("OutboundLink")],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("SQL, LDAP, XPath, Parseur XML, ...")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("Saisir dans un champ de saisie de mot de passe :")]),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),s("p",[e._v("L'authentification devrait être déléguée à un service tiers (Kerberos, OAuth, JWT, ...)")]),e._v(" "),s("p",[e._v("La session devrait être gérée via un cookie :")]),e._v(" "),e._m(10),e._m(11),e._v(" "),s("p",[e._v("Protection par cryptographie.")]),e._v(" "),s("p",[e._v("Analyse des données (stockées ou pas)")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cross-site Scripting (XSS) : owasp.org"),s("OutboundLink")],1)]),e._v(" "),e._m(14),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("XSS (Cross Site Scripting) Prevention Cheat Sheet : owasp.org"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("AngularJS gère en natif ce problème (sanitize).")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://html5sec.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vectors making use of HTML5 features"),s("OutboundLink")],1)]),e._v(" "),e._m(15),e._v(" "),e._m(16),s("p",[e._v("Pour taper sur un autre compte par exemple.")]),e._v(" "),s("p",[e._v("Autre exemple, usage d'autoincrements SQL comme ID REST.")]),e._v(" "),s("p",[e._v("Applicativement il faut s'assurer qu'un user ne reçoivent que les données auxquelles il a accès.")]),e._v(" "),s("p",[e._v("Remplacer également les id SQL par des uuid.")]),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("Taf des devops. Config OS, middleware, réseau, remplacement des mdp par défaut, etc ...")]),e._v(" "),s("p",[e._v("Question dev attention aux logs.")]),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("RBAC à impl. Un user lambda ne doit pas accéder à l'administration de l'app.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("Exemple d'attaque :")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),s("p",[s("a",{attrs:{href:"http://stackoverflow.com/questions/12001269/what-are-the-security-risks-of-setting-access-control-allow-origin",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are the security risks of setting Access-Control-Allow-Origin? : stackoverflow.com"),s("OutboundLink")],1)]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("OWASP publie un composant MAVEN nommé "),s("a",{attrs:{href:"https://www.owasp.org/index.php/OWASP_Dependency_Check",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("dependency-check-maven")]),s("OutboundLink")],1),e._v(" pour check les vulnérabilités de son projet par ex.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://techbeacon.com/13-tools-checking-security-risk-open-source-dependencies-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("13 tools for checking the security risk of open-source dependencies"),s("OutboundLink")],1)]),e._v(" "),e._m(26),e._v(" "),e._m(27),s("p",[e._v("Par exemple si on permet aux users la saisie de liens (forum par ex), difficile de valider le lien de redirection.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regular expression Denial of Service - ReDoS"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("En fonction du pattern de la regex et de l'input donnée par l'utilisateur, il est possible de générer un cout CPU disproportionné. S'il y a plusieurs serveurs qui se passent la data et qu'ils checkent tous la data avec une regex, l'attaque peut toucher plusieurs machines. Contrairement à une DDoS classique dont le but est de noyer le serveur sous les requêtes, il s'agit ici de noyer le(s) serveur(s) sous le cout de calcul CPU.")]),e._v(" "),s("p",[e._v("Exemple de ReDoS "),s("a",{attrs:{href:"https://github.com/moment/moment/issues/4163",target:"_blank",rel:"noopener noreferrer"}},[e._v("sur moment.js"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(30),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.owasp.org/index.php/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWASP : the free and open software security community"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=qjR-BW5EG0c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protéger son application web des risques de sécurité les plus critiques (Pascal Abaziou) Devoxx2017"),s("OutboundLink")],1)])])}),[function(){var e=this._self._c;return e("h1",{attrs:{id:"security-webapp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security-webapp"}},[this._v("#")]),this._v(" security webapp")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"anssi-guides"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anssi-guides"}},[this._v("#")]),this._v(" ANSSI guides")])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("Les recommandations de ce guide concernent la sécurité des contenus présentés par un navigateur web aux utilisateurs. Les sujets abordés se concentrent autour des standards du Web, dont les implémentations côté navigateur requièrent des paramètres à spécifier lors du développement et de l'intégration d'un site ou d'une application web, de façon à en garantir la sécurité.")]),this._v(" "),e("p",[this._v("Après avoir exposé les menaces et classes d’attaque récurrentes, puis rappelé les règles d’hygiène en matière de sécurité Web, le guide « Recommandations pour la mise en œuvre d’un site web : maîtriser les standards de sécurité côté navigateur » décrit et détaille la mise en œuvre des mécanismes de sécurité mis à disposition par la plateforme web. Est notamment rappelée la contrainte de Same Origin Policy (SOP) et son mécanisme de relâchement Cross Origin Resource Sharing (CORS). Le guide aborde ensuite certaines pratiques de protection contre le Cross Site Scripting (XSS) telles que SubResource Integrity (SRI) puis la communication inter-contextes en général, en détaillant notamment les standards Content Security Policy (CSP), Referrer-Policy, et les pratiques relatives au cloisonnement telles que le choix et le paramétrage des moyens de stockage côté client (ex. : cookies, Web Storage) et des moyens d’isolation des ressources actives (ex. : iframes, Web Workers).")])])},function(){var e=this._self._c;return e("h2",{attrs:{id:"top-10-owasp-10-risques-de-securite-les-plus-critiques"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#top-10-owasp-10-risques-de-securite-les-plus-critiques"}},[this._v("#")]),this._v(" Top 10 OWASP (10 risques de sécurité les plus critiques)")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_1-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-injection"}},[this._v("#")]),this._v(" 1 - Injection")])},function(){var e=this._self._c;return e("h4",{attrs:{id:"exemple-avec-sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exemple-avec-sql"}},[this._v("#")]),this._v(" Exemple avec SQL")])},function(){var e=this._self._c;return e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("e' or '1' = '1\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var e=this._self._c;return e("h4",{attrs:{id:"exemple-avec-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exemple-avec-xml"}},[this._v("#")]),this._v(" Exemple avec XML")])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[e._v('<?xml version="1.0" encoding="ISO-8859-1"?>')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[e._v("DOCTYPE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[e._v("foo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token internal-subset"}},[e._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("!ELEMENT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("foo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("ANY")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v('\n        <!ELEMENT xxe SYSTEM "file:///etc/passwd" >')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("<"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&xxe;"}},[e._v("&xxe;")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_2-violation-de-gestion-d-authentification-et-de-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-violation-de-gestion-d-authentification-et-de-session"}},[this._v("#")]),this._v(" 2 - Violation de gestion d'authentification et de session")])},function(){var e=this._self._c;return e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('set-cookie:MonCookie="XXXX";Version=1;Secure;HttpOnly\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_3-exposition-de-donnees-sensibles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-exposition-de-donnees-sensibles"}},[this._v("#")]),this._v(" 3 - Exposition de données sensibles")])},function(){var e=this._self._c;return e("p",[this._v("Mot de passe : "),e("code",[this._v("bcrypt")]),this._v(", "),e("code",[this._v("PBKDF2")]),this._v(", "),e("code",[this._v("scrypt")]),this._v(" (hash solo trop faible)")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_4-cross-site-scripting-xss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-cross-site-scripting-xss"}},[this._v("#")]),this._v(" 4 - Cross-Site Scripting (XSS)")])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("Cross-site scripting attacks may occur anywhere that possibly malicious users are allowed to post unregulated material to a trusted web site for the consumption of other valid users.")]),this._v(" "),e("p",[this._v("The most common example can be found in bulletin-board web sites which provide web based mailing list-style functionality.")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_5-references-directes-non-securisees"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-references-directes-non-securisees"}},[this._v("#")]),this._v(" 5 - références directes non sécurisées")])},function(){var e=this._self._c;return e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("http://example.com/app/accountInfo?acct=notmyacct\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_6-mauvaise-config-secu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-mauvaise-config-secu"}},[this._v("#")]),this._v(" 6 - mauvaise config secu")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_7-manque-de-controle-d-acces-au-niveau-fonctionnel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-manque-de-controle-d-acces-au-niveau-fonctionnel"}},[this._v("#")]),this._v(" 7 - Manque de contrôle d'accès au niveau fonctionnel")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_8-falsification-de-requete-interdite-csrf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-falsification-de-requete-interdite-csrf"}},[this._v("#")]),this._v(" 8 - Falsification de requête interdite (CSRF)")])},function(){var e=this._self._c;return e("ul",[e("li",[this._v('vérifier que la requête est "Same Origin" (headers standards)')]),this._v(" "),e("li",[this._v("config & impl CORS")]),this._v(" "),e("li",[this._v("utiliser un token spécifique (Double cookie defense via XSRF-TOKEN)")])])},function(){var e=this,s=e._self._c;return s("ul",[s("li",[s("em",[e._v("user")]),e._v(" se connecte sur le site de sa banque utilisant un cookie pour gérer la session")]),e._v(" "),s("li",[s("em",[e._v("user")]),e._v(" effectue quelques actions (check des comptes etc ...)")]),e._v(" "),s("li",[s("em",[e._v("user")]),e._v(" "),s("strong",[e._v("ne se delog pas")])]),e._v(" "),s("li",[s("em",[e._v("user")]),e._v(" clique sur un lien lolcat reçu en mail. La page web chargée effectue un call sur le site\nde la banque de "),s("em",[e._v("user")]),e._v(" pour effectuer une transaction. Si CORS n'est pas configuré par la banque\nalors le navigateur transmettra le cookie de session toujours valide avec le call du site frauduleux\net sa transaction sera acceptée.")])])},function(){var e=this._self._c;return e("p",[this._v("CORS configuration is "),e("strong",[this._v("server-side")]),this._v(".")])},function(){var e=this._self._c;return e("p",[this._v("A server using "),e("code",[this._v('"Access-Control-Allow-Origin: *"')]),this._v(" allows all domains, it is "),e("strong",[this._v("very bad")]),this._v(".")])},function(){var e=this._self._c;return e("blockquote",[e("p",[this._v("By responding with "),e("code",[this._v("Access-Control-Allow-Origin: *")]),this._v(", the requested resource allows sharing with every origin. This basically means that any site can send an XHR request to your site and access the server’s response which would not be the case if you hadn’t implemented this CORS response.")]),this._v(" "),e("p",[this._v("So any site can make a request to your site on behalf of their visitors and process its response. If you have something implemented like an authentication or authorization scheme that is based on something that is automatically provided by the browser (cookies, cookie-based sessions, etc.), the requests triggered by the third party sites will use them too.")])])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_9-utilisation-de-composants-avec-des-vulnerabilites-connues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-utilisation-de-composants-avec-des-vulnerabilites-connues"}},[this._v("#")]),this._v(" 9 - Utilisation de composants avec des vulnérabilités connues")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"_10-redirections-et-renvois-non-valides"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-redirections-et-renvois-non-valides"}},[this._v("#")]),this._v(" 10 - redirections et renvois non validés")])},function(){var e=this._self._c;return e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("http://www.example.com/redirect.jsp?url=evil.com\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var e=this._self._c;return e("h2",{attrs:{id:"autres-attaques"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autres-attaques"}},[this._v("#")]),this._v(" autres attaques")])},function(){var e=this._self._c;return e("h3",{attrs:{id:"redos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redos"}},[this._v("#")]),this._v(" ReDoS")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"ressources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ressources"}},[this._v("#")]),this._v(" ressources")])}],!1,null,null,null);s.default=a.exports}}]);