import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
        <Link to='/signin' className='nav__link remove-underline'>
          <li>SIGN IN</li>
        </Link>
        <Link to='/register' className='nav__link remove-underline'>
          <li>REGISTER</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
