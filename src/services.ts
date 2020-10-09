import { WeatherData } from './types';
import { parseResult } from './utils';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API;

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  const weatherResult = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
    .then((res) => res.data);

  const weatherData = parseResult(weatherResult);
  return weatherData;
};
