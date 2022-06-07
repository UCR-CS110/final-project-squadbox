import React from 'react'
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
  return (
    <div className="text-center">
      <Link to={"/room/" + room.name}>{room.name}</Link>
    </div>
  )
}

export default Room;
