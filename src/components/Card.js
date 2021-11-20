import React from 'react';

const Card = () => {
  return (
    <div className='card'>
      <div className='card__container card__fast'>
        <h1>Fast</h1>
        <p>
          This incredible website allows you to meet up other groups right away!
          Sign up now to start your activities now!
        </p>
      </div>
      <div className='card__container card__easy'>
        <h1>Easy</h1>
        <p>
          You will be surprised how easy it is to get started! Sign up now to
          start your activities now!
        </p>
      </div>
      <div className='card__container card__reliable'>
        <h1>Reliable</h1>
        <p>
          Worried about your personal information? Our website encrypts your
          password so nobody ever knows your password includes us!
        </p>
      </div>
    </div>
  );
};

export default Card;
