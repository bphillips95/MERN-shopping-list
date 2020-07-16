const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// BodyParser Middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/.env').mongoURI

// Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log(err))