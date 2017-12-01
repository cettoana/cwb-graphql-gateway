const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const ObservesQuery = require('./queries/observes');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      observes: ObservesQuery,
    },
  }),
});

module.exports = schema;
