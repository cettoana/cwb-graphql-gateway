const { GraphQLList, GraphQLString } = require('graphql');

const RainfallType = require('../types/rainfall');
const RainfallResolver = require('../resolvers/rainfall');

const rainfall = {
  type: new GraphQLList(RainfallType),
  description:
    'Rainfall data from observatories in Taiwan. Data ID O-A0002-001',
  resolve: RainfallResolver,
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

module.exports = rainfall;
