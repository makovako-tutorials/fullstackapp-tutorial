const { promisify } = require("util");

const fetch = require("node-fetch");
const redis = require("redis");
client = redis.createClient({host: 'redis'});
const setAsync = promisify(client.set).bind(client);

const baseUrl = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  let resultCount = 1;
  let onPage = 0;

  const allJobs = [];

  console.log(`${new Date().toJSON().slice(0, 19)} fetching github`);

  // fetch all pages

  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`);

    let jobs = null
    try {
      jobs = await res.json();
    } catch (e) {
      console.error('Error fetching data from github')
      console.error('Error: ' + e)
      console.error('Response body');
      
      console.error(res.body)
      return
    }
    allJobs.push(...jobs);

    resultCount = jobs.length;
    console.log(`got ${resultCount} jobs from page ${onPage}`);
    onPage++;
  }

  console.log(`got ${allJobs.length} jobs total`);

  //filter algorithm

  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("architect")
    )
      return false;
    return true;
  });

  console.log(`filtered down to ${jrJobs.length}`);
  

  //save to redis

  const success = await setAsync("github", JSON.stringify(jrJobs));

  console.log(success);
}

module.exports = fetchGithub;

// fetchGithub();

if (typeof require !== "undefined" && require.main === module) {
  console.log("Running from main file");
  fetchGithub();
}
