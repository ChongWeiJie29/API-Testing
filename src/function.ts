const dotenv = require("dotenv");
const http = require("http");
dotenv.config();  

let newF = function math(input: number) {
    let answer;
    fetch("http://localhost:3000/").then(response => {
        answer = response;
    })
    return answer;
}
console.log(newF(1));
module.exports = newF
