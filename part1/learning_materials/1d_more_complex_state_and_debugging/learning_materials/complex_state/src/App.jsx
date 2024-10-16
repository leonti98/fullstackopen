import { useState } from 'react';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button pressed history: {props.allClicks.join(' ')}</div>;
};

const Button = (props) => {
  console.log('props value is ', props);
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updateLeft = left + 1;
    setLeft(updateLeft);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
  };
  debugger;
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left">
        left
      </Button>
      <Button handleClick={handleRightClick} text="right">
        right
      </Button>
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
