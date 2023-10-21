const express = require('express');
const app = express();
const port = 3000; 
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.OPENWEATHERMAP_API_KEY;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/weather', async (req, res) => {
  const { location } = req.query;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );

    const weatherData = response.data;

    res.render('weather', { weatherData });
  } catch (error) {
    res.render('error', { error });
  }
});

app.listen(port, () => {
  console.log(`Server running on the : http://localhost:3000/`);
});