import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  const hook = (promise) => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const [formData, setFormData] = useState({ personName: "", number: "" });
  const [personAlreadyExists, setPersonAlreadyExists] = useState(false);
  const [lastEntry, setLastEntry] = useState("");
  const [searchField, setSearchField] = useState("");

  const checkIfExists = (newEntry) => {
    const exists = persons.filter(
      (person) =>
        person.name === newEntry.name && person.number === newEntry.number
    );
    const currentPersonExists = exists.length > 0 ? true : false;
    setPersonAlreadyExists(currentPersonExists);
    if (currentPersonExists) {
      alert(`${newEntry.name} is already added to phonebook`);
    }
    return currentPersonExists;
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: formData.personName,
      number: formData.number,
    };

    if (checkIfExists(newEntry)) {
      setLastEntry(
        `person ${formData.personName} with number ${formData.number}`
      );
    } else {
      setPersons(persons.concat(newEntry));
      setFormData({ personName: "", number: "" });
      setLastEntry(
        `person ${formData.personName} with number ${formData.number}`
      );
    }
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const searchPerson = (event) => {
    setSearchField(event.target.value);
  };
  console.log(persons);

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
          name:{" "}
          <input
            name="personName"
            onChange={handleFormChange}
            value={formData.personName}
          />
        </div>
        <div>
          number:{" "}
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
