import React from 'react'
import {
  Link
} from 'react-router-dom';

const Navigator = () => {

  const divStyle = {
    width: "100%",
    minHeight: "50px",
    padding: "5px",
  }
  return (
    <div>
      <nav className="" style={ divStyle }>
        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          <ul>
            <li><Link to="login">Login</Link></li>
            <li><Link to="signup">Signup</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigator;
