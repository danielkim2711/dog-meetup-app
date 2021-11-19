import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Dogs = ({ dogId, picture, name, breed, gender, loadedLoggedInUser }) => {
  const history = useHistory();

  const dogNameInputRef = useRef();
  const dogBreedInputRef = useRef();
  const [dogGender, setDogGender] = useState();

  const [token] = useCookies(['myToken']);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleGender = (e) => {
    setDogGender(e.currentTarget.value);
  };

  const deleteDog = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/dogs/${dogId}/`, {
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

    const enteredDogName = dogNameInputRef.current.value;
    const enteredDogBreed = dogBreedInputRef.current.value;
    const enteredDogGender = dogGender;

    const dogData = {
      name: enteredDogName,
      breed: enteredDogBreed,
      gender: enteredDogGender,
      user: loadedLoggedInUser.user_id,
    };

    axios
      .put(`http://127.0.0.1:8000/api/dogs/${dogId}/`, dogData, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    history.push('/');
  };

  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className={isUpdating ? 'hide' : 'activity__content'}>
          <p>{picture}</p>
          <p>{`Name: ${name}`}</p>
          <p>{`Breed: ${breed}`}</p>
          <p>{`Gender: ${gender === 'M' ? 'Male' : 'Female'}`}</p>
        </div>
        <div className={isUpdating || 'hide'}>
          <form className='form' onSubmit={handleSubmit}>
            <h1 className='form__title'>Dogs</h1>
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
          <div className='actions actions--center'>
            <button onClick={() => setIsUpdating(false)}>Cancel</button>
          </div>
        </div>
        <div className={isUpdating ? 'hide' : 'activity__actions'}>
          <button onClick={() => setIsUpdating(true)}>Update</button>
          <button onClick={deleteDog}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default Dogs;
