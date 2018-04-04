# Web : Generic good practices

[Web Fundamentals : developers.google.com](https://developers.google.com/web/fundamentals/)

[Les check-lists des professionnels du Web : opquast.com](http://opquast.com/fr/#checklists)

> checklits qualité, référencement, accessibilité, performances, ergonomie, ...

[PageSpeed Insights : developers.google.com](https://developers.google.com/speed/pagespeed/insights/)

## accessibility (a11y)

[What is Accessibility (a11y) - www.techopedia.com](https://www.techopedia.com/definition/10165/accessibility-a11y)

> The word accessibility is abbreviated to "**a11y**," with the number eleven in the middle referring to the number of letters that the word contains between the first and last letter. It follows an Information and Communications Technology (ICT)-oriented convention, just like internationalization (**i18n**) and localization (**l10n**), which are used mostly in the software community. 

[Hugo Giraudel](https://hugogiraudel.com/) [github account](https://github.com/HugoGiraudel)

[Accessible Rich Internet Applications (WAI-ARIA) 1.1 - www.w3.org - 20171214](https://www.w3.org/TR/wai-aria/)

[landmarks example - www.w3.org - 20171214](https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/landmarks/region.html)

[How to Use ARIA Effectively with HTML5 - www.sitepoint.com - 20160211](https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/)

[The A11Y Project](https://a11yproject.com/) A community-driven effort to make web accessibility easier.

## Progressives webapps

[Progressive Web Apps : developers.google.com](https://developers.google.com/web/progressive-web-apps/)

> Progressive Web Apps are user experiences that have the reach of the web, and are:
>
> - Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
> - Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
> - Engaging - Feel like a natural app on the device, with an immersive user experience. 
>
> This new level of quality allows Progressive Web Apps to earn a place on the user's home screen. 

[Bien comprendre les Progressive Web Apps : makina-corpus.com](https://makina-corpus.com/blog/metier/2016/introduction-progressive-web-apps)

[workbox - JavaScript Libraries for Progressive Web Apps](https://github.com/GoogleChrome/workbox)

[lighthouse](https://github.com/GoogleChrome/lighthouse)

> Auditing, performance metrics, and best practices for Progressive Web Apps

[Hacker News readers as Progressive Web Apps](https://hnpwa.com/)

[HNPWA - Hacker News readers as Progressive Web Apps](https://github.com/tastejs/hacker-news-pwas)

> TodoMVC has helped thousands of developers select an MV* framework for their JavaScript applications. However, the web ecosystem has evolved in the past few years allowing us to build powerful applications using modern browser capabilities.
> 
> To provide developers with examples, we collected a list of Hacker News clients built with a number of popular JavaScript frameworks and libraries. Each implementation is a complete Progressive Web App that utilizes different progressive technologies to provide a fast, reliable and engaging experience.

### articles

[**Progressive Web Apps: Escaping Tabs Without Losing Our Soul : Alex Russell**](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)

> Article fondateur, pose les bases des PWA

[Que sont les Progressive Web Apps ? : frank.taillandier.me](https://frank.taillandier.me/2016/06/28/que-sont-les-progressive-web-apps/)

[L’argumentaire commercial pour les Progressive Web Apps : frank.taillandier.me](https://frank.taillandier.me/2016/08/09/argumentaire-commercial-pour-les-progressive-web-apps/)

### vidéos

[BDX I/O 2016 : Progressive Web Apps - Le futur du Web arrive...  : Hubert Sablonnière](https://www.youtube.com/watch?v=dSKp-76Ur6E)

### PWA - 10 caractéristiques

1. linkable (ne dépend pas d'un store, monde ouvert (web) vs monde fermé (stores))
2. responsive (content is like water)
3. safe (https, impossible à savoir sur une app native)
4. connectivity independant (mode déconnecté) (penser offline first) (service workers)
5. fresh (toujours up to date)
6. App-like interactions (ergo app natives) (application shell qui comporte les bases du layout d'un app native)
7. Notifications (même navigateur fermé)
8. Discoverable (fichier de manifeste référencé dans le html pour référencement via moteur de recherche)
9. "Installable" (ajout du lien sur l'écran d'accueil)
10. Progressive (adapté aux capacités du navigateur)

#### service workers

- proxy côté client codé en javascript, intercepte toutes les requêtes, dispose de son propre cache.
- ne fonctionne qu'en https
- commun à une origine (domaine + port)
- nouvelle API navigateur, est exécuté dans un thread indépendant, n'a pas accès à `window`
- utilise cache (nouvelle API navigateur), c'est une map qui fait correspondre des req et res (!= cache http)
- nouvelle API de requête (fetch)

Support des navigateurs actuels presque 100%. Microsoft & Apple à la bourre (en dev). Pas de polyfills possibles.
