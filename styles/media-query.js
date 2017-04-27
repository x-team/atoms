const cmz = require('cmz')

const mediaQuery = {
	applyStylesUntil: function(styles, breakpoint) {
		if(!breakpoint) {
 			return styles
		}

		return `
			@media only screen and (max-width: ${breakpoint}) {
				${styles}
			}
		`
	},

	applyStylesUpTo: function(styles, breakpoint) {
		if(!breakpoint) {
 			return styles
		}

		return `
			@media only screen and (min-width: ${breakpoint}) {
				${styles}
			}
		`
	},
}

mediaQuery.hideUpTo = function(breakpoint) {
  return cmz(mediaQuery.applyStylesUpTo(`
  	& { display: none; }
  `, breakpoint))
}

mediaQuery.showUpTo = function(breakpoint) {
  return cmz(mediaQuery.applyStylesUpTo(`
		& { display: initial; }
  `, breakpoint))
}

mediaQuery.hideUntil = function(breakpoint) {
  return cmz(mediaQuery.applyStylesUntil(`
  	& { display: none; }
  `, breakpoint))
}

mediaQuery.showUntil = function(breakpoint) {
  return cmz(mediaQuery.applyStylesUntil(`
		& { display: initial; }
  `, breakpoint))
}

module.exports = mediaQuery