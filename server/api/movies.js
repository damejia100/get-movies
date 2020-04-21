const router = require('express').Router()
const Axios = require('axios')
const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY

router.get('/:movieId', async (req, res, next) => {
  try {
    const {data} = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${req.params.movieId}`)
    res.send(data)
  } catch (error) {
    next(error)
  }
})

router.get('/search/:searchQuery', async (req, res, next) => {
  try {
    const {data} = await Axios.get(`https://api.themoviedb.org/3/movie/${req.params.searchQuery}?api_key=${MOVIE_DB_API_KEY}&language=en-US`)
    console.log('searchQuery data>>', data)
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
