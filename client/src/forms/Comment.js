import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput, FormSubmit } from '../form-components';
import { isLoggedIn } from '../helpers/userSession';

const Comment = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    let username = localStorage.getItem("username");
    let roomId = props.roomId;
    fetch('http://localhost:8080/createMessage', {
    method: 'POST',
    mode: 'cors', // this cannot be 'no-cors'
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      nickname: username,
      message: data.message,
      roomName: roomId,
    })
  });
};

  if (isLoggedIn()) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-ful">
        <div className="flex flex-col">
          <TextInput name="message" register={register} required={true} placeholder="Your message"/>
          <FormSubmit text="Add Comment" />
        </div>
      </form>
    );
  }
  else {
    return (
      <div>Please log in to add a message...</div>
    )
  }
}

export default Comment;