const cmz = require('cmz')
const applyOnBreakpoint = require('./utils').applyOnBreakpoint
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
	  padding-right: 1rem;
	  padding-left: 1rem;
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

_getColumn = function (props) {
	const colspan = props.colspan && props.colspan < GRID_DIVISION ? props.colspan / GRID_DIVISION * 100 + '%' : '100%'
	const offset = props.offset && props.offset < GRID_DIVISION ? props.offset / GRID_DIVISION * 100 + '%' : 0
	const breakpoint = props.breakpoint && props.breakpoint in deviceWidths ? deviceWidths[props.breakpoint] : null

	return cmz(applyOnBreakpoint(`
			& {
				flex-basis: ${colspan};
				margin-left: ${offset};
				width: ${colspan};
			}
		}
	`, breakpoint)).compose(props.reversed ? styles.reversedColumn : styles.column)
}

styles.getColumn = function (props) {
	if (props instanceof Array) {
		const cmzBreakpoints = props.map(_getColumn)
		return cmz().compose(cmzBreakpoints)
	}

	return _getColumn(props)
}

module.exports = styles;