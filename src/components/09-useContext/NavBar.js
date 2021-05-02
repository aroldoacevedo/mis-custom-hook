import React from 'react'

import {
    Link, NavLink
  } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        {/*<Link to="/" className="nav-link active" aria-current="page"> Home </Link>
                        <Link to="/about" className="nav-link"> About </Link>
                        <Link to="/login" className="nav-link"> Login </Link>*/}

                        <NavLink exact activeClassName="active" to="/" className="nav-link" aria-current="page"> Home </NavLink>
                        <NavLink exact activeClassName="active" to="/about" className="nav-link"> About </NavLink>
                        <NavLink exact activeClassName="active" to="/login" className="nav-link"> Login </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}