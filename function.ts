const http = require("http"); 
const dotenv1 = require("dotenv");
dotenv1.config();

const request = require("superagent");

async function math() {
    let answer = await request
    .get(`http://localhost:${process.env.PORT}/`)
    .then((response:any) => {
        return JSON.parse(response.text).answer;
    })
    .catch((error:any) => {
        return error;
    })
    return answer;
}

module.exports = math;
