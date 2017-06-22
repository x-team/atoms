import PropTypes from 'prop-types';
import React from 'react';
import cmz from 'cmz';

import text from '../atoms/text';

const heading = cmz(`
  text-transform: uppercase;
  font: 800 2rem/1 'Open Sans',sans-serif;
  color: #34323b;
  margin-bottom: 5rem;
  position: relative;
`)

const headingWithDivider = cmz([
  heading,
`
&:after {
  content: '';
  position: absolute;
  width: 2.5rem;
  height: 2px;
  bottom: -2.5rem;
  background-color: #f63954;
}
`])

const summary = cmz([
  text,
`
  text-align: center;
  max-width: 27.5em;
  margin: auto;
`])

const alignment = {
  left: cmz([
    'text-align: left',
    '&:after { left: 0 }'
  ]),
  right: cmz([
    'text-align: right',
    '&:after { right: 0 }'
  ]),
  center: cmz([
    'text-align: center',
    '&:after { left: calc(50% - 1.25rem) }'
  ])
}

const Heading = ({ align, divider, children }) => {
  const cx = [
    divider ? headingWithDivider : heading,
    alignment[align || 'center']
  ]

  return <h2 className={cx.join(' ')}>
    {children}
  </h2>
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  divider: PropTypes.bool,
  align: PropTypes.string
};

export default Heading;
