import React from 'react'
import { FormSubmit } from '../form-components';

const Searchbar = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    props.setSearch(e.target.value);
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-row justify-center m-2">
        <input type="text" onChange={handleChange} placeholder="Search Messages..." 
          className=" max-w-md block w-full text-gray-900 ring-gray-900 ring-opacity-5 
          placeholder-gray-400 appearance-none bg-white rounded-md px-3 py-2 border border-transparent
          shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
        />
      </div>
    </form>
  );
}

export default Searchbar;