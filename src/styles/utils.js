const cmz = require('cmz')

const utils = {
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

utils.hideUpTo = function(breakpoint) {
  return cmz(utils.applyStylesUpTo(`
  	& { display: none; }
  `, breakpoint))
}

utils.showUpTo = function(breakpoint) {
  return cmz(utils.applyStylesUpTo(`
		& { display: initial; }
  `, breakpoint))
}

utils.hideUntil = function(breakpoint) {
  return cmz(utils.applyStylesUntil(`
  	& { display: none; }
  `, breakpoint))
}

utils.showUntil = function(breakpoint) {
  return cmz(utils.applyStylesUntil(`
		& { display: initial; }
  `, breakpoint))
}

module.exports = utils