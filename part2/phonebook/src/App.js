import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    personService.getAll()
    .then(initialPersons => {
      console.log('promised fullfiled')
      setPersons(initialPersons)
    })
  },[])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {name: newName, number: newNumber}
    if(persons.map(person => person.name).indexOf(newName) !== -1){
      alert(newName + "is already added to the Phonebook");
    }else{

      personService.create(nameObject).then(newPerson => {
        console.log('person created')
        setPersons(persons.concat(newPerson))
        setNewName("")
        setNewNumber("")
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  } 

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filterFunction = (person) => {
    return person.name.toLowerCase().includes(newFilter.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm submitFunction={addName} name={newName} handleName={handleNameChange}
      number={newNumber} handleNumber={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filterFunction}/>
    </div>
  )
}

export default App