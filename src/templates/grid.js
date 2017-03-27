const grid = require('../styles/grid')
const cmz = require('cmz')

const block = cmz(`
	border: black solid 1px;
	padding: 1em;
`)

const responsiveBlock = grid.getBreakpoints([
	{
		breakpoint: 'lg',
		colspan: 3
	},
	{
		breakpoint: 'md',
		colspan: 4
	},
	{
		breakpoint: 'sm',
		colspan: 6
	},
	{
		breakpoint: 'xs'
	}
]).compose([block])

console.log(responsiveBlock.toString());

module.exports = function () {
	return `
		<div class="${grid.container}">
			<div class="${grid.row}">
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
				<div class="${responsiveBlock}"></div>
			</div>
		</div>
	`
}