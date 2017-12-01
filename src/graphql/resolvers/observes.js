const axios = require('axios');
const R = require('ramda');
const convert = require('xml-js');

const observesResolver = (parent, { stationName, stationID, city, town, authorizationKey }) => {
  return axios.get('http://opendata.cwb.gov.tw/opendataapi', {
    params: {
      dataid: 'O-A0001-001',
      authorizationkey: authorizationKey,
    },
  })
  .then(response => {
    if (response.data.status === 'Fail') {
      return Promise.reject(new Error('Failed. Please make sure your authorizationKey provided.'));
    }

    const data = convert.xml2js(response.data, { compact: true });
    let results = R.pipe(
      R.pathOr([], ['cwbopendata', 'location']),
      R.map(l => {
        const elements = l.weatherElement.reduce((prev, curr) => R.assoc(
          curr.elementName._text,
          curr.elementValue.value._text === '-99' ? null : curr.elementValue.value._text,
          prev,
        ), {});

        const parameters = l.parameter.reduce((prev, curr) => R.assoc(
          curr.parameterName._text,
          curr.parameterValue._text,
          prev,
        ), {});

        return {
          stationName: l.locationName._text,
          stationID: l.stationId._text,
          longitude: l.lon._text,
          latitude: l.lat._text,
          observeTime: l.time.obsTime._text,
          altitude: elements.ELEV,
          windDirection: elements.WDIR,
          windSpeed: elements.WDSD,
          temperature: elements.TEMP,
          humidity: elements.HUMD,
          pressure: elements.PRES,
          sunshine: elements.SUN,
          dayCumulativeRainfall: elements.H_24R,
          hourFX: elements.H_FX,
          hourXD: elements.H_XD,
          hourFXT: elements.H_FXT,
          city: parameters.CITY,
          citySerialNumber: parameters.CITY_SN,
          town: parameters.TOWN,
          townSerialNumber: parameters.TOWN_SN,
        };
      })
    )(data);

    if (city) {
      results = R.filter(R.propEq('city', city), results);
    }

    if (town) {
      results = R.filter(R.propEq('town', town), results);
    }

    if (stationName) {
      results = R.filter(R.propEq('stationName', stationName), results);
    }

    if (stationID) {
      results = R.filter(R.propEq('stationID', stationID), results);
    }

    return results;
  });
};

module.exports = observesResolver;
