import classNames from 'classnames'
import React from 'react'

const Input = ({onChange, placeholder, className, inputClass, icon = null, ...props}) => {
  return (
    <div className={className} >
      {icon && <div className="input-icon">{icon}</div>}
      <input onChange={onChange} {...props} placeholder={placeholder} className={classNames(["default-input", inputClass])}
      
      />
    </div>
  )
}

export default Input
