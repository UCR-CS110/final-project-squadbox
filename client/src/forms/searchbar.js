import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../form-components';

const Searchbar = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:8080/searchMessage', {
      method: 'POST',
      mode: 'cors', // this cannot be 'no-cors'
      headers: {'Content-Type': 'application/json'}, //NOT SURE ABOUT THIS PART
      body: JSON.stringify({
        message: data.search,
        roomId: props.roomId
    })})
    .then(res => res.json())
    .then( (data) => props.setMessages(data));
  }

  const handleChange = (e) => {
    props.setSearch(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-row">
        <TextInput onChange={handleChange} label="search" name="search" register={register} required={true} placeholder="Search Here" />
        <button type="submit">SEARCH MESSAGE</button>
      </div>
    </form>
  );
}

export default Searchbar;