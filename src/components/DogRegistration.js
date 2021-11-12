import React from 'react';

const DogRegistration = () => {
  return (
    <div className='form__card'>
      <form className='form'>
        <h1 className='form__title'>Add New Dog</h1>
        <div className='control'>
          <label htmlFor='dogName'>Dog Name *</label>
          <input type='text' required id='dogName' />
        </div>
        <div className='control'>
          <label htmlFor='dogBreed'>Dog Breed *</label>
          <input type='text' required id='dogBreed' />
        </div>
        {/* <div className='control control__radio'>
          <label htmlFor='male'>Male</label>
          <input type='radio' required id='male' name='gender' />
          <label htmlFor='female'>Female</label>
          <input type='radio' required id='female' name='gender' />
        </div> */}
        <div className='actions'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DogRegistration;
