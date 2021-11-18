import React from 'react';

const ActivityItem = ({ title, description, created, user }) => {
  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className='activity__content'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{created}</p>
          <p>{`Created by: ${user}`}</p>
        </div>
        <div className='activity__actions'>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default ActivityItem;
