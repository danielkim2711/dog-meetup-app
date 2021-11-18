import React from 'react';

const MyActivities = ({ title, description, created }) => {
  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className='activity__content'>
          <p>{`Title: ${title}`}</p>
          <p>{`Description: ${description}`}</p>
          <p>{`Created at: ${created}`}</p>
        </div>
        <div className='activity__actions'>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default MyActivities;
