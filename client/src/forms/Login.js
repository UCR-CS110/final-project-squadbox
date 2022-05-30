import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import {
  FormSubmit,
    TextInput,
} from '../form-components';
import { loginUser } from '../helpers/api';
const axios = require('axios');


const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();

const Login = ({ setToken }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:8080/login', data)
    .then( (res) => {
      console.log(res.data);
      console.log("reaches here")
      if (res.status === "error") {
        console.log("reaches here 1")
        // show user that error
      }
      else if (res.status === "ok") {
        console.log("reaches here 2")
        // redirect user to home page
      }
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput placeholder="Username" name="username" register={register} />
      <TextInput placeholder="Password" name="password" register={register} type="password" />
      <FormSubmit text="Sign in"/>
    </form>
  )
}

export default Login;