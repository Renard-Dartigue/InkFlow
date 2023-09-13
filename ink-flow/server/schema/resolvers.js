const { User, Canvas } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('canvases');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('canvases');
        },
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },
        thought: async (parent, { thoughtId }) => {
            return Thought.findOne({ _id: thoughtId });
        },
    },
}