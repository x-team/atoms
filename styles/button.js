const color = require('./color')
const font = require('./font')
const cmz = require('cmz')
const styles = {}

styles.base = cmz('button', `
	& {
		background: transparent;
		border-radius: 2px;
		border: 2px solid ${color.white};
		color: ${color.white};
		cursor: pointer;
		display: inline-block;
		line-height: 1.5;
		margin: .15em auto;
		padding: .3em .8em;
		text-decoration: none;
		transition: all .3s ease-out;
	}

	&:hover {
		background-color: ${color.white};
		color: ${color.red};
	}
`)

styles.big = cmz(`
	& {
		border-radius: 3px;
		border-width: 2px;
		font-weight: bold;
		font-size: 1rem;
		padding: .75em 2.4em;
		text-transform: uppercase;

		@media screen and (min-width: 1024px) {
			border-radius: 3px;
			border-width: 3px;
			font-size: 1rem;
			padding: .9em 2.4em;
		}

		@media screen and (min-width: 1280px) {
			font-size: 1.2rem;
		}
	}
`).compose([
	styles.base,
	font.action
])

styles.dark = cmz(`
	& {
		border-color: ${color.navy};
		color: ${color.navy};
	}

	&:hover {
		background-color: #272334;
		color: ${color.white};
	}
`).compose([styles.base])

styles.red = cmz(`
	& {
		background-color: ${color.red};
		border-color: ${color.red};
		color: ${color.white};
	}

	&:hover {
		background-color: #ff727b;
		border-color: #ff727b;
		color: ${color.white};
	}
`).compose([styles.base])

module.exports = styles;
