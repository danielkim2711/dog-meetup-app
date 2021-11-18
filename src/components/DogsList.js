import React from 'react';

// Components
import Dogs from './Dogs';

const DogsList = ({ dogsList }) => {
  return (
    <ul className='activity__list'>
      {dogsList.map((dogs) => (
        <Dogs
          key={dogs.id}
          picture={dogs.picture}
          name={dogs.name}
          breed={dogs.breed}
          gender={dogs.gender}
        />
      ))}
    </ul>
  );
};

export default DogsList;
