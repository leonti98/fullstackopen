import axios from 'axios';

const baseURL = 'http://localhost:3001/persons';

const getPeople = () => {
  const request = axios.get(baseURL);
  // axios.get(baseURL).then((response) => response.data);
  return request.then((response) => response.data);
};

const addPerson = (newEntry) => {
  const request = axios.post(baseURL, newEntry);
  return request.then((response) => response.data);
};

export default { getPeople, addPerson };
