const express = require('express')
const mongoose = require('mongoose')
const app = express()

const URI = 'mongodb+srv://Node2Mongo:Mongodb2024@node2mongo.11baog3.mongodb.net/?retryWrites=true&w=majority&appName=Node2Mongo'

const connect = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

connect()

app.listen(8000, () => {
    console.log('Server is running on PORT 8000');
})