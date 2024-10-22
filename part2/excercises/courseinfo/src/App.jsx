const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => (
  <p>
    Total of {parts.reduce((total, part) => total + part.exercises, 0)}{' '}
    exercises
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return parts.map((part, i) => <Part key={i} part={part}></Part>);
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
    {
      name: 'Redux',
      exercises: 11,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
