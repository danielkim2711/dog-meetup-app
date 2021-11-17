import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

const Header = ({ username }) => {
  const cookies = new Cookies();
  const [token, setToken, removeToken] = useCookies(['myToken']);

  return (
    <div className='header'>
      {console.log(username)}
      <Link to='/' className='header__title remove-underline'>
        <p>Meetcha Dogs</p>
      </Link>
      <ul className='nav'>
        <Link to='/' className='nav__link remove-underline'>
          <li>HOME</li>
        </Link>
        <li className='nav__link'>ABOUT</li>
        <li className='nav__link'>CONTACT</li>
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
              <Link to='/' className='remove-underline'>
                <li>Profile</li>
              </Link>
              <Link to='/' className='remove-underline'>
                <li>My Dogs</li>
              </Link>
              <Link to='/' className='remove-underline'>
                <li>Activities</li>
              </Link>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
