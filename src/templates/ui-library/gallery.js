const cmz = require('cmz')

const styles = cmz('atom', {
	parent: `
		margin-left: 12em;
		padding: 1em 2em;
	`,
	atom: `
		padding: 1em;
		position: relative;
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
		margin: 0 0 1.5em;
	`
})

function atom (props) {
	return `
		<div class="${styles.atom}">
			<h3 id="${props.name.toLowerCase()}" class="${styles.name}">${props.name}</h3>
			<p class="${styles.description}">${props.description}</p>
			${props.component}
		</div>
	`
}

module.exports = function (props) {
	const atoms = props.components.map(function (component) {
		return atom(component)
	}).join('\n')

	return `<div class="${styles.parent}">${atoms}</div>`
}