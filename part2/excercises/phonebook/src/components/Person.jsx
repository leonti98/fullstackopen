const Person = ({ name, number, deletePerson }) => (
  <li>
    {name} {number}
    <button onClick={deletePerson}>delete</button>
  </li>
);

export default Person;
