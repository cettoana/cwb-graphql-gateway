export interface IParameter {
  parameterName: string;
  parameterValue: string;
}

interface IParameters {
  CITY?: string;
  CITY_SN?: string;
  TOWN?: string;
  TOWN_SN?: string;
  ATTRIBUTE?: string;
}

export interface IElement {
  elementName: string;
  elementValue: {
    value: string;
  };
}

interface IWeatherElement {
  ELEV?: string;
  WDIR?: string;
  WDSD?: string;
  TEMP?: string;
  HUMD?: string;
  PRES?: string;
  SUN?: string;
  H_24R?: string;
  H_FX?: string;
  H_XD?: string;
  H_FXT?: string;
  D_TX?: string;
  D_TXT?: string;
  D_TN?: string;
  D_TNT?: string;
}

interface IRainfallElement {
  ELEV?: string;
  RAIN?: string;
  MIN_10?: string;
  HOUR_3?: string;
  HOUR_6?: string;
  HOUR_12?: string;
  HOUR_24?: string;
  NOW?: string;
}

export const parseParameters: ((p: [IParameter]) => IParameters) = parameters =>
  parameters.reduce((prev, curr) => {
    const value = curr.parameterValue;
    const key = curr.parameterName;

    return {
      ...prev,
      [key]: value,
    };
  }, {});

const parseElements = (
  elements: [IElement],
  validator: (value: string) => boolean
): IWeatherElement | IRainfallElement =>
  elements.reduce((prev, curr) => {
    const value = curr.elementValue.value;

    if (!validator(value)) {
      return prev;
    }

    return {
      ...prev,
      [curr.elementName]: value,
    };
  }, {});

export const parseWeatherElements = (elements: [IElement]): IWeatherElement =>
  parseElements(elements, value => value !== '-99');

export const parseRainfallElements = (elements: [IElement]): IRainfallElement =>
  parseElements(elements, value => Number(value) >= 0);
