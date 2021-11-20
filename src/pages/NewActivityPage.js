import React from 'react';
import Cookies from 'universal-cookie';

// Components
import NewActivityForm from '../components/NewActivityForm';

const NewActivityPage = ({ loadedLoggedInUser }) => {
  const cookies = new Cookies();

  return (
    <section className='activity__section--flex-center'>
      {cookies.get('myToken') === undefined ? (
        <h1>Please sign in to add new activity</h1>
      ) : (
        <NewActivityForm loadedLoggedInUser={loadedLoggedInUser} />
      )}
    </section>
  );
};

export default NewActivityPage;
