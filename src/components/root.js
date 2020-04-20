import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Home from './home'
import MovieInfo from './movie-info'

const Root = () => {
  return (
    <Router>
      <div id='container'>
        <nav>
          <Link to='/'>Home</Link>
        </nav>

        <div id='main-section'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:movieId' component={MovieInfo} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Root
