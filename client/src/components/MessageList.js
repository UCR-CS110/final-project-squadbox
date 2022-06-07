import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import Message from '../components/Message';

const MessageList = ({ messages, roomId }) => {
  return (
    <div >
      <h1 className="font-30">Messages</h1>
      {messages.map(message => <Message roomId={roomId} message={message}/>)}
      <br></br>
    </div>
  );
}

export default MessageList;