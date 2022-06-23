import request from 'superagent'

export function getquizApi() {
  return request.get('/quiz').then((res) => {
    console.log('This is Data from quizApi.js', res.body)
    return res.body
  })
}
