import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={ navData => navData.isActive ? s.active + ' ' + s.item : s.item }>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={navData => navData.isActive ? s.active + ' ' + s.item : s.item}>Messages</NavLink>
      </div>
      <div>
        <a href='/news'>News</a>
      </div>
      <div>
        <a href='/music'>Music</a>
      </div>
      <div>
        <a href='/setting'>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
