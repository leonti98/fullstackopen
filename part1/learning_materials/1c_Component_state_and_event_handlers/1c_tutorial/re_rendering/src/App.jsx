import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const setZero = () => setCounter(0);

  return (
    <div>
      <div>
        <div>{counter}</div>
      </div>
      <button onClick={increaseByOne}>plus</button>
      <div>
        <button onClick={setZero}>reset</button>
      </div>
    </div>
  );
};

export default App;
