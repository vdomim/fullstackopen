import { createRoot } from 'react-dom/client';
import App from './App'
import React from 'react'

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
]

createRoot(document.getElementById('root')).render(<React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>);