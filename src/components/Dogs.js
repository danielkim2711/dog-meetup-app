import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Dogs = ({ dogId, picture, name, breed, gender, loadedLoggedInUser }) => {
  const history = useHistory();

  const [dogImage, setDogImage] = useState('');
  const dogNameInputRef = useRef();
  const dogBreedInputRef = useRef();
  const [dogGender, setDogGender] = useState();

  const [token] = useCookies(['myToken']);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleGender = (e) => {
    setDogGender(e.currentTarget.value);
  };

  const uploadDogImage = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append('upload_preset', 'ml_default');
    formData.append('file', files);

    axios
      .post('https://api.cloudinary.com/v1_1/dluiyrdmg/image/upload', formData)
      .then((res) => {
        setDogImage(res.data.secure_url);
      })
      .catch((err) => console.log(err));
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
    history.go(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredDogImage = dogImage;
    const enteredDogName = dogNameInputRef.current.value;
    const enteredDogBreed = dogBreedInputRef.current.value;
    const enteredDogGender = dogGender;

    const dogData = {
      picture: enteredDogImage,
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
    history.go(0);
  };

  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className={isUpdating ? 'hide' : 'activity__content'}>
          <img
            className='dogs__image'
            src={
              picture === null || picture === ''
                ? 'https://res.cloudinary.com/dluiyrdmg/image/upload/v1637454237/default-dog_jiq6mx.png'
                : picture
            }
            alt='Dog'
          />
          <p>{`Name: ${name}`}</p>
          <p>{`Breed: ${breed}`}</p>
          <p>{`Gender: ${gender === 'M' ? 'Male' : 'Female'}`}</p>
        </div>
        <div className={isUpdating || 'hide'}>
          <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>Update Dogs</h2>
            <div className='control'>
              <input type='file' name='file' onChange={uploadDogImage} />
            </div>
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
