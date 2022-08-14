import React, { useState } from 'react';
import './header.css';
import { BiMenu } from 'react-icons/bi';
import Logo from '../../images/logo.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={`header`}>
      <BiMenu
        className='header__icon header__compHide'
        onClick={() => setShowMenu(true)}
      />

      <div className='header__logo-cont'>
        <img src={Logo} alt='logo' className='header__logo' />
      </div>
      <div className={`header__menu ${showMenu && 'showMenu'}`}>
        <MdClose
          onClick={() => setShowMenu(false)}
          className='header__icon header__compHide'
        />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className='header__userCont'>
        <AiOutlineShoppingCart className='header__icon' />
        <img
          src='https://avatars.githubusercontent.com/u/84827162?v=4'
          alt='user'
          className='header__avatar'
        />
      </div>
    </div>
  );
};

export default Header;
