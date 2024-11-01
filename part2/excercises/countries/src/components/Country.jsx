const Country = ({ countryObject }) => {
  console.log('==================================');
  console.log('countryObject', countryObject);
  console.log('==================================');
  if (Object.keys(countryObject).length === 0) {
    console.log('no keys');
    console.log(countryObject);

    return <></>;
  } else {
    console.log('keys???????????');
    console.log('==================================');
    console.log('countryObject', countryObject);
    console.log('==================================');

    return (
      <>
        <h2>{countryObject.name.common}</h2>
        <h3></h3>
        <p>Capital {countryObject.capital[0]}</p>
        <p>Area {countryObject.area}</p>
        <h3>Languges:</h3>
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
