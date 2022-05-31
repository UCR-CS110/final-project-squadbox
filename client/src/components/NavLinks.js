import React from 'react'
import { Link } from 'react-router-dom';

const NavLinks = () => {

  let name = localStorage.getItem("username");

  if (name !== null) {
    return (<UserLinks name={name}/>);
  }
  else {
    return (<GuestLinks />);
  }
}

const UserLinks = ({ name }) => {

    return (
      <div>
        <b>{name}</b>
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