'use strict';

function getDevOps() {
    return [
        {
            title: 'DevOps',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'devops-overview',
                'devops-metrics',
                'devops-accelerate',
                'docker',
                'github-actions',
                'kubernetes'
            ]
        },
        {
            title: 'PaaS - Heroku',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'paas/heroku/heroku-helper',
                'paas/heroku/heroku-angularjs',
                'paas/heroku/heroku-sendgrid-mailer'
            ]
        }
    ];
}

module.exports = getDevOps;
