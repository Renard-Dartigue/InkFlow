const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }
    type Query {
        users: [User!]!
        user(username: String!): User
        canvases(username: String): [Canvas!]!
        canvas(canvasId: ID!): Canvas
    }
    `;
   // canvases: [Canvas]!
    module.exports = typeDefs;