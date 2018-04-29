import express from 'express';

const testRouter = express.Router()

testRouter.route('/')
  .get((req, res) => {
    res.send({
      "test": "Hello World!"
    })
  })