const cmz = require('cmz')

const styles = cmz('Atom', {
	parent: `
		margin-left: 15em;
		padding: 1em 2em;
	`,
	atom: `
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

function atom (props) {
	return `
		<div class="${styles.atom}">
			<h2 id="#${props.name.toLowerCase()}" class="${styles.name}">${props.name}</h2>
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