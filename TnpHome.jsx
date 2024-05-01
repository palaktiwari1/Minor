import React from 'react'
import Card4 from './Card4'
import Card5 from './Card5'
import "./login.css"
import "./tnphome.css"

import { SlMenu } from "react-icons/sl";
import { RiTeamFill } from "react-icons/ri";
import { MdPersonAdd } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { HiChartPie } from "react-icons/hi2";
import { TiChartBar } from "react-icons/ti";
import { MdHandshake } from "react-icons/md";

const TnpHome = () => {
    return (
        <div className='login'> <form className="form" action=""><div >
            <div className='bn' > <SlMenu />
            </div>

            <Card4 title="International Institute of Information Technology,Hyderabad" message="Institute of National Importance under Govt. Or India" />

            <div className='flex'><button className='bn' ><RiTeamFill />Recruit Team</button>
                <button  className='bn'><MdPersonAdd />Placement  Registration</button></div>
            <div className='flex'><button className='bn'><HiChartPie />Students Overview</button>
                <button className='bn'><MdEventAvailable />Scedule an Event</button></div>
            <div className='flex'><button className='bn'><TiChartBar />Placement Statics</button>
                <button className='bn'><MdHandshake />Alumni Network</button></div>

<h1 className='font-semibold text-3xl pt-4  '>News in Trend</h1>
<Card5 title="Intenship in top startups with Naukri.com NCAT" message="Laruam Backrooms[a] is a hidden area which can be accessed in Ring 3. It is named after Laruam, one of the Guardians of the Upper Palace Area, and is based on the urban legend of The Backrooms. "/>
<Card5 title="Intenship in top startups with Naukri.com NCAT" message="Laruam Backrooms[a] is a hidden area which can be accessed in Ring 3. It is named after Laruam, one of the Guardians of the Upper Palace Area, and is based on the urban legend of The Backrooms. "/>
        </div> 
         </form>

        </div >

    )
}

export default TnpHome