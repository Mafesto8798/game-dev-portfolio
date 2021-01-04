import React,{useState, useEffect, useContext} from 'react'
import {CurrentPage} from '../Context/CurrentPage'
import Search from './Search'
import Day from './Day'
import axios from 'axios'

export default function Home() {
    const [currentPage,setCurrentPage] = useContext(CurrentPage)
    const [info,setInfo] = useState({})
    const [name,setName] = useState('')
    const [country,setCountry] = useState('')
    const [region,setRegion] = useState('')
    const [icon,setIcon] = useState('')
    const [wind,setWind] = useState('')
    const [date,setDate] = useState('')
    const [temp,setTemp] = useState()
    const [forecast,setForecast] = useState([])
    const [currentWeather,setCurrentWeather] = useState('')





    useEffect(() => {
        axios.get(currentPage).then(res => {
            setInfo(res.data)
            setCountry(res.data.location.country)
            setRegion(res.data.location.region)
            setName(res.data.location.name)
            setCurrentWeather(res.data.current.condition.text)
            setIcon(res.data.current.condition.icon)
            setTemp(res.data.current.temp_f)
            setDate(res.data.current.last_updated)
            setWind(res.data.current.gust_mph)
            setForecast(res.data.forecast.forecastday)
        })
    },[currentPage])


    return (
        <>
        <div className="current-weather-container">
                <Search />
                <div className="location-container">
                    <h2>{name}</h2>
                    <h2>{region}</h2>
                    <h2>{country}</h2>
                </div>
                <div className="current-weather">
                    <h3>Last updated: {date}</h3>
                    <h1>{currentWeather}</h1>
                    <img src={icon} alt="icon"/>
                    <h2>Avg Temp: {temp}ºF</h2>
                    <h2>Wind: {wind} mph</h2>
                </div>
        </div>

        <div className="forecast-container">
                 {forecast.map(day => (
                    <Day day={day} />
                  ))}
        </div>
        <footer>
            <h1>Weather Now inc.</h1>
            <ul>
                <li>Home</li>
                <li>About Weather Now</li>
                <li>Contact us</li>
            </ul>
        </footer>
        </>
    )
}
