import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import MovieInfo from './movie-info'
import Home from './home'
import styled from 'styled-components'
import ActorInfo from './actor-info'

const Main = styled.div`
  background-color: #111111;
  color: #ffffff;
  font-family: Roboto;
  padding: 48px;
  text-decoration: none;
`

const Root = () => {
  return (
    <Router>
      {/* <main> */}

        {/* <nav>
          <Link to='/'>Home</Link>
        </nav> */}

        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cast/:actorId' component={ActorInfo} />
            <Route exact path='/:movieId' component={MovieInfo} />

          </Switch>
        </Main>
      {/* </main> */}
    </Router>
  )
}

export default Root
