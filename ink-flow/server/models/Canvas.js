const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const canvasSchema = new Schema({
    canvasAuthor: {
        type: String,
        require: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    canvasObj: {
        type: Object,
    },
});

const Canvas = model('Canvas', canvasSchema);

module.exports = Canvas;