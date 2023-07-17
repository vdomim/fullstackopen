const Persons = ({persons, filter}) => {
	return (
		persons.filter(filter).map(person => (
			<Person key={person.name} name={person.name} number={person.number}/>
		))
	)	
}

const Person = ({name, number}) => {
	return (
		<div>{name} {number}</div>
	)	
}

export default Persons