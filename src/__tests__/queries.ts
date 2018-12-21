import { createTestClient } from 'apollo-server-testing';

import createTestServer from './helpers/createTestServer';

const queryWeatherObservations = `
query {
  weatherObservations {
    station {
      id
      name
    }
    temperature
  }
}
`;

const queryWeatherObservationWithStationId = `
query {
  weatherObservations(stationId: "CM0030") {
    station {
      id
      name
    }
    temperature
  }
}
`;

const queryRainfallObservations = `
query {
  rainfallObservations {
    station {
      id
      name
    }
    cumulativeRainfall {
      _10min
      _24hr
    }
  }
}
`;

const queryRainfallObservationsWithStationId = `
query {
  rainfallObservations(stationId: "466940") {
    station {
      id
      name
    }
    cumulativeRainfall {
      _10min
      _24hr
    }
  }
}
`;

describe('queries', () => {
  it('query all weather observations', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);

    const res = await query({ query: queryWeatherObservations });

    expect(res).toMatchSnapshot();
  });

  it('query weather observation with station id', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);

    const res = await query({ query: queryWeatherObservationWithStationId });

    expect(res).toMatchSnapshot();
  });

  it('query all rainfall observations', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);

    const res = await query({ query: queryRainfallObservations });

    expect(res).toMatchSnapshot();
  });

  it('query rainfall observation with station id', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);

    const res = await query({ query: queryRainfallObservationsWithStationId });

    expect(res).toMatchSnapshot();
  });
});
