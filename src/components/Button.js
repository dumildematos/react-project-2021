import React from 'react'
import PropType from 'prop-types'

const  Button = ({color, text, onClick}) => {
  return (
    <button className='btn' style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
  )
}

Button.defaultProps = {
  title: 'steelblue'
}

Button.prototype = {
  color: PropType.string,
  text: PropType.string,
  onClick: PropType.func
}

export default Button
