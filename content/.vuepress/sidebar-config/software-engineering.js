'use strict';

function getSoftwareEngineering() {
    return [
        {
            title: 'Software Engineering',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'genie-logiciel',
                'architecture',
                'archi-micro-services',
                'brooks-no-silver-bullet-notes',
                'code-complexity',
                'code-reviews',
                'compilateur',
                'composition-over-inheritance',
                'ddd',
                'dette-technique-et-TTM',
                'paradigms',
                'reeves-what-is-software-design-notes',
                'scrum-memo',
                'semver',
                'stamps',
                'testing',
                'typings'
            ]
        }
    ];
}

module.exports = getSoftwareEngineering;
