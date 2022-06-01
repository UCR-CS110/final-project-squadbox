import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextInput } from '../form-components';

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email("Email must be valid").required(),
  password: yup.string().min(4, "Password must be at least 4 characters").max(20).required(),
}).required();

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data)
    fetch('http://localhost:8080/createProfile', {
    method: 'POST',
    mode: 'cors', // this cannot be 'no-cors'
    headers: {'Content-Type': 'application/json'}, //NOT SURE ABOUT THIS PART
    body: JSON.stringify({
      nickname: data.username,
      password: data.password,
      email: data.email
    })
  });

};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col">
        Login
        <TextInput label="Username" name="username" register={register} required={true} placeholder="Your username" />
        {errors.username ? errors.username.message : ''}
        <TextInput label="Email" name="email" register={register} required={true} placeholder="Your Email" />
        {errors.email ? errors.email.message : ''}
        <TextInput label="Password" name="password" register={register} required={true} placeholder="Your password" type="password"/>
        {errors.password ? errors.password.message : ''}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Signup;
