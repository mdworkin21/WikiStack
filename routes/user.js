const router = require('express').Router()


router.get('/', (req, res, next) => {
  res.send('test for users')
})

router.post('/', (req, res, next) => {
  res.send('test for users POST')
})

router.get('/add', (req, res, next) => {
  res.send('placeholder')
})

module.exports = router

