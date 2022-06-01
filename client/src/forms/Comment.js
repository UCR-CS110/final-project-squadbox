import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextInput } from '../form-components';

const schema = yup.object({
  nickname: yup.string().required(),
  message: yup.string().required(),
  roomName: yup.string().required()
}).required();

const Comment = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
        <TextInput label="Username" name="username" register={register} required={true} placeholder={localStorage.getItem("username")} />
        {errors.username ? errors.username.message : ''}
        <TextInput label="RoomName" name="roomName" register={register} required={true} placeholder={props.roomId} />
        {errors.roomName ? errors.roomName.message : ''}
        <TextInput label="Message" name="message" register={register} required={true} placeholder="Your message"/>
        {errors.message ? errors.message.message : ''}
        <button type="submit">CREATE MESSAGE</button>
      </div>
    </form>
  );
}

export default Comment;