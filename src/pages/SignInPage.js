import React from 'react';

// Components
import SignIn from '../components/SignIn';

const SignInPage = ({
  loadedLoggedInUser,
  setloadedLoggedInUser,
  setLoadedProfile,
}) => {
  return (
    <div className='form__container signInForm'>
      <SignIn
        loadedLoggedInUser={loadedLoggedInUser}
        setloadedLoggedInUser={setloadedLoggedInUser}
        setLoadedProfile={setLoadedProfile}
      />
    </div>
  );
};

export default SignInPage;
