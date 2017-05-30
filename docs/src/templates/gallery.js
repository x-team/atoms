const cmz = require('cmz')
const color = require('atoms/styles/color')
const font = require('atoms/styles/font')

const styles = cmz('atom', {
	parent: `
		margin-left: 12em;
		padding: 1em 2em;
	`,
	atom: `
		padding: 1em;
		position: relative;
		margin: 1em auto;
		max-width: 1024px;
	`,
	name: `
		color: ${color.navy};
		font-family: 'Open Sans';
		font-weight: bold;
		letter-spacing: -1px;
		margin: 0;
		text-transform: uppercase;
	`,
	description: `
		font-family: 'Source Sans Pro';
		font-size: 1.1em;
		margin: 0 0 1.5em;
	`,
	sample: `
		font-size: 0.85em;
		letter-spacing: 0.05em;
		margin: 2.5em auto -0.75em;
		text-transform: uppercase;
	`
})

styles.sample.compose(font.action)

function atom (props) {
	const sample = props.code ? `<h4 class="${styles.sample}">Sample Code</h4>\n${props.code}` : ''

	return `
		<div class="${styles.atom}">
			<h3 id="${props.name.toLowerCase()}" class="${styles.name}">${props.name}</h3>
			<p class="${styles.description}">${props.description}</p>
			${props.component}
			${sample}
		</div>
	`
}

module.exports = function (props) {
	const atoms = props.components.map(function (component) {
		return atom(component)
	}).join('\n')

	const guides = props.guides.map(function (guide) {
		return `
			<article>
				<h2 id="${guide.name.toLowerCase().replace(/ /g, '-')}">${guide.name}</h2>
				${guide.article}
			</article>
		`
	}).join('\n')

	return `
		<div class="${styles.parent}">
			${guides}
			${atoms}
		</div>`
}
