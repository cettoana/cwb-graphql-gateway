import { ApolloServer } from 'apollo-server';

import CwbAPI from '../datasources/cwb';
import resolvers from '../resolvers';
import typeDefs from '../schema';

const createTestServer = () => {
  const cwbAPI = new CwbAPI();

  const server = new ApolloServer({
    dataSources: () => ({
      cwbAPI,
    }),
    resolvers,
    typeDefs,
  });

  return server;
};

export default createTestServer;
