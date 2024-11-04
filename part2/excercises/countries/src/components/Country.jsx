import axios from 'axios';
import React, { useState } from 'react';
import weatherData from '../services/weatherData';

const ListedCountry = ({ country, handleShow }) => {
  return (
    <li>
      {country.name.common}
      <button onClick={() => handleShow(country)}>show</button>
    </li>
  );
};

const CountryInfo = ({ country }) => {
  weatherData(country);
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
    </>
  );
};

const Countries = ({ matchingCountries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleShowButton = (country) => {
    setSelectedCountry(country);
  };

  if (matchingCountries.length === 0) {
    return <p>No matching countries</p>;
  } else if (matchingCountries.length === 1) {
    const country = matchingCountries[0];

    return <CountryInfo country={country} />;
  } else if (matchingCountries.length < 10) {
    return (
      <div>
        <ul>
          {matchingCountries.map((country) => (
            <ListedCountry
              country={country}
              handleShow={() => handleShowButton(country)}
              key={country.cca2}
            />
          ))}
        </ul>
        {selectedCountry && <CountryInfo country={selectedCountry} />}
      </div>
    );
  } else {
    return <p>Too many matches, specify another filter</p>;
  }
};

export default Countries;
