const router = require('express').Router()
const Axios = require('axios')
const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY

router.get('/:movieId', async (req, res, next) => {
  try {
    const {data} = await Axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}?api_key=${MOVIE_DB_API_KEY}&language=en-US`)
    console.log('data in server>>', data)
    res.send(data)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const {data} = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_API_KEY}&language=en-US`)
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
