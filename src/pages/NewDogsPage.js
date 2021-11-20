import React from 'react';
import Cookies from 'universal-cookie';

// Components
import NewDogsForm from '../components/NewDogsForm';

const NewDogsPage = ({ loadedLoggedInUser }) => {
  const cookies = new Cookies();

  return (
    <section className='dogs__section--flex-center'>
      {cookies.get('myToken') === undefined ? (
        <h1>Please sign in to add new dog</h1>
      ) : (
        <NewDogsForm loadedLoggedInUser={loadedLoggedInUser} />
      )}
    </section>
  );
};

export default NewDogsPage;
