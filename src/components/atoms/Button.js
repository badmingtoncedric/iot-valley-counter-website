import React, { Component } from "react"

import styles from './Button.sass'

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="w3-button w3-round"
          disabled={this.props.disabled}
          onClick={this.props.handleClick}
        >valider</button>
      </React.Fragment>
    )
  }
}

export default Button
