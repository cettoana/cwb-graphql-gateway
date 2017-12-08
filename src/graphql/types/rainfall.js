const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} = require('graphql');

const rainfallType = new GraphQLObjectType({
  name: 'Rainfall',
  fields: () => ({
    stationName: {
      type: GraphQLString,
      description: 'Name of observatory',
    },
    stationID: {
      type: GraphQLString,
      description: 'ID of observatory',
    },
    longitude: {
      type: GraphQLFloat,
      description: 'Longitude of observatory',
    },
    latitude: {
      type: GraphQLFloat,
      description: 'Latitude of observatory',
    },
    observeTime: {
      type: GraphQLString,
      description: 'Time when observation take place',
    },
    altitude: {
      type: GraphQLFloat,
      description: 'Altitude of observatory',
    },
    cumRain10Min: {
      type: GraphQLFloat,
      description: 'Rainfall accumulation in last 10 minute (mm)',
    },
    cumRain3Hour: {
      type: GraphQLFloat,
      description: 'Rainfall accumulation in last 3 hours (mm)',
    },
    cumRain6Hour: {
      type: GraphQLFloat,
      description: 'Rainfall accumulation in last 6 hours (mm)',
    },
    cumRain12Hour: {
      type: GraphQLFloat,
      description: 'Rainfall accumulation in last 12 hours (mm)',
    },
    cumRain24Hour: {
      type: GraphQLFloat,
      description: 'Rainfall accumulation in last 24 hours (mm)',
    },
    cumRainDay: {
      type: GraphQLFloat,
      description: 'Rainfall accumulation today (mm)',
    },
    city: {
      type: GraphQLString,
      description: 'City where observatory located',
    },
    citySerialNumber: {
      type: GraphQLInt,
      description: 'City serial number where observatory located',
    },
    town: {
      type: GraphQLString,
      description: 'Town where observatory located',
    },
    townSerialNumber: {
      type: GraphQLInt,
      description: 'Town serial number where observatory located',
    },
    attribute: {
      type: GraphQLString,
      description: 'Type of observatory',
    },
  }),
});

module.exports = rainfallType;
