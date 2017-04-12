const cmz = require('cmz')
const colors = require('../../styles/colors.js')
const fonts = require('../../styles/fonts.js')

const styles = cmz('sidebar', {
	root: `
		background-color: ${colors.haiti};
		bottom: 0;
		font-family: 'Source Sans Pro';
		left: 0;
		position: fixed;
		top: 0;
		width: 12em;
	`,
	title: `
		background-color: rgba(255, 255, 255, 0.025);
		color: ${colors.white};
		font-style: italic;
		letter-spacing: -0.025em;
		margin: 0;
		padding: 1em;
		text-transform: uppercase;
	`,
	list: `
		list-style-type: none;
		margin: 0;
		padding: 0;
	`,
	link: `
		& {
			color: ${colors.white};
			display: block;
			padding: 0.5em 1em;
			text-decoration: none;
			transition: all .2s ease;
		}

		&:hover {
			background-color: ${colors.white};
			color: ${colors.carnation};
		}

		&:active {
			background-color: rgba(255, 255, 255, 0.95);
			transition: none;
		}
	`
})

styles.title.compose(fonts.heading)

function item (props) {
	return `
		<li>
			<a class="${styles.link}" href="#${props.name.toLowerCase()}">${props.name}</a>
		</li>
	`
}

module.exports = function (props) {
	const items = props.components.map(function (component) {
		return item(component)
	}).join('\n')

	return `
		<div class="${styles.root}">
			<h3 class="${styles.title}">X-Team Atoms</h3>
			<ul class="${styles.list}">
				${items}
			</ul>
		</div>
	`
}