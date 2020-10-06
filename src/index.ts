import express from 'express';
import { getWeatherData } from './services';
// import getWeatherData = require('./services');

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/home', express.static('public'));

app.get('/api/weather', async (_req, res) => {
  const weatherData = await getWeatherData('london');
  console.log(weatherData);
  res.send('HELLO WORLD');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
