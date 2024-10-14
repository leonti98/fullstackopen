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
  console.log(allparts);

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

const Footer = (props) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
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
      {/* <Total parts={parts} /> */}
      <Footer
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </>
  );
};

export default App;
