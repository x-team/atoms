const cmz = require('cmz')
const applyStylesUpTo = require('./media-query').applyStylesUpTo
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
  `
})

styles.reversedRow = cmz(`
	flex-direction: row-reverse;
`).compose([styles.row])


const _column = cmz(`
  box-sizing: border-box;
  flex: 1 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
`)

styles.reversedColumn = cmz(`
	flex-direction: column-reverse;
`).compose([_column])

_getColumn = function (props) {
	const colspan = props.colspan && props.colspan < GRID_DIVISION ? props.colspan / GRID_DIVISION * 100 + '%' : '100%'
	const offset = props.offset && props.offset < GRID_DIVISION ? props.offset / GRID_DIVISION * 100 + '%' : 0
	const breakpoint = props.breakpoint ? props.breakpoint : null

	return cmz(applyStylesUpTo(`
			& {
				flex-basis: ${colspan};
				flex-grow: 0;
				margin-left: ${offset};
				width: ${colspan};
			}
		}
	`, breakpoint)).compose(props.reversed ? styles.reversedColumn : _column)
}

styles.column = function (props) {
	if (props === undefined) {
		return _column
	}

	if (props instanceof Array) {
		const cmzBreakpoints = props.map(_getColumn)
		return cmz().compose(cmzBreakpoints)
	}

	return _getColumn(props)
}

module.exports = styles;