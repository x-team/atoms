const colors = require('../styles/colors')
const grid = require('../styles/grid')
const deviceWidths = require('../styles/breakpoints')
const cmz = require('cmz')
const cx = require('classnames')

const block = cmz(`
	background: ${colors.offwhite};
	border: #e6e4ea solid 3px;
	padding: 1em;
	text-align: center;
`)

const responsiveBlock = cx(block.toString(), grid.column([
	{
		breakpoint: deviceWidths['xs'],
		colspan: 12
	},
	{
		breakpoint: deviceWidths['sm'],
		colspan: 6
	},
	{
		breakpoint: deviceWidths['md'],
		colspan: 4,
		reversed: true
	},
	{
		breakpoint: deviceWidths['lg'],
		colspan: 3
	},
	{
		breakpoint: deviceWidths['xl'],
		colspan: 2
	}
]).toString())

module.exports = function () {
	return `
		<div class="${grid.fluidContainer}">
			<div class="${grid.row}">
				<div class="${cx(grid.column().toString(), block.toString())}">auto width</div>
				<div class="${cx(grid.column().toString(), block.toString())}">auto width</div>
				<div class="${cx(grid.column().toString(), block.toString())}">auto width</div>
			</div>
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
				<div class="${cx(grid.column({colspan: 4}).toString(), block.toString())}">offset: 0</div>
			</div>
			<div class="${grid.row}">
				<div class="${cx(grid.column({colspan: 4, offset: 4}).toString(), block.toString())}">offset: 4</div>
			</div>
			<div class="${grid.row}">
				<div class="${cx(grid.column({colspan: 4, offset: 8}).toString(), block.toString())}">offset: 8</div>
			</div>
			<div class="${grid.reversedRow}">
				<div class="${cx(grid.column({colspan: 4}).toString(), block.toString())}">Reversed 1</div>
				<div class="${cx(grid.column({colspan: 4}).toString(), block.toString())}">Reversed 2</div>
				<div class="${cx(grid.column({colspan: 4}).toString(), block.toString())}">Reversed 3</div>
			</div>
			<div class="${grid.row}">
				<div class="${cx(grid.column({colspan: 6}).toString(), block.toString())}">
					<div class="${grid.row}">
						<div class="${cx(grid.column({colspan: 6}).toString(), block.toString())}">Nested 1</div>
						<div class="${cx(grid.column({colspan: 6}).toString(), block.toString())}">Nested 2</div>
					</div>
				</div>
				<div class="${cx(grid.column({colspan: 6}).toString(), block.toString())}">
					<div class="${cx(grid.column({colspan: 11, offset: 1}).toString(), block.toString())}">
						<div class="${cx(grid.column({colspan: 11, offset: 1}).toString(), block.toString())}">
							<div class="${cx(grid.column({colspan: 11, offset: 1}).toString(), block.toString())}">Nested</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	`
}