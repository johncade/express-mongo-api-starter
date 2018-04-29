import express from 'express';

const testRouter = express.Router({
  mergeParams: true
})

testRouter.route('/')
  .get((req, res) => {
    res.send({
      "test": "Hello World!"
    })
  })

export default testRouter