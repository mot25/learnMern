const express = require('express')
const mongoose = require('mongoose')


const app = express()
const PORT = 5000

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.route'))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://mot_25:motqwertyuiop25@cluster0.ccds3.mongodb.net/todo?retryWrites=true&w=majority')
        app.listen(PORT, () => {
            console.log('server start');
        })
    } catch (e) {
        console.error(e)
    }
}

start()