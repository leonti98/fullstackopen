import { useState } from 'react';

const Button = (props) => {
  return (
    <>
      <button onClick={props.clickhandler}>{props.text}</button>
    </>
  );
};

const MostVoted = (props) => {
  const maxVoteIndex = props.voteCounter.indexOf(
    Math.max(...props.voteCounter)
  );
  console.log(maxVoteIndex);

  const maxVoteAnecdote = props.anecdotes[maxVoteIndex];
  return (
    <div>
      {' '}
      <h2>Anecdote with most votes</h2>
      <p>{maxVoteAnecdote}</p>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [voteCounter, setVoteCounter] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const generateRandom = () => {
    const newNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(newNumber);
    console.log(voteCounter, newNumber);
  };

  const addVotes = () => {
    console.log('====================================');
    console.log('vote couter before', voteCounter);
    const copyVoteCounter = [...voteCounter];
    copyVoteCounter[selected] += 1;
    console.log('vote couter after', voteCounter);
    console.log('copy vote couter after', copyVoteCounter);
    // console.log('vote counter copy', copyVoteCounter);
    // console.log('{voteCounter[selected]', voteCounter[selected]);
    setVoteCounter(copyVoteCounter);
    console.log('vote couter after setting', voteCounter);
    console.log('====================================');
    // setCurrentVotes(copyVoteCounter[selected]);
  };

  // console.log('voteCounter =', voteCounter);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {voteCounter[selected]} votes</p>
      </div>
      <div>
        <Button
          clickhandler={() => generateRandom()}
          text="next anectote"
        ></Button>
        <Button clickhandler={() => addVotes()} text="vote">
          Vote
        </Button>
      </div>
      <div>
        <MostVoted voteCounter={voteCounter} anecdotes={anecdotes}></MostVoted>
      </div>
    </div>
  );
};

export default App;
