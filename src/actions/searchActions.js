import {SEARCH_MOVIES} from './types'

export const searchMovie = text => dispatch => {

    dispatch({
type: SEARCH_MOVIE,
payload: text

    })


}


