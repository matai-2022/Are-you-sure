import request from 'superagent'

export function getquizApi() {
  return request.get('/quiz').then((res) => {
    return res.body
  })
}
