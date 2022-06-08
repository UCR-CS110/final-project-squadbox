import React from 'react'

const Submit = ({ text }) => {
  return (
    <button type="submit" className="block w-full py-2 px-3 border border-transparent rounded-md
    text-white font-medium bg-gray-700 shadow-sm hover:bg-gray-600 focus:outline-none
    focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible: ring-offset-2
    focus-visible: ring-offset-gray-50">
        {text}
    </button>
  );
}

export default Submit;
