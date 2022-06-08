import React from 'react'
import DeleteButton from '../components/deleteButton';
import UpvoteButton from './upvoteButton';
import DownvoteButton from './downvoteButton';
import EditButton from '../components/EditButton';
import Moment from 'react-moment';

const Message = ({ message, roomId }) => {

  return (
    <div className="border border-black max-w-3xl flex flex-row justify-between m-3 p-1">
      <div>
        <div className="flex flex-row">
          <div className="font-bold mr-2">{message.nickname}</div>
          <Moment date={message.timestamp} format="MMM Do h:m"/>
        </div>
        <div>
          {message.message}
        </div>
        <div>
          <EditButton roomId={roomId} message={message.message} /> <DeleteButton message={message.message}/>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center mr-3 ml-3">
        <UpvoteButton message={message.message} />
        {message.vote}
        <DownvoteButton message={message.message}/>
      </div>
    </div>
  )
}

export default Message
