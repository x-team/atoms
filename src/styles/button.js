const colors = require('./colors')
const fonts = require('./fonts')
const cmz = require('cmz')
const styles = {}

styles.defaultButton = cmz('button', `
	& {
		background: transparent;
		border-radius: 2px;
		border: 2px solid ${colors.white};
		color: ${colors.white};
		display: inline-block;
		line-height: 1.5;
		margin: auto;
		padding: .3em .8em;
		text-decoration: none;
		transition: all .3s ease-out;
	}

	&:hover {
		background-color: ${colors.white};
		color: ${colors.carnation};
	}
`)

styles.bigButton = cmz(`
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
	styles.defaultButton,
	fonts.action
])

styles.darkButton = cmz(`
	& {
		border-color: ${colors.haiti};
		color: ${colors.haiti};
	}

	&:hover {
		background-color: #272334;
		color: ${colors.white};
	}
`).compose([
	styles.defaultButton
])

styles.redButton = cmz(`
	& {
		background-color: ${colors.carnation};
		border-color: ${colors.carnation};
		color: ${colors.white};
	}

	&:hover {
		background-color: #ff727b;
		border-color: #ff727b;
		color: ${colors.white};
	}
`).compose([
	styles.defaultButton
])

styles.bigRedButton = cmz().compose([
	styles.bigButton,
	styles.redButton
])

styles.bigDarkButton = cmz().compose([
	styles.bigButton,
	styles.darkButton
])

module.exports = styles;