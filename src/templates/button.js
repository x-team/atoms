const styles = require('../styles/button')
const classnames = require('classnames')

module.exports = function () {
	return `
		<div>
			<button class="${styles.standard}">Standard Button</button>
		</div>
		<div>
			<button class="${styles.dark}">Dark Button</button>
		</div>
		<div>
			<button class="${styles.red}">Red Button</button>
		</div>
		<div>
			<button class="${styles.big}">Big Button</button>
		</div>
		<div>
			<button class="${classnames(styles.big.toString(), styles.red.toString())}">Big Red Button</button>
		</div>
		<div>
			<button class="${classnames(styles.big.toString(), styles.dark.toString())}">Big Dark Button</button>
		</div>
	`;
}