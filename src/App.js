import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character.js';
const App = () => {
  const [data, setData] = useState([]);
  const [person, setCurrentPerson] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => setData(res.data.results))
      .then((res) => setNextPage(res.data.next))
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   console.table(data);
  // }, [data]);
  return (
    <>
      <div className='App'>
        <h1 className='Header'>Characters</h1>
      </div>
      <Character data={data} />
    </>
  );
};

export default App;
