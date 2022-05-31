import React from 'react'
import { Link } from 'react-router-dom';

const RoomList = () => {
    //getrooms();
    setInterval(function(){getrooms()}, 1000);
    return (
        <div >
            This is my room list
        </div>
    );
}

var rooms;

async function getrooms(){
  //  let rooms;
    await fetch('http://localhost:8080/getRooms')
    .then(response=>response.json())
    //.then(data=>rooms=data);
    .then(data => rooms =data)
    console.log(rooms);
  }

 // const RoomListArray = rooms.map((data) => {
   // return (
     // <div>
       // <Link to="/room/:{data.id}" />
        //</div>
    //)
  //})

export default RoomList;