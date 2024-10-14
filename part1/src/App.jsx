const Hello = (props) => {
  console.log(props);
  return (
    <div id={props.myid}>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      greeting app created by{" "}
      <a href="https://github.com/leonti98" target="blank">
        Levan Vachnadze
      </a>
    </>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div id="first">
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} myid={1} />
      <Hello name={name} age={age} myid={2} />
      <Footer />
    </div>
  );
};

export default App;
