import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Header = ({text}) => {
   return (
      <h1>{text}</h1>
   )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {

   const percentage = () => {
      if(good+neutral+bad==0) return 0
      else return good/(good+neutral+bad)*100
   }

   const average = () => {
      if(good+neutral+bad==0) return 0
      else return (good + neutral*0 + bad*(-1))/(good+neutral+bad)
   }

   return (
      <div>
         <p>good {good}</p>
         <p>neutral {neutral}</p>
         <p>bad {bad}</p>
         <p>all {good+neutral+bad}</p>
         <p>averge {average()}</p>
         <p>positive {percentage()}%</p>
      </div>
   )

}

const App = () => {
   // save clicks of each button to its own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   const handleGoodClick = () => {
      setGood(good + 1)
   }

   const handleNeutralClick = () => {
      setNeutral(neutral + 1)
   }

   const handleBadClick = () => {
      setBad(bad + 1)
   }

   return (
      <div>
         <Header text='give feedback'/>
         <Button handleClick={handleGoodClick} text='good' />
         <Button handleClick={handleNeutralClick} text='neutral' />
         <Button handleClick={handleBadClick} text='bad' />
         <Header text='statistics'/>
         <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
   )
}

createRoot(document.getElementById('root')).render(<App/>);
