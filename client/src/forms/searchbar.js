import React from 'react'

const Searchbar = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    props.setSearch(e.target.value);
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-row">
        <input type="text" onChange={handleChange} placeholder="Search..." />
        <button type="submit">SEARCH MESSAGE</button>
      </div>
    </form>
  );
}

export default Searchbar;