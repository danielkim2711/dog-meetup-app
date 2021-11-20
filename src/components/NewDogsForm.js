import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const NewDogsForm = ({ loadedLoggedInUser }) => {
  const history = useHistory();

  const [token] = useCookies(['myToken']);

  const dogNameInputRef = useRef();
  const dogBreedInputRef = useRef();
  const [gender, setGender] = useState();

  const handleGender = (e) => {
    setGender(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredDogName = dogNameInputRef.current.value;
    const enteredDogBreed = dogBreedInputRef.current.value;
    const enteredDogGender = gender;

    const dogData = {
      name: enteredDogName,
      breed: enteredDogBreed,
      gender: enteredDogGender,
      user: loadedLoggedInUser.user_id,
    };

    axios
      .post('http://127.0.0.1:8000/api/dogs/', dogData, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    history.replace('/dogs');
  };

  return (
    <div className='form__card'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='form__title'>Add New Dog</h1>
        <div className='control'>
          <label htmlFor='name'>Dog Name</label>
          <input type='text' required id='name' ref={dogNameInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='breed'>Dog Breed</label>
          <input type='text' required id='breed' ref={dogBreedInputRef} />
        </div>
        <div className='control control__radio'>
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            required
            id='male'
            name='gender'
            value='M'
            onClick={handleGender}
          />
          <label htmlFor='female'>Female</label>
          <input
            type='radio'
            required
            id='female'
            name='gender'
            value='F'
            onClick={handleGender}
          />
        </div>
        <div className='actions'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewDogsForm;
