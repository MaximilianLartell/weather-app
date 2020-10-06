import { WeatherData } from './types';
import { parseResult } from './utils';
import axios from 'axios';

const apiKey = 'b6f5e71947c7dc1c21f3a0e950bd9d75';

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  const weatherResult = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
    .then((res) => res.data);

  const weatherData = parseResult(weatherResult);
  console.log('hayabasi', weatherData);
  return weatherData;
};
