import axios from 'axios';
import { useState, useEffect } from 'react';
import Country from './components/Country';

function App() {
  const [country, setCountry] = useState({});
  const [inputCountry, setInputCountry] = useState('');
  const [countriesDatabase, setCountriesDatabase] = useState([]);
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
    const searchedCountry = countriesDatabase.find(
      (country) => country.name.common === inputCountry
    );

    setCountry(searchedCountry);
    console.log('==================================');
    console.log('searchedCountry', searchedCountry);
    console.log('==================================');
  };

  const handleInputChange = (event) => {
    setInputCountry(event.target.value);
  };

  if (Object.keys(country).length === 0) {
    console.log('no country');
  } else {
    console.log('country exists');
  }
  return (
    <>
      <form onSubmit={searchCountry}>
        <input type="text" value={inputCountry} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <Country countryObject={country} />
    </>
  );
}

export default App;
