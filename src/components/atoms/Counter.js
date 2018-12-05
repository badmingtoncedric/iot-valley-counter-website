import React, { Component } from "react"
import ReactDOM from "react-dom"

import styles from './Counter.sass'

class Counter extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <React.Fragment>
        <span className="counter">26</span>
      </React.Fragment>
    )
  }
}

export default Counter
