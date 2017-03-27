const cmz = require('cmz')
const deviceWidths = require('./breakpoints')
const GRID_DIVISION = 12

const styles = cmz('flexbox', {
	container: `
		width: 90%;
		max-width: 1280px;
		margin: 0 auto;
		position: relative;
	`,
	fluidContainer: `
	  margin-right: auto;
	  margin-left: auto;
	  padding-right: 2rem;
	  padding-left: 2rem;
	`,
	row: `
	  box-sizing: border-box;
	  display: flex;
	  flex: 0 1 auto;
	  flex-direction: row;
	  flex-wrap: wrap;
	  margin-right: -1rem;
	  margin-left: -1rem;
  `,
  column: `
	  box-sizing: border-box;
	  flex: 0 0 auto;
	  padding-right: 1rem;
	  padding-left: 1rem;
  `
})

styles.reversedRow = cmz(`
	flex-direction: row-reverse;
`).compose([styles.row])

styles.reversedColumn = cmz(`
	flex-direction: column-reverse;
`).compose([styles.column])

styles.getBreakpoints = function (breakpointConfigs, shouldReverse) {
	let column, offset;
	const cmzBreakpoints = breakpointConfigs.map(function(breakpoint){
		colspan = breakpoint.colspan && breakpoint.colspan < GRID_DIVISION ? breakpoint.colspan / GRID_DIVISION * 100 + '%' : '100%'
		offset = breakpoint.offset && breakpoint.offset < GRID_DIVISION ? breakpoint.offset / GRID_DIVISION * 100 + '%' : 0

		return cmz(`
			@media only screen and (min-width: ${deviceWidths[breakpoint.breakpoint]}) {
				flex-basis: ${colspan};
				margin-left: ${offset};
				width: ${colspan};
			}
		`)
	})

	cmzBreakpoints.push(shouldReverse ? styles.reversedColumn : styles.column)

	return cmz().compose(cmzBreakpoints)
}

module.exports = styles;