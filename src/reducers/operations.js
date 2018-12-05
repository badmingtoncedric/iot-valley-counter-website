export default function operationReducer(state = {}, action) {
  switch(action.type) {
    case 'SET_OPERATION':
      console.info('operationReducer', action.operation)
      return {...state, operation: action.operation}
    default:
      return state
  }
}
