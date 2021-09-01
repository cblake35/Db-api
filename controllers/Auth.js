let express = require('express')
let router = express.Router()
let { User } = require('../models/User')

router.get("/", async (req, res) => {
    res.send("Hello World!@#!@#")
})


router.post('/create/:name', async (req, res) => {
  let message 
  try {
    const user = await User.create({
      username: req.params.name
    })
    message = 'User Created',
    user
  } catch(err) {
    console.log(err)
    message = 'Failed to create User'
  }
  res.send(JSON.stringify(message))
})


module.exports = router