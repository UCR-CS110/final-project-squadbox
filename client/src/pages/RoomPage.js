import React from 'react'
import { useParams } from 'react-router-dom';
import Navigator from '../components/Navigator';
import RoomList from '../components/RoomList';
import MessageList from '../components/MessageList';
import { CommentForm } from '../forms';

const RoomPage = () => {
  let { roomId } = useParams();
  let room = true;
  return room ? (
    <div>
      <Navigator />
      Room #: {roomId}
      <div>
        <CommentForm roomId={roomId}/>
        <MessageList/>
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