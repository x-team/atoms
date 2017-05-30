const color = require('atoms/styles/color')
const grid = require('atoms/styles/grid')
const deviceWidths = require('atoms/styles/breakpoints')
const cmz = require('cmz')

const block = cmz('block--sample', `
	background: ${color.offwhite};
	border: #e6e4ea solid 3px;
	padding: 1em;
	text-align: center;
`)

const responsiveBlock = grid.column([
	{
		breakpoint: deviceWidths.xs,
		colspan: 12
	},
	{
		breakpoint: deviceWidths.sm,
		colspan: 6
	},
	{
		breakpoint: deviceWidths.md,
		colspan: 4,
		reversed: true
	},
	{
		breakpoint: deviceWidths.lg,
		colspan: 3
	},
	{
		breakpoint: deviceWidths.xl,
		colspan: 2
	}
]).compose(block)

const column = (cols) => cmz().compose([
    grid.column(cols),
    block
])

module.exports = function () {
	return `
		<div class="${grid.fluidContainer}">
			<div class="${grid.row}">
				<div class="${column()}">auto width</div>
				<div class="${column()}">auto width</div>
				<div class="${column()}">auto width</div>
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
				<div class="${column({colspan: 4})}">offset: 0</div>
			</div>
			<div class="${grid.row}">
				<div class="${column({colspan: 4, offset: 4})}">offset: 4</div>
			</div>
			<div class="${grid.row}">
				<div class="${column({colspan: 4, offset: 8})}">offset: 8</div>
			</div>
			<div class="${grid.reversedRow}">
				<div class="${column({colspan: 4})}">Reversed 1</div>
				<div class="${column({colspan: 4})}">Reversed 2</div>
				<div class="${column({colspan: 4})}">Reversed 3</div>
			</div>
			<div class="${grid.row}">
				<div class="${column({colspan: 6})}">
					<div class="${grid.row}">
						<div class="${column({colspan: 6})}">Nested 1</div>
						<div class="${column({colspan: 6})}">Nested 2</div>
					</div>
				</div>
				<div class="${column({colspan: 6})}">
					<div class="${column({colspan: 11, offset: 1})}">
						<div class="${column({colspan: 11, offset: 1})}">
							<div class="${column({colspan: 11, offset: 1})}">Nested</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
}
