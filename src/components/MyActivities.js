import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const MyActivities = ({
  activityId,
  title,
  description,
  location,
  created,
  loadedLoggedInUser,
}) => {
  const history = useHistory();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const locationInputRef = useRef();

  const [token] = useCookies(['myToken']);
  const [isUpdating, setIsUpdating] = useState(false);

  const getDate = (activity) => {
    return new Date(activity).toLocaleString();
  };

  const deleteActivity = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/activities/${activityId}/`, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    history.go(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescriotion = descriptionInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;

    const activityData = {
      title: enteredTitle,
      description: enteredDescriotion,
      location: enteredLocation,
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
    history.go(0);
  };

  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className={isUpdating ? 'hide' : 'activity__content'}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{`Location: ${location}`}</p>
          <p>{`Created at: ${getDate(created)}`}</p>
        </div>
        <div className={isUpdating || 'hide'}>
          <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>Update Activity</h2>
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
            <div className='control'>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                required
                id='location'
                ref={locationInputRef}
              />
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
