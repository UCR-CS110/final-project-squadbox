import React from 'react'

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0">
      {/* Background */}
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="fixed ">
        { children }
      </div>
    </div>
  )
}

export default Modal;
