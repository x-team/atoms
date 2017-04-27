const cmz = require('cmz')
const color = require('atoms/styles/color.js')
const font = require('atoms/styles/font.js')

const styles = cmz('sidebar', {
	root: `
		background-color: ${color.haiti};
		bottom: 0;
		font-family: 'Source Sans Pro';
		left: 0;
		position: fixed;
		top: 0;
		width: 12em;
	`,
	title: `
		& {
			background-color: rgba(255, 255, 255, 0.025);
			color: ${color.carnation};
			font-style: italic;
			font-size: 1.25em;
			letter-spacing: -0.0125em;
			margin: 0;
			padding: 0.8em 1em;
			text-transform: uppercase;
		}

		& span {
	    font-family: 'Open Sans';
	    color: ${color.white}
		}
	`,
	subtitle: `
		color: ${color.carnation};
		font-size: 0.8em;
		margin: 0;
		opacity: 0.75;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		padding: 1.25em 1.25em 0.25em;
	`,
	list: `
		list-style-type: none;
		margin: 0 0 0.5em;
		padding: 0;
	`,
	link: `
		& {
			color: ${color.white};
			display: block;
			padding: 0.35em 1em 0.5em;
			position: relative;
			text-decoration: none;
			transition: all .2s ease;
		}

		&:after {
			color: ${color.haiti};
			content: '›';
			font-size: 1.25em;
			font-weight: bold;
			opacity: 0;
			position: absolute;
			right: 1.15em;
			top: 0.05em;
			transition: all .2s ease;
		}

		&:hover {
			background-color: ${color.white};
			color: ${color.haiti};
			font-weight: bold;
		}

		&:hover:after {
			opacity: 0.75;
			right: 1em;
			transition: all .3s ease .1s;
		}

		&:active {
			background-color: rgba(255, 255, 255, 0.95);
			transform: translateY(1px);
			transition-duration: .1s;
		}
	`
})

styles.title.compose(font.heading)

function item (props) {
	return `
		<li>
			<a class="${styles.link}" href="#${props.name.toLowerCase().replace(/ /g, '-')}">${props.name}</a>
		</li>
	`
}

module.exports = function (props) {
	const guides = props.guides.map(function (guide) {
		return item(guide)
	}).join('\n')

	const components = props.components.map(function (component) {
		return item(component)
	}).join('\n')

	return `
		<div class="${styles.root}">
			<h3 class="${styles.title}">X-Team <span>Atoms</span></h3>

			<h4 class="${styles.subtitle}">Guides</h4>
			<ul class="${styles.list}">
				${guides}
			</ul>
			<h4 class="${styles.subtitle}">Components</h4>
			<ul class="${styles.list}">
				${components}
			</ul>
		</div>
	`
}