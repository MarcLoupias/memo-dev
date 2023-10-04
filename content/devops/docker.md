# devops - docker

[docs.docker.com](https://docs.docker.com/)

[hub.docker.com/explore](https://hub.docker.com/explore/?page=1)

[registry - docs.docker.com](https://docs.docker.com/registry/)

[docker-overview - docs.docker.com](https://docs.docker.com/engine/docker-overview/)

## VMs vs Containers

[Containers and VMs - A Practical Comparison](https://www.youtube.com/watch?v=L1ie8negCjc)

```text

      **VM**                                                   **Containers**

+-----------------+                                         +-----------------+ <-+
|       App       |                                         |       App       |   | All
|                 |                                         |                 |   | this part
+-----------------+                                         +-----------------+   | is a
         |                                                  | OS Dependencies |   | container
         |                                                  +-----------------+ <-+
         V
+-----------------+                                         +--------+--------+
|   Dependencies  |  <-- config                             |        | Docker |
+-----------------+                                         |        +--------+
|       OS        |                                         |                 |
|                 |                                         |      OS         |
+-----------------+                                         +-----------------+

     < VM >   NIC, Storage, Size                                  < VM >
     < VSphere, HV, NSX, VSAN > NIC, Storage,                     < HV >
                                Agents, Kernel

+-----------------+                                         +-----------------+
|                 |                                         |                 |
|    Physical     |                                         |    Physical     |
|                 |                                         |                 |
+-----------------+                                         +-----------------+
```

## service

[www.docker.com/pricing](https://www.docker.com/pricing/)

## installation

[Install Docker Desktop on Linux - docs.docker.com](https://docs.docker.com/desktop/install/linux-install/)

[Install Docker Desktop on Ubuntu - docs.docker.com](https://docs.docker.com/desktop/install/ubuntu/)

> Not directly mentioned in the doc but we need to add first the docker apt repo to the system. [See this](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
>
> After installation, Docker Desktop is available from Gnome UI.
>
> You can also check it from the CLI
>
> ```bash
> marco@marco-ubuntu:~/Téléchargements$ docker compose version
> Docker Compose version v2.19.1
> marco@marco-ubuntu:~/Téléchargements$ docker --version
> Docker version 24.0.4, build 3713ee1
> marco@marco-ubuntu:~/Téléchargements$ docker version
> Client: Docker Engine - Community
>  Cloud integration: v1.0.35
>  Version:           24.0.4
>  API version:       1.43
>  Go version:        go1.20.5
>  Git commit:        3713ee1
>  Built:             Fri Jul  7 14:50:55 2023
>  OS/Arch:           linux/amd64
>  Context:           desktop-linux
>
> Server: Docker Desktop 4.21.1 (114176)
>  Engine:
>   Version:          24.0.2
>   API version:      1.43 (minimum version 1.12)
>   Go version:       go1.20.4
>   Git commit:       659604f
>   Built:            Thu May 25 21:52:17 2023
>   OS/Arch:          linux/amd64
>   Experimental:     false
>  containerd:
>   Version:          1.6.21
>   GitCommit:        3dce8eb055cbb6872793272b4f20ed16117344f8
>  runc:
>   Version:          1.1.7
>   GitCommit:        v1.1.7-0-g860f061
>  docker-init:
>   Version:          0.19.0
>   GitCommit:        de40ad0
>
> ```

### print docker informations

With `docker info` :

```bash
marco@marco-ubuntu:~/dev/test-projects/poc-ci-cdeploy$ sudo docker info
Client: Docker Engine - Community
 Version:    24.0.4
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.11.1
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.19.1
    Path:     /usr/libexec/docker/cli-plugins/docker-compose

Server:
 Containers: 2
  Running: 1
  Paused: 0
  Stopped: 1
 Images: 3
 Server Version: 24.0.4
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: systemd
 Cgroup Version: 2
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 3dce8eb055cbb6872793272b4f20ed16117344f8
 runc version: v1.1.7-0-g860f061
 init version: de40ad0
 Security Options:
  apparmor
  seccomp
   Profile: builtin
  cgroupns
 Kernel Version: 5.15.0-76-generic
 Operating System: Ubuntu 22.04.2 LTS
 OSType: linux
 Architecture: x86_64
 CPUs: 4
 Total Memory: 15.57GiB
 Name: marco-ubuntu
 ID: 1db1fde2-c4fd-4bb3-b217-001f5a914a1a
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Live Restore Enabled: false

```

[The location of volumes on Docker Desktop host? - https://forums.docker.com](https://forums.docker.com/t/the-location-of-volumes-on-docker-desktop-host/127176)

> This is because Docker Desktop is not just a Graphical interface. It creates a virtual machine and runs Docker inside that virtual machine. You will not find volumes on your host and you will not be able to access the container IP addresses directly.

[Linux post-installation steps for Docker Engine - Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/)

## basic definitions

[Docker overview](https://docs.docker.com/get-started/overview/)

### image

An image is a read-only template with instructions for creating a Docker container.

Often, an image is based on another image, with some additional customization. For example, you may build an image which is based on the `ubuntu` image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.

#### `Dockerfile`

It is a blueprint to build an image.

To build your own image, you create a Dockerfile with a simple syntax for defining the steps needed to create the image and run it.

Each instruction in a Dockerfile creates a layer in the image. When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt.

### container

A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.

By default, a container is relatively well isolated from other containers and its host machine. You can control how isolated a container’s network, storage, or other underlying subsystems are from other containers or from the host machine.

A container is defined by its image as well as any configuration options you provide to it when you create or start it. When a container is removed, any changes to its state that are not stored in persistent storage disappear.

## usage

### list docker images (`docker images`)

```bash
marco@marco-ubuntu:~/Téléchargements$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
```

### list running containers (`docker ps`)

```bash
marco@marco-ubuntu:~/Téléchargements$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

To get stopped containers add `-a` option : `docker ps -a`.

The output list can be easily filtered with `grep` : `docker ps -a | grep <container-id|container-name>`.

We run containers from images.

### pull an image (`docker pull <image>:<version>`)

```bash
marco@marco-ubuntu:~/Téléchargements$ docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
faef57eae888: Pull complete
76579e9ed380: Pull complete
cf707e233955: Pull complete
91bb7937700d: Pull complete
4b962717ba55: Pull complete
f46d7b05649a: Pull complete
103501419a0a: Pull complete
Digest: sha256:08bc36ad52474e528cc1ea3426b5e3f4bad8a130318e3140d6cfe29c8892c7ef
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest

What's Next?
View summary of image vulnerabilities and recommendations → docker scout quickview nginx
marco@marco-ubuntu:~/Téléchargements$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
nginx        latest    021283c8eb95   4 days ago   187MB
```

### delete an image (`docker rmi <image-id>`)

If the image is used in any container, even a stopped one, it will fail.

You must delete first the containers where the image is used.

### create a new container from an image (`docker run <image>:<version>`)

```bash
marco@marco-ubuntu:~/Téléchargements$ docker run nginx
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2023/07/09 15:48:23 [notice] 1#1: using the "epoll" event method
2023/07/09 15:48:23 [notice] 1#1: nginx/1.25.1
2023/07/09 15:48:23 [notice] 1#1: built by gcc 12.2.0 (Debian 12.2.0-14)
2023/07/09 15:48:23 [notice] 1#1: OS: Linux 5.15.49-linuxkit-pr
2023/07/09 15:48:23 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2023/07/09 15:48:23 [notice] 1#1: start worker processes
2023/07/09 15:48:23 [notice] 1#1: start worker process 29
2023/07/09 15:48:23 [notice] 1#1: start worker process 30
```

It creates a new container then starts it.

Notice that `docker run` **creates a new container everytime**.

Add `-d` option to detach it from the terminal :

```bash
marco@marco-ubuntu:~/Téléchargements$ docker run -d nginx
```

To set a specific name to a container :

```bash
marco@marco-ubuntu:~/Téléchargements$ docker run --name web-app -d nginx
```

port binding between host and container (`docker run -d -p <host-port>:<container-port> <image>:<version>`)

Application in a container run in an isolated docker network.
This allows us to run the same app running on the same port multiples times.
So we need to expose the container port to the host (the system where the container runs on) :

```bash
marco@marco-ubuntu:~/Téléchargements$ docker run -d -p 9000:80 nginx
```

nginx runs inside the container on port `80`, so here we are telling docker to map the nginx `80` port to `localhost:9000`.

### restart an existing container (`docker start <container-id|container-name>`)

Stopped container still exists :

```bash
marco@marco-ubuntu:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
b6b7b95102ef   nginx     "/docker-entrypoint.…"   4 minutes ago    Exited (0) 33 seconds ago             funny_williamson
de292300226c   nginx     "/docker-entrypoint.…"   21 minutes ago   Exited (0) 17 minutes ago             eager_moser
```

It means we can restart an old container by running `docker start <container-id|container-name>` instead of `docker run <image:tag>`.

Options used to create the container with `docker run` are used by default.

### to stop a detached container (`docker logs <container-id|container-name>`)

```bash
marco@marco-ubuntu:~/Téléchargements$ docker stop <container-id|container-name>
```

### to remove a container (`docker rm <container-id>`)

Of course the container must be stopped first before trying to delete it.

### to see the app logs (`docker logs <container-id|container-name>`)

```bash
marco@marco-ubuntu:~/Téléchargements$ docker logs <container-id|container-name>
```

### open a shell from a container (`docker exec -it <container-id|container-name> <shell-to-use>`)

`<shell-to-use>` can vary depending on the base image used. The more commons are `/bin/sh` and `/bin/bash`.

```bash
marco@marco-ubuntu:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED        STATUS                    PORTS     NAMES
b6b7b95102ef   nginx     "/docker-entrypoint.…"   42 hours ago   Exited (0) 42 hours ago             funny_williamson
de292300226c   nginx     "/docker-entrypoint.…"   43 hours ago   Exited (0) 43 hours ago             eager_moser
marco@marco-ubuntu:~$ docker start eager_moser
eager_moser
marco@marco-ubuntu:~$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED        STATUS         PORTS     NAMES
de292300226c   nginx     "/docker-entrypoint.…"   43 hours ago   Up 3 seconds   80/tcp    eager_moser
marco@marco-ubuntu:~$ docker exec -it eager_moser /bin/bash
root@de292300226c:/# ls
bin   dev                  docker-entrypoint.sh  home  lib32  libx32  mnt  proc  run   srv  tmp  var
boot  docker-entrypoint.d  etc                   lib   lib64  media   opt  root  sbin  sys  usr
root@de292300226c:/# ls -la
total 72
drwxr-xr-x   1 root root 4096 Jul  9 15:48 .
drwxr-xr-x   1 root root 4096 Jul  9 15:48 ..
-rwxr-xr-x   1 root root    0 Jul  9 15:48 .dockerenv
lrwxrwxrwx   1 root root    7 Jul  3 00:00 bin -> usr/bin
drwxr-xr-x   2 root root 4096 Mar  2 13:55 boot
drwxr-xr-x   5 root root  340 Jul 11 10:27 dev
drwxr-xr-x   1 root root 4096 Jul  4 17:24 docker-entrypoint.d
-rwxrwxr-x   1 root root 1616 Jul  4 17:23 docker-entrypoint.sh
drwxr-xr-x   1 root root 4096 Jul  9 15:48 etc
drwxr-xr-x   2 root root 4096 Mar  2 13:55 home
lrwxrwxrwx   1 root root    7 Jul  3 00:00 lib -> usr/lib
lrwxrwxrwx   1 root root    9 Jul  3 00:00 lib32 -> usr/lib32
lrwxrwxrwx   1 root root    9 Jul  3 00:00 lib64 -> usr/lib64
lrwxrwxrwx   1 root root   10 Jul  3 00:00 libx32 -> usr/libx32
drwxr-xr-x   2 root root 4096 Jul  3 00:00 media
drwxr-xr-x   2 root root 4096 Jul  3 00:00 mnt
drwxr-xr-x   2 root root 4096 Jul  3 00:00 opt
dr-xr-xr-x 221 root root    0 Jul 11 10:27 proc
drwx------   2 root root 4096 Jul  3 00:00 root
drwxr-xr-x   1 root root 4096 Jul 11 10:27 run
lrwxrwxrwx   1 root root    8 Jul  3 00:00 sbin -> usr/sbin
drwxr-xr-x   2 root root 4096 Jul  3 00:00 srv
dr-xr-xr-x  13 root root    0 Jul 11 10:27 sys
drwxrwxrwt   1 root root 4096 Jul  4 17:24 tmp
drwxr-xr-x   1 root root 4096 Jul  3 00:00 usr
drwxr-xr-x   1 root root 4096 Jul  3 00:00 var
root@de292300226c:/#
```

print container env var

```bash
root@de292300226c:/# env
HOSTNAME=de292300226c
PWD=/
PKG_RELEASE=1~bookworm
HOME=/root
NJS_VERSION=0.7.12
TERM=xterm
SHLVL=1
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
NGINX_VERSION=1.25.1
_=/usr/bin/env
OLDPWD=/
root@de292300226c:/#
```

## docker network

### list docker networks available (`docker network ls`)

```bash
marco@marco-ubuntu:~$ docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
58bfe8771a6a   bridge    bridge    local
03bb08e12a19   host      host      local
5e16a0f46c9b   none      null      local
```

### create a new docker network (`docker network create <network-name>`)

### create a new container specifying the network (`docker run --net <network-name> <image>:<version>`)

## build an image from a `Dockerfile`

How to build our own docker images ?

Using a `Dockerfile` (the `D` matters, that's the naming convention).

A `Dockerfile` is a text file that contains commands to assemble an image.

Docker can then build an image by reading those instructions.

Rules :

- A Dockerfile start from a parent image (or "base image").
- It's a docker image that your image is based on.
- Dockerfile must begin with a `FROM` instruction.
- To run a shell command (like npm ci), use the `RUN` instruction.
- The `COPY <src> <dest>` instruction copies files or dir from <src> and adds them to the filesystem of the container at the path <dest>.
- The `WORKDIR` is like `cd` in a shell.
- The `CMD` command is the last command in a Dockerfile, it is the command to start the dockerized app.

[Instructions references - docs.docker.com](https://docs.docker.com/engine/reference/builder/)

- [`RUN`](https://docs.docker.com/engine/reference/builder/#run)
- [`WORKDIR`](https://docs.docker.com/engine/reference/builder/#workdir)

A `Dockerfile` for node@19 example (a simple express server with just a `package.json` and a `src/server.js` file) :

```dockerfile
FROM node:19-alpine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]
```

To build an image from a `Dockerfile`, use the `docker build --tag <name>:<version> <path>` command.

For example with the Dockerfile above : `docker build -t node-app:1.0 .` (the `.` means current dir).

Remember that a docker image consists of layers.
Each instruction in the Dockerfile creates one layer.
These layers are stored & each one is a delta of the changes from the previous layer.

Once the new image is built, it can be listed with `docker images` command.

## docker compose

When you need several services to run your solution, instead of :
- creating a `docker network` where the services can talk to each other
- `docker run` each service manually

You can write a yaml file specifying all these commands.
Notice that the `docker network` is automatically created by `docker-compose -f <file-name.yaml> up -d`.

See:
- [Use Docker Compose - docs.docker.com](https://docs.docker.com/get-started/08_using_compose/).
- [The Compose file](https://docs.docker.com/compose/compose-file/03-compose-file/).

## docker volumes

[Volumes - docs.docker.com](https://docs.docker.com/storage/volumes/)

Without defining volumes, the data written inside a container are wiped out when the container is removed.

Can be used from a docker compose file or directly from the `docker run` command as a parameter.

Example : `docker run <other-args> -v <volume-name>:<container-path>`.

`<volume-name>` is the name of the volume for docker.

`<container-path>` is the path for the data from the container perspective.

The data are saved on the host in `/var/lib/docker/volumes/<random-hash>/_data/`.

[Docker Files and Volumes: Permission Denied](https://mydeveloperplanet.com/2022/10/19/docker-files-and-volumes-permission-denied/)

### list existing volumes

```bash
marco@marco-ubuntu:~/dev/test-projects/poc-ci-cdeploy$ sudo docker volume ls
DRIVER    VOLUME NAME
local     webapp-db
```

## managing secrets

### articles

- [Don’t leak your Docker image’s build secrets](https://pythonspeed.com/articles/docker-build-secrets/)
- [Docker BuildKit: faster builds, new features, and now it’s stable](https://pythonspeed.com/articles/docker-buildkit/)
- [Build secrets in Docker and Compose v1, the secure way](https://pythonspeed.com/articles/build-secrets-docker-compose/)
- [The Complete Guide to Docker Secrets](https://earthly.dev/blog/docker-secrets/)

### doc off

- [Manage sensitive data with Docker secrets](https://docs.docker.com/engine/swarm/secrets/)
- [How to use secrets in Docker Compose](https://docs.docker.com/compose/use-secrets/)
- [compose file services secrets ref](https://docs.docker.com/compose/compose-file/05-services/#secrets)
- [compose file secrets top level element doc](https://docs.docker.com/compose/compose-file/09-secrets/)
- [compose file secrets top level element ref](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference)

## best practices

[10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

[Top 8 Docker Best Practices for using Docker in Production](https://dev.to/techworld_with_nana/top-8-docker-best-practices-for-using-docker-in-production-1m39)

[Best practices for writing Dockerfiles - docs.docker.com](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

[Top 20 Dockerfile best practices](https://sysdig.com/blog/dockerfile-best-practices/)

[Docker ARG, ENV and .env - a Complete Guide](https://vsupalov.com/docker-arg-env-variable-guide/)

## getting started

[6 Docker Basics You Should Completely Grasp When Getting Started](https://vsupalov.com/6-docker-basics/)

[Docker Crash Course for Absolute Beginners](https://www.youtube.com/watch?v=pg19Z8LL06w)

[Docker Tutorial for Beginners [FULL COURSE in 3 Hours]](https://www.youtube.com/watch?v=3c-iBn73dDE)

[Get Docker CE for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

[Post-installation steps for Linux](https://docs.docker.com/install/linux/linux-postinstall/)

[Get Started, Part 1: Orientation and setup](https://docs.docker.com/get-started/)

## running context

### as a CLI tool

[Interactive command-line application in a Docker container - stackoverflow.com - 20160726](https://stackoverflow.com/questions/38583106/interactive-command-line-application-in-a-docker-container)

[Distributing Command Line Tools with Docker - spin.atomicobject.com - 20151130](https://spin.atomicobject.com/2015/11/30/command-line-tools-docker/)

### as a node app

[nodejs/docker-node - `github.com`](https://github.com/nodejs/docker-node)

## articles

[Mise en place d'une Docker Registry privée - blog.eleven-labs.com - 20161207](https://blog.eleven-labs.com/fr/mise-en-place-docker-registry-privee/)

[5 minutes pour les conteneurs (docker) - romain.soufflet.io - 20190522](https://romain.soufflet.io/docker/container/infrastructure/2019/05/22/5minutes-sur-les-conteneurs)
