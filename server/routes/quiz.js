const express = require('express')
const request = require('superagent')
// const db = require('../db/fruits')

const router = express.Router()

router.get('/quiz', (req, res) => {
  return request
    .get(
      'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5&difficulty=medium'
    )
    .set('accept', 'application/json')
    .then((response) => {
      const data = response.body.map((qObj) => {
        return {
          id: qObj.id,
          answers: [...qObj.incorrectAnswers, qObj.correctAnswer],
          correctAnswer: qObj.correctAnswer,
          question: qObj.question,
        }
      })
      console.log('THIS IS DATA :', data)
      res.json(data)
    })
    .catch((err) => {
      res.error(err.message)
    })
})

module.exports = router
