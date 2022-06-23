import React, { useState, useEffect } from 'react'

import { getquizApi } from '../apis/quizApi'
import Header from './Header'

function App() {
  const [turnsCount, setTurnsCount] = useState(0)
  const [quizCount, setQuizCount] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    goToResults()
    getquizApi()
      .then((res) => {
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
      setTimeout(() => {
        setTurnsCount(turnsCount + 1)
      }, 1000)
    } else {
      console.log('ARE YOU SURE!')
      // setTurnsCount(turnsCount + 1)
      setTimeout(() => {
        setTurnsCount(turnsCount + 1)
      }, 600)
    }
  }

  const game = (
    <section className="game-wrapper">
      {data.map((quiz) => (
        <section className="game-position-wrapper" key={quiz.id}>
          <section className="question-wrapper">
            <h2 className="game-question">{quiz.question}</h2>
          </section>
          <section className="game-btn-wrapper">
            {quiz.answers.sort().map((answer) => {
              return (
                <button
                  className="game-btn"
                  key={answer}
                  value={answer}
                  name={quiz.correctAnswer}
                  onClick={selectHandler}
                >
                  {answer}
                </button>
              )
            })}
          </section>
        </section>
      ))}
    </section>
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
    <main className="main-wrapper">
      <>
        <Header />
        {gameIsOver ? gameover : game}
      </>

      <form>{}</form>
    </main>
  )
}

export default App
