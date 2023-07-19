import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [newCountry, setCountry] = useState("")
  const apiid = process.env.REACT_APP_API_KEY
  const countryChangeHandler = (event) =>{
    setCountry(event.target.value)
  }

  useEffect(() =>{
    const promise = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    promise.then(response => {
      setCountries(response.data)
    })
  },[])

  const aux = () => {
    //event.preventDefault()
    return countries.filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()))
  }

  const handleClick = (event) => {
    setCountry(event.target.value)
  }

  return (
    <>
      <div className="App">
        Find countries <input value={newCountry} onChange={countryChangeHandler}/>
      </div>
      <Countries countries={aux()} handleClick={handleClick} apiid={apiid}/>
    </>
  );
}

export default App;
