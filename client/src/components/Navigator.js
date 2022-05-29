import React from 'react'
import {
  Link
} from 'react-router-dom';
import NavLinks from './NavLinks';

const Navigator = () => {
  let isLoggedIn = false;

  return (
    <div className="w-full shadow-sm flex justify-between items-center p-4 h-12">

      <div>
        <span><Link to="/">SquadBox</Link></span>
      </div>

      <div>
        <NavLinks isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

export default Navigator;