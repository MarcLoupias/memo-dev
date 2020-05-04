const sidebarConfig = require('./sidebar-config');

module.exports = {
    title: 'marlou knowledge base',
    description: 'knowledge db tool',
    dest: 'docs',
    head: [
        ['meta', { name: 'robots', content: 'none' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Data', link: '/data/' },
            { text: 'DevOps', link: '/devops/' },
            { text: 'Divers', link: '/divers/' },
            { text: 'Network', link: '/network/' },
            { text: 'Languages', link: '/languages/' },
            { text: 'Platforms, frameworks and libs', link: '/platforms-frameworks-libs/' },
            { text: 'Security', link: '/security/' },
            { text: 'Software Engineering', link: '/software-engineering/' },
            { text: 'Systems', link: '/systems/' },
            { text: 'Tools', link: '/tools/' },
            { text: 'Web', link: '/web/' },
            { text: 'GitHub', link: 'https://github.com/MarcLoupias/memo-dev' }
        ],
        sidebar: {
            '/data/': sidebarConfig.getData(),
            '/devops/': sidebarConfig.getDevOps(),
            '/divers/': sidebarConfig.getDivers(),
            '/network/': sidebarConfig.getNetwork(),
            '/languages/': sidebarConfig.getLanguages(),
            '/platforms-frameworks-libs/': sidebarConfig.getPlatformsFrameworksLibs(),
            '/security/': sidebarConfig.getSecurity(),
            '/software-engineering/': sidebarConfig.getSoftwareEngineering(),
            '/systems/': sidebarConfig.getSystems(),
            '/tools/': sidebarConfig.getTools(),
            '/web/': sidebarConfig.getWeb()
        }
    },
    markdown: {
        lineNumbers: true
    }
}
