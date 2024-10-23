import { useState } from 'react';

const Person = ({ name }) => <li>{name}</li>;

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: newName,
    };
    setPersons(persons.concat(newEntry));
    setNewName('');
  };

  const handleFormChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleFormChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((parson, i) => (
          <Person name={parson.name} key={i}></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
