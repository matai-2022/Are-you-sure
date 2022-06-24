import React, { useState, useEffect } from 'react'

import { getquizApi } from '../apis/quizApi'


import Timer from './Timer'

import Header from './Header'

function App() {
  const [turnsCount, setTurnsCount] = useState(0)
  const [quizCount, setQuizCount] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(false)
  const [data, setData] = useState([])
  const [timeOut, setTimeOut] = useState(false)

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

  function outOfTime() {
    console.log(timeOut)
    if (timeOut) {
      setTurnsCount(turnsCount + 1)
      setTimeOut(false)
    }

    if (turnsCount == 5) {
      setTurnsCount(turnsCount)
    }

  }
  // outOfTime()

  function selectHandler(e) {
    if (e.target.value == e.target.name) {
      e.target.style.backgroundColor = 'green'

      incrementCount()
      setTimeout(() => {
        setTurnsCount(turnsCount + 1)
      }, 1000)
    } else {
      e.target.style.backgroundColor = 'red'


      //highlight correct answer
      //data.correctAnswer.style.backgroundColor = 'green'

      // setTurnsCount(turnsCount + 1)
      setTimeout(() => {
        setTurnsCount(turnsCount + 1)
      }, 600)
    }
  }

  const game = (
    <>
      {data.map((quiz) => (


        <section className="game-position-wrapper" key={quiz.id}>
          <div className="question-wrapper">
            <h2 className="game-question">
              Question {turnsCount + 1} out of 5
            </h2>
            <h2 className="game-question">{quiz.question}</h2>
            <h3 className="game-question">Current Score: {quizCount}</h3>
          </div>
          <div className="game-btn-wrapper">
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
          </div>
        </section>
      ))}
    </section>

  )

  const gameover = (
    <>
      <div className="final-result">
        <h1>GAMEOVER!!</h1>
        <h1>
          You scored {quizCount}/{turnsCount}!
        </h1>
        <button>
          <a href="/">Play again?</a>
        </button>
      </div>
    </>
  )


  //  SAIA WAS HERE
  return (
    <main className="main-wrapper">
      <>
        <Header />


        {gameIsOver ? gameover : game}
      </div>

      <form>{}</form>
    </>
  )
}

export default App
