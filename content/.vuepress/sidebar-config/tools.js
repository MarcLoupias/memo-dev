'use strict';

function getTools() {
    return [
        {
            title: 'Tools',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'tools-auto-deps-update',
                'tools-bower',
                'tools-bundlers',
                'tools-grunt',
                'tools-gulp',
                'tools-js-linters',
                'tools-markdown-editor',
                'tools-release-workflow',
                'tools-semantic-release',
                'tools-yeoman',
                'cheat-sheets',
                'diagrams',
                'elasticsearch-overview',
                'envinfo',
                'fiddler',
                'file-diff-online-tools',
                'json-web-token-tools',
                'nano-memo',
                'regex-online-tools',
                'security-tools-online',
                'tools-markdown-editor',
                'ux-tools-and-links',
                'vim-memo',
                'visual-studio-code'
            ]
        },
        {
            title: 'Git',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'git/git-articles-divers',
                'git/git-cheatsheet',
                'git/git-config',
                'git/git-cours',
                'git/git-definitions',
                'git/git-gitignore-example',
                'git/git-internals',
                'git/git-rebase',
                'git/git-reflog',
                'git/git-remotes',
                'git/git-tags-management',
                'git/git-tools',
                'git/git-tracking-branches',
                'git/git-useful-commands',
                'git/git-workflow'
            ]
        },
        {
            title: 'npm',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'npm/npm-memo',
                'npm/npm-on-windows',
                'npm/npm-packages',
                'npm/npm-registry',
                'npm/npm-security',
                'npm/npm-shrinkwrap'
            ]
        },
        {
            title: 'Testing',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'testing/cypress',
                'testing/debug-js-in-webstorm',
                'testing/jasmine',
                'testing/jest',
                'testing/karma',
                'testing/qunit',
                'testing/testing-tools-for-javascript',
                'testing/tuto-cypress'
            ]
        },
        {
            title: 'GitBook',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'gitbook/gitbook-intro'
            ]
        },
        {
            title: 'JetBrains',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'jetbrains/jetbrains-overview'
            ]
        },
        {
            title: 'Slides',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'slides/slides',
                'slides/fusuma/fusuma',
                'slides/gitpitch/gitpitch-intro',
                'slides/webslides/webslides',
            ]
        },
        {
            title: 'Social',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'social/social-mastodon'
            ]
        }
    ];
}

module.exports = getTools;
