const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Profile {
        userName: String!
        walletAddress: String!
        profileImage: String!
    }
    
    # Quries
    type Query {
        getAllProfiles: [Profile!]!
    }

    # Mutation
    type Mutation {
        createProfile( userName: String!,  walletAddress: String!, profileImage: String!): Profile!
    }
`;

module.exports = {
    typeDefs
};