import React, { useState, useEffect } from 'react'

const MessageList = ({ messages }) => {
  return (
    <div >
      <h1 className="font-30">Messages</h1>
      {messages.map(message => <div>{message.nickname} {message.message} {message.vote} {message.timestamp}</div>)}
      <br></br>
    </div>
  );
}

export default MessageList;