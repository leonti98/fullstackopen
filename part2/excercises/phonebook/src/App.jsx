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
      phonebookService.addPerson(newEntry).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        console.log('==================================');
        console.log('returnedPerson', returnedPerson);
        console.log('==================================');
        setFormData({ personName: '', number: '' });
        setLastEntry(
          `person ${formData.personName} with number ${formData.number} added`
        );
      });
    }
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const searchPerson = (event) => {
    setSearchField(event.target.value);
  };

  const deletePerson = (id) => {
    if (window.confirm('Do you really want to delete?')) {
      phonebookService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          alert(`The person was already removed from the server`);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

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
      <ul>
        {persons.map((person, i) => (
          <Person
            name={person.name}
            number={person.number}
            deletePerson={() => deletePerson(person.id)}
            key={i}
          ></Person>
        ))}
      </ul>
      {addingDuplcate ? <p>{lastEntry} is duplicate</p> : <></>}
    </div>
  );
};

export default App;
