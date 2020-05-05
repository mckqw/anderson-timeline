const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema

const Event = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        time: { type: Date, required: true },
        imageLocation: { type: String, required: true },
        titleImage: { type: String, required: true },
        imageNames: { type: [String], required: true },
    },
    { timestamps: true },
)

Event.plugin(mongoosePaginate);

module.exports = mongoose.model('events', Event)
