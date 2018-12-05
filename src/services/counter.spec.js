jest.mock('./counter.mock')

import * as svc from './counter'

describe('Counter Service', () => {
  test('Validate authorized operations only', () => {
    expect(svc.validateOperation(svc.operationsList[0])).toBeTruthy()
    expect(svc.validateOperation('bad')).toBeFalsy()

    /*
  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");
  */
  })
  test('Validate GET counter value', async () => {
    const counter = await svc.getCounter()
    expect(counter).toEqual(0)
  })
  test('Validate POST operation request', async () => {
    await svc.postCounter('bad', 1)
    counter = await svc.getCounter()
    expect(counter).toEqual(0)
    await svc.postCounter('sum', 2)
    counter = await svc.getCounter()
    expect(counter).toEqual(5)
  })
})
