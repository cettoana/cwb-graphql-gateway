import { RESTDataSource } from 'apollo-datasource-rest';

import {
  IElement,
  IParameter,
  parseParameters,
  parseRainfallElements,
  parseWeatherElements,
} from './utils/parser';

interface IObsResponse {
  cwbopendata: {
    location: [IObsLocation];
  };
}

interface IObsLocation {
  lat: string;
  lon: string;
  locationName: string;
  stationId: string;
  time: {
    obsTime: string;
  };
  weatherElement: [IElement];
  parameter: [IParameter];
}

export interface IWeatherObsResult {
  humidity?: string;
  peakWindLastHour: {
    direction?: string;
    speed?: string;
    time?: string;
  };
  pressure?: string;
  rainLast24hrs?: string;
  station: {
    altitude?: string;
    city: {
      id?: string;
      name?: string;
    };
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    town: {
      id?: string;
      name?: string;
    };
  };
  sunshineHours?: string;
  temperature?: string;
  time?: string;
  wind: {
    direction?: string;
    speed?: string;
  };
}

export interface IRainfallObsResult {
  station: {
    altitude?: string;
    city: {
      id?: string;
      name?: string;
    };
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    town: {
      id?: string;
      name?: string;
    };
  };
  time?: string;
  cumulativeRainfall: {
    _10min?: string;
    _3hr?: string;
    _6hr?: string;
    _12hr?: string;
    _24hr?: string;
    day?: string;
  };
  attribute?: string;
}
class CwbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/';
  }

  public getAllWeatherObs = async () => {
    const res: IObsResponse = await this.fetchWeatherObs();

    return res.cwbopendata.location.map(
      (l): IWeatherObsResult => {
        const elements = parseWeatherElements(l.weatherElement);

        const parameters = parseParameters(l.parameter);

        return {
          humidity: elements.HUMD,
          peakWindLastHour: {
            direction: elements.H_XD,
            speed: elements.H_FX,
            time: elements.H_FXT,
          },
          pressure: elements.PRES,
          rainLast24hrs: elements.H_24R,
          station: {
            altitude: elements.ELEV,
            city: {
              id: parameters.CITY_SN,
              name: parameters.CITY,
            },
            id: l.stationId,
            latitude: parseFloat(l.lat),
            longitude: parseFloat(l.lon),
            name: l.locationName,
            town: {
              id: parameters.TOWN_SN,
              name: parameters.TOWN,
            },
          },
          sunshineHours: elements.SUN,
          temperature: elements.TEMP,
          time: l.time.obsTime,
          wind: {
            direction: elements.WDIR,
            speed: elements.WDSD,
          },
        };
      }
    );
  };

  public getAllRainfallObs = async () => {
    const res: IObsResponse = await this.fetchRainfallObs();

    return res.cwbopendata.location.map(
      (l): IRainfallObsResult => {
        const elements = parseRainfallElements(l.weatherElement);

        const parameters = parseParameters(l.parameter);

        return {
          attribute: parameters.ATTRIBUTE,
          cumulativeRainfall: {
            _10min: elements.MIN_10,
            _12hr: elements.HOUR_12,
            _24hr: elements.HOUR_24,
            _3hr: elements.HOUR_3,
            _6hr: elements.HOUR_6,
            day: elements.NOW,
          },
          station: {
            altitude: elements.ELEV,
            city: {
              id: parameters.CITY_SN,
              name: parameters.CITY,
            },
            id: l.stationId,
            latitude: parseFloat(l.lat),
            longitude: parseFloat(l.lon),
            name: l.locationName,
            town: {
              id: parameters.TOWN_SN,
              name: parameters.TOWN,
            },
          },
          time: l.time.obsTime,
        };
      }
    );
  };

  private fetchWeatherObs = () =>
    this.get('O-A0001-001', {
      Authorization: process.env.CWB_API_KEY,
      format: 'JSON',
    });

  private fetchRainfallObs = () =>
    this.get('O-A0002-001', {
      Authorization: process.env.CWB_API_KEY,
      format: 'JSON',
    });
}

export default CwbAPI;
