import { CHANGE_INPUT, CLEAR_INPUT } from './type'

export const changeInput = (val) => dispatch => {
  dispatch({
    type: CHANGE_INPUT,
    payload: val
  })
}

export const clearInput = () => dispatch => {
  dispatch({
    type: CLEAR_INPUT
  })
}