import React, {useState} from 'react'
import Hour from './Hour'
export default function Day({day}) {
    const [viewHourly,setViewHourly] = useState(false)

    return (
        <>
        <div className="day-card">
                <h1>{day.date}</h1>
                <h2>{day.day.condition.text}</h2>
                <img src={day.day.condition.icon} alt="icon"/>
                <div className="view-hours" onClick={() => setViewHourly(!viewHourly)}>See hourly forecast</div>
        </div>
        <div className={viewHourly ? "hours" : "no-hours"}>
                {day.hour.map(hour => (
                    <Hour hour={hour} />
                ))}
        </div>
        </>
    )
}
