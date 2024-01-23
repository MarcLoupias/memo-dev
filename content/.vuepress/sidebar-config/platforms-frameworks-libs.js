'use strict';

function getPlatformsFrameworksLibs() {
    return [
        {
            title: 'Svelte',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'svelte/svelte-overview'
            ]
        },
        {
            title: 'Vue.js',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'vuejs/vuejs-overview'
            ]
        },
        {
            title: 'htmx',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'htmx/htmx-overview'
            ]
        },
        {
            title: 'Node.js',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'node.js/nodejs-best-practices',
                'node.js/nodejs-express-project-structure',
                'node.js/nodejs-handling-errors',
                'node.js/nodejs-hello-world',
                'node.js/nodejs-links',
                'node.js/nodejs-logging',
                'node.js/nodejs-mock-via-express',
                'node.js/nodejs-modules',
                'node.js/nodejs-rest-api-frameworks'
            ]
        },
        {
            title: 'Deno',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'deno/deno-overview'
            ]
        },
        {
            title: 'Angular',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'angular/angular-overview',
                'angular/angular-migration-from-angular-js'
            ]
        },
        {
            title: 'Angular.js',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'angular-js/angular-js-auth',
                'angular-js/angular-js-best-practices',
                'angular-js/angular-js-components',
                'angular-js/angular-js-controllers',
                'angular-js/angular-js-decorator',
                'angular-js/angular-js-dep-inj',
                'angular-js/angular-js-directives',
                'angular-js/angular-js-errors-exceptions',
                'angular-js/angular-js-init-app',
                'angular-js/angular-js-knowledge-overview',
                'angular-js/angular-js-lazy-downloading',
                'angular-js/angular-js-misc',
                'angular-js/angular-js-mobile',
                'angular-js/angular-js-module',
                'angular-js/angular-js-optimisation',
                'angular-js/angular-js-promise',
                'angular-js/angular-js-routing',
                'angular-js/angular-js-SEO',
                'angular-js/angular-js-services',
                'angular-js/angular-js-template-cache',
                'angular-js/angular-js-testing'
            ]
        },
        {
            title: 'Play!',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'play-framework/java-play-async',
                'play-framework/java-play-config-idea',
                'play-framework/java-play-gestion-fichier-config-dev-prod',
                'play-framework/java-play-OAuth',
                'play-framework/java-play-pojo-validation'
            ]
        }
    ];
}

module.exports = getPlatformsFrameworksLibs;
