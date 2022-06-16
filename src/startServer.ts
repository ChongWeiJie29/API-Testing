const express = require('express')
const app = express()

const path = require('path');

const dotenv = require("dotenv");
dotenv.config();

app.get('/', (req:any, res:any) => {
    console.log("Request received.");
    res.send({"answer":1});
    console.log("Response sent");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})