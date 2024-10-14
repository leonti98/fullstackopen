import { createElement } from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

const Content = (props) => {
  const allparts = props.parts;

  return (
    <div>
      {allparts.map((part, key) => {
        return (
          <p key={key}>
            {part.name} {part.exercises}
          </p>
        );
      })}
    </div>
  );
};

const Total = (props) => {
  let total = 0;
  props.parts.forEach((part) => (total += part.exercises));
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <>
      <Header text={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default App;
