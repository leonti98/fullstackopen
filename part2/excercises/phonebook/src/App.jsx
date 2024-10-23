import { useState } from 'react';

const Person = ({ name, phone }) => (
  <p>
    {name} {phone}
  </p>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123' },
  ]);
  const [formData, setFormData] = useState({ personName: '', phone: '' });
  const [personAlreadyExists, setPersonAlreadyExists] = useState(false);
  const [lastEntry, setLastEntry] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
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
