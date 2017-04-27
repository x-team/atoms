const styles = require('../styles/form')

module.exports = function () {
	const forms = document.querySelectorAll('form')
	forms.forEach(function(form) {

		const fields = form.querySelectorAll('input,textarea,select')
		fields.forEach(function(field) {
			field.addEventListener('invalid', function (e) {
				e.preventDefault()

				if(!this.previousElementSibling || 'className' in this.previousElementSibling && this.previousElementSibling.className !== styles.error.toString()) {
					const el = document.createElement('div')
					el.innerHTML = `<div class=${styles.error}>${this.validationMessage}</div>`

					form.insertBefore(el.firstChild, this)
				}
			})
		})
	})
}