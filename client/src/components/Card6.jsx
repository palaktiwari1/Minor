import React from 'react'
import"./card6.css"

const Card6 = (props) => {
  return (
    <div class="  flex flex-col justify-center gap-2 bg-neutral-100 my-8 rounded-lg shadow p-3  " >
            <div>  <div class="flex gap-0">
            <img src={props.src} className=' w-24 object-center object-contain ' alt="" />
                <div class="flex flex-col">
                    <span class="  font-bold text-justify text-2xl text-pink-600">{props.title}</span>
                    <p className="m">
                        {props.message}</p> </div>
            </div>
                <br /><hr /><div className='flex justify-between w-full p-4 '>
          <div className='flex gap-2'>

            <div className="px-2 p rounded-2xl border-p border text-p text-sm'"> UX Design</div>
            <div className='px-2 p rounded-2xl border-p border text-p text-sm'> APM</div>
            <div className='px-2 p rounded-2xl border-p border text-p text-sm'> SWE-II</div>
            <div className='px-2 p rounded-2xl border-p border text-p text-sm'> ML-Eng</div>
           
          </div>
          <div>
           <button class="accept">
            Approch
        </button>
          </div>
        </div>
      </div></div>
  )
}

export default Card6