import React, { useState, useEffect } from 'react'
// import { set } from '../../server/server'

import { getquizApi } from '../apis/quizApi'

function App() {
  const [count, setCount] = useState(0)

  const [question, setQuestion] = useState('')
  const [data, setData] = useState([])
  const [answer, setAnswer] = useState('')

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
      .finally(() => {
        console.log(answer, ' finally')
        // setAnswer(res.correctAnswer)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function selectHandler(e) {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {/* <ul> */}
          {data.map((quiz) => (
            <>
              <h3 key={quiz.id}>{quiz.question}</h3>
              {quiz.answers.sort().map((answer) => {
                // setAnswer(answer)
                return <button key={answer} value={answer} onClick={selectHandler}>
                  {answer}
                </button>
                // return <p key={answer}>- {answer}</p>
              })}
              <p>(correct answer: {quiz.correctAnswer})</p>
            </>
          ))}
        {/* </ul> */}
      </div>

      <form>{}</form>
    </>
  )
}

export default App
