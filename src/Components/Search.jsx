import React, {useState, useRef, useContext} from 'react'
import {Link} from 'react-router-dom'
import {CurrentPage} from '../Context/CurrentPage'

export default function Search() {
    const [currentPage,setCurrentPage] = useContext(CurrentPage)
    const searchTerm = useRef()

    function updateZip(){
        const newZip = searchTerm.current.value
        setCurrentPage(`https://api.weatherapi.com/v1/forecast.json?key=a2bd5e76e056424b9e222148202610&q=${newZip}&days=7`)
    }



    return (
        <div className="searchbar">
            <input ref={searchTerm} type="text" placeholder="Enter city name or zip code"/>
            <div onClick={updateZip}>Search</div>
        </div>
    )
}
