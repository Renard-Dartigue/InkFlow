const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const canvasObjectSchema = new Schema({
    width: Number,
    height: Number,
});

const canvasSchema = new Schema({
    canvasAuthor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    canvasObj: {
        type: canvasObjectSchema,
        required: true,
    },
});

const Canvas = model('Canvas', canvasSchema);

module.exports = Canvas;