import PropTypes from 'prop-types';
import React from 'react';
import cmz from 'cmz';

import text from '../atoms/text'
import icons from '../atoms/icons'

const s = {
  root: cmz([
    'display: flex',
    'flex-flow: row wrap',
    'justify-content: space-around'
  ]),

  item: cmz(`
& {
  margin-top: 4rem;
  margin-left: 5%;
  flex-basis: 45%;
}

&:nth-child(even) {
  margin-left: 0;
  margin-right: 5%;
}
 `)
}

const FeatureList = (props) => {
  return <div className={s.root}>
    {props.children.map((f, i) => <div key={i} className={s.item}>{f}</div>)}
  </div>
}

FeatureList.propTypes = {
  children: PropTypes.string.isRequired
}

export default FeatureList
