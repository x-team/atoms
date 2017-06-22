const React = require('react')
const { render } = require('react-dom')

const Root = require('./root')

if (typeof document !== 'undefined') {
  render(
    Root,
    document.getElementById('root')
  )
} else {
  module.exports = Root
}
