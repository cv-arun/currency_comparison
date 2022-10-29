const express = require('express');
const  env=require('dotenv').config();
const logger = require('morgan');
const createError = require('http-errors');
const mongoose=require('mongoose')
const cors = require("cors")
const mainRouter=require('./router/mainRoute')
const app = express();
const http = require("http");

mongoose.connect(process.env.mongo_URL,()=>{
  console.log("db connected")
})

const server = http.createServer(app);

app.use(cors())
app.use(logger('dev'));
app.use(express.json());


app.use('/',mainRouter)


app.use(function (req, res, next) {
    next(createError(404));
  });
app.use(function (err,req, res, next) {
    res.json({err})
  });

const PORT=process.env.PORT||5000
server.listen(PORT, () =>
  console.log(` app listening on port ${PORT}!`),
);