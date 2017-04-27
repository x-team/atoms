const color = require('atoms/styles/color')
const cmz = require('cmz')

const styles = cmz('color', {
	root: `
		display: inline-block;
		margin: 0.5em 2em 0.5em 0;
		text-align: center;
	`,
	color: `
		border: rgba(0, 0, 0, 0.1) solid 1px;
		border-radius: 5px;
		display: inline-block;
		height: 4em;
		width: 4em;
	`,
	name: `
		font-family: 'Source Sans Pro';
		font-size: 0.85em;
		margin: 0.15em 0;
	`,
	hex: `
		font-family: 'Source Code Pro';
		font-size: 0.85em;
		margin: 0;
	`
})

module.exports = function () {
	return Object.keys(color).map(function (name) {
		return `
			<div class="${styles.root}">
				<div class="${styles.color}" style="background-color: ${color[name]};"></div>
				<p class="${styles.name}">${name}</p>
				<p class="${styles.hex}">${color[name]}</p>
			</div>
		`
	}).join('\n')
}