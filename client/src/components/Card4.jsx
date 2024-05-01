import React from 'react'
// import { BsApple } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
import { IoIosShareAlt } from "react-icons/io";
import { IoDownloadSharp } from "react-icons/io5";
import "./card4.css"
import Fitscore from './Fitscore';

const Card4 = (props) => {
    return (
        <div class="  flex flex-col justify-center gap-2 bg-neutral-50 my-8 rounded-lg shadow p-3  " >
            <div>  <div class="flex gap-2">
                <img class="bg-neutral-500 w-24 h-24 shrink-0 rounded-lg" alt="" />
                <div class="flex flex-col">
                    <span class="  font-bold text-justify text-sm text-pink-600">{props.title}</span>
                    <p className="m">
                        {props.message}</p> </div>
            </div>
                <br /><hr />
                <div className="flex-row1">
                   <div className='flex text-sm font-medium'> < Fitscore val="78"/></div> 
                    <button className="btn1">
                         Brochure
                        <IoDownloadSharp />
                    </button>
                    <button className="btn1">
                        Share
                        <IoIosShareAlt />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card4