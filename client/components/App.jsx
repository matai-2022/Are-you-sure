import React, { useState } from 'react'
import { useEffect } from 'react'

import { getquizApi } from '../apis/quizApi'

function App() {
  const [count, setCount] = useState(0)

  const [question, setQuestion] = useState('')
  const [data, setData] = useState([])

  function handleClick(event) {
    event.target
  }

  useEffect(() => {
    // const apiData = getquizApi()
    // console.log(apiData)
    getquizApi()
    .then((res) => {
      console.log('this is front end data ', res)
      setData(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }, [])

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {data.map((quiz) => (
            <li key={quiz.id}>{quiz.question}</li>
          ))}
        </ul>
      </div>

      <form>{}</form>
    </>
  )
}

export default App
