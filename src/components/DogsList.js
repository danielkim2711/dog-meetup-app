import React from 'react';

// Components
import Dogs from './Dogs';

const DogsList = ({ dogsList, loadedLoggedInUser }) => {
  return (
    <ul className='activity__list'>
      {dogsList.map((dogs) => (
        <Dogs
          key={dogs.id}
          dogId={dogs.id}
          picture={dogs.picture}
          name={dogs.name}
          breed={dogs.breed}
          gender={dogs.gender}
          loadedLoggedInUser={loadedLoggedInUser}
        />
      ))}
    </ul>
  );
};

export default DogsList;
