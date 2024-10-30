import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import phonebookService from './services/phoneBook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [formData, setFormData] = useState({ personName: '', number: '' });
  const [addingDuplcate, setAddingDuplcate] = useState(false);
  const [lastEntry, setLastEntry] = useState('');
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    phonebookService.getPeople().then((people) => setPersons(people));
  }, []);

  const checkDuplicate = (newEntry) => {
    const exists = persons.find(
      (person) =>
        person.name === newEntry.name && person.number === newEntry.number
    );
    if (exists === undefined) {
      setAddingDuplcate(false);
      return false;
    } else {
      setAddingDuplcate(true);
      return true;
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: formData.personName,
      number: formData.number,
    };

    if (checkDuplicate(newEntry)) {
      setLastEntry(
        `person ${formData.personName} with number ${formData.number}`
      );
    } else {
      setPersons(persons.concat(newEntry));
      setFormData({ personName: '', number: '' });
      setLastEntry(
        `person ${formData.personName} with number ${formData.number}`
      );
      phonebookService.addPerson(newEntry);
    }
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const searchPerson = (event) => {
    setSearchField(event.target.value);
  };
  console.log(typeof persons);
  console.log('==================================');
  console.log('persons', persons);
  console.log('==================================');

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <div>
          filter show with
          <input
            type="text"
            name="search"
            value={searchField}
            onChange={searchPerson}
          />
        </div>
      </form>
      <Filter persons={persons} searchField={searchField} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{' '}
          <input
            name="personName"
            onChange={handleFormChange}
            value={formData.personName}
          />
        </div>
        <div>
          number:{' '}
          <input
            name="number"
            onChange={handleFormChange}
            value={formData.number}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((parson, i) => (
        <Person name={parson.name} number={parson.number} key={i}></Person>
      ))}
      {addingDuplcate ? <p>{lastEntry} is duplicate</p> : <></>}
    </div>
  );
};

export default App;
