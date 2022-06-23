import React, { useState, useEffect } from 'react'

import { getquizApi } from '../apis/quizApi'

function App() {
  const [turnsCount, setTurnsCount] = useState(0)
  const [quizCount, setQuizCount] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    goToResults()
    getquizApi()
      .then((res) => {
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
      e.target.style.backgroundColor = 'green'
      incrementCount()
      setTimeout(() => {
        setTurnsCount(turnsCount + 1)
      }, 1000)
    } else {
      e.target.style.backgroundColor = 'red'
      // setTurnsCount(turnsCount + 1)
      setTimeout(() => {
        setTurnsCount(turnsCount + 1)
      }, 600)
    }
  }

  const game = (
    <>
      {data.map((quiz) => (
        <main key={quiz.id}>
          <h3>{quiz.question}</h3>
          {quiz.answers.sort().map((answer) => {
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
          })}
        </main>
      ))}
    </>
  )

  const gameover = (
    <>
      <h1>GAMEOVER!!</h1>
      <h1>
        You scored {quizCount}/{turnsCount}!
      </h1>
      <a href="/">Play again?</a>
    </>
  )

  return (
    <>
      <div className="app">
        <h1>Are you sure?!</h1>
        <h2>Current Score: {quizCount}</h2>
        {gameIsOver ? gameover : game}
      </div>

      <form>{}</form>
    </>
  )
}

export default App
