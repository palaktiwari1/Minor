import React from 'react'
import "./fitscore.css"
const Fitscore = (props) => {
    return (
        <div class="card__progress"><progress max="100" value={props.val}></progress>
        <p>*{props.val} is your TPC's Overall </p>
            </div>
    )
}

export default Fitscore
