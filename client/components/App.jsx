import React, { useState, useEffect } from 'react'

import { getquizApi } from '../apis/quizApi'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [question, setQuestion] = useState(data[0].question)

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
