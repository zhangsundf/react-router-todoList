import { CHANGE_FILTER } from './type'

export const changeFilter = (id) => dispatch => {
  dispatch({
    type: CHANGE_FILTER,
    payload: id
  })
} 