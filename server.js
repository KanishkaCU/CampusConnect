// const express = require('express')
import express from "express";
import connecttodb from "./config/connecttodb.js";
import mongoose from "mongoose";
const app = express()
const port = 3000

await connecttodb();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connection.on("connected",()=> console.log('conneted'));
mongoose.connection.on('error',(err) => console.log(err));

app.listen(port,() => {
console.log(`Example app listening on port ${port}`)
})
