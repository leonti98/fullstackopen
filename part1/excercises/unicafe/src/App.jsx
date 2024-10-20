import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.clickhandler}>{props.text}</button>;
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  if (good + neutral + bad != 0) {
    return (
      <div>
        <h2>Statistics </h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + bad + neutral}</p>
        <p>average {(good - bad) / (good + bad + neutral)}</p>
        <p>positive {good / (good + bad + neutral)} %</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
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
    <div>
      <h1>Give feedback</h1>
      <Button clickhandler={() => setGoodVotes(good + 1)} text="good" />
      <Button
        clickhandler={() => setNeutralVotes(neutral + 1)}
        text="neutral"
      />
      <Button clickhandler={() => setBadVotes(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
