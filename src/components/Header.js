import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

const Header = ({ username }) => {
  const cookies = new Cookies();
  const [token, setToken, removeToken] = useCookies(['myToken']);

  return (
    <div className='header'>
      <Link to='/' className='remove-underline'>
        <h1 className='header__title'>Meetcha Dogs</h1>
      </Link>
      <ul className='nav'>
        <Link to='/' className='nav__link remove-underline'>
          <li>HOME</li>
        </Link>
        {cookies.get('myToken') === undefined ? (
          <Link to='/signin' className='nav__link remove-underline'>
            <li>SIGN IN</li>
          </Link>
        ) : (
          <Link
            to='/'
            className='nav__link remove-underline'
            onClick={() => removeToken(['myToken'])}
          >
            <li>LOG OUT</li>
          </Link>
        )}
        {cookies.get('myToken') === undefined ? (
          <Link to='/register' className='nav__link remove-underline'>
            <li>REGISTER</li>
          </Link>
        ) : (
          <div className='dropdown'>
            <button className='dropbtn'>{username}</button>
            <div className='dropdown-content'>
              <Link to='/profile' className='remove-underline'>
                <li>Profile</li>
              </Link>
              <Link to='/dogs' className='remove-underline'>
                <li>My Dogs</li>
              </Link>
              <Link to='/activities' className='remove-underline'>
                <li>My Activities</li>
              </Link>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
