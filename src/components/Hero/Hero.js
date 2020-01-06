import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hero extends Component {
  static propTypes = {
    prop: PropTypes
  }
  header = 'Let`s create something cool together!'

  render() {    
    return (
      <div className="navbar">
        { this.header }
      </div>
    )
  }
}
