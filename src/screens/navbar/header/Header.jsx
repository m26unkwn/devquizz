/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../context";
import "./header.css";
import { Logo, Profile } from "../../../assets";

export const Header = () => {
  const {
    authState: { token },
  } = useAuth();
  return (
    <div className={`header-wrapper flex jc-between ai-center`}>
      <div className='head-logo flex ai-center jc-start flex-gap'>
        <NavLink to='/' className='flex'>
          <img src={Logo} alt='devhub_log' width='40px' height='40px' />
        </NavLink>
        <h1 className='sidebar-logo'>DevQuizz</h1>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? "sidebar-items nav-link-active " : "sidebar-items"
          }>
          <span className='nav-title'>Home</span>
        </NavLink>
      </div>

      {!token ? (
        <div className='auth-action-wrapper flex jc-between flex-gap'>
          <Link to='/login' className='btn  login-btn'>
            Login
          </Link>
          <Link to='/signup' className='btn  signup-btn'>
            Signup
          </Link>
        </div>
      ) : (
        <div className='flex ai-center'>
          <NavLink to='/profile' className='btn btn-icon'>
            <img src={Profile} alt='home_icon' />
          </NavLink>
        </div>
      )}
    </div>
  );
};
