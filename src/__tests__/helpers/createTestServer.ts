import { ApolloServer } from 'apollo-server';

import CwbAPI from '../../datasources/cwb';
import resolvers from '../../resolvers';
import typeDefs from '../../schema';
import mockRainfallObsRes from '../data/rainfallObsRes.json';
import mockWeatherObsRes from '../data/weatherObsRes.json';

const createTestServer = () => {
  const cwbAPI = new CwbAPI();
  cwbAPI.fetchWeatherObs = jest.fn(({ stationNames }) => {
    if (stationNames && stationNames.length > 0) {
      const location = mockWeatherObsRes.records.location.filter(
        l => stationNames.indexOf(l.locationName) > -1
      );

      mockWeatherObsRes.records.location = location;
    }

    return Promise.resolve(mockWeatherObsRes);
  });
  cwbAPI.fetchRainfallObs = jest.fn(({ stationNames }) => {
    if (stationNames && stationNames.length > 0) {
      const location = mockRainfallObsRes.records.location.filter(
        l => stationNames.indexOf(l.locationName) > -1
      );

      mockRainfallObsRes.records.location = location;
    }

    return Promise.resolve(mockRainfallObsRes);
  });

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
