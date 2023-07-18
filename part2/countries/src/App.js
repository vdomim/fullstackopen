import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [newCountry, setCountry] = useState("")

  const countryChangeHandler = (event) =>{
    setCountry(event.target.value)
  }

  useEffect(() =>{
    console.log('effect')
    const promise = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    console.log(promise)
    promise.then(response => {
      console.log('promised fullfiled')
      console.log(response)
      setCountries(response.data)
      console.log(countries)
    })
  },[])

  const aux = () => {
    //event.preventDefault()
    return countries.filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()))
  }

  return (
    <>
      <div className="App">
        Find countries <input value={newCountry} onChange={countryChangeHandler}/>
      </div>
      <Countries countries={aux()}/>
    </>
  );
}

export default App;
