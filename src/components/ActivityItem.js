import React, { useState } from 'react';

const ActivityItem = ({
  title,
  description,
  location,
  created,
  numberOfUsers,
  user,
  loadedLoggedInUser,
}) => {
  const [numberOfUsersJoined, setNumberOfUsersJoined] = useState(1);

  const getDate = (activity) => {
    return new Date(activity).toLocaleString();
  };

  const joinActivity = () => {
    loadedLoggedInUser.user_id !== user &&
      setNumberOfUsersJoined(numberOfUsersJoined + 1);
    console.log(numberOfUsersJoined);
  };

  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className='activity__content'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{`Location: ${location}`}</p>
          <p>{`Created at: ${getDate(created)}`}</p>
          <p>{`Joined Users: ${numberOfUsers}`}</p>
        </div>
        <div className='activity__actions'>
          <button onClick={joinActivity}>Join Now!</button>
        </div>
      </div>
    </li>
  );
};

export default ActivityItem;
