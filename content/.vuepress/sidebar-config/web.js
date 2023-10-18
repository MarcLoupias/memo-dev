'use strict';

function getWeb() {
    return [
        {
            title: 'Web',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'debug-chrome-android',
                'gestion-monetisation-web',
                'http-cache',
                'polyfills-shivs-shims',
                'regex',
                'SEO',
                'shadow-dom',
                'web-comparatifs-frameworks',
                'web-components',
                'web-generic-good-practices',
                'web-login-forms-good-practices',
                'web-scraping',
                'web-semantic-web',
                'web-test-selenium',
                'web-tracking',
                'webassembly'
            ]
        },
        {
            title: 'Browsers',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'browsers/browsers-how-they-init-web-page',
                'browsers/browsers-overview',
                'browsers/browsers-perfs'
            ]
        },
        {
            title: 'Cookies',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'cookies/cookies'
            ]
        },
        {
            title: 'REST',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'REST/open-api-initiative',
                'REST/rest-api-return-http-code',
                'REST/rest-best-practices',
                'REST/rest-design-tool-RAML',
                'REST/rest-design-tool-swagger-io',
                'REST/rest-naming-convention-links'
            ],
        },
        {
            title: 'RFC',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'RFC/RFC-overview',
                'RFC/RFC-http'
            ]
        }
    ];
}

module.exports = getWeb;
