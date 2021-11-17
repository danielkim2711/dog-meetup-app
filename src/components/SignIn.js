import React, { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import axios from 'axios';

const SignIn = ({ setUserId }) => {
  const history = useHistory();
  const [token, setToken] = useCookies(['myToken']);

  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    token['myToken'] && history.replace('/');
  }, [token, history]);

  const loginUser = (userLogin) => {
    axios
      .post('http://127.0.0.1:8000/auth/', userLogin)
      .then((res) => {
        setUserId(res.data.user_id);
        setToken('myToken', res.data.token);
        console.log(res, token);
      })
      .catch((err) => {
        alert('Sorry, could not login. Please check your account');
        console.log(err);
      });
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
