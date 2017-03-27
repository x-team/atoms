const styles = require('../styles/button')

module.exports = function () {
	return `
		<div>
			<button class="${styles.defaultButton}">Default Button</button>
		</div>
		<div>
			<button class="${styles.darkButton}">Dark Button</button>
		</div>
		<div>
			<button class="${styles.redButton}">Red Button</button>
		</div>
		<div>
			<button class="${styles.bigButton}">Big Button</button>
		</div>
		<div>
			<button class="${styles.bigRedButton}">Big Red Button</button>
		</div>
		<div>
			<button class="${styles.bigDarkButton}">Big Dark Button</button>
		</div>
	`;
}