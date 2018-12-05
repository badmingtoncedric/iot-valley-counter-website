export const setOperation = operation => {
  console.log('actions:setOperation', operation)
  return ({
  type: 'SET_OPERATION',
  operation: operation
})
}

export const setCounter = counter => ({
  type: 'SET_COUNTER',
  counter: counter
})
