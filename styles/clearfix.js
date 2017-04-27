const cmz = require('cmz')

module.exports = cmz('clearfix', `
	&:before,
	&:after {
	    content: " ";
	    display: table;
	}

	&:after {
	    clear: both;
	}

	& {
	    *zoom: 1;
	}
`)