const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const ObservesQuery = require('./queries/observes');
const RainfallQuery = require('./queries/rainfall');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      observes: ObservesQuery,
      rainfall: RainfallQuery,
    },
  }),
});

module.exports = schema;
