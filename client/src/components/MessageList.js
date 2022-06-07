import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Searchbar from '../forms/searchbar';

const MessageList = (props) => {
  const [allMessages, setAllMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  setInterval(function(){getmessages()}, 10000);

  const updateMessages = (messages) => {
    // console.log(messages);
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

  useEffect(() => {
    if (search) {

    }
    else {
      setMessages[allMessages];
    }
  }, [search]);

  async function getmessages(){
    await fetch(`http://localhost:8080/getMessages/${props.roomId}`)
    .then(response=>response.json())
    .then( (data) => { setAllMessages(data) });
    }


    return (
        <div >
            <Searchbar roomId={props.roomId} setMessages={setMessages} setSearch={setSearch}/>
            This is my message list
            {messages.map(message => <div>{message.nickname} {message.message} {message.vote} {message.timestamp}</div>)}
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