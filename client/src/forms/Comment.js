import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../form-components';

const Comment = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log("reaches here too")
    console.log(data)
    fetch('http://localhost:8080/createMessage', {
    method: 'POST',
    mode: 'cors', // this cannot be 'no-cors'
    headers: {'Content-Type': 'application/json'}, //NOT SURE ABOUT THIS PART
    body: JSON.stringify({
      nickname: data.nickname,
      message: data.message,
      roomName: data.roomName,
    })
  });

};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-row">
        <TextInput label="Nickname" name="nickname" register={register} required={true} placeholder={localStorage.getItem("username")} />
        <TextInput label="RoomName" name="roomName" register={register} required={true} placeholder={props.roomId} />
        <TextInput label="Message" name="message" register={register} required={true} placeholder="Your message"/>
        <button type="submit">CREATE MESSAGE</button>
      </div>
    </form>
  );
}

export default Comment;