import PropTypes from 'prop-types';
import React from 'react';
import cmz from 'cmz';
import text from '../atoms/text'

const styles = {
  root: cmz(`
  text-align: center
`),

  quote: cmz(`
  text-transform: uppercase;
  font: 800 2.25rem/1.1 'Oswald',sans-serif;
  color: #34323b;
  margin: 1rem 0 1.2rem 0;
  letter-spacing: 1px;
  text-align: center;
`),

  cite: cmz([
    text,
`
  display: block;
  font-size: 1.15em;
  line-height: 1;
  text-align: center;

`]),

  symbol: cmz([
    text,
    'color: red',
    'font-size: 3rem',
    'font-weight: 700',
    'margin: 0',
    'height: 1.4rem'
  ])
}

const PullQuote = (props) =>
  <blockquote className={styles.root}>
    <div className={styles.symbol}>&ldquo;</div>
    <div className={styles.quote}>{props.children}</div>
    { props.cite && <cite className={styles.cite}>{props.cite}</cite> }
  </blockquote>

PullQuote.propTypes = {
  children: PropTypes.string.isRequired,
  cite: PropTypes.string
};

export default PullQuote;
