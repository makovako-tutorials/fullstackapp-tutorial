# Building full stack app

Creating full stack app after following [this](https://www.youtube.com/watch?v=lauywdXKEXI) tutorial.

First make a plan and design application

Frontend react

Redis for caching

Getting and listing jobs from github jobs

Worker refreshes every hour the redis data

Forontend gets data trough api, which gets data from redis

Other notes:

- cron pakcage and crontab.guru
- Materialize
- Create react app
- node-fetch is the same as client fetch
- ... - spread operator spreads the array
- redis port is 6379, user redis-cli for accessing it
- const {Promisify} = require('util); - allows to use async instead of callbacks
- write current time and date `${new Date().toJSON().slice(0,19)`
- run function only if this js file is main (run from here): `if (typeof require !== 'undefined' && require.main === module) {fnName();}`
- in react we can you browser version of fetch, don't need to import node-fetch
- learn react hooks, it replaces class level components, then there are some reducers, hooks replaces some funciton from the past (useEffect -> component did mount)
- useState hooks gives 2 things, first data, second callback to update data `const [jobList, updateJobs] = React.useState([]);`
- for pagination, material ui stepper component
- you can pass onclick stuff
- dont use danger html
- target blank opens in new tab
- certbot for ssl nginx simple configuraiton
- process manager - allows to run more node services, run, restart, manage logs, and serve command
- pm2 start jsfile --name name
- pm2 logs service - show console logs
- proxy in package.json
```
"proxy" : {
    "/api": {
        "target": "localhost..."
    }
}
```
- on react application run npm run build and you can deploy build folder
- npm install without package name installs dependencies

# Dockerizing

following [tutorial](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/)

## Usage

- `docker-compose build`
- `docker-compose up`