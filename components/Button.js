import PropTypes from 'prop-types';
import React from 'react';
import cmz from 'cmz';
import {
  red,
  redHighlight
 } from '../atoms/colors'

const styles = {
  button: cmz(`
& {
  text-transform: uppercase;
  text-decoration: none;
  font: 400 .75rem/1.5 'Montserrat', sans-serif;
  border: 2px solid #fff;
  display: inline-block;
  padding: .75em 2em;
  transition: all .3s ease-out;
}

&:hover {
  cursor: pointer;
}
`)
}

styles.fillButton = cmz([
  styles.button,
  `
& {
  color: #fff;
  border-color: ${red};
  background: ${red};
}

&:hover {
  background-color: ${redHighlight};
  border-color: ${redHighlight};
}
`])

styles.hollowButton = cmz([
  styles.button,
  `
& {
  border-width: 2px;
  padding: 1.25em 3.5em;
  border-color: #fff;
  color: #fff;
  background: transparent;
}

&:hover {
  background-color: #fff;
  color: ${red}
}
`])

const Button = (props) => {
  const {
    children,
    fill,
    href,
    onClick
  } = props

  const c = fill ? styles.fillButton : styles.hollowButton

  if (href) {
    return <a
    className={c}
    href={href}
    onClick={onClick}>
    {children}
  </a>
  }
  else {
    return <button
    className={c}
    onClick={onClick}>
    {children}
  </button>
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
