import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navigator from '../components/Navigator';
import RoomList from '../components/RoomList';
import MessageList from '../components/MessageList';
import Searchbar from '../forms/searchbar';
import { CommentForm } from '../forms';
import { fetchMessages } from '../helpers/api';

const RoomPage = () => {
  const [messages, setMessages] = useState([]);

  const refreshMessages = async () => {
    fetchMessages(roomId)
    .then(fetchedMessages => setMessages(fetchedMessages));
  }

  setTimeout(refreshMessages , 10000);

  useEffect( () => {
    refreshMessages();
  }, []);

  let { roomId } = useParams();

  return roomId ? (
    <div>
      <Navigator />
      Room #: {roomId}
      <div>
        {/* <Searchbar roomId={roomId}/> */}
        <CommentForm roomId={roomId}/>
        <MessageList messages={messages}/>
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