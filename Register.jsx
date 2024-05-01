import React from 'react'
import"./register.css";

const Register = () => {
  return (
    <div className='register
    '><form className="form_1">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input className="" type="text" placeholder="Firstname" required=""/>
            
        </label>

        <label>
            <input className="" type="text" placeholder="Lastname" required=""/>
           
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="Email" required=""/>
       
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="Password" required=""/>
       
    </label>
    <label>
        <input className="input" type="password" placeholder="Confirm password" required=""/>
      
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form></div>
  )
}

export default Register