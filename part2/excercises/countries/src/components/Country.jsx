import React, { useEffect, useState } from 'react';
import getWeatherData from '../services/weatherData';

const ListedCountry = ({ country, handleShow }) => {
  return (
    <li>
      {country.name.common}
      <button onClick={() => handleShow(country)}>show</button>
    </li>
  );
};

const CountryInfo = ({ country, weather }) => {
  if (!country || !weather) {
    return null;
  }
  const imgLink = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  console.log(imgLink);

  return (
    <>
      <div key={country.ccn3}>
        <h2>{country.name.common}</h2>
        <h3></h3>
        <p>Capital {country.capital[0]}</p>
        <p>Area {country.area}</p>
        <h3>Languges:</h3>
        <ul>
          {Object.entries(country.languages).map(([key, value], i) => (
            <li key={i}> {value}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="flag" />
      </div>
      <div>
        <h2>Weather</h2>
        <p>temperature {weather.main.temp} Celsius</p>
        <img src={imgLink} alt="weather" />
        <p>Wind {weather.wind.speed} meter/sec</p>
      </div>
    </>
  );
};

const Countries = ({ matchingCountries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Automatically set selectedCountry if there's only one match
    if (matchingCountries.length === 1) {
      setSelectedCountry(matchingCountries[0]);
    } else {
      setSelectedCountry(null); // Reset selectedCountry if multiple or none
      setWeatherData(null); // Reset weather data
    }
  }, [matchingCountries]);

  useEffect(() => {
    // Fetch weather data whenever selectedCountry changes, if selectedCountry is not null
    if (selectedCountry) {
      getWeatherData(selectedCountry)
        .then((data) => setWeatherData(data))
        .catch((error) => console.error('Error fetching weather data:', error));
    }
  }, [selectedCountry]);

  const handleShowButton = (country) => {
    setSelectedCountry(country);
  };

  if (matchingCountries.length === 0) {
    return <p>No matching countries</p>;
  } else if (matchingCountries.length < 10) {
    return (
      <div>
        <ul>
          {matchingCountries.length !== 1 &&
            matchingCountries.map((country) => (
              <ListedCountry
                country={country}
                handleShow={() => handleShowButton(country)}
                key={country.cca2}
              />
            ))}
        </ul>
        {selectedCountry && (
          <CountryInfo country={selectedCountry} weather={weatherData} />
        )}
      </div>
    );
  } else {
    return <p>Too many matches, specify another filter</p>;
  }
};

export default Countries;
