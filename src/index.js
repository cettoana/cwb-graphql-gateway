const express = require('express');
const graphqlHTTP = require('express-graphql');
const { renderGraphiQL } = require('express-graphql/dist/renderGraphiQL');
const schema = require('./graphql/schema');

const app = express();

app.get(
  '/graphiql',
  (req, res) => res.send(
    renderGraphiQL({
      // Default Query
      query:
`query CwbQuery(
  $authorizationKey: String!,
  $city: String,
  $town: String,
  $stationName: String,
  $stationID: String,
) {
  observes(
    authorizationKey: $authorizationKey,
    city: $city,
    town: $town,
    stationName: $stationName,
    stationID: $stationID,
  )
}`,
      variables: {
        authorizationKey: 'your-cwb-authorizationkey-here',
        city: '臺北市',
      },
      operationName: 'CwbQuery',
    })
  )
);

app.post(
  '/graphiql',
  (req, res) => res.redirect(307, '/graphql'),
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  }),
);

app.listen(4000, () => {
  console.log('GraphQL Server Running at http://127.0.0.1:4000');
});
