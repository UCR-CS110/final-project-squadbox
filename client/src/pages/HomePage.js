import React, { useState, useEffect } from 'react';
import Navigator from '../components/Navigator';
import RoomList from '../components/RoomList';
import { PostForm } from '../forms';
import { fetchRooms } from '../helpers/api';

const HomePage = () => {
  const [rooms, setRooms] = useState([]);

  const refreshRooms = async () => {
    fetchRooms()
    .then((roomList) =>  {
      setRooms(roomList);
    });
  }

  setTimeout(refreshRooms , 10000);

  const onSubmit = async (data) => {
    console.log(data)
    fetch('http://localhost:8080/create', {
    method: 'POST',
    mode: 'cors', // this cannot be 'no-cors'
    headers: {'Content-Type': 'application/json'}, //NOT SURE ABOUT THIS PART
    body: JSON.stringify({
      name: data.name
    })});
  }

  useEffect( () => {
    refreshRooms();
  }, []);

  return (
    <>
      <Navigator />
      <div className="flex flex-col items-center mt-10">
        <div>
          <PostForm onSubmit={onSubmit}/>
        </div>
        <div className="mt-10">
          <RoomList rooms={rooms}/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
