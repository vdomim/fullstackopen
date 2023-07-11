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

   const positive = () => (good/(good+neutral+bad)*100).toString() + "%"

   const average = () => (good + neutral*0 + bad*(-1))/(good+neutral+bad)

   if(good+neutral+bad==0){
      return (
         <div>
            <p>No feedback given</p>
         </div>
      )
   }
   else{
      return (
         <table>
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>
            <StatisticsLine text="all" value={good+neutral+bad}/>
            <StatisticsLine text="average" value={average()}/>
            <StatisticsLine text="positive" value={positive()}/>
         </table>
      )
   }

}

const StatisticsLine = ({text, value}) => {
   return (
      <tr>
         <td>{text}</td><td>{value}</td>
      </tr>
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
