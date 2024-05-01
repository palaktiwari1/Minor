import React from 'react'

const Card3 = (props) => {
    return (
        <div
         class="  flex flex-col justify-center gap-2 bg-neutral-50 my-4 rounded-lg shadow p-4 " 
        >
            <div class="flex gap-2">
                <img class="bg-neutral-500 w-24 h-24 shrink-0 rounded-lg" alt="" />
                <div class="flex flex-col">
                    <span class="  font-bold text-justify ">{props.title}</span>
                    <p class="text-justify text-sm">
                        Click to login as {props.title}</p>
                </div>
            </div>
            
        </div>

    )
}

export default Card3