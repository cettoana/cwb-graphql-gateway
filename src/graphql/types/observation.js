const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} = require('graphql');

const observationType = new GraphQLObjectType({
  name: 'Observe',
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
    windDir: {
      type: GraphQLFloat,
      description: 'Wind direction (degrees)',
    },
    windSpeed: {
      type: GraphQLFloat,
      description: 'Wind speed (m/s)',
    },
    temperature: {
      type: GraphQLFloat,
      description: 'Temperature (Celsius)',
    },
    humidity: {
      type: GraphQLFloat,
      description: 'Humidity (1 ~ 1.0)',
    },
    pressure: {
      type: GraphQLFloat,
      description: 'Pressure (Hundred Pa)',
    },
    sunshine: {
      type: GraphQLFloat,
      description: 'Sunshine hours (Hours)',
    },
    cumRain24Hour: {
      type: GraphQLFloat,
      description: '24-Hour rainfall accumulation (mm)',
    },
    maxGustLastHour: {
      type: GraphQLFloat,
      description: 'Max gust last hour (m/s)',
    },
    maxGustDirLastHour: {
      type: GraphQLFloat,
      description: 'Max gust direction last hour (degrees)',
    },
    maxGustTimeLastHour: {
      type: GraphQLString,
      description: 'Time when max gust last hour take place',
    },
    city: {
      type: GraphQLString,
      description: 'City where observatory located',
    },
    citySN: {
      type: GraphQLInt,
      description: 'City serial number where observatory located',
    },
    town: {
      type: GraphQLString,
      description: 'Town where observatory located',
    },
    townSN: {
      type: GraphQLInt,
      description: 'Town serial number where observatory located',
    },
  }),
});

module.exports = observationType;
