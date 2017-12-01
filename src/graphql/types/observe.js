const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} = require('graphql');

const observeType = new GraphQLObjectType({
  name: 'Observe',
  fields: () => ({
    stationName: {
      type: GraphQLString,
    },
    stationID: {
      type: GraphQLString,
    },
    longitude: {
      type: GraphQLFloat,
    },
    latitude: {
      type: GraphQLFloat,
    },
    observeTime: {
      type: GraphQLString,
    },
    altitude: {
      type: GraphQLFloat,
    },
    windDirection: {
      type: GraphQLFloat,
    },
    windSpeed: {
      type: GraphQLFloat,
    },
    temperature: {
      type: GraphQLFloat,
    },
    humidity: {
      type: GraphQLFloat,
    },
    pressure: {
      type: GraphQLFloat,
    },
    sunshine: {
      type: GraphQLFloat,
    },
    dayCumulativeRainfall: {
      type: GraphQLFloat,
    },
    hourFX: {
      type: GraphQLFloat,
    },
    hourXD: {
      type: GraphQLFloat,
    },
    hourFXT: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    citySerialNumber: {
      type: GraphQLInt,
    },
    town: {
      type: GraphQLString,
    },
    townSerialNumber: {
      type: GraphQLInt,
    },
  }),
});

module.exports = observeType;
