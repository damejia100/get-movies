import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import MovieInfo from './movie-info'
import Home from './home'
import styled from 'styled-components'
import ActorInfo from './actor-info'

const Root = () => {
  return (
    <Router>
      {/* <main> */}

        {/* <nav>
          <Link to='/'>Home</Link>
        </nav> */}

        <div id='main-section'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cast/:actorId' component={ActorInfo} />
            <Route exact path='/:movieId' component={MovieInfo} />

          </Switch>
        </div>
      {/* </main> */}
    </Router>
  )
}

export default Root
