Hello friend!

If you're a developer that needs to fix something, you'll find the docker-compose file
quite useful, as you can adjust it to your needs (but don't forget to not commit such adjustments).

It might be a good idea to change port that docker will try to use, since acquiring port 80
might require privilegies on your system, or it can be already occupied, e.g. by IIS.

By default, in compose file folder with projects in container is mapped directly to the folder
in this repo, so you can drop any projects there to see them on the docs page.
Also, you can map the necessary repo directly to the respective folder in container, e.g. XUI.
But, keep in mind that you can't map root folder (projects) and subfolder (xui) at the same time.

Here's some basic info regarding compose file. It looks something like this:

version: "3" <- compose file version
services:
  apollo-docs: <- svc name, will be part of container name
    build: . <- build context (current dir)
    environment: <- ENV variables
      - PORT=80
    ports:  <- port mapping from host to container
      - "80:80"
    volumes: <- link local folders to container FS
      - ./projects:/usr/src/app/projects

Where: 
    - build - tells that image is local and needs to be built instead of pulling it from registry
    and dot says that the context for build is this folder.
    - environment - list ov env variables that would be accessible inside of container
    - ports - maps ports between host and container. Short variant is "hostPort:containerPort"
    or you can be more specific "host:port:containerPort" - e.g. "10.11.43.158:80:80"
    - volumes - mounts your local folders as container folders directly. For easier development you
    can mount your local repo directly into container. Like, if you have xui repo lying nex to docs
    you can add such mapping "- ../xui:/usr/src/app/projects/xui/debug"
    But do NOT map a folder inside of already mapped folder! Therefore, you either map 'projects' folder
    or you map "xui" inside the "projects".