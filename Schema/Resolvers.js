const profiles  = require('../data')
const resolvers = {
    Query: {
        getAllProfiles(){
            return profiles;
        },
    },
    Mutation: {
        createProfile(parent, args) {
            const newProfile = args;
            profiles.push(newProfile);
            return newProfile;
        }
    }
};

module.exports = resolvers;