require('dotenv').config()
const express = require('express')
const app = express()
const { sequelize } = require('./db')
const { User } = require('./models/User')

;(async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
})()

const post = require('./controllers/Post')
app.use('/post', post)

const auth = require('./controllers/Auth') //shorter endpoint in the bottom
app.use("/", auth)


app.listen(process.env.DB_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.DB_PORT}`)
})