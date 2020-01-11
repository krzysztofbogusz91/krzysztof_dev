import React from 'react'
import PropTypes from 'prop-types'

export function Offer(props) {
  const header = {};
  const offerElements = [
    {
    name: 'Wordpress Integration', 
    text: 'Meow all night having their mate disturbing sleeping humans sun bathe. Plan your travel. Lie on your belly and purr when you are asleep fooled',
    icon: require('../../images/wordpress.svg')
  }
  ].map(elem => (<li>
        <div> <img src={elem.icon} /> </div>
        <h3>{elem.name}</h3>
        <div>
          <span>{elem.text}</span>
        </div>
  </li>))
  return (
    <div>
      <ul>
        {offerElements}
      </ul>
    </div>
  )
}

Offer.propTypes = {

}

export default Offer

