import React from 'react';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const MyActivities = ({ activityId, title, description, created }) => {
  const history = useHistory();

  const [token, setToken, removeToken] = useCookies(['myToken']);

  const deleteActivity = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/activities/${activityId}`, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    history.go(0);
  };

  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className='activity__content'>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{`Created at: ${created}`}</p>
        </div>
        <div className='activity__actions'>
          <button>Update</button>
          <button onClick={deleteActivity}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default MyActivities;
