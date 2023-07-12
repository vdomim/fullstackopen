import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(9).fill(0))

  const randomAnecdote = () => {
      return setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteAnecdote = () => {
   const nextVotes = [...votes]
   nextVotes[selected] += 1
   setVotes(nextVotes)
  }

  const maxVoted = () => {
      return votes.indexOf(Math.max(...votes))
  }

   return (
      <>
         <Header text="Anecdote of the day" />
         <div>
            {anecdotes[selected]}
         </div>
         <div>
            has {votes[selected]} votes
         </div>
         <Button handleClick={voteAnecdote} text="vote" />
         <Button handleClick={randomAnecdote} text="next anecdote" />
         <Header text="Anecdote with most votes" />
         <Maxvoted anecdotes={anecdotes[maxVoted()]} votes={votes[maxVoted()]} />
      </>
   )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Header = ({text}) => {
   return (
      <h1>{text}</h1>
   )
}

const Maxvoted = ({anecdotes, votes}) => {
   if(votes==0){
      return (
         <>
            <div>There are no anecdotes voted yet</div>
         </>
      )
   }else{
      return (
         <>
            <div>{anecdotes}</div>
            <div>has {votes}</div>
         </>
      )
   }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

createRoot(document.getElementById('root')).render(<App anecdotes={anecdotes}/>);
