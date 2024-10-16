import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    const clickCounter = {
      left: counter.left + 1,
      right: counter.right,
    };
    setCounter(clickCounter);
  };

  const handleRightClick = () => {
    const clickCounter = {
      left: counter.left,
      right: counter.right + 1,
    };
    setCounter(clickCounter);
  };

  return (
    <div>
      {counter.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {counter.right}
    </div>
  );
};

export default App;
