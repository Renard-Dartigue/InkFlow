const db = require('../config/connection');
const { User, Canvas } = require('../models');
const userSeeds = require('./userSeeds.json');
const canvasSeeds = require('./canvasSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Canvas', 'canvases');
        await cleanDB('User', 'users');
        await User.create(userSeeds);

        for (let i = 0; i < canvasSeeds.length; i++) {
            const { _id, canvasAuthor } = await Thought.create(canvasSeeds[i]);
            const user = await User.findOneAndUpdate(
            { username: canvasAuthor },
            {
                $addToSet: {
                canvases: _id,
                },
            }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});