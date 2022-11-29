import React from 'react'
import './Button.css'

const Button = ({text, className, bg_color, fn}) => {
  return (
    <button 
        className={`button ${className}`}
        style={{
            background: `linear-gradient(45deg, transparent 5%, ${bg_color} 5%)`,
        }}
        onClick={fn}
    >{text}
    </button>
  )
}

export default Button