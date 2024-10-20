import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.clickhandler}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodVotes = (newValue) => {
    setGood(newValue);
  };

  const setNeutralVotes = (newValue) => {
    setNeutral(newValue);
  };

  const setBadVotes = (newValue) => {
    setBad(newValue);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button clickhandler={() => setGoodVotes(good + 1)} text="good" />
      <Button
        clickhandler={() => setNeutralVotes(neutral + 1)}
        text="neutral"
      />
      <Button clickhandler={() => setBadVotes(bad + 1)} text="bad" />
      <h2>Statistics </h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

export default App;
