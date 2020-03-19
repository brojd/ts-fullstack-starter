# ts-fullstack-starter

Simple, modern, fast boilerplate for your next fullstack TS project.

Easy to understand and customize to your needs without wasting time for writing everything from scratch.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

---

## Usage

### Quick start

1. Clone / download the repo
2. `cd ts-fullstack-starter && yarn`
3. `yarn dev` to start development (see below all available commands)

### Commands

| Command      | Description                                                                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn dev`   | Starts concurrently Webpack Dev Server for serving Client app and runs backend app in development mode. Hot reloading for Client and live reloading for backend is set up. |
| `yarn build` | Compiles backend app, then prepares frontend bundle and put it in server's public folder to be served. Run it before starting the prod server.                             |
| `yarn start` | Runs server in production mode                                                                                                                                             |
| `yarn lint`  | Checks TS compilation and ESLitn errors of Client, Server and Shared parts of your fullstack app                                                                           |
| `yarn test`  | Runs Jest against Client, Server and Shared parts of your fullstack app                                                                                                    |

### Installing dependencies

Thanks to [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to install dependencies you should just run `yarn` being in the root of the project

### Adding dependencies

In order to add dependency which is:

- client-specific: `cd client && yarn add yourDep`
- server-specific: `cd server && yarn add yourDep`
- shared between client and server: `cd shared && yarn add yourDep`

### Git hooks

By default 2 hooks are set up:

- on every commit `prettier` fixes the code style of every staged file
- on every push `yarn test` and `yarn lint` is triggered to prevent buggy code on your remote

You can always modify it in `package.json -> husky`

### Deployment

- Push repo to your remote server, then run `yarn build && yarn start`
- Deploying to Heroku: just push your changes `yarn push heroku master`. Heroku will automatically run `yarn build` and then `yarn start`.
  You can also deploy instantly with:

  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Styling

By default `sass|scss` is supported with or without CSS Modules.

To use CSS Modules create `YourComponent.modules.scss` and import in component:

```
import styles from './YourComponent.modules.scss';
...
<div className={styles.yourClass} />

```

To use global styles create `yourGlobalStyles.scss` file and then import it:

```
import './yourGlobalStyles.scss';
```

---

## Why?

### Background

Nowadays, it's a common choice to use TypeScript on both frontend and backend. What is great about such option is that we can benefit from having one repo, one dev, build process and possibility to share code and types between client and server.

However it takes time to set everything up according to modern approaches. This project aims to provide a robust and flexible boilerplate for everyone who wants to use custom configuration for TS fullstack project.

### General approach

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
   |--jest.config.js (client-specific jest config)
   |__tsconfig.json (client-specific tsconfig)
server
   |--src (server-specific app code)
   |--dist (transpiled server app + client static files - ready to put on server and start)
   |--package.json (server-specific npm scripts and dependencies)
   |--eslintrc.js (server-specific eslint config)
   |--jest.config.js (client-specific jest config)
   |__tsconfig.json (server-specific tsconfig)
shared
   |--src (shared app code)
   |--package.json (shared dependencies)
   |--eslintrc.js (shared-specific eslint config)
   |--jest.config.js (client-specific jest config)
   |__tsconfig.json (shared-specific tsconfig)
package.json (main npm scripts, husky hooks, yarn workspaces)
.eslintrc.base.js (eslint config common for client, server, shared)
.tsconfig.base.json (tsconfig common for client, server, shared)
prettierrc.js (prettier config common for client, server, shared)
```

---

## Tech stack

### General

| Name                                                    | Version | Usage            |
| ------------------------------------------------------- | ------- | ---------------- |
| [TypeScript](https://www.typescriptlang.org/index.html) | 3.8.3   | JS superset      |
| [ESLint](https://eslint.org/)                           | 6.8.0   | TS/JS linter     |
| [Prettier](https://prettier.io/)                        | 1.19.1  | Code formatter   |
| [Husky](https://github.com/typicode/husky)              | 4.2.3   | Manage git hooks |
| [Yarn](https://yarnpkg.com/)                            | 1.19.2  | Package manager  |

### Client

| Name                                                                   | Version | Usage                    |
| ---------------------------------------------------------------------- | ------- | ------------------------ |
| [Webpack](https://webpack.js.org/)                                     | 4.42.0  | Module bundler           |
| [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/) | 13.10.3 | Local development server |
| [React](https://pl.reactjs.org/)                                       | 16.13.0 | UI Library               |
| [Axios](https://github.com/axios/axios)                                | 0.19.2  | HTTP client              |

### Server

| Name                                            | Version | Usage                                          |
| ----------------------------------------------- | ------- | ---------------------------------------------- |
| [Express](https://expressjs.com/)               | 4.17.1  | Node.js framework                              |
| [Nodemon](https://nodemon.io/)                  | 2.0.2   | Provides live reloading for server development |
| [Morgan](https://github.com/expressjs/morgan)   | 1.9.1   | HTTP request logger middleware                 |
| [Winston](https://github.com/winstonjs/winston) | 3.2.1   | Logging library                                |

---

## Contributing

TBD

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
