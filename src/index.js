const atom = require('./templates/atom')

const components = [
	{
		name: 'Colors',
		description: 'These are the standard colors used.',
		component: require('./templates/color.js')()
	}
]

const html = components.map(function (component) {
	return atom(component)
}).join('')

if (!module.parent) {
  if (typeof document !== 'undefined') {
    document.getElementById('root').innerHTML = html
  }
  else {
    console.log(html)
  }
}

if (module.hot) {
  module.hot.accept()
}

module.exports = html
