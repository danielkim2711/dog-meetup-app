import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

// Components
import DogsList from '../components/DogsList';

const DogsPage = ({ loadedLoggedInUser }) => {
  const [token, setToken, removeToken] = useCookies(['myToken']);

  const [dogsList, setDogsList] = useState([]);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = () => {
    axios
      .get('http://127.0.0.1:8000/api/dogs/', {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => {
        const dogs = [];
        res.data.forEach((dog) =>
          dog.user === loadedLoggedInUser.user_id
            ? dogs.push(dog)
            : console.log('Error occured to forEach')
        );
        setDogsList(dogs);
      })
      .catch((err) => console.log('Error! :', err));
  };

  return (
    <section className='activity__section'>
      <h1>My Dogs</h1>
      {dogsList.length !== 0 ? (
        <DogsList dogsList={dogsList} />
      ) : (
        <h1>There are currently no registered dogs yet!</h1>
      )}
    </section>
  );
};

export default DogsPage;
