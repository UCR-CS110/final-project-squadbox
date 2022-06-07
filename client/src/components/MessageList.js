import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from '../components/deleteButton';
import UpvoteButton from './upvoteButton';
import DownvoteButton from './downvoteButton';
import Moment from 'react-moment';
import moment from 'moment';
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
        timestamp: moment(message.timestamp).format('HH/MM MM/DD/YY'),
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
            {messages.map(message => <div>{message.nickname} {message.message} {message.vote} {message.timestamp}<UpvoteButton message={message.message}/><DownvoteButton message={message.message}/> <DeleteButton message={message.message}/></div>)}
            <br></br>
        </div>
    );
}

export default MessageList;