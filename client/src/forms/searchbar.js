import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../form-components';

const Searchbar = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log("reaches here too")
    console.log(data)
    fetch('http://localhost:8080/searchMessage', {
    method: 'POST',
    mode: 'cors', // this cannot be 'no-cors'
    headers: {'Content-Type': 'application/json'}, //NOT SURE ABOUT THIS PART
    body: JSON.stringify({
      message: data.search,
      roomId: data.roomId
    })
  });

};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-row">
        <TextInput label="search" name="search" register={register} required={true} placeholder="Search Here" />
        <button type="submit">Search MESSAGE</button>
      </div>
    </form>
  );
}

export default Searchbar;