import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  setInterval(function(){getrooms()}, 10000);

  const updateRooms = (rooms) => {
    setRooms([]);
    rooms.forEach( (room) => {
      // console.log(room.name)
      setRooms([...rooms, {
        name: room.name,
      }])
    })
  }

  async function getrooms(){
    //  let rooms;
      await fetch('http://localhost:8080/getRooms')
      .then(response=>response.json())
      //.then(data=>rooms=data);
      .then(updateRooms);
      // console.log(rooms);
    }


    return (
        <div >
            This is my room list
            {rooms.map(room => <div><Link to={"/room/" + room.name}>{room.name}</Link></div>)}
            <br></br>
        </div>
    );
}

var rooms;



 // const RoomListArray = rooms.map((data) => {
   // return (
     // <div>
       // <Link to="/room/:{data.id}" />
        //</div>
    //)
  //})

export default RoomList;