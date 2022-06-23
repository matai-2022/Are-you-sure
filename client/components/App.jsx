import React, { useState, useEffect } from 'react'

import { getquizApi, fetchAnswer } from '../apis/quizApi'

function App() {
  const [turnsCount, setTurnsCount] = useState(0)
  const [quizCount, setQuizCount] = useState(0)
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
        // console.log(console.log(turnsCount))
        console.log('turns: ', turnsCount)
        console.log('correct: ', quizCount)
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [turnsCount])

  // useEffect(() => {
  //   incrementCount()
  // console.log('correct: ', quizCount)
  // }, [turnsCount])

  function incrementCount() {
    setQuizCount(quizCount + 1)
  }

  function selectHandler(e) {
    if (e.target.value == e.target.name) {
      console.log('CORRECT!')
      incrementCount()
      setTurnsCount(turnsCount + 1)
    } else {
      console.log('ARE YOU SURE!')
      setTurnsCount(turnsCount + 1)
    }
  }

  // function answerCollector(e) {
  //   console.log(data.correctAnswer, ' this is acollector')
  //   setAnswer(data.correctAnswer)
  // }

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
              return (
                <button
                  key={answer}
                  value={answer}
                  name={quiz.correctAnswer}
                  onClick={selectHandler}
                >
                  {answer}
                </button>
              )
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
