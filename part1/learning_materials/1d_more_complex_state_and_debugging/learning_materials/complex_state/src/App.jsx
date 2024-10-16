import { useState } from 'react';

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    console.log(allClicks);
    setAll(allClicks.concat('L'));
    console.log(allClicks);
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    console.log(allClicks, 'before');
    setAll(allClicks.concat('R'));
    console.log(allClicks, 'after');
    setRight(right + 1);
  };
  console.log('====================================');
  console.log(allClicks);
  console.log('====================================');
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join(' ')}</p>
    </div>
  );
};

export default App;
