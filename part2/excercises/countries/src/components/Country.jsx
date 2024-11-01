import axios from 'axios';
import api from '../services/api';

const Country = ({ countryObject }) => {
  if (Object.keys(countryObject).length === 0) {
    return <></>;
  } else {
    // const capitalLatitude = countryObject.capitalInfo.latlng[0];
    // const capitalLongitude = countryObject.capitalInfo.latlng[1];
    // console.log('==================================');
    // console.log('capitalLatitude', capitalLatitude);
    // console.log('api', api);
    // console.log('==================================');
    // const weatherData = axios
    //   .get(
    //     `https://api.openweathermap.org/data/3.0/onecall?lat=${capitalLatitude}&lon=${capitalLongitude}&appid=${api}`
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   });
    // console.log(weatherData);

    console.log('==================================');
    console.log('countryObject', countryObject);
    console.log('==================================');
    return (
      <div key={countryObject.ccn3}>
        <h2>{countryObject.name.common}</h2>
        <h3></h3>
        <p>Capital {countryObject.capital[0]}</p>
        <p>Area {countryObject.area}</p>
        <h3>Languges:</h3>
        <ul>
          {Object.entries(countryObject.languages).map(([key, value], i) => (
            <li key={i}> {value}</li>
          ))}
        </ul>
        <img src={countryObject.flags.png} alt="flag" />
      </div>
    );
  }
};

export default Country;
