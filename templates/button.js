const button = require('../styles/button')
const cmz = require('cmz')

module.exports = function (props) {
    const classNames = cmz().compose([
        button.base,
        props.red && button.red,
        props.big && button.big,
        props.dark && button.dark
    ])

	return `
		<a href="${props.href}" title="${props.title ? props.title : props.anchor}" ${props.newTab && 'target="_blank"'} class="${classNames}">${props.anchor}</a>
	`
}
