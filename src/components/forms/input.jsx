import React from 'react'

const Input = ({onChange, placeholder, className, inputClass, ...props}) => {
  return (
    <div className={className} >
      <input onChange={onChange} {...props} placeholder={placeholder} className="default-input"
      
      />
    </div>
  )
}

export default Input
