import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as AboutSVG } from '../../images/about.svg';
import './About.scss'

export function About(props) {

  return (
    <div className="about">
      <AboutSVG className="about-svg" />
    </div>
  )
}

About.propTypes = {

}

export default About

