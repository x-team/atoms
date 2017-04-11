const layout = require('./layout')
const breakpoints = require('./breakpoints')
const grid = require('./grid')
const fonts = require('./fonts')
const cmz = require('cmz')

const _line = `
	left: 0;
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: #fff;
  content: "";
`

const styles =  cmz('header', {
	root: `
		& {
			font-size: 1.125rem; /* 18px */
		  padding-top: 1rem;
		  position: relative;
		  width: 100%;
		  background-color: transparent;
		  z-index: 1000;
	  }

	  @media screen and (min-width: 1116px) {
	  	& {
				height: 3rem;
			}
	  }
	`,
	toggle: `
		@media screen and (max-width: 1115px) {
			& {
				background-color: transparent;
				border: none;
				cursor: pointer;
				height: 32px;
				outline: none;
				position: absolute;
				right: 0;
				text-indent: -999999999px;
				top: 0;
				width: 32px;
				z-index: 1001;
			}

			&:before,
			&:after {
				${_line}
			}

	    &:before {
	    	top: 6px;
	    }

	    &:after {
	    	bottom: 6px;
	    }

			.body--menu-visible & {
				border: none;
				background-color: transparent;
			}

			.body--menu-visible &:before,
			.body--menu-visible &:after {
				width: 30px;
				left: 0;
			}

			.body--menu-visible &:before {
				transform: rotate(45deg);
				top: 14px;
			}

			.body--menu-visible &:after {
				transform: rotate(-45deg);
				top: 15px;
			}
		}

		@media screen and (min-width: 1116px) {
			& {
				display: none;
			}
		}
	`,
	line: `
		& {
			${_line}
    }

    & {
    	top: 15px;
    }

    @media screen and (max-width: 1115px) {
    	.body--menu-visible & {
    		display: none;
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
	    z-index: 1001;
    }

    @media screen and (min-width: 1116px) {
    	& {
				width: 120px;
				height: 41px;
				margin-top: 4px;
			}
    }
	`,
	svg: `
		display: inline-block;
    position: absolute;
    top:0;
    left:0;
    display: block;
    height: 100%;
    width: 100%;
	`,
	nav: `
		@media screen and (max-width: 1115px) {
			& {
				position: fixed;
				width: 100%;
				height: 100%;
				top: 0; left: 0;
				padding-top: 3rem; /* logo/burger spacing */
				transition: transform .3s ease-out;
				transform: translateY(-100%);
				background-color: rgba(38,27,53,.98);
			}

			.body--menu-visible & {
				transform: translateY(0);
			}
		}

		@media screen and (min-width: 1116px) {
			& {
				float: right;
			}
		}
	`,
	list: `
		margin: 0;
		padding: 0;
	`,
	item: `
	  & {
			vertical-align: middle;
			list-style: none;
			text-align: center;
		}

		@media screen and (max-width: 1115px) {
			& {
				transition: opacity .3s ease-out .2s, transform .3s ease-out .2s;
				transform: scaleY(0);
				opacity: 0;
			}

			&:first-child {
				margin-top: 1rem;
			}

			&:last-child {
				margin-top: 1.5rem;
			}

			&:last-child a {
				padding: .8em 2.2em;
				text-transform: uppercase;
				font: bold 1rem/1 'Raleway', sans-serif;
			}

			.body--menu-visible & {
				transform: scaleY(1);
				opacity: 1;
			}
		}

		@media screen and (min-width: 1116px) {
			& {
				line-height: 3rem;
				display: inline-block;
				vertical-align: middle;
				margin-left: 2rem;
				text-align: left;
			}
		}
  `,
  link: `
    & {
			position: relative;
			text-decoration: none;
			color: #938e9f;
			font-size: 2.125rem; /* 34px */
			line-height: 3.5rem; /* 56px */
		}

		@media screen and (min-width: 1116px) {
			& {
				font-size: 1em;
				line-height: 1;
				color: #fff;
			}

			&:before,
			&:after {
				content: '';
				display: block;
				position: absolute;
				bottom: -5px;
				width: 0;
				height: 1px;
				transition: all .2s ease-out;
				background-color: #fff;
			}

			&::before { left: 50%; }
			&::after { right: 50%; }

			&:hover::before {
				left: 0;
				width: 50%;
			}

			&:hover::after {
				right: 0;
				width: 50%;
			}
		}
  `
})

module.exports = styles