import { WeatherData } from './types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// const isNumber = (num: any): num is number => {
//   return typeof num === 'number' ||
// }

const parseStringResponse = (str: any): string => {
  if (!str || !isString(str)) {
    throw new Error('incorrect or missing response');
  }
  return str;
};

//The different properties has the type any now. How do i change it so it becomes strings n numbers?
export const parseResult = (object: any): WeatherData => {
  const parsedData: WeatherData = {
    weather: parseStringResponse(object.weather[0].main),
    description: parseStringResponse(object.weather[0].description),
    temp: object.main.temp,
    feelsLike: object.main.feels_like,
    humidity: object.main.humidity,
    city: object.name,
  };
  return parsedData;
};
