import PropTypes from 'prop-types';
import React from 'react';
import cmz from 'cmz';

import text from '../atoms/text'
import icons from '../atoms/icons'

const s = {
  root: cmz([
    text,
    'text-align: center',
    // leave room for the icon
    'position: relative',
    'padding-top: 2rem'
  ]),

  icon: cmz(`
&:before {
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
}`
  ),

  heading: cmz(`
  font: 600 1.2rem 'Open Sans',sans-serif
  color: #34323b
  margin: 1.5em 0 .5em
  `),

  content: cmz([
    'max-width: 14em',
    'margin: 0 auto'
  ])
}

const Feature = (props) => {
  return <div className={s.root}>
    <div className={`${s.icon} ${icons[props.icon]}`}></div>
    <h3 className={s.heading}>{props.heading}</h3>
    <div className={s.content}>{props.children}</div>
  </div>
}

Feature.propTypes = {
  children: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Feature
