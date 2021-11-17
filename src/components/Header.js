import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useCookies } from 'react-cookie';

const Header = () => {
  const cookies = new Cookies();
  const [token, setToken, removeToken] = useCookies(['myToken']);

  return (
    <div className='header'>
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
        <Link to='/register' className='nav__link remove-underline'>
          <li>REGISTER</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
