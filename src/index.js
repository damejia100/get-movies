import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm, faPortrait, faVideo } from '@fortawesome/free-solid-svg-icons'

library.add(faFilm, faPortrait, faVideo)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
