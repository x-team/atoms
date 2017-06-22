const babelify = require('babelify')

module.exports = {
  entry: 'src/index.js',
  vendor: [
    'react',
    'react-dom'
  ],
  output: {
    dir: 'dist',
    vendor: 'vendor.js'
  },
  packs: [
    function (b) {
      b.transform(babelify)
    }
  ]
}
