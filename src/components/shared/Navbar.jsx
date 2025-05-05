import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/bookIssue">BookIssue</NavLink>
        </div>
    );
};

export default Navbar;