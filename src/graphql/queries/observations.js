const {
  GraphQLList,
  GraphQLString,
} = require('graphql');

const ObservationType = require('../types/observation');
const ObservationsResolver = require('../resolvers/observations');

const observations = {
  type: new GraphQLList(ObservationType),
  description: 'Wheather observations from observatories in Taiwan. Data ID O-A0001-001',
  resolve: ObservationsResolver,
  args: {
    authorizationKey: {
      type: GraphQLString,
    },
    stationName: {
      type: GraphQLString,
    },
    stationID: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    town: {
      type: GraphQLString,
    },
  },
};

module.exports = observations;
