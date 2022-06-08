import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import Message from '../components/Message';

const MessageList = ({ messages, roomId }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {messages.map(message => <Message key={message._id} roomId={roomId} message={message}/>)}
      <br></br>
    </div>
  );
}

export default MessageList;