import React from 'react'
import DeleteButton from '../components/deleteButton';
import UpvoteButton from './upvoteButton';
import DownvoteButton from './downvoteButton';
import EditButton from '../components/EditButton';

const Message = ({ message, roomId }) => {
  return (
    <div>
      {message.nickname} {message.message} {message.vote} {message.timestamp} 
      <DeleteButton message={message.message}/> <EditButton roomId={roomId} message={message.message} />
      <UpvoteButton message={message.message} />
      <DownvoteButton message={message.message}/>
    </div>
  )
}

export default Message
