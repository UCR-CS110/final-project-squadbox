import React from 'react'
import { Link } from 'react-router-dom';

const NavLinks = (props) => {

  if (props.isLoggedIn) {
    return (<UserLinks />);
  }
  else {
    return (<GuestLinks />);
  }
}

const UserLinks = () => {

    return (
      <div>
        User
      </div>
    );
  }
  
  const GuestLinks = () => {
  
    return (
      <div>
        <Link to="/login">Sign In</Link>
        <Link to="/signup" className="pl-2">Sign Up</Link>
      </div>
    );
  }

export default NavLinks