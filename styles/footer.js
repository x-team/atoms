const layout = require('./layout')
const breakpoints = require('./breakpoints')
const grid = require('./grid')
const color = require('./color')
const font = require('./font')
const cmz = require('cmz')

const styles =  cmz('footer', {
	root: `
		display: block;
	`,
	list: `
		list-style: none;
		margin: 0;
		padding: 0;
	`,
	link: `
		& {
			text-decoration: none;
			color: #938e9f;
			font-size: 1.125rem;
		}

		&:hover {
			color: #272334;
		}

		@media screen and (max-width: 1023px) {
		  & {
				line-height: 1.75rem;
				margin: .75rem 0;
				display: block;
		  }
		}

		@media screen and (min-width: 1024px) {
			& {
				font-size: 1rem;
			}
		}
	`,
	colophon: `
		& {
			overflow: hidden;
			padding: 2em 0;
			color: #d6d6d6;
		}

		@media screen and (max-width: 1023px) {
			& {
				text-align: center;
				font-size: .9rem;
			}
		}
	`,
	logo: `
		& {
			display: inline-block;
			line-height: 3rem;
			width: 94px;
			height: 32px;
		  position: relative;
		  overflow: hidden;
	  }

	  @media only screen and (max-width: ${breakpoints['md']}) {
			& {
				width: 94px;
				height: 32px;
			}
	  }

	  @media only screen and (min-width: ${breakpoints['md']}) {
			& {
				float: left;
				width: 120px;
				height: 42px;
			}
	  }
  `,
  address: `
		& {
			font-style: normal;
			line-height: 2.5625rem;
		}

		@media only screen and (min-width: ${breakpoints['md']}) {
			& {
				float: right;
				font-style: normal;
				font-size: 1rem;
				line-height: 2.5625rem;
			}
		}
  `
})

styles.column = cmz(`
	&:last-child {
		margin-left: auto;
		width: 15%;
	}

	@media only screen and (max-width: 1023px) {
		&:not(:first-child) {
			display: none;
		}
	}

	@media only screen and (min-width: 1024px) {
		& {
		  flex-grow: 1;
		  max-width: 28%;
	  }

	  &:last-child {
	  	max-width: 120px;
	  }
  }
`).compose([grid.column()])

styles.links = cmz(`
	& {
		background-color: #f0eff2;
		color: #ebeaed;
	}

	@media only screen and (max-width: ${breakpoints['md']}) {
		& {
			text-align: center;
			padding: 1.5rem 0;
		}
	}
`).compose(layout.block)

styles.title = cmz(`
	& {
		font-size: 1.125rem;
		text-transform: uppercase;
		color: #272334;
		margin: 0 0 1em;
	}

	@media screen and (max-width: 1023px) {
		& {
			display: none;
		}
	}
`).compose(font.action)

module.exports = styles