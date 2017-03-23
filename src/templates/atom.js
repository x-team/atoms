const cmz = require('cmz')

const styles = cmz('Atom', {
	root: `
		margin: 1em 0;
	`,
	name: `
		color: #333;
		font-family: 'Open Sans';
		font-weight: bold;
		letter-spacing: -1px;
		margin: 0;
		text-transform: uppercase;
	`,
	description: `
		font-family: 'Source Sans Pro';
		margin: 0 0 1em;
	`
})

module.exports = function (props) {
	return `
		<div class="${styles.root}">
			<h2 class="${styles.name}">${props.name}</h2>
			<p class="${styles.description}">${props.description}</p>
			${props.component}
		</div>
	`
}