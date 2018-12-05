import React, { Component } from "react"
import ReactDOM from "react-dom"

import styles from "./Header.sass"

const Header = () => (
  <header className="header w3-row w3-center">
    <div className="bars">
      <div></div>
      <div></div>
    </div>
    <div>
      <a>acceder à l'historique</a>
    </div>
  </header>
)

export default Header
