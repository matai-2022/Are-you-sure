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
      res.json(response.body)
      console.log(response.body)
    })
    .catch((err) => {
      res.error(err.message)
    })
})

module.exports = router
