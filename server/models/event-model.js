const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        time: { type: Date, required: true },
        imageLocation: { type: String, required: true },
        imageNames: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('events', Event)
