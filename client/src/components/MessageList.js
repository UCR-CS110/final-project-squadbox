import React, { useState, useEffect } from 'react'
import DeleteButton from '../components/deleteButton';

const MessageList = ({ messages }) => {
  return (
    <div >
      <h1 className="font-30">Messages</h1>
      {messages.map(message => <div>{message.nickname} {message.message} {message.vote} {message.timestamp} <DeleteButton message={message.message}/> </div>)}
      <br></br>
    </div>
  );
}

export default MessageList;