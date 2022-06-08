import React from 'react'
import UpvoteButton from './upvoteButton';
import DownvoteButton from './downvoteButton';
import Moment from 'react-moment';
import MessageButtons from './MessageButtons';

const Message = ({ message, roomId }) => {

  return (
    <div className="border border-black max-w-3xl flex flex-row justify-between m-3 p-1 w-full">
      <div>
        <div className="flex flex-row">
          <div className="font-bold mr-2">{message.nickname}</div>
          <Moment date={message.timestamp} format="MMM Do h:m"/>
        </div>
        <div>
          {message.message}
        </div>
        <div>
          <MessageButtons roomId={roomId} message={message} />
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
