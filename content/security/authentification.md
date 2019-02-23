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
        - href: '../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../main.css'
          rel: stylesheet
          media: all
        - href: '../github.css'
          rel: stylesheet
    scripts:
        - src: '../index.js'

---

# Authentification

## articles divers

[L’authentification sans mot de passe sur le Web, c'est pour bientôt - www.01net.com - 20180826](https://www.01net.com/actualites/l-authentification-sans-mot-de-passe-sur-le-web-c-est-pour-bientot-1475642.html)

> **L'API WebAuthn pourrait rapidement s'imposer**
> 
> - Cf FIDO2 et [Yubico](https://www.yubico.com/2018/04/new-security-key-fido2/).
> - Supporté par W3C
> - Démo : https://webauthn.org/
> 
> **Le courrier électronique comme moyen d'authentification ?**
> 
> - Authentification par mail en se basant sur les headers DKIM (Domain Keys Identified Mail).
> - Cf [Swoop](https://swoopnow.com/).
> 
> **Utiliser les technologies des cryptomonnaies**
> 
> Utiliser les applis qui gèrent les comptes de cryptomonnaies pour authentifier les utilisateurs.

## Cookies vs Tokens

[Cookies vs Tokens: The Definitive Guide - auth0.com - 20160531](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)

## diff oAuth / OpenID / SAML

-  OAuth is about giving access to your stuff without sharing your identity at all
-  OpenID is all about using a single identity to sign into many sites

- [What's the difference between OpenID and OAuth? : stackoverflow.com](http://stackoverflow.com/questions/1087031/whats-the-difference-between-openid-and-oauth)
- [Difference Between OAUTH, OpenID and OPENID Connect in very simple term? : security.stackexchange.com](https://security.stackexchange.com/questions/44611/difference-between-oauth-openid-and-openid-connect-in-very-simple-term)
- [OAuth 2 vs OpenID Connect to secure API : security.stackexchange.com](https://security.stackexchange.com/questions/94995/oauth-2-vs-openid-connect-to-secure-api)

[Authentication and Authorization: OpenID vs OAuth2 vs SAML](https://spin.atomicobject.com/2016/05/30/openid-oauth-saml/)

|                             | OAuth2                  | OpenId                | SAML
| --------------------------- | ----------------------- | --------------------- | ----------
| Token (or assertion) format | JSON or SAML2           | JSON                  | XML
| Authorization?              | Yes                     | No                    | Yes
| Authentication?             | Pseudo-authentification | Yes                   | Yes
| Year created                | 2005                    | 2006                  | 2001
| Current version             | OAuth2                  | OpenID Connect        | SAML 2.0
| Transport                   | HTTP                    | HTTP GET and POST     | HTTP Redirect, SOAP, ...
| Best suited for             | API authorization       | SSO for consumer apps | SSO for enterprise (bad on mobile)

See article above for security risks.

[OAuth vs. SAML vs. OpenID Connect](https://www.gluu.org/blog/oauth-vs-saml-vs-openid-connect/)

> So when should you use SAML, and when should you use OpenID Connect?
> 
> - If you have a mobile application, use OpenID Connect–no question. See [this blog on the use of AppAuth](http://www.gluu.co/appauth-blog).
> - If you have an application that already supports SAML–use SAML!
> - If you are writing a new application, use OpenID Connect–skate to where the puck is going!
> - If you need to protect API’s, or you need to create an API Gateway… that’s a topic for another blog. Short answer: use OAuth2 or the [User Managed Access ("UMA")](https://www.gluu.org/resources/documents/standards/uma/) protocol!

## OAuth

- [oauth.net](http://oauth.net/)
- [explaining-oauth : hueniverse.com](http://hueniverse.com/2007/09/05/explaining-oauth/)
- [beginners-guide-to-oauth-part-i-overview : hueniverse.com](http://hueniverse.com/2007/10/04/beginners-guide-to-oauth-part-i-overview/)
- [Angularjs + OAuth + Play 2.0](http://stackoverflow.com/questions/12319385/angularjs-oauth-play-2-0)

## Is OAuth deprecated ?

[Am I right in thinking OAuth 1.0 has been deprecated in favour of OAuth 2.0? : stackoverflow.com](http://stackoverflow.com/questions/17679523/am-i-right-in-thinking-oauth-1-0-has-been-deprecated-in-favour-of-oauth-2-0)

> IETF has published a new version of OAuth 2 obsoleting OAuth 1.x and it strongly recommends the new Auth providers switch to OAuth2.
> 
> There is a revision to **OAuth 1.0a** which fixes many of the security flaws found in 1.0 and is widely considered to be the most secure OAuth version yet. 

## OAuth2

[OAuth 2.0 website](https://oauth.net/2/)

[User Authentication with OAuth 2.0](https://oauth.net/articles/authentication/)

> The OAuth 2.0 specification defines a delegation protocol that is useful for conveying authorization decisions across 
> a network of web-enabled applications and APIs. OAuth is used in a wide variety of applications, including providing 
> mechanisms for user authentication. 
> This has led many developers and API providers to incorrectly conclude that OAuth is itself an authentication protocol 
> and to mistakenly use it as such. Let's say that again, to be clear:
> 
> **OAuth 2.0 is not an authentication protocol.**
> 
> Much of the confusion comes from the fact that OAuth is used *inside* of authentication protocols, and developers will 
> see the OAuth components and interact with the OAuth flow and assume that by simply using OAuth, they can accomplish 
> user authentication. This turns out to be not only untrue, but also dangerous for service providers, developers, and end users.

[Analyse RFC 6749 par Stéphane Bortzmeyer](http://www.bortzmeyer.org/6749.html)

> OpenID vise à authentifier un utilisateur humain, OAuth à authentifier la requête d'un programme, agissant 
> pour le compte d'un humain.

[OAuth 2 Simplified : aaronparecki.com](https://aaronparecki.com/oauth-2-simplified/)

> This post describes OAuth 2.0 in a simplified format to help developers and service providers implement the protocol.
> 
> The OAuth 2 spec can be a bit confusing to read, so I've written this post to help describe the terminology in a 
> simplified format. The core spec leaves many decisions up to the implementer, often based on security tradeoffs of the 
> implementation. Instead of describing all possible decisions that need to be made to successfully implement OAuth 2, 
> this post makes decisions that are appropriate for most implementations.

### RFC

#### Core

[RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)

> The OAuth 2.0 authorization framework enables a third-party
> application to obtain limited access to an HTTP service, either on
> behalf of a resource owner by orchestrating an approval interaction
> between the resource owner and the HTTP service, or by allowing the
> third-party application to obtain access on its own behalf.  This
> specification replaces and obsoletes the OAuth 1.0 protocol described
> in RFC 5849.

[RFC6750 - The OAuth 2.0 Authorization Framework: Bearer Token Usage](https://tools.ietf.org/html/rfc6750)

> This specification describes how to use bearer tokens in HTTP
> requests to access OAuth 2.0 protected resources.  Any party in
> possession of a bearer token (a "bearer") can use it to get access to
> the associated resources (without demonstrating possession of a
> cryptographic key).  To prevent misuse, bearer tokens need to be
> protected from disclosure in storage and in transport.

[RFC6819 - OAuth 2.0 Threat Model and Security Considerations](https://tools.ietf.org/html/rfc6819)

> This document gives additional security considerations for OAuth,
> beyond those in the OAuth 2.0 specification, based on a comprehensive
> threat model for the OAuth 2.0 protocol.

#### Extensions

[RFC 7521 - Assertion Framework for OAuth 2.0 Client Authentication and Authorization Grants](https://tools.ietf.org/html/rfc7521)

> This specification provides a framework for the use of assertions
> with OAuth 2.0 in the form of a new client authentication mechanism
> and a new authorization grant type.  Mechanisms are specified for
> transporting assertions during interactions with a token endpoint;
> general processing rules are also specified.
> 
> The intent of this specification is to provide a common framework for
> OAuth 2.0 to interwork with other identity systems using assertions
> and to provide alternative client authentication mechanisms.
> 
> Note that this specification only defines abstract message flows and
> processing rules.  In order to be implementable, companion
> specifications are necessary to provide the corresponding concrete
> instantiations.

[RFC7591 - OAuth 2.0 Dynamic Client Registration Protocol](https://tools.ietf.org/html/rfc7591)

> This specification defines mechanisms for dynamically registering
> OAuth 2.0 clients with authorization servers.  Registration requests
> send a set of desired client metadata values to the authorization
> server.  The resulting registration responses return a client
> identifier to use at the authorization server and the client metadata
> values registered for the client.  The client can then use this
> registration information to communicate with the authorization server
> using the OAuth 2.0 protocol.  This specification also defines a set
> of common client metadata fields and values for clients to use during
> registration.

[RFC7592 - OAuth 2.0 Dynamic Client Registration Management Protocol](https://tools.ietf.org/html/rfc7592)

> This specification defines methods for management of OAuth 2.0
> dynamic client registrations for use cases in which the properties of
> a registered client may need to be changed during the lifetime of the
> client.  Not all authorization servers supporting dynamic client
> registration will support these management methods.

[RFC7662 - OAuth 2.0 Token Introspection](https://tools.ietf.org/html/rfc7662)

> This specification defines a method for a protected resource to query
> an OAuth 2.0 authorization server to determine the active state of an
> OAuth 2.0 token and to determine meta-information about this token.
> OAuth 2.0 deployments can use this method to convey information about
> the authorization context of the token from the authorization server
> to the protected resource.

[RFC7797 - JSON Web Signature (JWS) Unencoded Payload Option](https://tools.ietf.org/html/rfc7797)

> JSON Web Signature (JWS) represents the payload of a JWS as a
> base64url-encoded value and uses this value in the JWS Signature
> computation.  While this enables arbitrary payloads to be integrity
> protected, some have described use cases in which the base64url
> encoding is unnecessary and/or an impediment to adoption, especially
> when the payload is large and/or detached.  This specification
> defines a means of accommodating these use cases by defining an
> option to change the JWS Signing Input computation to not base64url-
> encode the payload.  This option is intended to broaden the set of
> use cases for which the use of JWS is a good fit.
> 
> This specification updates RFC 7519 by stating that JSON Web Tokens
> (JWTs) MUST NOT use the unencoded payload option defined by this
> specification.

[RFC7523 - JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants](https://tools.ietf.org/html/rfc7523)

> This specification defines the use of a JSON Web Token (JWT) Bearer
> Token as a means for requesting an OAuth 2.0 access token as well as
> for client authentication.

[RFC7800 - Proof-of-Possession Key Semantics for JSON Web Tokens (JWTs)](https://tools.ietf.org/html/rfc7800)

> This specification describes how to declare in a JSON Web Token (JWT)
> that the presenter of the JWT possesses a particular proof-of-
> possession key and how the recipient can cryptographically confirm
> proof of possession of the key by the presenter.  Being able to prove
> possession of a key is also sometimes described as the presenter
> being a holder-of-key.

[RFC7009 - OAuth 2.0 Token Revocation](https://tools.ietf.org/html/rfc7009)

> This document proposes an additional endpoint for OAuth authorization
> servers, which allows clients to notify the authorization server that
> a previously obtained refresh or access token is no longer needed.
> This allows the authorization server to clean up security
> credentials.  A revocation request will invalidate the actual token
> and, if applicable, other tokens based on the same authorization
> grant.

[RFC7522 - Security Assertion Markup Language (SAML) 2.0 Profile for OAuth 2.0 Client Authentication and Authorization Grants](https://tools.ietf.org/html/rfc7522)

> This specification defines the use of a Security Assertion Markup
> Language (SAML) 2.0 Bearer Assertion as a means for requesting an
> OAuth 2.0 access token as well as for client authentication.

[RFC7636 - Proof Key for Code Exchange by OAuth Public Clients](https://tools.ietf.org/html/rfc7636)

> OAuth 2.0 public clients utilizing the Authorization Code Grant are
> susceptible to the authorization code interception attack.  This
> specification describes the attack as well as a technique to mitigate
> against the threat through the use of Proof Key for Code Exchange
> (PKCE, pronounced "pixy").

[RFC6755 - An IETF URN Sub-Namespace for OAuth](https://tools.ietf.org/html/rfc6755)

> This document establishes an IETF URN Sub-namespace for use with
> OAuth-related specifications.

### Articles

- [Comprendre OAuth2 : http://www.bubblecode.net](http://www.bubblecode.net/fr/2016/01/22/comprendre-oauth2/) **good**
- [OAuth 2.0 leader resigns, says standard is 'bad' : cnet.com](https://www.cnet.com/news/oauth-2-0-leader-resigns-says-standard-is-bad/)

### Acces Token & Refresh Token

[Why Does OAuth v2 Have Both Access and Refresh Tokens? : stackoverflow.com](http://stackoverflow.com/questions/3487991/why-does-oauth-v2-have-both-access-and-refresh-tokens/12885823#12885823)

### Authorization servers

- [github developer oauth](http://developer.github.com/v3/oauth/)
- [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/OAuth2)
- [Facebook Login pour le web avec le SDK JavaScript](https://developers.facebook.com/docs/facebook-login/web)
- [Twitter Developer Documentation - POST oauth2/token](https://dev.twitter.com/oauth/reference/post/oauth2/token)
- [LinkedIn Authenticating with OAuth 2.0](https://developer.linkedin.com/docs/oauth2#)

## JWT

[100% Stateless avec JWT (JSON Web Token) (Hubert SABLONNIÈRE) : Devoxx2016](https://www.youtube.com/watch?v=A2-YImhNVMU)

> **Historique**
> - historique de la gestion des sessions web via cookie
> - rappel : diff cookie et JWT fausse, c'est diff entre sessionId et JWT car cookie est un mode de transport. JWT est 
> transporté via un cookie
> - diff entre sessionId et token JWT
>   - sessionId = token par référence (contient la référence à la session, la session étant stockée dans le backend)
>   - JWT = token par valeur (contient la valeur de la session : `H34D3R.P4YLO4D.S1GN47UR3`)
>
> **JWT**
> Un token JWT est encodé en Base64url (comme Base64 mais safe pour les urls)
> 3 parties (header, payload et signature) encodées chacune en Base64url, les parties sont séparées par un `.`.
> Une fois décodé, les parties header et payload du token sont au format json.
> 
> Les propriétés de la partie payload sont nommées des `claims` (codifiés par RFC7519).
>
> **Avantages**
> - stocké côté client donc scalable
> - multilangage
> - microservices
> - SSO gratuit 
>
> **Usage avec d'autres technos**
> - OAuth2 : Si le provider OAuth2 fournit des refresh token et access token JWT alors on est complètement stateless
> - OpenID Connect : le token ID est de base un JWT
> 
> **Inconvénients**
> - Révocation de tokens (blacklist via le claim `jti`, crée un SPOF (Single Point Of Failure))
> - transporté via cookies donc vulnérables aux attaques XSS et CSRF
>
> **Autres usages des JWT**
> - stockage données session (panier, formulaire multipart, ...)
> - mail de confirmation en passant le token dans l'url du mail de confirmation (évite le stockage BDD)
>
> Comment gérer les permissions via le JWT si celui-ci est HTTPonly (bonne pratique de sécu) ?
> Nécessite un webservice qui lit le token et renvoie en clair les permissions.

### RFC

[JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)

### Articles

- [Easy Angular Authentication with JSON Web Tokens : angularjs.blogspot.fr](http://angularjs.blogspot.fr/2016/11/easy-angular-authentication-with-json.html)
- [Introduction to JSON Web Tokens : jwt.io](https://jwt.io/introduction/)

## articles securing SPA

- [Token Authentication for Java Applications : stormpath.com](https://stormpath.com/blog/token-auth-for-java)
- [Token Based Authentication for Single Page Apps (SPAs) : stormpath.com](https://stormpath.com/blog/token-auth-spa)
- [secure-single-page-app-problem : stormpath.com](https://stormpath.com/blog/secure-single-page-app-problem)

## keycloak

[Sécuriser ses applications back et front facilement avec Keycloak (Sebastien Blanc) : Devoxx2016](https://www.youtube.com/watch?v=bVidgluUcg0&index=94&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)
