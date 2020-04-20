import React from 'react'
import SearchBar from './search-bar'
import TopMovies from './top-movies'

const Home = () => {
  return (
    <main>
        <h1>Get Movies</h1>
        <SearchBar />
        <TopMovies />
    </main>
  )
}

export default Home;
