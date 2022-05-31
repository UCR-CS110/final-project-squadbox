import React from 'react'
import { useParams } from 'react-router-dom';
import Navigator from '../components/Navigator';
import { CommentForm } from '../forms';

const RoomPage = () => {
  let { roomId } = useParams();
  let room = true;
  return room ? (
    <div>
      <Navigator />
      Room #: {roomId}
      <div>
        <CommentForm />
      </div>
    </div>
  ) : (
    <div> 
      <Navigator />
      Loading... 
    </div>
  );
}

export default RoomPage;