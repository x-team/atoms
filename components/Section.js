import PropTypes from 'prop-types';
import React from 'react';
import cmz from 'cmz';

import text from '../atoms/text'
import Heading from './Heading'

const styles = {
  root: cmz(`
& {
  display: flex;
  flex-direction: column;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  & {
    padding: 6rem calc(52% - 640px);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
}
`),

  copy: cmz([
    text,
    'font-size: 1.375rem',
    'line-height: 2.25rem',
    'padding: 0',
    'margin: 0 auto 2rem 0',
    'max-width: 25rem'
  ]),

  pic: cmz(`
& {
  margin-top: 2rem;
  margin-right: -10%;
  max-height: 650px;
  width: auto;
  position: relative;
}

& > img {
  border: 0;
  vertical-align: middle;
}

&:before {
  content: '';
  position: absolute;
  background-color: #f1f1f5;
  width: 20px;
  height: calc(100% - 10px);
  left: -20px;
  top: 30px;
}

&:after {
  content: '';
  display: block;
  background-color: #f1f1f5;
  position: absolute;
  width: calc(100% - 30px);
  height: 20px;
  left: 0;
  bottom: -20px;
}
`)
}

const flippedStyles = Object.assign({}, styles, {
  root: cmz([
    styles.root,
    'flex-direction: row-reverse'
  ])
})

const Section = (props) => {
  const s = props.flipped ? flippedStyles : styles
  return <section className={s.root}>
    <div>
      <Heading divider align='left'>{props.heading}</Heading>
      <div className={s.copy}>
        {props.children}
      </div>
    </div>
    <div className={s.pic}>
      <img src={props.pic} />
    </div>
  </section>
}

Section.propTypes = {
  pic: PropTypes.string.isRequired
};

export default Section;
