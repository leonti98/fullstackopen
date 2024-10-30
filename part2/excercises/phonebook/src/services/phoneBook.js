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

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

const updatePersonNumber = (id, newEntry) => {
  console.log(id, newEntry);

  const request = axios.put(`${baseURL}/${id}`, newEntry);
  return request.then((response) => response.data);
};

export default { getPeople, addPerson, deletePerson, updatePersonNumber };
