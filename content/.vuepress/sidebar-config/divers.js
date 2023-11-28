'use strict';

function getDivers() {
    return [
        {
            title: 'Divers',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'divers-articles',
                'divers-dev-ethics',
                'divers-outil-veille-techno',
                'divers-pdf',
                'divers-videos'
            ]
        },
        {
            title: 'Freebox',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'freebox/freebox-videos'
            ]
        },
        {
            title: 'IA',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'ia/ia'
            ]
        },
        {
            title: 'Licences',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'licences/licences-articles-opensource',
                'licences/licences-choose-a-licence',
                'licences/licences-WTFPL'
            ]
        },
        {
            title: 'Raspberry',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'raspberry/raspberry-overview'
            ]
        }
    ];
}

module.exports = getDivers;
