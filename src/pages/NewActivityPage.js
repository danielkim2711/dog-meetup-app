import React from 'react';
import Cookies from 'universal-cookie';

// Components
import NewActivityForm from '../components/NewActivityForm';

const NewActivityPage = ({ loadedLoggedInUser }) => {
  const cookies = new Cookies();

  return (
    <section className='activity__section--flex-center'>
      <h1>Create New Activity</h1>
      {cookies.get('myToken') === undefined ? (
        <h1>You are not allowed</h1>
      ) : (
        <NewActivityForm loadedLoggedInUser={loadedLoggedInUser} />
      )}
    </section>
  );
};

export default NewActivityPage;
