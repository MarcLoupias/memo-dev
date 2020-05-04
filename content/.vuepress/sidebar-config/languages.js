'use strict';

function getLanguages() {
    return [
        {
            title: 'HTML',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'html/html-tips'
            ]
        },
        {
            title: 'CSS',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'css/css-block-element-modifier',
                'css/css-conventions.nommage.html.css',
                'css/css-overview',
                'css/css-preprocessors',
                'css/css-selectors',
                'css/css-tips'
            ]
        },
        {
            title: 'JavaScript',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'js/javascript-overview.md',
                'js/ES6-overview.md',
                'js/ES6-proxies.md',
                'js/ES6-promises.md',
                'js/js-best-practices.md',
                'js/js-closures.md',
                'js/js-database-memo',
                'js/js-modules.md',
                'js/js-webapp-build.md',
                'js/js-date.md',
                'js/js-math.md',
                'js/js-spa-software-architecture.md',
                'js/js-browser-geolocalisation.md',
                'js/js-doc.md',
                'js/js-double-negation.md',
                'js/js-download-files.md',
                'js/js-duck-typing.md',
                'js/js-fetch-api.md',
                'js/js-fonctions-anonymes-IIFE.md',
                'js/js-iframe.md',
                'js/js-named-f-vs-expr-f.md',
                'js/js-function-invocation-patterns.md',
                'js/js-samples-and-miscs.md',
                'js/js-prototype.md',
                'js/js-simple-logger.md',
                'js/js-understanding-this-keyword.md',
                'js/js-web-storage.md',
                'js/ts-typescript-overview.md'
            ]
        },
        {
            title: 'Java',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'java/java-ant-tips',
                'java/java-jackson-cyclic-relationship',
                'java/java-jpa-infos',
                'java/java-security-links'
            ]
        },
        {
            title: 'Rust',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'rust/rust-install',
                'rust/rust-overview'
            ]
        },
        {
            title: 'SQL',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'SQL/ACID',
                'SQL/postgre-setup'
            ]
        }
    ];
}

module.exports = getLanguages;
