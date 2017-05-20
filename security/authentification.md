# Authentification

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

### RFC

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

### RFC

[JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)

### Articles

- [Easy Angular Authentication with JSON Web Tokens : angularjs.blogspot.fr](http://angularjs.blogspot.fr/2016/11/easy-angular-authentication-with-json.html)
- [Introduction to JSON Web Tokens : jwt.io](https://jwt.io/introduction/)

## diff oAuth / OpenID

-  OAuth is about giving access to your stuff without sharing your identity at all
-  OpenID is all about using a single identity to sign into many sites

## articles securing SPA

- [Token Authentication for Java Applications : stormpath.com](https://stormpath.com/blog/token-auth-for-java)
- [Token Based Authentication for Single Page Apps (SPAs) : stormpath.com](https://stormpath.com/blog/token-auth-spa)
- [secure-single-page-app-problem : stormpath.com](https://stormpath.com/blog/secure-single-page-app-problem)

## keycloak

[Sécuriser ses applications back et front facilement avec Keycloak (Sebastien Blanc) : Devoxx2016](https://www.youtube.com/watch?v=bVidgluUcg0&index=94&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)
