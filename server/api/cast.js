const router = require('express').Router()
const Axios = require('axios')
const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY

router.get('/cast/:actorId', async (req, res, next) => {
  try {
    const {data} = await Axios.get(`https://api.themoviedb.org/3/person/${req.params.actorId}/movie_credits?api_key=${MOVIE_DB_API_KEY}&language=en-US`)
    res.send(data)
    console.log('backend data>>', data)
  } catch (error) {
    next(error)
  }
})

module.exports = router
