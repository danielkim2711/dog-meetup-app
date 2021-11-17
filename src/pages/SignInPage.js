import React from 'react';

// Components
import SignIn from '../components/SignIn';

const SignInPage = ({ setUserId }) => {
  return (
    <div className='form__container signInForm'>
      <SignIn setUserId={setUserId} />
    </div>
  );
};

export default SignInPage;
