const router = require('express').Router()

router.use('/movies', require('./movies'))
router.use('/cast', require('./cast'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
