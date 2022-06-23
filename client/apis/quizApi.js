import request from 'superagent'

export function getquizApi() {
  return request.get('/quiz').then((res) => {
    console.log('This is Data from quizApi.js', res.body)
    return res.body
  })
}

// export function fetchAnswer() {
//   return request
//   .get('/quiz')
//   .then((res) => {
//     console.log('This correct answer from quizApi.js', res.correctAnswer)
//     return res.correctAnswer
//   })
// }