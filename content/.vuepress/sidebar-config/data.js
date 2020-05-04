'use strict';

function getData() {
    return [
        {
            title: 'Data basics',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'data-basics'
            ]
        },
        {
            title: 'Files formats',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'files-formats/asciidoc-infos',
                'files-formats/json',
                'files-formats/markdown-from-gitlab',
                'files-formats/markdown-infos',
                'files-formats/xml',
                'files-formats/yaml',
            ]
        }
    ];
}

module.exports = getData;
