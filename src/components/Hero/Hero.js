import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Hero.scss'
export default class Hero extends Component {
  static propTypes = {
    prop: PropTypes
  }
  header = 'Let`s create something cool together!'

  render() {    
    return (
      <div className="hero">
        <div>
          
          { this.header }
          </div>
      </div>
    )
  }
}
