import React from 'react'

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
        Guest
      </div>
    );
  }

export default NavLinks