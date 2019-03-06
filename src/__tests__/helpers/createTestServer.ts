import { ApolloServer } from 'apollo-server';

import CwbAPI from '../../datasources/cwb';
import resolvers from '../../resolvers';
import typeDefs from '../../schema';
import mockRainfallObsRes from '../data/rainfallObsRes';
import mockWeatherObsRes from '../data/weatherObsRes';

const createTestServer = () => {
  const cwbAPI = new CwbAPI();
  cwbAPI.fetchWeatherObs = jest.fn(() => Promise.resolve(mockWeatherObsRes));
  cwbAPI.fetchRainfallObs = jest.fn(() => Promise.resolve(mockRainfallObsRes));

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
