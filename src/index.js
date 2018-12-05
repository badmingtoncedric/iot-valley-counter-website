import React, { Component } from "react"
import ReactDOM from "react-dom"

import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

import Counter from "./components/atoms/Counter"
import Header from "./components/molecules/Header"
import Form from "./components/molecules/Form"

import styles from "./app.sass"
import AppReducer from "./reducers/app"

const AppStore = createStore(AppReducer)

const App = () => (
  <section className="app w3-display-middle w3-cell">
    <Header />
    <div className="w3-row w3-center">
      <Counter />
    </div>
    <Form />
  </section>
)

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => dispatch

export default connect(mapStateToProps, mapDispatchToProps)(App)

const wrapper = document.getElementById("app")
wrapper
  ? ReactDOM.render(<Provider store={AppStore}><App /></Provider>, wrapper)
  : false
