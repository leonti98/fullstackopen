import axios from 'axios';
import { useState, useEffect } from 'react';
import Country from './components/Country';

const ListedCountry = ({ country, handleShow }) => {
  // console.log(country);
  return (
    <li>
      {country.name.common}
      <button onClick={() => handleShow(country)}>show</button>
    </li>
  );
};

function App() {
  const [country, setCountry] = useState({});
  const [inputCountry, setInputCountry] = useState('');
  const [countriesDatabase, setCountriesDatabase] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => response.data)
      .then((data) => {
        setCountriesDatabase(data);
      });
  }, []);

  const searchCountry = (event) => {
    event.preventDefault();

    let matchingCountries = countriesDatabase.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      const searchInput = inputCountry.toLowerCase();
      return countryName.includes(searchInput);
    });

    if (matchingCountries.length === 1) {
      setResults([]);
      setCountry(matchingCountries[0]);
    } else if (matchingCountries.length === 0) {
      setCountry([]);
      setResults([]);
      console.log(0);
    } else if (matchingCountries.length <= 10) {
      // Check if exact match is in array
      for (let i = 0; i < matchingCountries.length; i++) {
        const country = matchingCountries[i];
        if (country.name.common.toLowerCase() === inputCountry.toLowerCase()) {
          console.log('exact match');
          matchingCountries = [country];
          setCountry(matchingCountries[0]);
          setResults([]);
          break;
        } else if (matchingCountries.length === i + 1) {
          console.log('got to end');
          setResults(matchingCountries);
          setCountry([]);
          console.log('<=10');
        }
      }
    } else {
      setCountry([]);
      setResults([
        { name: { common: 'Too many matches, specify another filter' } },
      ]);
      console.log('> 10');
    }
  };

  const handleShowButton = (country) => {
    console.log(country);
    setCountry(country);
    setResults([]);
  };

  const handleInputChange = (event) => {
    setInputCountry(event.target.value);
  };
  return (
    <>
      <form onSubmit={searchCountry}>
        <input type="text" value={inputCountry} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((country) => (
          <ListedCountry
            country={country}
            handleShow={() => handleShowButton(country)}
            key={country.cca2}
          />
        ))}
      </ul>
      <Country countryObject={country} />
    </>
  );
}

export default App;
