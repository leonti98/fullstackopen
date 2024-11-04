const apiKey = import.meta.env.VITE_WEATHER_KEY;
import axios from 'axios';

const getWeatherData = (country) => {
  const [lat, lng] = country.latlng;

  const weatherData = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=42&lon=43.5&appid=${apiKey}&units=metric`
    )
    .then((response) => response.data);

  return weatherData;
};

export default getWeatherData;
