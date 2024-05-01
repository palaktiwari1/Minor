import React from 'react'
import "./button.css"
const Button = (props) => {
  return (
    <div class="ig">
    <input required="" type={props.type} name="text" autocomplete="off" class="i" placeholder={props.title}/>
    
  </div>
  )
}

export default Button