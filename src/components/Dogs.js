import React from 'react';

const Dogs = ({ picture, name, breed, gender }) => {
  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className='activity__content'>
          <p>{picture}</p>
          <p>{`Name: ${name}`}</p>
          <p>{`Breed: ${breed}`}</p>
          <p>{`Gender: ${gender === 'M' ? 'Male' : 'Female'}`}</p>
        </div>
        <div className='activity__actions'>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default Dogs;
