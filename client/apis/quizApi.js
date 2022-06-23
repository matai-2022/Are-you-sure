import request from 'superagent'

export function getquizApi() {
  return request.get('/quiz').then((res) => {
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