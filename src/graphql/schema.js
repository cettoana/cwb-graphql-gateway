const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const ObservationsQuery = require('./queries/observations');
const RainfallQuery = require('./queries/rainfall');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      observations: ObservationsQuery,
      rainfall: RainfallQuery,
    },
  }),
});

module.exports = schema;
