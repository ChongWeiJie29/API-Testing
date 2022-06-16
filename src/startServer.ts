const express = require('express')
const app = express()

const path = require('path');

const dotenv = require("dotenv");
console.log(`${process.env.NODE_ENV}.env`);
dotenv.config({ path: `${process.env.NODE_ENV}.env` });

app.get('/', (req:any, res:any) => {
    console.log("Request received.");
    res.send({"answer":4});
    console.log("Response sent");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})