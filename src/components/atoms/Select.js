import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Select.sass'

import { setOperation } from './../../actions/index'

const operationsList = [
  {
    character: '+',
    id: 'sum',
    label: 'additionner',
    symbol: '&#x2795;'
  },
  {
    character: '-',
    id: 'sub',
    label: 'soustraire',
    symbol: '&#x2796;'
  },
  {
    character: '/',
    id: 'div',
    label: 'diviser',
    symbol: '&#x2797;'
  },
  {
    character: 'x',
    id: 'mul',
    label: 'multiplier',
    symbol: '&#x2716;',
  }
]

const setOperationOld = op => {
  console.log('setOperationOld', op)
  document
    .querySelectorAll('.operation')
    .forEach(el => el.classList.remove('selected'))
  document
    .querySelector('.'+op).classList
    .add('selected')
}

class Select extends Component {
  render() {
    return (
      <section className="operations w3-center">
        <ul className="w3-ul w3-hoverable" id="operations-list">
          {
            operationsList.map(op => (
              <li key={op.id} onClick={() => this.props.onOperationClick(op.id)} className={`operation ${op.id}`}>
                <span>{op.label}</span>
                <span className="w3-badge w3-bar-item w3-right w3-margin-right">{op.character}</span>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    operation: state.operation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOperationClick: operation => dispatch(setOperation(operation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
