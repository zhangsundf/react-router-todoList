import * as type from '../action/type'
const initialState = {
  list: [{
      name: 'learn english', status: false
    },{
      name: 'Learn guitar', status: false
    }, {
      name: 'weight less than 100', status: false
    }, {
      name: 'have 100,000 deposit', status: false
    }]
}
export default (state = initialState, action) => {
  switch(action.type) {
    case type.ADD_TASK:
      const hasSameName = state.list.filter((item) => item.name === action.payload.trim())
      if (!action.payload.trim().length || hasSameName.length) return state
      return Object.assign({}, state, {list: [...state.list, {name: action.payload.trim(), status: false}]})
    case type.COMPLETE_TASK:
      const completeList = state.list.map((todo) => {
        if(todo.name === action.payload) {
          return Object.assign({}, todo, {status: !todo.status})
        }
        return todo
      })
      return {
        ...state,
        list: completeList
      }
    case type.DELETE_TASK:
      const deleteList = state.list.filter((todo) => {
        return todo.name !== action.payload
      })
      return {
        ...state,
        list: deleteList
      }
    case type.FETCH_TASK:
      return state
    default:
      return state
  }
}