import { useState } from 'react';

const Person = ({ name }) => <p>{name}</p>;

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [personAlreadyExists, setPersonAlreadyExists] = useState(false);
  const [lastEntry, setLastEntry] = useState('');

  const checkIfExists = (newEntry) => {
    const exists = persons.filter((person) => person.name === newEntry.name);
    const currentPersonExists = exists.length > 0 ? true : false;
    setPersonAlreadyExists(currentPersonExists);
    console.log('currentPersonExists', currentPersonExists);
    return currentPersonExists;
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: newName,
    };

    if (checkIfExists(newEntry)) {
      console.log('exists');
      setLastEntry(newName);
    } else {
      console.log('does not exists');

      setPersons(persons.concat(newEntry));
      setNewName('');
    }
  };

  const handleFormChange = (event) => {
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

      {persons.map((parson, i) => (
        <Person name={parson.name} key={i}></Person>
      ))}

      {personAlreadyExists ? (
        <p>{lastEntry} is already added to phonebook</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
