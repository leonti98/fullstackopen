const Country = ({ countryObject }) => {
  if (Object.keys(countryObject).length === 0) {
    console.log('no keys');
    console.log(countryObject);

    return <></>;
  } else {
    console.log('keys???????????');
    console.log(countryObject);

    return (
      <>
        <h2>{countryObject.name.common}</h2>
        <h3></h3>
        <p>Capital {countryObject.capital[0]}</p>
        <p>Area {countryObject.area}</p>
        <br />
        <h3>Languges:</h3>
        <br />
        <ul>
          {Object.entries(countryObject.languages).map(([key, value]) => (
            <li> {value}</li>
          ))}
        </ul>
        <img src={countryObject.flags.png} alt="flag" />
      </>
    );
  }
};

export default Country;
