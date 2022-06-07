import React from 'react'

const TextInput = ({ label, name, register, required, type, placeholder, onChange }) => {
  return (
    <div className="mt-3">
      <label>{label}</label>
      <div className="mt-1">
        <input
          {...register(name, { required })}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="block w-full text-gray-900 ring-gray-900 ring-opacity-5 
          placeholder-gray-400 appearance-none bg-white rounded-md px-3 py-2 border border-transparent
          shadow ring-1 sm:text-sm mb-4 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
        />
      </div>
    </div>
  )
}

export default TextInput;