const express = require('express');
const  env=require('dotenv').config();
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require("mongoose");
const cors = require("cors")
const app=express();
const mainROuter=require('./Router/mainRoute')


mongoose.connect(process.env.mongo_URL,()=>{
    console.log("db connected")
})

app.use(cors())
app.use(logger('dev'));
app.use(express.json());

app.use('/',mainROuter)


app.use(function (req, res, next) {
    next(createError(404));
  });
app.use(function (err,req, res, next) {
    res.json({err})
  });

const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`server running at port:${PORT}`)
})