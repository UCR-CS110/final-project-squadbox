import React from 'react'
import EditButton from './EditButton';
import DeleteButton from './deleteButton'
import {isLoggedIn} from '../helpers/userSession';

const MessageButtons = ({ message, roomId }) => {


  if (message.nickname === isLoggedIn()) {
    return (
      <>
        <EditButton roomId={roomId} message={message.message} /> <DeleteButton message={message.message}/>
      </>
    );
  }
}

export default MessageButtons