const css = require('browserify-css')

module.exports = {
    entry: 'src/index.js',
    output: {
        dir: 'dist',
        bundle: 'bundle.js'
    },

    packs: [
        function (b) {
            b.transform(css)
        }
    ]
}
