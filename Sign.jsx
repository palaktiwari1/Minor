import React from 'react'
import Botton from './Button'
import "./login.css"
import"./sign.css"
import { BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const Sign = () => {
    return (
        <div className='sign'><div><form className="form1" action="">
            <h1 className="title">Enter your Details</h1>
            <p className="m">Fill out your registered email id and password to acces your personalized</p>


            <Botton title="Enter your Email" type="email"/>
            <Botton title="Enter your Password" type="password" />
             <div className="flex-row">
                <div>
                    <input type="checkbox" />
                    <label> Remember me </label>
                </div>
                <span className="span">Forgot password?</span>
            </div>
            <button className="button-submit">Next</button>
            <p >doesn't have an account?<span className="span">Click to create one</span></p>
            <hr />

            <div>
                <button className="btn google">
                    <FcGoogle />
                    Login with Google

                </button><button className="btn linkedIn">
                    <BsLinkedin />
                    Login with LinkedIn

                </button></div>
        </form></div>

        </div>


    )
}

export default Sign