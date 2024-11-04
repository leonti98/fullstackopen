import axios from 'axios';
import { useState, useEffect } from 'react';
import Countries from './components/Country';

function App() {
  const [matchingCountries, setMatchingCountries] = useState([]);
  const [inputCountry, setInputCountry] = useState('');
  const [countriesDatabase, setCountriesDatabase] = useState([]);

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
    const searchInput = inputCountry.toLowerCase();
    const matchedCountries = countriesDatabase.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(searchInput);
    });
    if (matchedCountries.length > 1 && matchedCountries.length < 10) {
      for (let i = 0; i < matchedCountries.length; i++) {
        const countryName = matchedCountries[i].name.common.toLowerCase();
        if (searchInput === countryName) {
          setMatchingCountries([matchedCountries[i]]);
          break;
        } else if (matchedCountries.length === i + 1) {
          setMatchingCountries(matchedCountries);
        }
      }
    } else {
      setMatchingCountries(matchedCountries);
    }
  };

  const handleInputChange = (event) => {
    setInputCountry(event.target.value);
  };

  return (
    <div>
      <form onSubmit={searchCountry}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <Countries matchingCountries={matchingCountries} />
    </div>
  );
}

export default App;
