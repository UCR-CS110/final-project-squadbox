import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextInput, FormSubmit } from '../form-components';

const schema = yup.object({
  username: yup.string().required("Username is required!"),
  email: yup.string().email("Email must be valid").required("Email is required!"),
  password: yup.string().required("Password is required!").min(4, "Password must be at least 4 characters").max(20),
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
        <TextInput name="username" register={register} required={true} placeholder="Username" />
        {errors.username ? errors.username.message : ''}
        <TextInput name="email" register={register} required={true} placeholder="Email" />
        {errors.email ? errors.email.message : ''}
        <TextInput name="password" register={register} required={true} placeholder="Password" type="password"/>
        {errors.password ? errors.password.message : ''}
        <FormSubmit text="Submit"/>
      </div>
    </form>
  );
}

export default Signup;
