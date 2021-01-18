import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import NavList from './NavList';
import Logo from './Logo/Logo';
import NavListMobile from './NavListMobile';

const Navbar = ({ isMobile }) => {
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const [moveX, setMoveX] = useState('');
  const [moveY, setMoveY] = useState('');

  const addListener = window.addEventListener;

  const handleMouseMove = (e) => {
    setMoveX(e.nativeEvent.clientX * -0.02 + 'px');
    setMoveY(e.nativeEvent.clientY * -0.02 + 'px');
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const onMouseEnter = () => {
    window.innerWidth < 1199 ? setDropdown(false) : setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth < 1199 ? setDropdown(false) : setDropdown(false);
  };

  const handelScroll = () => {
    let viewPosition = window.scrollY;
    if (viewPosition <= 50) {
      setNavbar(true);
    } else if (viewPosition > 50) {
      // setPositionY(viewPosition * -0.01 + 'px');
      setNavbar(false);
    }
  };

  useEffect(() => {
    addListener('scroll', handelScroll);
    return () => {
      addListener('scroll', handelScroll);
    };
  });

  if (isMobile) {
    return (
      <header
        className={navbar ? 'headerContainer' : 'headerContainer activeHeader'}
      >
        <Logo navbar={navbar} />
        <nav
          className="navbar"
          // style={{ backgroundPositionY: positionY }}
        >
          <NavListMobile navbar={navbar} />
        </nav>
      </header>
    );
  }
  return (
    <header className={'headerContainer'}>
      <Logo navbar={navbar} />
      <nav
        className="navbar desktop"
        id="navbar"
        onMouseMove={handleMouseMove}
        style={{ backgroundPositionX: moveX, backgroundPositionY: moveY }}
      >
        <NavList
          dropdown={dropdown}
          Dropdown={handleDropdown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          handleMouseMove={handleMouseMove}
        />
      </nav>
    </header>
  );
};
export default Navbar;
