import React from 'react'

export default function Hour({hour}) {

    return (
        <div className="hour">
            <p>{hour.time}</p>
            <img src={hour.condition.icon} alt="icon"/>
            <p>{hour.condition.text}</p>
            <p>{hour.chance_of_rain > 0 ? `Chance of rain: ${hour.chance_of_rain}%` : ""}</p>
        </div>
    )
}
