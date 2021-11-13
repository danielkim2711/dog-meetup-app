import React from 'react';

const SignIn = () => {
  return (
    <div className='form__card'>
      <form className='form'>
        <h1 className='form__title'>Sign in</h1>
        <div className='control'>
          <label htmlFor='username'>Username</label>
          <input type='text' required id='username' />
        </div>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input type='password' required id='password' />
        </div>
        <div className='actions'>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
