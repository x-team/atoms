const sidebar = require('./sidebar')
const gallery = require('./gallery')

module.exports = function (props) {
	return sidebar(props) + gallery(props)
}
