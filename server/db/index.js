const mongoose = require('mongoose')
//mongodb://192.168.1.137:27017/events
mongoose
    .connect('mongodb://127.0.0.1:27017/events', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
