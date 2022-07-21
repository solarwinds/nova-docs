Hello friend.
This awesome repo is a lightweight NodeJS-based webserver that runs inside docker to provide
devs with some documentation.

Unfortunately, this is a mere container that does not really contain docs at first start,
but you might have noticed that on TeamCity there are tasks like 'Deploy docs'.
These tasks copy files necessary to provide demos into this container's 'projects' folder.

To ease local development there are two main commands:
 - 'npm run dev' - runs the website on port 8282, restarting it when you make changes in files
 - 'npm run host' - build docker image (like it will be done in TeamCity) and spins it up

As for the latter command, you will need docker on your machine.
If you don't have it, please refer to mini-guide in DOCKER.MD file.
If you're a developer, check out the DEVELOPMENT.MD file to find some useful tips.

Redteam: testing to see if this edit is saved.
