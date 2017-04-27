const cmz = require('cmz')
const color = require('./color')

const styles = cmz('form', {
	root: `
		& {
			background-color: #e6e4ea;
			padding: 3rem 0 0;
		}

		@media screen and (min-width: 1024px) {
			& {
				padding: 8rem 0;
			}
		}
	`,
	title: `
		& {
			font: 800 1.875rem 'Open Sans', sans-serif;
			text-align: center;
			text-transform: uppercase;
			color: #272334;
			margin: 0;
			letter-spacing: -2px;
		}

		@media screen and (min-width: 1024px) {
			& {
				font-size: 3.5rem;
			}
		}
	`,
	subtitle: `
		& {
			font-size: 1.125rem;
			line-height: 1.5rem;
			text-align: center;
			color: #5a5665;
			margin: .5rem 0 2rem;
		}

		@media screen and (max-width: 1023px) {
			& {
				max-width: 420px;
				margin: 1rem auto 2rem;
			}
		}

		@media screen and (min-width: 1024px) {
			& {
				font-size: 1.65rem;
				line-height: 2.2rem;
				margin-bottom: 4rem;
			}
		}
	`,
	error: `
		& {
			color: ${color.carnation};
			font-size: 0.9rem;
			font-weight: bold;
			padding: 0.66em 0;
			width: 100%;
			margin: 0 auto;
		}

		@media screen and (max-width: 1023px) {
			& {
				max-width: 26.75rem;
			}
		}

		@media screen and (min-width: 1024px) {
			& {
				width: 40.75rem;
			}
		}
	`,
	input: `
		& {
			display: block;
			width: 90%;
			font-size: 1.125rem;
			background-color: #fff;
			border: 2px solid #938e9f;
			border-radius: 3px;
			padding: .66em;
			margin: 0 auto 1rem;
		}

		&:focus {
			outline-color: #ff5964;
			border-color: #fff;
		}

		&::placeholder {
			color: #938e9f;
		}

		@media screen and (max-width: 1023px) {
			& {
				max-width: 25rem;
			}
		}

		@media screen and (min-width: 1024px) {
			& {
				width: 38.375rem;
				font-size: 1.45rem;
				border-width: 3px;
			}
		}
	`,
	submit: `
		& {
			display: block;
			margin: 2rem auto 0;
		}

		&:focus {
			outline-color: #ff5964;
		}

		@media screen and (max-width: 480px) {
			& {
				width: 95%;
			}
		}

		@media screen and (max-width: 1023px) {
			& {
				max-width: 25rem;
			}
		}

		@media screen and (min-width: 1023px) {
			& {
				margin-top: 4rem;
			}
		}
	`
})

styles.select = cmz('select', `
	& {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
	}

	@media screen and (max-width: 1023px) {
		& {
			max-width: 26.75rem;
		}
	}

	@media screen and (min-width: 1024px) {
		& {
			width: 40.75rem;
		}
	}
`).compose([styles.input])

styles.textarea = cmz('textarea', `
	height: 4.5em;
	resize: vertical;
`).compose([styles.input]);

module.exports = styles
