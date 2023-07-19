import axios from 'axios'
import React, { useState, useEffect  } from 'react'

const Countries = ({countries, handleClick, apiid}) => {

	if(countries.length === 1){
		return (
			<Country key={countries[0].name.common} name={countries[0].name.common} capital={countries[0].capital}
			population={countries[0].population} languages={countries[0].languages} flag={countries[0].flags} apiid={apiid}/>
		)
	}else if(countries.length <= 10){
		return (
			countries.map(country => {
				return (
					<div key={country.name.common}>
						{country.name.common}<button value={country.name.common} onClick={handleClick}>show</button>
					</div>
				)		
			})
		)
		
	}else{
		return <div>Too many matches, specify another filter</div>
	}
}


const Country = ({name, capital, population, languages, flag, apiid}) => {
	const [capitalWeather, setCapitalweather] = useState({})
	const url = "http://api.weatherstack.com/current?access_key="+apiid+"&query="+capital

	useEffect(() =>{
	    const promise = axios.get(url)
	    promise.then(response => {
	    	console.log("entra");
	      console.log(response.data)
	      setCapitalweather(response.data)
	    })
	  },[])

	return (
		<>
			<h1>{name}</h1>
			<div>Capital {capital}</div>
			<div>Population {population}</div>
			<h2>Languages</h2>
			<ul>
			{
				Object.getOwnPropertyNames(languages).map(langVal => {
					return <li key={langVal}>{languages[langVal]}</li>
				})
			}
			</ul>
			<img src={flag.png} alt={flag.alt}/>
			<h2>Weather in {capital}</h2>
			<h3>Temperature: {capitalWeather.current.temperature}</h3>
			<img src={capitalWeather.current.weather_icons}/>
			<h3>Wind: {capitalWeather.current.wind_speed} mph direction {capitalWeather.current.wind_dir}</h3>
		</>
	)	
}

export default Countries;