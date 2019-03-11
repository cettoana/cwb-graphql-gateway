import { createTestClient } from 'apollo-server-testing';
import dotenv from 'dotenv';
import nock from 'nock';

import createTestServer from '../helpers/createTestServer';
import mockRainfallObsRes from './data/rainfallObsRes.json';
import mockWeatherObsRes from './data/weatherObsRes.json';

dotenv.config();

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

const queryWeatherObservationWithStationNames = `
query {
  weatherObservations(stationNames: ["西嶼","東莒"]) {
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

const queryRainfallObservationsWithStationNames = `
query {
  rainfallObservations(stationNames: ["板橋","淡水"]) {
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

    const scope = nock('https://opendata.cwb.gov.tw/api/v1/rest/datastore')
      .get('/O-A0001-001')
      .query({
        Authorization: process.env.CWB_API_KEY,
        format: 'JSON',
      })
      .reply(200, mockWeatherObsRes);

    const res = await query({ query: queryWeatherObservations });

    scope.isDone();

    expect(res).toMatchSnapshot();
  });

  it('query weather observation with station id', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);

    const scope = nock('https://opendata.cwb.gov.tw/api/v1/rest/datastore')
      .get('/O-A0001-001')
      .query({
        Authorization: process.env.CWB_API_KEY,
        format: 'JSON',
      })
      .reply(200, mockWeatherObsRes);

    const res = await query({ query: queryWeatherObservationWithStationId });

    scope.isDone();

    expect(res).toMatchSnapshot();
  });

  it('query weather observation with location name', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);
    const stationNames = ['西嶼', '東莒'];

    const filteredObsRes = { ...mockWeatherObsRes };
    filteredObsRes.records.location = filteredObsRes.records.location.filter(
      l => stationNames.indexOf(l.locationName) > -1
    );

    const scope = nock('https://opendata.cwb.gov.tw/api/v1/rest/datastore')
      .get('/O-A0001-001')
      .query({
        Authorization: process.env.CWB_API_KEY,
        format: 'JSON',
        locationName: stationNames.join(','),
      })
      .reply(200, filteredObsRes);

    const res = await query({
      query: queryWeatherObservationWithStationNames,
    });

    scope.isDone();

    expect(res).toMatchSnapshot();
  });

  it('query all rainfall observations', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);

    const scope = nock('https://opendata.cwb.gov.tw/api/v1/rest/datastore')
      .get('/O-A0002-001')
      .query({
        Authorization: process.env.CWB_API_KEY,
        format: 'JSON',
      })
      .reply(200, mockRainfallObsRes);

    const res = await query({ query: queryRainfallObservations });

    scope.isDone();

    expect(res).toMatchSnapshot();
  });

  it('query rainfall observation with station id', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);

    const scope = nock('https://opendata.cwb.gov.tw/api/v1/rest/datastore')
      .get('/O-A0002-001')
      .query({
        Authorization: process.env.CWB_API_KEY,
        format: 'JSON',
      })
      .reply(200, mockRainfallObsRes);

    const res = await query({ query: queryRainfallObservationsWithStationId });

    scope.isDone();

    expect(res).toMatchSnapshot();
  });

  it('query rainfall observation with location name', async () => {
    const server = createTestServer();
    const { query } = createTestClient(server);
    const stationNames = ['板橋', '淡水'];

    const filteredObsRes = { ...mockRainfallObsRes };

    filteredObsRes.records.location = mockRainfallObsRes.records.location.filter(
      l => stationNames.indexOf(l.locationName) > -1
    );

    const scope = nock('https://opendata.cwb.gov.tw/api/v1/rest/datastore')
      .get('/O-A0002-001')
      .query({
        Authorization: process.env.CWB_API_KEY,
        format: 'JSON',
        locationName: stationNames.join(','),
      })
      .reply(200, filteredObsRes);

    const res = await query({
      query: queryRainfallObservationsWithStationNames,
    });

    scope.isDone();

    expect(res).toMatchSnapshot();
  });
});
