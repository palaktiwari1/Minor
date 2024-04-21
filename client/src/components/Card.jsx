import React from 'react'

const Card = (props) => {
  return (
    <div className=' m-auto flex gap-4 rounded-lg w-1/2 h-fit p-2 bg-gray-300 m-4'>
        
            <img src={props.src} className='h-64 w-64 object-center object-contain ' alt="" />
       
        <div className='flex flex-col gap-2 items-start'>
            <h2 className='font-bold text-[25px]'>{props.title}</h2>
            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione dolore ipsam tempora. Quidem tempora, mollitia veritatis consequuntur repellat deserunt voluptatibus facilis blanditiis. Repudiandae et nostrum nam! Pariatur, sed optio.</p>
            <div className='flex justify-between w-full '>
              <div className='flex gap-1'>

                <div className='p-1 rounded-md border-p border text-p'> #Tushar</div>
                <div className='p-1 rounded-md border-p border text-p'> #Tushar</div>
                <div className='p-1 rounded-md border-p border text-p'> #Tushar</div>
              </div>
              <div>
              <div className='p-1 rounded-md bg-p px-2 text-white'>Approach</div>
              </div>
            </div>
        </div>
      
        
    </div>
  )
}

export default Card