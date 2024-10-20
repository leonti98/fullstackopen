import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.clickhandler}>{props.text}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  }
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  if (good + neutral + bad != 0) {
    return (
      <div>
        <h2>Statistics </h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + bad + neutral} />
            <StatisticLine
              text="average"
              value={(good - bad) / (good + bad + neutral)}
            />
            <StatisticLine
              text="positive"
              value={good / (good + bad + neutral)}
            />
          </tbody>
        </table>
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
      <div>
        <Button clickhandler={() => setGoodVotes(good + 1)} text="good" />
        <Button
          clickhandler={() => setNeutralVotes(neutral + 1)}
          text="neutral"
        />
        <Button clickhandler={() => setBadVotes(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
