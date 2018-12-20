import CwbAPI from './datasources/cwb';

interface IDataSources {
  cwbAPI: CwbAPI;
}

export default {
  Query: {
    rainfallObservations: async (
      _: any,
      { stationId }: { stationId?: string },
      { dataSources }: { dataSources: IDataSources }
    ) => {
      let results = await dataSources.cwbAPI.getAllRainfallObs();

      if (stationId) {
        results = results.filter(result => result.station.id === stationId);
      }

      return results;
    },

    weatherObservations: async (
      _: any,
      { stationId }: { stationId?: string },
      { dataSources }: { dataSources: IDataSources }
    ) => {
      let results = await dataSources.cwbAPI.getAllWeatherObs();

      if (stationId) {
        results = results.filter(result => result.station.id === stationId);
      }

      return results;
    },
  },
};
