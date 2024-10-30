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
    const alreadyExists = persons.find(
      (person) => person.name === newEntry.name
    );
    if (alreadyExists === undefined) {
      setAddingDuplcate(false);
      return false;
    } else {
      setAddingDuplcate(true);
      return alreadyExists;
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: formData.personName,
      number: formData.number,
    };
    const checkResult = checkDuplicate(newEntry);
    if (checkResult) {
      if (window.confirm(`want to update ${newEntry.name}'s number?`)) {
        phonebookService
          .updatePersonNumber(checkResult.id, newEntry)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === returnedPerson.id ? returnedPerson : person
              )
            );
          });
        setLastEntry(`${formData.personName}'s number has been updated`);
      } else {
        setLastEntry(
          `person ${formData.personName} with number ${formData.number} is duplicate`
        );
      }
    } else {
      phonebookService.addPerson(newEntry).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
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
      {addingDuplcate ? <p>{lastEntry}</p> : <></>}
    </div>
  );
};

export default App;
