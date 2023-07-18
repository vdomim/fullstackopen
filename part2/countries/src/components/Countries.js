const Countries = ({countries}) => {
	console.log(countries.length);
	if(countries.length === 1){
		console.log('entra');
		return (
			<Country key={countries[0].name.common} name={countries[0].name.common} capital={countries[0].capital}
			population={countries[0].population} languages={countries[0].languages} flag={countries[0].flags}/>
		)
	}else if(countries.length <= 10){
		console.log('no entra');
		return (
			countries.map(country => (<div key={country.name.common}>{country.name.common}</div>))
		)
		
	}else{
		return <div>Too many matches, specify another filter</div>
	}
}

const Country = ({name, capital, population, languages, flag}) => {
	
	
	
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
		</>
	)	
}
export default Countries;