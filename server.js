const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const items = require('./routes/api/items')

const app = express()

// BodyParser Middleware
app.use(bodyParser.json())

// DB config
// const db = require('./config/keys').mongoURI
// console.log(db)
// Connect to MongoDB
// const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("DB CONNECTED")
//   // perform actions on the collection object
//   client.close();
// });
mongoose.connect(uri, {useNewUrlParser: true}, () => {
    console.log("CONNECTED")
})

app.get('/', (req, res) => {
    res.send("HOME PAGE")
})

// mongoose.connect(db)
//     .then(() => console.log("MongoDB connected"))
//     .catch(() => console.log(err))

// Use Routes
app.use('api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))