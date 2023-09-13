const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// const canvasObjectSchema = new Schema({

// });

const canvasSchema = new Schema({
    canvasAuthor: {
        type: String.Types.ObjectId,
        ref: 'User',
        require: true,
      //  trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    imageUrl: {
        type: String,
        require: true,
    },
    // canvasObj: {
    //     type: canvasObjectSchema,
    //     require: true,
    // },
});

const Canvas = model('Canvas', canvasSchema);

module.exports = Canvas;