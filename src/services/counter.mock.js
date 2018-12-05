export const getCounter = async () => await 0

export const postCounter = async (op, inputValue) => {
  const originalValue = 0
  switch(op) {
    case 'sum':
      return originalValue + inputValue
    case 'sub':
      return originalValue - inputValue
    case 'div':
      return originalValue / inputValue
    case 'mul':
      return originalValue * inputValue
    default:
      return value
  }
}
