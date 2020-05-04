'use strict';

function getNetwork() {
    return [
        {
            title: 'Protocols',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'protocols/http',
                'protocols/TCP'
            ]
        },
        {
            title: 'Network',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'internet'
            ]
        }
    ];
}

module.exports = getNetwork;
