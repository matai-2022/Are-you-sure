import React, { useState } from 'react'

import { getquizApi } from '../apis/quizApi'

function App() {
  const [count, setCount] = useState(0)

  const [question, setQuestion] = useState('')

  function handleClick(event) {
    event.target
  }

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>

      <form>{}</form>
    </>
  )
}

export default App
