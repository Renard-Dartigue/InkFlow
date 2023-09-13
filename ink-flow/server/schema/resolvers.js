const { User, Canvas } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-errors');
const Drawing = require('./models/Drawing');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('canvases');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('canvases');
        },
        canvases: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Canvas.find(params).sort({ createdAt: -1 });
        },
        canvas: async (parent, { canvasId }) => {
            return Canvas.findOne({ _id: canvasId });
        },
        drawings: async (parent, args, context) => {
            const userId = args.userId; 
            const drawings = await Drawing.find({ userId });
            return drawings;
        },

    },
    
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User not found');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }
            const token = signToken(user);

        return { token, user };
        },
        saveDrawing: async (parent, args, context) => {
            const { userId, imageUrl } = args.input;
            const drawing = new Drawing({ userId, imageUrl });
            const savedDrawing = await drawing.save();
            return savedDrawing;
        },
    },
};

module.exports = resolvers;