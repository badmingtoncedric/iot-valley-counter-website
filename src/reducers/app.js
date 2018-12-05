import { combineReducers } from "redux"
import counterReducer from "./counter"
import operationReducer from "./operations"

export default combineReducers({
  counterReducer,
  operationReducer
})
