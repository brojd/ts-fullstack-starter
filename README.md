# ts-fullstack-starter

Simple, modern, fast boilerplate for your next fullstack TS project.

Easy to understand and customize to your needs without wasting time for writing everything from scratch.

## Why?

Nowadays, it's a common choice to use TypeScript on both frontend and backend. What is great about such option is that we can benefit from having one repo, one dev, build process and possibility to share code and types between client and server.

However it takes time to set everything up according to modern approaches. This project aims to provide a robust and flexible boilerplate for everyone who wants to use custom configuration for TS fullstack project.

## General approach

Although there are great ready-to-use tools you can use to start right away with backend or frontend development (like [CRA](https://facebook.github.io/create-react-app/)), Webpack and TypeScript are now well-documented and affordable to set up by your own. This project took direction of custom configuration. Thanks to it, you have full control and your build config can be tailored to what you need exactly.

## Project structure

Conceptually, the project consists of 4 parts:

- Client (your frontend app)
- Server (your backend app)
- Shared (code, types and dependencies shared between Client and Server)
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

---

## Tech stack

### General

| Name       | Version | Usage        |
| ---------- | ------- | ------------ |
| TypeScript |         | JS superset  |
| ESLint     |         | TS/JS linter |
| Prettier   |         |
| Husky      |         |
| Yarn       |         |

### Client

| Name               | Version | Usage                    |
| ------------------ | ------- | ------------------------ |
| Webpack            | 4.42.0  | Module bundler           |
| Webpack Dev Server | 13.10.3 | Local development server |
| React              | 16.13.0 | UI Library               |
| Axios              | 0.19.2  | HTTP client              |

### Server

| Name    | Version | Usage |
| ------- | ------- | ----- |
| Express |         |       |
|         |         |       |
| ..      |         |
| ..      |         |
| ..      |         |

---

## Usage

### Quick start

1. Clone / download the repo
2. `cd ts-fullstack-starter && yarn`
3. `yarn dev` to start development (see below all available commands)

### Commands

| Command      | Description |
| ------------ | ----------- |
| `yarn dev`   | aaa         |
| `yarn build` | aaa         |
| `yarn start` | aaa         |
| `yarn lint`  | aaa         |

### Git hooks

What is triggered when:

### Adding dependencies

In order to add dependency which is:

- client-specific: `cd client && yarn add yourDep`
- server-specific: `cd server && yarn add yourDep`
- shared between client and server: `cd shared && yarn add yourDep`

### Deployment

Just run `yarn start` on your remote server. It will build fullstack app and start the server.

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

## Deployment

Add additional notes about how to deploy this on a live system

## Contributing

TBD

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
