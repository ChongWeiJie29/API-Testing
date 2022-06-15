const http = require("http"); 
const dotenv1 = require("dotenv");
dotenv1.config();

const request = require("superagent");

let newF = async function math() {
    let answer;
    await request
    .get('http://localhost:3000/')
    .then((response:any) => {
        answer = JSON.parse(response.text).answer;
    })
    .catch((error:any) => {
        console.log(error);
    })
    return answer;
}

module.exports = newF
