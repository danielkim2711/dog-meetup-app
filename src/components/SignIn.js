import React, { useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import axios from 'axios';

const SignIn = () => {
  const history = useHistory();
  const [token, setToken] = useCookies(['myToken']);

  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  const loginUser = (userLogin) => {
    axios
      .post('http://127.0.0.1:8000/auth/', userLogin)
      .then((res) => setToken('myToken', res.data.token))
      .catch((err) => console.log(err));
    history.replace('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userLogin = {
      username: enteredUserName,
      password: enteredPassword,
    };

    loginUser(userLogin);
  };

  return (
    <div className='form__card'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='form__title'>Sign in</h1>
        <div className='control'>
          <label htmlFor='username'>Username</label>
          <input type='text' required id='username' ref={userNameInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            required
            id='password'
            ref={passwordInputRef}
          />
        </div>
        <div className='actions'>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
