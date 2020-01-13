const { promisify } = require("util");

const redis = require("redis");
client = redis.createClient({host: "redis"});
const getAsync = promisify(client.get).bind(client);

const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')

app.use(cors())

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github')
    console.log(JSON.parse(jobs).length);
    return res.send(jobs)
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
