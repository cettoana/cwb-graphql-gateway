import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    weatherObservations(
      stationId: String
      stationNames: [String]
    ): [WeatherObservation]!
    rainfallObservations(
      stationId: String
      stationNames: [String]
    ): [RainfallObservation]!
  }

  type WeatherObservation {
    station: WeatherStation!
    time: String!
    wind: Wind
    temperature: Float
    humidity: Float
    pressure: Float
    """
    日照時數
    """
    sunshineHours: Float
    """
    日累積雨量
    """
    rainLast24hrs: Float
    """
    小時最大陣風
    """
    peakWindLastHour: PeakWindLastHour
  }

  type WeatherStation {
    id: String!
    name: String!
    longitude: Float
    latitude: Float
    altitude: Float
    city: City
    town: Town
  }

  type City {
    name: String!
    id: Int!
  }

  type Town {
    name: String!
    id: Int!
  }

  type Wind {
    """
    一般風向 0 表示無風
    """
    direction: Int
    speed: Float
  }

  type PeakWindLastHour {
    direction: Int
    speed: Float
    time: String
  }

  type RainfallObservation {
    station: WeatherStation!
    time: String!
    """
    自動觀測站屬性
    """
    attribute: String
    """
    累積雨量
    """
    cumulativeRainfall: CumulativeRainfall
  }

  type CumulativeRainfall {
    _10min: Float
    _3hr: Float
    _6hr: Float
    _12hr: Float
    _24hr: Float
    """
    本日累積雨量
    """
    day: Float
  }
`;

export default typeDefs;
