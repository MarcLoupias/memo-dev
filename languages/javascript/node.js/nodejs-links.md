http://blog.nicolargo.com/2012/09/installer-facilement-nodejs-et-npm-sur-une-debian-stable.html



via package manager (from official repo) :
https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager

via backports (fait avec ça) :
https://github.com/joyent/node/wiki/backports.debian.org



binaires (node et npm) dans :
/usr/bin/

modules (bower grunt yo et les generators) dans :
/usr/lib/node_modules/

Installer node en user :
http://tnovelli.net/blog/blog.2011-08-27.node-npm-user-install.html

Installer des modules nodes globalement sans sudo :
https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo-linux.md

nodejs & npm install en user
============================

dépendances pour compiler node
------------------------------
sudo apt-get install gcc
sudo apt-get install g++
sudo apt-get install make

configurer le chemin custom
---------------------------
./configure --prefix=~/dev/tools/nodejs

lancer le build
---------------
make
make install

node_modules symlink
--------------------
Create ~/.node_modules symlink. (This directory will be automatically searched when you load modules using require "module" in scripts. I'm not sure why Node doesn't search ~/.local/lib/node_modules by default.)

ln -s dev/tools/nodejs/lib/node_modules .node_modules

PATH management
---------------
add this to ~/.profile

# nodejs & npm path
export PATH=$HOME/dev/tools/nodejs/bin:$PATH


Test
----
which npm

should return the npm path defined above


From there, installing :
------------------------

Yeoman
------
npm install -g yo

angular app generator
---------------------
npm install -g generator-angular



