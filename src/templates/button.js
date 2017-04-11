const button = require('../styles/button')
const cx = require('classnames')

module.exports = function (props) {
	const buttonStyle = {}

	buttonStyle[button.red.toString()] = props.red
	buttonStyle[button.big.toString()] = props.big
	buttonStyle[button.dark.toString()] = props.dark

	const classNames = cx(button.base.toString(), buttonStyle)

  const setTarget = cx({
    'target="_blank"': props.newTab
  })

	return `
		<a href="${props.href}" title="${props.title ? props.title : props.anchor}" ${setTarget} class="${classNames}">${props.anchor}</a>
	`
}