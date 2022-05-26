import React from 'react'

const TextInput = ({ label, name, register, required, type, placeholder }) => {
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
          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 
          transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent
          focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
        />
      </div>
    </div>
  )
}

export default TextInput
