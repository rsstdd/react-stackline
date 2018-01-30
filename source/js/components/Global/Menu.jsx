import React from 'react';

// Logo
import navLogo from '../../../assets/img/stackline.png';

const Menu = () => {
  return (
    <nav className='navbar Layout__header col-12'>
      <a
        href='https://www.stackline.com'
        className='navbar__logo'
      >
        <img src={ navLogo } alt='Logo' />
      </a>
    </nav>
  );
};

export default Menu;
