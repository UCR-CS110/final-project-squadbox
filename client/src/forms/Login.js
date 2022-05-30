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
    axios.post('http://localhost/login', data)
    .then( (res) => {
      console.log(res);
      if (res.status === "error") {
        // show user that error
      }
      else if (res.status === "ok") {
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