import React from 'react'
import Room from '../components/Room';

const RoomList = ({ rooms }) => {

  return (
    <div >
      This is my room list
      {rooms.map(room => <Room key={room.name} room={room}/>)}
      <br></br>
    </div>
  );
}

export default RoomList;