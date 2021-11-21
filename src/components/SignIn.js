import React, { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = ({
  loadedLoggedInUser,
  setloadedLoggedInUser,
  setLoadedProfile,
}) => {
  const history = useHistory();
  const [token, setToken] = useCookies(['myToken']);

  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    fetchUserProfile();
    token['myToken'] && history.replace('/');
  }, [token]);

  const fetchUserProfile = () => {
    axios
      .get(`/api/profiles/${loadedLoggedInUser.user_id}`, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => {
        setLoadedProfile(res.data);
        console.log('Fetched Profile', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userLogin = {
      username: enteredUserName,
      password: enteredPassword,
    };

    await axios
      .post('/auth/', userLogin)
      .then((res) => {
        setloadedLoggedInUser(res.data);
        setToken('myToken', res.data.token);
        console.log(res, token);
      })
      .catch((err) => {
        alert('Sorry, could not login. Please check your account');
        console.log(err);
      });
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
        <h4>
          Forgot password? Click{' '}
          <Link
            to='/signin'
            onClick={() => alert('Take a deep breath and think again!')}
          >
            here
          </Link>
        </h4>
        <div className='actions'>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
