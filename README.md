# aqi-app

### For Assignment reviewers

Have built this SPA using Vue3 and Vue-Cli. The demo project has been hosted on Github Pages
https://shauryadhadwal.github.io/aqi-app/

#### Features

- Home Page with updates of most recent AQI levels per city.
- Live Chart Page with history of up to 20 records per city (configurable); Max, Min AQI levels since the time Live Chart Page was opened; Pause/Resume functionality to analyse chart.
- Comparison Page with feature to compare date of up to 5(configurable) cities simultaneously.
- Animations on route transitions and value updates.

> Since Github Pages doesn't support SPA, refreshing the browser on any other path than the one mentioned above will result in a 404 error.

> All decisions have been made considering that data of no more than 10 Cities' can be received, and no more than 1 websocket event per second.
> To enhance the application for high load, **other decisions** would have to me made.

> Application is responsive but designed using **Desktop-First** approach. Would recommend to use latest version of **Chrome Browser** for best experience.

#### Breakup of total time spent

| Area              | Effort in man hours |
| :---------------- | ------------------: |
| project setup     |               15min |
| deployment config |               15min |
| websockets setup  |              1 hour |
| live graph        |             4 hours |
| dashboard         |             2 hours |
| comparison view   |             3 hours |
| animations        |             2 hours |
| Total             |          12.5 hours |

> Wasted time on websockets and graphing library.

## Project setup

Clone the repo and run the following command:

```
npm install
```

Check the .env_example file and set up the websocket connection

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```

#### Deploy to github pages

Add your username to command in deploy.sh

```
git push -f git@github.com:<git-hub-username>/aqi-app.git
```

Make sure to add your ssh key in github's ssh settings page

```
npm run deploy
```
