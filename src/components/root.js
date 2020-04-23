import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import MovieInfo from './movie-info'
import Home from './home'
import styled from 'styled-components'
import ActorInfo from './actor-info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = styled.nav`
  color: #f9a824;
  left: 100px;
`

const Main = styled.div`
  background-color: #111111;
  color: #ffffff;
  font-family: Roboto;
  padding: 36px;
  text-decoration: none;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #f9a824;
`;

const Root = () => {
  return (
    <Router>
        <Nav>
          <HomeLink to='/'>
            <FontAwesomeIcon icon='video' size="2x"/>
          </HomeLink>
        </Nav>

        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cast/:actorId' component={ActorInfo} />
            <Route exact path='/:movieId' component={MovieInfo} />
          </Switch>
        </Main>
    </Router>
  )
}

export default Root
