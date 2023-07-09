# Web : Generic good practices

[Web Fundamentals : developers.google.com](https://developers.google.com/web/fundamentals/)

[Les check-lists des professionnels du Web : opquast.com](http://opquast.com/fr/#checklists)

> checklits qualité, référencement, accessibilité, performances, ergonomie, ...

[The Cost Of JavaScript - Addy Osmani medium blog - 20171115](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e)

> tl;dr: less code = less parse/compile + less transfer + less to decompress

## websites perfs KPIs

- online tools

[PageSpeed Insights : developers.google.com](https://developers.google.com/speed/pagespeed/insights/)

- speed index

[Speed Index : tout savoir sur cet indicateur majeur de la performance web - blog.dareboost.com - 20180208](https://blog.dareboost.com/fr/2018/02/speed-index-performance-web/)

[Paul Irish: Day 2 Keynote - Delivering The Goods In Under 1000ms - 2014](https://www.youtube.com/watch?v=E5lZ12Z889k)

- Time To First Byte

Delay between the first HTTP request from the web browser and the reception of the first byte of the web page by the browser.

- Total Weight

Measures the total weigth of the page, with all resources loaded.

This will be measured for a first access, without cache, and without scrolling down to the bottom of the page (images below the fold using lazy loading will thus not be downloaded and taken into account in the page weight).

- Start Render

Delay between the first request from the web browser and the first diplay on the user's screen (the web page is not totally white anymore).

The Start Render indicates the moment when the first element is painted in the user viewport. It is computed thanks to filmstrip video analysis.

This metric is really interesting in terms of UX, since it represents the moment when the user is not facing a white page anymore.

This does not mean the user is seeing something meaningfull though (the first rendered element can be a backgroud color or a decorative visual element).

- DOM Interactive

The browser has finished to parse the HTML code. The DOM construction is complete.

- DOM Content Loaded

The `DOMContentLoaded` event is fired when the DOM and CSSOM trees have been built, without waiting for images and subframes to load.

Synchronous scripts – and those with a defer attribute – have been executed.

- Visually complete

Delay between the first request from the web browser and the complete and final render of the above the fold part of the page (the part of the page visible without the user needing to scroll is loaded and displayed).

The final visual state of the page is captured after the end of network trafic.

The video analysis allows then to determine the moment this final visual state has been reached (most of the time it is way before the end of the network trafic).

- Fully loaded

The web page is fully loaded, all the resources are fetched, parsed and executed.

All the metrics above are time related metrics and refer to a specific moment on the filmstrip.

Google even promotes more time based metrics, rather UX oriented, to measure when and how the page is loaded.

## websites payload size

[The average web page is 3MB. How much should we care? - Tammy Everts - speedcurve.com/blog - 20170809](https://speedcurve.com/blog/web-performance-page-bloat/)

> - 2011 : 900 kb
> - 2017 : 3 mo
>
> Images are more then 50% of the payload size. Text assets that can compress well represent around 10% of the payload size.

[Page bloat: The average web page size is more than 2MB - Tammy Everts - www.soasta.com/blog - 20150611](https://www.soasta.com/blog/page-bloat-average-web-page-2-mb/)

>
> - 1995 : 14 kb
>
> - nov 2011 : 0.9 mo
> - may 2012 : 1.1 mo
> - nov 2012 : 1.2 mo
> - may 2013 : 1.45 mo
> - nov 2013 : 1.6 mo
> - may 2014 : 1.7 mo
> - nov 2014 : 1.8 mo
> - may 2015 : 2 mo
>

[What is the recommended JS kb limit for a web app? - stackoverflow.com - 2011](https://stackoverflow.com/questions/5939161/what-is-the-recommended-js-kb-limit-for-a-web-app?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

> 500 kb (in 2011 ...)

[Sizes of JS frameworks, just minified + minified and gzipped](https://gist.github.com/Restuta/cda69e50a853aa64912d)

### dealing with assets

[Recommended size of JavaScript assets on a web page - stackoverflow.com - 20150504](https://stackoverflow.com/questions/30027673/recommended-size-of-javascript-assets-on-a-web-page?noredirect=1&lq=1)

[Two Quick Ways To Reduce React App’s Size In Production - medium.com/@rajaraodv - 20161130](https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a)

### compression

N.B. : Google Chrome Tools shows compressed values in network panel.

[Enable gzip compression - varvy.com - 2016](https://varvy.com/pagespeed/enable-compression.html)

[varvy.com/tools/gzip](https://varvy.com/tools/gzip/)

[varvy.com/pagespeed](https://varvy.com/pagespeed/)

## accessibility (a11y)

[What is Accessibility (a11y) - www.techopedia.com](https://www.techopedia.com/definition/10165/accessibility-a11y)

> The word accessibility is abbreviated to "**a11y**," with the number eleven in the middle referring to the number of letters that the word contains between the first and last letter. It follows an Information and Communications Technology (ICT)-oriented convention, just like internationalization (**i18n**) and localization (**l10n**), which are used mostly in the software community.

[Hugo Giraudel](https://hugogiraudel.com/) [GitHub account](https://github.com/HugoGiraudel)

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

- proxy côté client codé en JavaScript, intercepte toutes les requêtes, dispose de son propre cache.
- ne fonctionne qu'en https
- commun à une origine (domaine + port)
- nouvelle API navigateur, est exécuté dans un thread indépendant, n'a pas accès à `window`
- utilise cache (nouvelle API navigateur), c'est une map qui fait correspondre des req et res (!= cache http)
- nouvelle API de requête (fetch)

Support des navigateurs actuels presque 100%. Microsoft & Apple à la bourre (en dev). Pas de polyfills possibles.
