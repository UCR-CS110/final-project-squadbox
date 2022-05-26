import React from 'react'
import {
  Link
} from 'react-router-dom';

const Navigator = () => {

  return (
    <div className="w-full shadow-sm">

      <div>
        <span>SquadBox</span>
      </div>

      <nav className="" >
        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          <ul>
            <li><Link to="login">Sign in</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigator;
