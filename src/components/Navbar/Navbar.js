import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Navbar.scss'
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
      <li className="navbar__list--element">
        <a className="navbar__list--element-link" href="#">{elem.name}</a>
      </li>)
    });

    return (
      <div className="navbar">
        <div className="navbar__logo">
          <a className="navbar__logo--link" href="#">skdb</a>
        </div>
        <div className="mobile-navbar">
          <span className="mobile-navbar--bar"></span>
          <span className="mobile-navbar--bar"></span>
          <span className="mobile-navbar--bar"></span>
        </div>
        <div className="navbar__list">
          <ul className="navbar__list--list">
            { navElems }
          </ul>
        </div>
      </div>
    )
  }
}
