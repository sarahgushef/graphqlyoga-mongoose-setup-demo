const { User } = require('../models');

const resolvers = {
    Query: {
        greeting: () => `Hello World`,
        user: () => User.find(),
    },

    Mutation: {
        createPerson: async (parent, args) => {
            const newPerson = new User({
                firstName: args.firstName,
                lastName: args.lastName,
            });

            const error = await newPerson.save();

            if (error) return error;

            return newPerson;
        },
    },
};

module.exports = resolvers;
