import React from 'react';
import Navigator from '../components/Navigator';
import RoomList from '../components/RoomList';
import { Link } from 'react-router-dom';
import { PostForm } from '../forms';

const HomePage = () => {

  return (
    <>
      <Navigator />
      <div className="flex flex-col items-center mt-10">
        <div>
          <PostForm />
        </div>
        {/* For each post / room - make an element  */}
        <RoomList/>
      </div>
    </>
  );
}

async function getrooms(){
  const rooms = await fetch('http://localhost:8080/getRooms')
  .then(response=>response.json())
  //.then(data=>rooms=data);
  .then(console.log(rooms))
 // console.log(rooms);
}

export default HomePage;
