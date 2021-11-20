import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const NewActivityForm = ({ loadedLoggedInUser }) => {
  const history = useHistory();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const [token] = useCookies(['myToken']);

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
      .post('http://127.0.0.1:8000/api/activities/', activityData, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    history.replace('/activities');
  };

  return (
    <div className='form__card'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='form__title'>Create New Activity</h1>
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
    </div>
  );
};

export default NewActivityForm;
