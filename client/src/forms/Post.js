import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextInput } from '../form-components';

const schema = yup.object({
  name: yup.string().required(),
}).required();

const Post = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = data => {
      console.log(data)
      fetch('http://localhost:8080/create', {
      method: 'POST',
      mode: 'cors', // this cannot be 'no-cors'
      headers: {'Content-Type': 'application/json'}, //NOT SURE ABOUT THIS PART
      body: JSON.stringify({
        name: data.name
      })
    });
  
  };

/*  const onSubmit = data => { just for testing the create message api
    console.log(data)
    fetch('http://localhost:8080/createMessage', {
    method: 'POST',
    mode: 'cors', // this cannot be 'no-cors'
    headers: {'Content-Type': 'application/json'}, //NOT SURE ABOUT THIS PART
    body: JSON.stringify({
      nickname: data.nickname,
      message: data.message,
      roomName: data.roomName

    })
  });

};*/

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <TextInput label="Room Name" name="name" register={register} required={true} placeholder="Room name" />
        {errors.name ? errors.name.message : ''}
        <button type="submit">Create Post</button>
    </form>
  );


}

export default Post;