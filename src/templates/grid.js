const colors = require('../styles/colors')
const grid = require('../styles/grid')
const cmz = require('cmz')

const block = cmz(`
	background: ${colors.white};
	border: ${colors.offwhite} solid 3px;
	padding: 1em;
	text-align: center;
`)

const responsiveBlock = grid.getColumn([
	{
		breakpoint: 'xs',
		colspan: 12
	},
	{
		breakpoint: 'sm',
		colspan: 6
	},
	{
		breakpoint: 'md',
		colspan: 4,
		reversed: true
	},
	{
		breakpoint: 'lg',
		colspan: 3
	},
	{
		breakpoint: 'xl',
		colspan: 2
	}
]).compose([block])

module.exports = function () {
	return `
		<div class="${grid.fluidContainer}">
			<div class="${grid.row}">
				<div class="${responsiveBlock}">1</div>
				<div class="${responsiveBlock}">2</div>
				<div class="${responsiveBlock}">3</div>
				<div class="${responsiveBlock}">4</div>
				<div class="${responsiveBlock}">5</div>
				<div class="${responsiveBlock}">6</div>
				<div class="${responsiveBlock}">7</div>
				<div class="${responsiveBlock}">8</div>
				<div class="${responsiveBlock}">9</div>
				<div class="${responsiveBlock}">10</div>
				<div class="${responsiveBlock}">11</div>
				<div class="${responsiveBlock}">12</div>
			</div>
			<div class="${grid.row}">
				<div class="${grid.getColumn({colspan: 4}).compose([block])}">offset: 0</div>
			</div>
			<div class="${grid.row}">
				<div class="${grid.getColumn({colspan: 4, offset: 4}).compose([block])}">offset: 4</div>
			</div>
			<div class="${grid.row}">
				<div class="${grid.getColumn({colspan: 4, offset: 8}).compose([block])}">offset: 8</div>
			</div>
			<div class="${grid.reversedRow}">
				<div class="${grid.getColumn({colspan: 4}).compose([block])}">Reversed 1</div>
				<div class="${grid.getColumn({colspan: 4}).compose([block])}">Reversed 2</div>
				<div class="${grid.getColumn({colspan: 4}).compose([block])}">Reversed 3</div>
			</div>
			<div class="${grid.row}">
				<div class="${grid.getColumn({colspan: 6}).compose([block])}">
					<div class="${grid.row}">
						<div class="${grid.getColumn({colspan: 6}).compose([block])}">Nested 1</div>
						<div class="${grid.getColumn({colspan: 6}).compose([block])}">Nested 2</div>
					</div>
				</div>
				<div class="${grid.getColumn({colspan: 6}).compose([block])}">
					<div class="${grid.getColumn({colspan: 11, offset: 1}).compose([block])}">
						<div class="${grid.getColumn({colspan: 11, offset: 1}).compose([block])}">
							<div class="${grid.getColumn({colspan: 11, offset: 1}).compose([block])}">Nested</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	`
}