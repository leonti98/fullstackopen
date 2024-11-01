import axios from 'axios';
import { useState, useEffect } from 'react';
import Country from './components/Country';

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

    countriesDatabase.forEach((element) => {
      // console.log('==================================');
      // console.log('element.name', element.name.common);
      // console.log('==================================');
    });
  }, []);

  const searchCountry = (event) => {
    event.preventDefault();
    setResults([]);
    const searchedCountry = countriesDatabase.find(
      (country) => country.name.common === inputCountry
    );

    const searchedCountry2 = countriesDatabase.filter((country) =>
      country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
    );
    console.log('==================================');
    console.log('searchedCountry2', searchedCountry2);
    console.log('==================================');
    console.log('==================================');
    console.log('searchedCountry', searchedCountry);
    console.log('==================================');
    if (searchedCountry2.length === 1) {
      setCountry(searchedCountry2[0]);
    } else if (searchedCountry2.length <= 10) {
      setResults(searchedCountry2);
      console.log('<=10');
    } else {
      console.log('> 10');
    }
  };

  const handleInputChange = (event) => {
    setInputCountry(event.target.value);
  };

  // if (Object.keys(country).length === 0) {
  //   console.log('no country');
  // } else {
  //   console.log('country exists');
  // }
  return (
    <>
      <form onSubmit={searchCountry}>
        <input type="text" value={inputCountry} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <Country countryObject={country} />
      <ul>
        {results.map((country, i) => (
          <li key={i}>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
