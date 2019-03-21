const initialState = {
  inputVal: ''
}
export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_INPUT':
    return {
      ...state,
      inputVal: action.payload
    }
    case 'CLEAR_INPUT':
      return {
        ...state,
        inputVal: ''
      }
    default:
      return state
  }
}