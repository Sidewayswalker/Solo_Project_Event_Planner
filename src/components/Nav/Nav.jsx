import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Event Planner</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLinkLoginRegister" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLinkHome" to="/user">
              Home
            </Link>

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            <LogOutButton className="navLinkLogOut" />
          </>
        )}

        {/* {user.id && (
          // If there's no user, show login/registration links
          <Link className="navLinkFuture" to="/future">
            Future Upgrades
          </Link>
        )} */}

        <Link className="navLinkAbout" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
