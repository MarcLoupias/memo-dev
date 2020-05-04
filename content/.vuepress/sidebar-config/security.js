'use strict';

function getSecurity() {
    return [
        {
            title: 'Security',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'security-basics',
                'security-webapp',
                'authentification',
                'blockchains',
                'chiffrement',
                'PKI-X509'
            ]
        }
    ];
}

module.exports = getSecurity;
