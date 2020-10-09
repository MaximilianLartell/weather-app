import express from 'express';
import path from 'path';
import { getWeatherData } from './services';
import { parseQuery } from './utils';

const app = express();

app.use(express.json());

const PORT = 8000;

app.use(express.static(__dirname + '/public'));

app.get('', (_req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/api/weather', async (req, res) => {
  try {
    const city = parseQuery(req.query.city);
    const weatherData = await getWeatherData(city);
    console.log(weatherData);
    res.json(weatherData);
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
