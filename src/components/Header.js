import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <p>Hello World</p>
      <ul className='nav'>
        <li className='nav__link'>HOME</li>
        <li className='nav__link'>ABOUT</li>
        <li className='nav__link'>CONTACT</li>
        <li className='nav__link'>SIGN IN</li>
      </ul>
    </div>
  );
};

export default Header;
