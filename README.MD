# nova-docs

## Folder structure

- `/bin` utility scripts

- `/nova-docs-client` sources for the nova-docs client application

- `/projects` used as storage for built documentation apps for nova projects and
  branches

- `/server` lightweight express server to serve the `nova-docs-client` app and
  the doc apps from `projects` folder

- `/views` handlebars templates for express views (only error view currently)

The client app is being built as part of nova-docs task inside nova CircleCI.
That task clones current main of this repo, installs deps, assembles the client
app and executes `package` script to create `nova-docs.zip` that should contain
everything neccessary to run the whole documentation server, uploading it as
artifact on CircleCI. The machine where production/staging of nova-docs is
actually running should consume these artifacts.

You can test the whole thing by unzipping said archive and run `node ./bin/www`
inside (that's what is actually happening on the machine that hosts nova-docs).
