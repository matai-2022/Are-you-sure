import React, { useState, useEffect } from 'react'

import { getquizApi } from '../apis/quizApi'

function App() {
<<<<<<< HEAD
  const [count, setCount] = useState(0)
=======
  const [turnsCount, setTurnsCount] = useState(0)
  const [quizCount, setQuizCount] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(false)
>>>>>>> 64fad55a3363fdcccb3601e8a6d48f010d448c4e
  const [data, setData] = useState([])
  const [question, setQuestion] = useState(data[0].question)

<<<<<<< HEAD
  function handleClick(event) {
    console.log(event.target)

    console.log('data array: ', data[count].question)
    setCount(count + 1)
    setQuestion(data[count].question)
    console.log(count)
  }

  useEffect(() => {
    getquizApi()
      .then((res) => {
        console.log('this is front end data ', res)
=======
  useEffect(() => {

    goToResults()
    getquizApi()
      .then((res) => {
        console.log('turns: ', turnsCount)
        console.log('correct: ', quizCount)
        console.log('game over? ', gameIsOver)
>>>>>>> 64fad55a3363fdcccb3601e8a6d48f010d448c4e
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
<<<<<<< HEAD
  }, [])
=======
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


  const game = (
    <>
      {data.map((quiz) => (
        <main  key={quiz.id}>
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
      <h1>You scored {quizCount}/{turnsCount}!</h1>
      <a href="/">Play again?</a>
    </>
  )


>>>>>>> 64fad55a3363fdcccb3601e8a6d48f010d448c4e

  return (
    <>
      <div className="app">
<<<<<<< HEAD
        <h1>Questions</h1>
        <ul>
          {data.map((quiz) => (
            <>
              <li key={count}>{question}</li>

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
=======
        <h1>Are you sure?!</h1>
        {gameIsOver ? gameover : game}
>>>>>>> 64fad55a3363fdcccb3601e8a6d48f010d448c4e
      </div>
    </>
  )
}

// {data.map((quiz) => (
//   <>
//     <li key={quiz.id}>{quiz.question}</li>

//     <li>
//       {quiz.answers.map((ans) => (
//         <button key={ans} onClick={handleClick}>
//           {ans}
//         </button>
//       ))}
//     </li>
//   </>
// ))}

export default App
