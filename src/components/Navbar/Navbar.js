import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }
  nav = [
    {name: 'about'},
    {name: 'ofer'},
    {name: 'projects'},
    {name: 'blog'},
    {name: 'contact'},

  ]

  render() {
    const navElems = this.nav.map(elem =>{
    return (
      <li>
        <a href="#">{elem.name}</a>
      </li>)
    });

    return (
      <div className="navbar">
        <div>
          SDKB
        </div>
        <div className="mobile-navbar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navbar-container">
          <ul>
            { navElems }
          </ul>
        </div>
      </div>
    )
  }
}
