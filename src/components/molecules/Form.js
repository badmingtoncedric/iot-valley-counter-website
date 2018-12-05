import React, { Component } from "react"

import Select from "../atoms/Select"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

import styles from './Form.sass'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      button: {
        disabled: false
      }
    }
    console.table(this.state)
  }

  submit() {
    this.setState({
      button: {
        label: 'sauvegarde...',
        disabled: true
      }
    })
    fetch('http://localhost:8080')
      .then(res => {
        console.log('res', res.json())
        this.setState({
          button: {
            label: 'valider',
            disabled: false
          }
        })
      })
  }

  render() {
    return (
      <section className="form">
        <form action="#">
          <Select />
          <Input type="number" />
          <Button
            label={this.state.button.label}
            disabled={this.state.button.disabled}
            handleClick={() => this.submit()}
            />
        </form>
      </section>
    )
  }
}

export default Form
