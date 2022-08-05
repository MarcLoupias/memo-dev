'use strict';

function getSystems() {
    return [
        {
            title: 'Systems',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'filesystem'
            ]
        },
        {
            title: 'Linux',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'linux/bash/bash-notes-whiptail',
                'linux/apt-cheatsheet',
                'linux/linux-fhs-description',
                'linux/linux-fhs-droits',
                'linux/linux-logs',
                'linux/linux-manipulation-fichiers',
                'linux/linux-manipulation-process',
                'linux/ubuntu-cheatsheet',
                'linux/ubuntu-create-usb-boot',
                'linux/ubuntu-nvidia',
                'linux/ubuntu-pdf'
            ]
        },
        {
            title: 'Windows',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'windows/windows-checksum',
                'windows/windows-ubuntu-on-windows10'
            ]
        }
    ];
}

module.exports = getSystems;
