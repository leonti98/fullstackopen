import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
    </div>
  );
};

export default App;
