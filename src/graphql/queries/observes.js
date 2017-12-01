const {
  GraphQLList,
  GraphQLString,
} = require('graphql');

const ObserveType = require('../types/observe');
const ObservesResolver = require('../resolvers/observes');

const observes = {
  type: new GraphQLList(ObserveType),
  resolve: ObservesResolver,
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

module.exports = observes;
