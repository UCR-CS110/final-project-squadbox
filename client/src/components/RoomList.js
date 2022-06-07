import React from 'react'
import Room from '../components/Room';

const RoomList = ({ rooms }) => {

  return (
    <div className="flex flex-col content-center">
      <h1 className="text-2xl mb-3">Rooms</h1>
      {rooms.map(room => <Room key={room.name} room={room}/>)}
      <br></br>
    </div>
  );
}

export default RoomList;