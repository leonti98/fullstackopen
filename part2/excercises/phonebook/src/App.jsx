import { useState } from 'react';

const Person = ({ name, phone }) => (
  <p>
    {name} {phone}
  </p>
);

const Filter = ({ persons, searchField }) => {
  console.log(persons);
  console.log(searchField);
  if (searchField === '') {
    return '';
  }
  const filteredPersons = persons
    .filter((person) =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    )
    .map((person, i) => {
      console.log(person);
      return (
        <Person
          name={person.name}
          phone={person.phone}
          key={person.phone.id}
        ></Person>
      );
    });
  console.log(filteredPersons);

  return <>{filteredPersons}</>;
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 },
  ]);
  const [formData, setFormData] = useState({ personName: '', phone: '' });
  const [personAlreadyExists, setPersonAlreadyExists] = useState(false);
  const [lastEntry, setLastEntry] = useState('');
  const [searchField, setSearchField] = useState('');

  const checkIfExists = (newEntry) => {
    const exists = persons.filter(
      (person) =>
        person.name === newEntry.name && person.phone === newEntry.phone
    );
    const currentPersonExists = exists.length > 0 ? true : false;
    setPersonAlreadyExists(currentPersonExists);
    console.log('currentPersonExists', currentPersonExists);
    return currentPersonExists;
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: formData.personName,
      phone: formData.phone,
    };

    if (checkIfExists(newEntry)) {
      console.log('exists');
      setLastEntry(
        `person ${formData.personName} with phone ${formData.phone}`
      );
    } else {
      console.log('does not exists');
      setPersons(persons.concat(newEntry));
      setFormData({ personName: '', phone: '' });
      setLastEntry(
        `person ${formData.personName} with phone ${formData.phone}`
      );
    }
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const searchPerson = (event) => {
    setSearchField(event.target.value);
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
          phone:{' '}
          <input
            name="phone"
            onChange={handleFormChange}
            value={formData.phone}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((parson, i) => (
        <Person name={parson.name} phone={parson.phone} key={i}></Person>
      ))}
      {personAlreadyExists ? (
        <p>{lastEntry} is already added to phonebook</p>
      ) : (
        <>
          <p>{lastEntry} has been added to phonebook</p>
        </>
      )}
    </div>
  );
};

export default App;
