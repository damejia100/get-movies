import axios from 'axios';

//ACTION TYPES
const GOT_TOP_MOVIES = 'GOT_TOP_MOVIES'
const GOT_SINGLE_MOVIE = 'GOT_SINGLE_MOVIE'
const GOT_CAST_LIST = 'GOT_CAST_LIST'
const GOT_SINGLE_ACTOR = 'GOT_SINGLE_ACTOR'

//ACTION CREATORS
const gotTopMovies = (topMovies) => ({
  type: GOT_TOP_MOVIES,
  topMovies
})

const gotSingleMovies = ({
  type: GOT_SINGLE_MOVIE,
  movie
})

const gotCastList = ({
  type: GOT_CAST_LIST,
  cast
})

const gotSingleActor = ({
  type: GOT_SINGLE_ACTOR,
   actor
})

//THUNK CREATORS
export const gotTopMovies = () => async (dispatch) => {
  const { data } = await axios.get('/api/movies')
  dispatch(gotTopMovies(topMovies));
}


//REDUCER
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_TOP_MOVIES:
      return {...state, topMovies: action.topMovies}
  }
}

export default rootReducer
