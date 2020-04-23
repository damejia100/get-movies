import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm, faPortrait } from '@fortawesome/free-solid-svg-icons'

library.add(faFilm, faPortrait)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
