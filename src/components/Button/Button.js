import React from 'react'

import './Button.css'

const Button = ({style, color, value, onClick}) => (
  <button style={{color, borderColor: color, ...style}} className="button" onClick={onClick}>{value}</button>
)

export default Button
