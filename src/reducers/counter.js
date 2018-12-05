const initialState = {
  counter: 0
}

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'sum':
      console.info('counterReducer:sum', state.counter, action.counter)
      return {...state, counter: state.counter + action.counter}
    case 'sub':
      console.info('counterReducer:sub', state.counter, action.counter)
      return {...state, counter: state.counter - action.counter}
    case 'div':
      console.info('counterReducer:div', state.counter, action.counter)
      return {...state, counter: state.counter / action.counter}
    case 'mul':
      console.info('counterReducer:mul', state.counter, action.counter)
      return {...state, counter: state.counter * action.counter}
    default:
      return state
  }
}
