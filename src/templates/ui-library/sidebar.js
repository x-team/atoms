const cmz = require('cmz')
const colors = require('../../styles/colors.js')

const styles = cmz('Atom', {
	sidebar: `
		background-color: ${colors.carnation};
		bottom: 0;
		font-family: 'Source Sans Pro';
		left: 0;
		position: fixed;
		top: 0;
		width: 15em;
	`,
	list: `
		list-style-type: none;
		margin: 0;
		padding: 0;
	`,
	item: `

	`,
	link: `
		& {
			color: ${colors.white};
			display: block;
			padding: 0.5em 1em;
			text-decoration: none;
			transition: background-color .2s ease;
		}

		&:hover {
			background-color: rgba(255, 255, 255, 0.085)
		}

		&:active {
			background-color: rgba(0, 0, 0, 0.0425);
			transition: none;
		}
	`
})

function item (props) {
	return `
		<li class="${styles.item}">
			<a class="${styles.link}" href="#${props.name.toLowerCase()}">${props.name}</a>
		</li>
	`
}

module.exports = function (props) {
	const items = props.components.map(function (component) {
		return item(component)
	}).join('\n')

	return `
		<div class="${styles.sidebar}">
			<ul class="${styles.list}">
				${items}
			</ul>
		</div>
	`
}