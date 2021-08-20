import React from 'react'

 const SlimCard = ({children, ...props}) => {
  return (
    <div className="slim-card" {...props}>
      {children}
    </div>
  )
}

export default SlimCard