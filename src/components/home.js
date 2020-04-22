import React from 'react'
import SearchBar from './search-bar'
import TopMovies from './top-movies'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
`

const HeroTitle = styled.h1`
  font-size: 48px;
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
