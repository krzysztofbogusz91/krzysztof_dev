import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as AboutSVG } from '../../images/about.svg';

export function About(props) {

  return (
    <div>
      <AboutSVG className="about-svg" />
    </div>
  )
}

About.propTypes = {

}

export default About

