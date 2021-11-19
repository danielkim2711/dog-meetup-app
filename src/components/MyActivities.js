import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const MyActivities = ({
  activityId,
  title,
  description,
  created,
  loadedLoggedInUser,
}) => {
  const history = useHistory();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const [token, setToken, removeToken] = useCookies(['myToken']);
  const [isUpdating, setIsUpdating] = useState(false);

  const deleteActivity = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/activities/${activityId}/`, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescriotion = descriptionInputRef.current.value;

    const activityData = {
      title: enteredTitle,
      description: enteredDescriotion,
      user: loadedLoggedInUser.user_id,
    };

    axios
      .put(
        `http://127.0.0.1:8000/api/activities/${activityId}/`,
        activityData,
        {
          headers: {
            Authorization: `Token ${token['myToken']}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    history.push('/');
  };

  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className={isUpdating ? 'hide' : 'activity__content'}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{`Created at: ${created}`}</p>
        </div>
        <div className={isUpdating || 'hide'}>
          <form className='form' onSubmit={handleSubmit}>
            <h1 className='form__title'>Activities</h1>
            <div className='control'>
              <label htmlFor='title'>Title</label>
              <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className='control'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                required
                rows='10'
                ref={descriptionInputRef}
              ></textarea>
            </div>
            <div className='actions'>
              <button>Submit</button>
            </div>
          </form>
          <div className='actions actions--center'>
            <button onClick={() => setIsUpdating(false)}>Cancel</button>
          </div>
        </div>
        <div className={isUpdating ? 'hide' : 'activity__actions'}>
          <button onClick={() => setIsUpdating(true)}>Update</button>
          <button onClick={deleteActivity}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default MyActivities;
