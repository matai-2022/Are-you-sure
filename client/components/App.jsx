import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getquizApi, fetchAnswer } from '../apis/quizApi'

function App() {
  const [turnsCount, setTurnsCount] = useState(0)
  const [quizCount, setQuizCount] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // const apiData = getquizApi()
    // console.log(apiData)
    goToResults()
    getquizApi()
      .then((res) => {
        // console.log(console.log(turnsCount))
        console.log('turns: ', turnsCount)
        console.log('correct: ', quizCount)
        console.log('game over? ', gameIsOver)

        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [turnsCount])

  function incrementCount() {
    setQuizCount(quizCount + 1)
  }

  function goToResults() {
    if (turnsCount == 5) {
      setGameIsOver(true)
    } else {
      return
    }
  }

  function selectHandler(e) {
    if (e.target.value == e.target.name) {
      console.log('CORRECT!')
      console.log('game over? ', gameIsOver)
      incrementCount()
      setTimeout(()=>{
        setTurnsCount(turnsCount + 1)
      },1000)
    } else {
      console.log('ARE YOU SURE!')
      // setTurnsCount(turnsCount + 1)
      setTimeout(()=>{
        setTurnsCount(turnsCount + 1)
      },600)
    }
  }

  // function resetHandler() {
  //   navigate('/')
  // }

  const game = (
    <>
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
    </>
  )

  const gameover = (
    <>
      <h1>GAMEOVER!!</h1>
      <h1>You scored {quizCount}/{turnsCount}!</h1>
      {/* <button onClick={resetHandler}>
        Play again?
      </button> */}
      <a href="/">Play again?</a>
    </>
  )

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {gameIsOver ? gameover : game}
      </div>

      <form>{}</form>
    </>
  )
}

export default App
