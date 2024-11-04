const apiKey = import.meta.env.VITE_WEATHER_KEY;
import axios from 'axios';

const getWeatherData = (country) => {
  const [lat, lng] = country.latlng;
  console.log(lat, lng);

  const weatherData = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=42&lon=43.5&appid=${apiKey}&units=metric`
    )
    .then((response) => response.data);
  console.log('==================================');
  console.log('weatherData', weatherData);
  console.log('==================================');

  return weatherData;
};

export default getWeatherData;
