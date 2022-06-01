import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextInput } from '../form-components';

const schema = yup.object({
  name: yup.string().required(),
}).required();

const Post = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <TextInput label="Room Name" name="name" register={register} required={true} placeholder="Room name" />
        {errors.name ? errors.name.message : ''}
        <button type="submit">Create Post</button>
    </form>
  );


}

export default Post;