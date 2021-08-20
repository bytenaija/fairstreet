import React from 'react'

function Button({children, className, primary, ...props}) {
  return (
    <div className={className} {...props} style={{backgroundColor: primary? '#ff5720': ''}}>
      {children}
    </div>
  )
}

export default Button
