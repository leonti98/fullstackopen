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
      </>
    );
  }
};

export default Country;
