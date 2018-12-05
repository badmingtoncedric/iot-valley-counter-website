import React from "react"
import PropTypes from "prop-types"

import styles from './Input.sass'

const Input = ({ label, text, type, id, value, handleChange }) => (
  <section>
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="w3-input"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </section>
)

/*
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
*/

export default Input
