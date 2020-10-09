import { WeatherData } from './types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNumber = (num: any): num is number => {
  return typeof num === 'number' && num !== NaN;
};

const parseStringResponse = (str: any): string => {
  if (!str || !isString(str)) {
    throw new Error('incorrect or missing response');
  }
  return str;
};

const parseNumberResponse = (num: any): number => {
  if (!num || !isNumber(num)) {
    throw new Error('incorrect or missing response');
  }
  return num;
};

const parseTemp = (num: any): number => {
  if (!num || !isNumber(num)) {
    throw new Error('incorrect or missing response');
  }
  return Math.round(num - 272.15);
};

export const parseQuery = (str: any): string => {
  if (!str || !isString(str)) {
    throw new Error('incorrect or missing query');
  }
  return str;
};

export const parseResult = (object: any): WeatherData => {
  const parsedData: WeatherData = {
    weather: parseStringResponse(object.weather[0].main),
    description: parseStringResponse(object.weather[0].description),
    temp: parseTemp(object.main.temp),
    feelsLike: parseTemp(object.main.feels_like),
    humidity: parseNumberResponse(object.main.humidity),
    city: parseStringResponse(object.name),
  };
  return parsedData;
};
