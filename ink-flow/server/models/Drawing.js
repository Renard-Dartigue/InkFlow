const { Schema, model } = require('mongoose');

const drawingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Drawing = model('Drawing', drawingSchema);

module.exports = Drawing;
