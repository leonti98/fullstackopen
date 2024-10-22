const Header = ({ name }) => <h2>{name}</h2>;

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

const Course = ({ course }) => (
  <div>
    <Header key={course.id} name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
