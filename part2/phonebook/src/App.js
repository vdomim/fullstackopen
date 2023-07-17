import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {name: newName, number: newNumber}
    if(persons.map(person => person.name).indexOf(newName) !== -1){
      alert(newName + "is already added to the Phonebook");
    }else{
      setPersons(persons.concat(nameObject))
    }
    setNewName("")
    setNewNumber("")
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