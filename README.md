# ts-fullstack-starter

Simple, modern, fast boilerplate for your next fullstack TS project.

Easy to understand and customize to your needs without wasting time for writing everything from scratch.

## Why?

Nowadays, it's a common choice to use TypeScript on both frontend and backend. What is great about such option is that we can benefit from having one repo, one dev and build process and possibility to share code and types between client and server.

However it takes time to set everything up according to modern approaches. This project aims to provide a robust and flexible boilerplate for everyone who wants to use custom configuration for TS fullstack project.

## General approach

Although there are great ready-to-use tools you can use to start right away with backend or frontend development (like [CRA](https://facebook.github.io/create-react-app/)), Webpack and TypeScript are now well-documented and affordable to set up by your own. This project took direction of custom configuration. Thanks to it, you have full control and your build config can be tailored to what you need exactly.

## Project structure

Conceptually, the project consists of 4 parts:

- Client (your frontend app)
- Server (your backend app)
- Shared (code and types shared between Client and Server)
- Root (everything outside client, server and shared folders - it pins everything into one piece)

Files structure looks like this:

```
client
   |--src (client-specific app code)
   |--config (client-specific config, e.g. webpack)
   |--package.json (client-specific npm scripts and dependencies)
   |--eslintrc.js (client-specific eslint config)
   |__tsconfig.json (client-specific tsconfig)
server
   |--src (server-specific app code)
   |--dist (transpiled server app + client static files - ready to put on server and start)
   |--package.json (server-specific npm scripts and dependencies)
   |--eslintrc.js (server-specific eslint config)
   |__tsconfig.json (server-specific tsconfig)
shared
   |--src (shared app code)
   |--package.json (shared dependencies)
   |--eslintrc.js (shared-specific eslint config)
   |__tsconfig.json (shared-specific tsconfig)
package.json (main npm scripts, husky hooks, yarn workspaces)
.eslintrc.base.js (eslint config common for client, server, shared)
.tsconfig.base.json (tsconfig common for client, server, shared)
prettierrc.js (prettier config common for client, server, shared)
```

## Tech stack

### Client

### Server

### General

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
