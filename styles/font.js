const cmz = require('cmz')
const styles = cmz('font', {
	body: `
		font-family: 'Source Sans Pro', sans-serif;
	`,
	heading: `
		font-family: 'Open Sans', sans-serif;
		font-weight: 800;
		letter-spacing: -0.025em;
	`,
	action: `
		font-family: 'Raleway', sans-serif;
	`,
	monospace: `
		font-family: 'Source Code Pro', monospace;
	`
})

module.exports = styles