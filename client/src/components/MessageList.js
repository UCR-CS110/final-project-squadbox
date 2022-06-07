import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from '../components/deleteButton';
import EditButton from '../components/EditButton';

const MessageList = (props) => {
  const [messages, setMessages] = useState([]);

  setTimeout(getmessages, 10000)
  const updateMessages = (messages) => {
    setMessages([]);
    messages.forEach( (message) => {
       //console.log(message.nickname)
      setMessages([...messages, {
        nickname: message.nickname,
        message: message.message,
        timestamp: message.timestamp,
        vote: message.vote,
        roomName: message.roomName
      }])
    })
  }

  async function getmessages(){
    await fetch(`http://localhost:8080/getMessages/${props.roomId}`)
    .then(response=>response.json())
    .then(updateMessages);
  }

  return (
      <div >
          This is my message list
          {messages.map(message => <div>{message.nickname} {message.message} {message.vote} {message.timestamp} <DeleteButton message={message.message}/> <EditButton message={message.message} roomId={props.roomId}/> </div>)}
          <br></br>
      </div>
  );
}

//var rooms;



 // const RoomListArray = rooms.map((data) => {
   // return (
     // <div>
       // <Link to="/room/:{data.id}" />
        //</div>
    //)
  //})

export default MessageList;