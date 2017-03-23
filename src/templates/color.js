const colors = require('../styles/colors')
const cmz = require('cmz')

const styles = cmz('Color', {
	root: `
		display: inline-block;
		text-align: center;
	`,
	color: `
		border: rgba(0, 0, 0, 0.1) solid 1px;
		border-radius: 5px;
		display: inline-block;
		height: 4em;
		width: 4em;
		margin: 0 1em;
	`,
	name: `
		font-family: 'Source Sans Pro';
		font-size: 0.85em;
		margin: 0.15em 0;
	`,
	hex: `
		font-family: monospace;
		margin: 0;
	`
})

module.exports = function () {
	return Object.keys(colors).map(function (name) {
		return `
			<div class="${styles.root}">
				<div class="${styles.color}" style="background-color: ${colors[name]};"></div>
				<p class="${styles.name}">${name}</p>
				<p class="${styles.hex}">${colors[name]}</p>
			</div>
		`
	}).join('\n')
}