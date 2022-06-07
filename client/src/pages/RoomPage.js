import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navigator from '../components/Navigator';
import RoomList from '../components/RoomList';
import MessageList from '../components/MessageList';
import Searchbar from '../forms/searchbar';
import { CommentForm } from '../forms';
import { fetchMessages } from '../helpers/api';

const RoomPage = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  const getMessages = async () => {
    return await fetchMessages(roomId);
  }

  const refreshMessages = async () => {
    fetchMessages(roomId)
    .then(fetchedMessages => setAllMessages(fetchedMessages));
  }

  setTimeout(refreshMessages , 10000);

  useEffect( () => {
    const initialFetch = async () => {
      let newMessages = await getMessages();
      setAllMessages(newMessages);
      setMessages(newMessages);
    }
    initialFetch();
  }, []);

  useEffect( () => {
    if (search !== "") {
      let filteredMessages = allMessages.filter((msg) => {
        return msg.message.indexOf(search) !== -1;
      });
      setMessages(filteredMessages);
    }
    else {
      setMessages(allMessages);
    }
  }, [search]);

  let { roomId } = useParams();

  return roomId ? (
    <div>
      <Navigator />
      Room #: {roomId}
      <div>
        <Searchbar setSearch={setSearch}/>
        <CommentForm roomId={roomId}/>
        <MessageList messages={messages} roomId={roomId}/>
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