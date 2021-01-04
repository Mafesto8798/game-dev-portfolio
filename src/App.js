import React , {useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import {CurrentPage} from './Context/CurrentPage'

function App() {
  const [currentPage,setCurrentPage] = useState(`https://api.weatherapi.com/v1/forecast.json?key=a2bd5e76e056424b9e222148202610&q=02860&days=7`)

  return (
    <>
    <Router>
      <Nav />
      <CurrentPage.Provider value={[currentPage,setCurrentPage]}>
      <Route path="/" exact component={Home} />
      </CurrentPage.Provider>
      <Route path='/contact' component={Contact} />
    </Router>
      </>
  )
}

export default App;
