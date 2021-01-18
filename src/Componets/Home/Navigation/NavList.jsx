import React from 'react';
import { Link } from 'react-router-dom';
import './NavList.scss';
import Dropdown from './Dropdown';

const NavList = ({
  dropdown,
  handleDropdown,
  onMouseLeave,
  onMouseEnter,
  handleMouseMove,
}) => {
  return (
    <ul className="headerLinks ">
      <li className="navItem">
        <Link to="/aboutUs" className="navLinks">
          O'la
        </Link>
      </li>
      <li
        className="navItem"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link to="/dresses" className="navLinks" onClick={handleDropdown}>
          Suknie
          <i className="fas fa-caret-down" />
        </Link>
        {dropdown && <Dropdown handleMouseMove={handleMouseMove} />}
      </li>
      <li className="navItem">
        <Link to="/blog" className="navLinks">
          Q & A
        </Link>
      </li>
      <li className="navItem">
        <Link to="/contact" className="navLinks">
          Kontakt
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
