// import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    const navLink = <>
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to="/about"><a>About</a></NavLink>
        <NavLink to="/contact"><a>Contact Me</a></NavLink>
        <NavLink to="/skile"><a>Skile</a></NavLink>
        <NavLink to="/projects"><a>projects</a></NavLink>
    </>
};

export default NavLinks;