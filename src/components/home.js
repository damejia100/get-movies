import React from 'react'
import SearchBar from './search-bar'
import TopMovies from './top-movies'
import styled from 'styled-components'

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px;
`

const HeroTitle = styled.h1`
  font-size: 48px;
  text-align: center;
`

const Home = () => {
  return (
    <div>
      <HeroSection>
        <HeroTitle>Get Movies</HeroTitle>
        <SearchBar />
      </HeroSection>

      <TopMovies />
    </div>
  )
}

export default Home;
