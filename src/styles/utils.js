module.exports = {
	applyOnBreakpoint: function(styles, breakpoint) {
		if(breakpoint === null) {
 			return styles
		}

		return `
			@media only screen and (min-width: ${breakpoint}) {
				${styles}
			}
		`;
	}
}