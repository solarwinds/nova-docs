Hello friend. In case you are not familiar with Docker and want to learn more, please spend
some time researching this page: https://docs.docker.com/engine/docker-overview

If you know what it is or your main goal right now is just spin up the repo, feel free
to skip docs and proceed.

If you don't have docker installed: https://store.docker.com/search?type=edition&offering=community
Find installer that matches your platform and install it.

After that, you'll need a docker-machine to run your containers.
To create it use command:
- if you have windows-based machine: 'docker-machine create --driver hyperv SW'
- if you have linux-based machine  : 'docker-machine create --driver virtualbox SW

Actually, latter one can also be used on windows machines, if you do not use/have hyper-v on it.
But virtualbox software needs to be installed separately.

After you've succefully created a docker-machine - it will provide you with the command that will
configure your shell to correctly relay commands to that specific instance of docker-machine.
Copy it and execute.

After that you should be able to run docker-compose without any problems.