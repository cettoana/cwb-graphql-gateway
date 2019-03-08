import CwbAPI, { IOptions } from './datasources/cwb';

interface IDataSources {
  cwbAPI: CwbAPI;
}

export default {
  Query: {
    rainfallObservations: async (
      _: any,
      {
        stationNames,
        stationId,
      }: { stationNames?: string[]; stationId?: string },
      { dataSources }: { dataSources: IDataSources }
    ) => {
      const options: IOptions = {};

      if (stationNames && stationNames.length > 0) {
        options.stationNames = stationNames;
      }

      let results = await dataSources.cwbAPI.getRainfallObs(options);

      if (stationId) {
        results = results.filter(result => result.station.id === stationId);
      }

      return results;
    },

    weatherObservations: async (
      _: any,
      {
        stationNames,
        stationId,
      }: { stationNames?: string[]; stationId?: string },
      { dataSources }: { dataSources: IDataSources }
    ) => {
      const options: IOptions = {};

      if (stationNames && stationNames.length > 0) {
        options.stationNames = stationNames;
      }

      let results = await dataSources.cwbAPI.getWeatherObs(options);

      if (stationId) {
        results = results.filter(result => result.station.id === stationId);
      }

      return results;
    },
  },
};
