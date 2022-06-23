import React, { useState, useEffect } from 'react'

import { getquizApi } from '../apis/quizApi'

function App() {
  const [count, setCount] = useState(0)

  const [question, setQuestion] = useState('')
  const [data, setData] = useState([])

  function handleClick(event) {
    console.log(event.target)
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
        <h1>Questions</h1>
        <ul>
          {data.map((quiz) => (
            <>
              <li key={quiz.id}>{quiz.question}</li>

              <li>
                {quiz.answers.map((ans) => (
                  <button key={ans} onClick={handleClick}>
                    {ans}
                  </button>
                ))}
              </li>
            </>
          ))}
        </ul>
        {/* {data.map((ans) => (
          <button key={ans.id} onClick={handleClick}>
            {ans.answers}
          </button>
        ))} */}
      </div>
    </>
  )
}

export default App
