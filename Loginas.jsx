import React from 'react'
import './loginas.css'
import Card3 from './Card3'

const Loginas = () => {
    return (
        <div className='loginas'><form className="form" action="">
            <h1 className="title">Login as </h1>
            <p className="m">Select 'who you are' to get your personalized access within the portel.</p>
            <div >
                <Card3 title="Training & Placement Cells(TPCs)" />
                <Card3 title="Student" />
                <Card3 title="Company & Organization" />
                <button className="button-submit">Next</button>
            </div>


        </form>

        </div>
    )
}

export default Loginas